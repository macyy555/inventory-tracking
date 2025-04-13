import React, { useState, useReducer } from "react";
import CustomNavBar from '../../components/Customer/CustomNavBar.jsx'
import Footer from '../../components/Customer/Footer.jsx'
import SideBar from '../../components/Customer/SideBar.jsx'
import DisplayAll from '../../components/Customer/DisplayAll.jsx'
import DisplayEach from '../../components/Customer/DisplayEach.jsx'
import ContactForm from '../../components/Customer/ContactForm.jsx'
import clsx from 'clsx';
import ViewProductDetail from "./ViewProductDetail.jsx";
import axios from 'axios'
import { Button } from "@material-tailwind/react";

function initViewDetailState(){
    return {viewDetail: false, productname: "A"};
}

function CustomerHomePage(){

    const [data, setData] = useState("A")
    const [displayOption, setDisplayOption] = useState(0);
    const [viewDetailState, setViewDetailState] = useState(initViewDetailState)

    function setDisplay(user_displayOption){
        console.log(user_displayOption); 
        setDisplayOption(user_displayOption);
    }

    function setviewDetail(user_viewDetailState){
        setViewDetailState({viewDetail: user_viewDetailState.viewDetail, productname: user_viewDetailState.productname});
    }

    async function fetchData(){
        const res = await axios.get("http://localhost:5000")
        setData(res.data.data)
        console.log(res.data);
    }

    return(
        <React.Fragment>
        <div className="bg-[#967761] flex flex-col">
            <h1>{data}</h1>
            <Button onClick={fetchData}>try API</Button>
            <CustomNavBar display={setDisplay}/>

            <div className="grid grid-cols-7 gap-4 min-h-[calc(100vh-160px)]">
                <div className="col-span-1">
                    <SideBar display={setDisplay} displayOption={displayOption}/>
                </div>
                <div className="col-span-6">
                {/* add code to select which display should be shown */}
                    {/* extract info from db and add loop here */}
                    <div className={clsx(displayOption==0 ? "opacity-100" : "opacity-0", "transition-opacity ease-in-out duration-150")}>
                    <div className={clsx(displayOption==0 ? "grid" : "hidden transition-discrete duration-150", "")}>
                        <DisplayAll viewDetail={setviewDetail}/>
                        <DisplayAll viewDetail={setviewDetail}/>
                        <DisplayAll viewDetail={setviewDetail}/>
                    </div>
                    </div>

                    <div className={clsx(displayOption==1 || displayOption==2 || displayOption==3 ? "opacity-100" : "opacity-0", "transition-opacity ease-in-out duration-150")}>
                    <div className={clsx(displayOption==1 || displayOption==2 || displayOption==3 ? "grid" : "hidden transition-discrete duration-150", "")}>
                        <DisplayEach viewDetail={setviewDetail}/>
                    </div>
                    </div>

                    <div className={clsx(displayOption==4 ? "opacity-100" : "opacity-0", "transition-opacity ease-in-out duration-150")}>
                    <div className={clsx(displayOption==4 ? "grid" : "hidden transition-discrete duration-150", "")}>
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
        </React.Fragment>
            
    );
    
}

export default CustomerHomePage;