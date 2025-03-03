import React from "react";
import '../../../css/pages/Customer/CustomerHomePage.css'
import CustomNavBar from '../../components/Customer/CustomNavBar.jsx'
import Footer from '../../components/Customer/Footer.jsx'
import SideBar from '../../components/Customer/SideBar.jsx'
import DisplayAll from '../../components/Customer/DisplayAll.jsx'

function CustomerHomePage(){
    return(
        <div className="customer-homepage h-full static">
            <CustomNavBar />

            <div className="grid grid-cols-7 gap-4 w-full h-full">
                <SideBar />
                <div className="col-span-6">
                    {/* extract info from db and add loop here */}
                <DisplayAll />
                <DisplayAll />
                <DisplayAll />
                </div>
            </div>

            <div className="bottom-0 w-full">
                <Footer className="absolute bottom-0"/>
            </div>

        </div>
            
    );
    
}

export default CustomerHomePage;