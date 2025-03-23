import React, {useState} from "react";
import CustomNavBar from '../../components/Employee/CustomNavBar.jsx'
import SideBar from '../../components/Employee/SideBar.jsx'
import DisplayOverview from '../../components/Employee/DisplayOverview.jsx'
import DisplayInDetails from '../../components/Employee/DisplayInDetails.jsx'
import EditPage from "./EditPage.jsx";
import clsx from 'clsx';

function EmployeeHomePage(){

    const [displayOption, setDisplayOption] = useState(0);
    const [viewEditPageState, setviewEditPageState] = useState(0)

    function setDisplay(user_displayOption){
        console.log(user_displayOption); 
        setDisplayOption(user_displayOption);
    }

    function setViewEditPage(user_viewEditPageOption){
        console.log(user_viewEditPageOption);
        setviewEditPageState(user_viewEditPageOption)
    }

    return(
        <React.Fragment>
        <div className="bg-[#967761] flex flex-col">
            <CustomNavBar />

            <div className="grid grid-cols-7 gap-4 min-h-[calc(100vh-80px)]">
                <div className="col-span-1">
                    <SideBar display={setDisplay} displayOption={displayOption} viewEditPageState={viewEditPageState} viewEditPage={setViewEditPage}/>
                </div>
                <div className="col-span-6">
                {/* add code to select which display should be shown */}
                    {/* extract info from db and add loop here */}
                    <div className={clsx(displayOption==0 ? "opacity-100" : "opacity-0", "transition-opacity ease-in-out duration-150")}>
                    <div className={clsx(displayOption==0 ? "grid" : "hidden transition-discrete duration-150", "")}>
                    <DisplayOverview />
                    <DisplayOverview />
                    <DisplayOverview />
                    </div>
                    </div>

                    <div className={clsx(displayOption==1 ? "opacity-100" : "opacity-0", "transition-opacity ease-in-out duration-150")}>
                    <div className={clsx(displayOption==1 ? "grid" : "hidden transition-discrete duration-150", "")}>
                    <DisplayInDetails />
                    <DisplayInDetails />
                    <DisplayInDetails />
                    </div>
                    </div>
                </div>
            </div>
        </div>
        <div className={clsx(viewEditPageState ? "grid" : "hidden transition-discrete duration-150", "")}>
            <EditPage viewEditPageState={viewEditPageState} viewEditPage={setViewEditPage}/>
        </div>
        </React.Fragment>
            
    );
    
}

export default EmployeeHomePage;