import React from "react";
import CustomNavBar from '../../components/Customer/CustomNavBar.jsx'
import Footer from '../../components/Customer/Footer.jsx'
import SideBar from '../../components/Customer/SideBar.jsx'
import DisplayAll from '../../components/Customer/DisplayAll.jsx'

function CustomerHomePage(){
    return(
        <div className="bg-[#967761] flex flex-col">
            <CustomNavBar />

            <div className="grid grid-cols-7 gap-4 min-h-[calc(100vh-160px)]">
                <SideBar />
                <div className="col-span-6">
                    {/* extract info from db and add loop here */}
                <DisplayAll />
                <DisplayAll />
                <DisplayAll />
                </div>
            </div>

            <div className="w-full">
                <Footer />
            </div>

        </div>
            
    );
    
}

export default CustomerHomePage;