import React, { useState, useReducer } from "react";
import CustomNavBar from '../../components/Customer/CustomNavBar.jsx'
import Footer from '../../components/Customer/Footer.jsx'
import SideBar from '../../components/Customer/SideBar.jsx'
import DisplayAll from '../../components/Customer/DisplayAll.jsx'
import DisplayEach from '../../components/Customer/DisplayEach.jsx'
import ContactForm from '../../components/Customer/ContactForm.jsx'
import SubmitQuizComplete from './SubmitQuizComplete.jsx'
import clsx from 'clsx';
import ViewProductDetail from "./ViewProductDetail.jsx";
import axios from 'axios'
import { Button } from "@material-tailwind/react";

//retreive data from database
const db_url = 'http://'+import.meta.env.VITE_DB_HOST+":"+import.meta.env.VITE_DB_EXP_PORT+"/customer";
const res = await axios.get(db_url);
// console.log(res);
const category = res.data.category.rows;
const items_db = res.data.items.rows;
let filteredItems = items_db;


function initViewDetailState(){
    
    return {viewDetail: false, product: [items_db[0]]};
}

function CustomerHomePage(props){

    const [displayOption, setDisplayOption] = useState(props.displayOption);
    const [viewDetailState, setViewDetailState] = useState(initViewDetailState);
    const [showsubmitcomplete, setshowsubmitcomplete] = useState(props.showsubmitcomplete);
    const [refresh, setRefresh] = useState(false);

    function setDisplay(user_displayOption){
        console.log(user_displayOption); 
        setDisplayOption(user_displayOption);
    }

    function setviewDetail(user_viewDetailState){
        setViewDetailState({
            viewDetail: user_viewDetailState.viewDetail, 
            product: user_viewDetailState.product,
        });
    }

    function setshowsubmitcompletestate(user_select){
        setshowsubmitcomplete(user_select);
    }

    function filterbySearchText(searchText){
        console.log(searchText);
        filteredItems = items_db.filter(item => {
            return item.name.toLowerCase().includes(searchText.toLowerCase());
        });
        if (searchText == ""){
            filteredItems = items_db;
        }
        setRefresh(prev => !prev);
        console.log(filteredItems);
    }

    return(
        <React.Fragment>
        <div className="bg-[#967761] flex flex-col">

            <CustomNavBar display={setDisplay}/>

            <div className="grid grid-cols-7 gap-4 min-h-[calc(100vh-160px)]">
                <div className="col-span-1">
                    <SideBar display={setDisplay} displayOption={displayOption} category={category} filterbySearchText={filterbySearchText}/>
                </div>
                <div className="col-span-6">
                    <div className={clsx(displayOption==0 ? "opacity-100" : "opacity-0", "transition-opacity ease-in-out duration-150")}>
                    <div className={clsx(displayOption==0 ? "grid" : "hidden transition-discrete duration-150", "")}>
                    {
                        category.map(each_category => (
                            <DisplayAll category={each_category} items={filteredItems.filter((item) => item.cate_id == each_category.cate_id)} viewDetail={setviewDetail} refresh={refresh}/>
                        ))
                    }
                    </div>
                    </div>

                    <div className={clsx(displayOption!=0 && displayOption!=99 ? "opacity-100" : "opacity-0", "transition-opacity ease-in-out duration-150")}>
                    <div className={clsx(displayOption!=0 && displayOption!=99 ? "grid" : "hidden transition-discrete duration-150", "")}>   
                        <DisplayEach all_items={items_db.filter((item) => item.cate_id == displayOption)} items={filteredItems.filter((item) => item.cate_id == displayOption)} viewDetail={setviewDetail} refresh={refresh}/>
                    </div>
                    </div>

                    <div className={clsx(displayOption==99 ? "opacity-100" : "opacity-0", "transition-opacity ease-in-out duration-150")}>
                    <div className={clsx(displayOption==99 ? "grid" : "hidden transition-discrete duration-150", "")}>
                        <ContactForm />
                    </div>
                    </div>

                </div>
            </div>

            <div className="w-full">
                <Footer />
            </div>

        </div>

        <div className={clsx(viewDetailState.viewDetail ? "grid" : "hidden transition-discrete duration-150", "")}>
            <ViewProductDetail viewDetail={setviewDetail} viewDetailState={viewDetailState}/>
        </div>

        <div className={clsx(showsubmitcomplete ? "grid" : "hidden transition-discrete duration-150", "")}>
            <SubmitQuizComplete setshowsubmitcomplete={setshowsubmitcompletestate} showsubmitcomplete={showsubmitcomplete}/>
        </div>
        </React.Fragment>
            
    );
    
}

export default CustomerHomePage;