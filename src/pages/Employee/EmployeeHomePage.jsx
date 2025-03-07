import React from "react";
import CustomNavBar from '../../components/Employee/CustomNavBar.jsx'
import SideBar from '../../components/Employee/SideBar.jsx'
import DisplayOverview from '../../components/Employee/DisplayOverview.jsx'
import DisplayInDetails from '../../components/Employee/DisplayInDetails.jsx'

function EmployeeHomePage(){
    return(
        <div className="bg-[#967761] flex flex-col">
            <CustomNavBar />

            <div className="grid grid-cols-7 gap-4 min-h-[calc(100vh-80px)]">
                <div className="col-span-1">
                    <SideBar />
                </div>
                <div className="col-span-6">
                {/* add code to select which display should be shown */}
                    {/* extract info from db and add loop here */}
                    {/* <DisplayOverview />
                    <DisplayOverview />
                    <DisplayOverview /> */}

                    <DisplayInDetails />
                    <DisplayInDetails />
                    <DisplayInDetails />
                </div>
            </div>
        </div>
            
    );
    
}

export default EmployeeHomePage;