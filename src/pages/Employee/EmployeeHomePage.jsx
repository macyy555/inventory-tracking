import React, {useState} from "react";
import CustomNavBar from '../../components/Employee/CustomNavBar.jsx'
import SideBar from '../../components/Employee/SideBar.jsx'
import DisplayOverview from '../../components/Employee/DisplayOverview.jsx'
import DisplayInDetails from '../../components/Employee/DisplayInDetails.jsx'
import EditPage from "./EditPage.jsx";
import clsx from 'clsx';
import axios from 'axios'
import SubmitListComplete from './SubmitListComplete.jsx'
import { use } from "react";

//retreive data from database
const db_url = 'http://'+import.meta.env.VITE_DB_HOST+":"+import.meta.env.VITE_DB_EXP_PORT+"/employee";
const searchParams = new URLSearchParams(window.location.search);
let res = null;
if (searchParams.get("submitstatus") == "complete"){
    res = await axios.get(db_url, {params: {reload: true}});
} else {
    res = await axios.get(db_url, {params: {reload: false}});
}
console.log(res);
const category = res.data.category.rows;
const items_db = res.data.items.rows;
const supplier = res.data.supplier.rows;
const inventory = res.data.inventory.rows;
let selected_cate = category;
let selected_items = items_db;
let selected_supplier = supplier;

function EmployeeHomePage(props){

    const [displayOption, setDisplayOption] = useState(0);
    const [viewEditPageState, setviewEditPageState] = useState(0)
    const [showsubmitcomplete, setshowsubmitcomplete] = useState(props.showsubmitcomplete);
    const [refresh, setRefresh] = useState(false);

    function setDisplay(user_displayOption){
        console.log(user_displayOption); 
        setDisplayOption(user_displayOption);
    }

    function setViewEditPage(user_viewEditPageOption){
        console.log(user_viewEditPageOption);
        setviewEditPageState(user_viewEditPageOption)
    }

    function setshowsubmitcompletestate(user_select){
        setshowsubmitcomplete(user_select);
    }

    function filterAllDisplay(cate, items, supplier){
        console.log("all filter");
        selected_cate = cate;
        selected_items = items;
        selected_supplier = supplier;
        setRefresh(prev => !prev);  
        console.log(selected_cate);
        console.log(selected_items);
        console.log(selected_supplier);
    }

    return(
        <div className="flex flex-col overflow-auto max-h-full">
        <div className="bg-[#967761] flex flex-col overflow-auto">
            <CustomNavBar />

            <div className="grid grid-cols-7 gap-4 min-h-[calc(100vh-80px)] overflow-auto">
                <div className="col-span-1">
                    <SideBar display={setDisplay} displayOption={displayOption} viewEditPageState={viewEditPageState} viewEditPage={setViewEditPage} category={category} items_db={items_db} supplier={supplier} filterAllDisplay={filterAllDisplay}/>
                </div>
                <div className="col-span-6">
                    <div className={clsx(displayOption==0 ? "opacity-100" : "opacity-0", "transition-opacity ease-in-out duration-150")}>
                    <div className={clsx(displayOption==0 ? "grid" : "hidden transition-discrete duration-150", "")}>
                    {
                        selected_cate.map(each_category => (
                            <DisplayOverview category={each_category} inventory={inventory} items={selected_items.filter((item) => item.cate_id == each_category.cate_id)} supplier={selected_supplier} refresh={refresh}/>
                        ))
                    }
                    </div>
                    </div>

                    <div className={clsx(displayOption==1 ? "opacity-100" : "opacity-0", "transition-opacity ease-in-out duration-150")}>
                    <div className={clsx(displayOption==1 ? "grid" : "hidden transition-discrete duration-150", "")}>
                    {
                        selected_cate.map(each_category => (
                            <DisplayInDetails category={each_category} inventory={inventory} items={selected_items.filter((item) => item.cate_id == each_category.cate_id)} supplier={selected_supplier} refresh={refresh}/>
                        ))
                    }
                    </div>
                    </div>
                </div>
            </div>
        </div>
        <div className={clsx(viewEditPageState ? "grid grid-cols-1 overflow-auto min-h-max scroll-auto h-auto" : "hidden transition-discrete duration-150", "")}>
            <EditPage viewEditPageState={viewEditPageState} viewEditPage={setViewEditPage} inventory={inventory} items_db={items_db} supplier_db={supplier} category_db={category}/>
        </div>
        <div className={clsx(showsubmitcomplete ? "flex flex-row overflow-auto min-h-max" : "hidden transition-discrete duration-150", "")}>
            <SubmitListComplete setshowsubmitcomplete={setshowsubmitcompletestate} showsubmitcomplete={showsubmitcomplete} msg={props.msg}/>
        </div>
        </div>
            
    );
    
}

export default EmployeeHomePage;