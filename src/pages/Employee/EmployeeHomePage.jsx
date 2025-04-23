import React, {useState} from "react";
import CustomNavBar from '../../components/Employee/CustomNavBar.jsx'
import SideBar from '../../components/Employee/SideBar.jsx'
import DisplayOverview from '../../components/Employee/DisplayOverview.jsx'
import DisplayInDetails from '../../components/Employee/DisplayInDetails.jsx'
import EditPage from "./EditPage.jsx";
import clsx from 'clsx';
import axios from 'axios'
import SubmitListComplete from './SubmitListComplete.jsx'

//retreive data from database
const db_url = 'http://'+import.meta.env.VITE_DB_HOST+":"+import.meta.env.VITE_DB_EXP_PORT+"/employee";
const res = await axios.get(db_url);
console.log(res);
const category = res.data.category.rows;
const items_db = res.data.items.rows;
const supplier = res.data.supplier.rows;
const inventory = res.data.inventory.rows;

function EmployeeHomePage(props){

    const [displayOption, setDisplayOption] = useState(0);
    const [viewEditPageState, setviewEditPageState] = useState(0)
    const [showsubmitcomplete, setshowsubmitcomplete] = useState(props.showsubmitcomplete);

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

    return(
        <React.Fragment>
        <div className="bg-[#967761] flex flex-col">
            <CustomNavBar />

            <div className="grid grid-cols-7 gap-4 min-h-[calc(100vh-80px)]">
                <div className="col-span-1">
                    <SideBar display={setDisplay} displayOption={displayOption} viewEditPageState={viewEditPageState} viewEditPage={setViewEditPage} category={category} items_db={items_db} supplier={supplier}/>
                </div>
                <div className="col-span-6">
                {/* add code to select which display should be shown */}
                    {/* extract info from db and add loop here */}
                    <div className={clsx(displayOption==0 ? "opacity-100" : "opacity-0", "transition-opacity ease-in-out duration-150")}>
                    <div className={clsx(displayOption==0 ? "grid" : "hidden transition-discrete duration-150", "")}>
                    {
                        category.map(each_category => (
                            <DisplayOverview category={each_category} inventory={inventory} items={items_db.filter((item) => item.cate_id == each_category.cate_id)} supplier={supplier}/>
                        ))
                    }
                    </div>
                    </div>

                    <div className={clsx(displayOption==1 ? "opacity-100" : "opacity-0", "transition-opacity ease-in-out duration-150")}>
                    <div className={clsx(displayOption==1 ? "grid" : "hidden transition-discrete duration-150", "")}>
                    {
                        category.map(each_category => (
                            <DisplayInDetails category={each_category} inventory={inventory} items={items_db.filter((item) => item.cate_id == each_category.cate_id)} supplier={supplier}/>
                        ))
                    }
                    </div>
                    </div>
                </div>
            </div>
        </div>
        <div className={clsx(viewEditPageState ? "grid" : "hidden transition-discrete duration-150", "")}>
            <EditPage viewEditPageState={viewEditPageState} viewEditPage={setViewEditPage} inventory={inventory} items_db={items_db} supplier_db={supplier} category_db={category}/>
        </div>
        <div className={clsx(showsubmitcomplete ? "grid" : "hidden transition-discrete duration-150", "")}>
            <SubmitListComplete setshowsubmitcomplete={setshowsubmitcompletestate} showsubmitcomplete={showsubmitcomplete} msg={props.msg}/>
        </div>
        </React.Fragment>
            
    );
    
}

export default EmployeeHomePage;