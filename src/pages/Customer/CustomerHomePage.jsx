import React, { useState } from "react";
import CustomNavBar from '../../components/Customer/CustomNavBar.jsx'
import Footer from '../../components/Customer/Footer.jsx'
import SideBar from '../../components/Customer/SideBar.jsx'
import DisplayAll from '../../components/Customer/DisplayAll.jsx'
import DisplayEach from '../../components/Customer/DisplayEach.jsx'
import ContactForm from '../../components/Customer/ContactForm.jsx'

function CustomerHomePage(){

    const [displayOption, setDisplayOption] = useState(0);

    function setDisplay(user_displayOption){
        console.log(user_displayOption); 
        setDisplayOption(user_displayOption);
    }

    return(
        <div className="bg-[#967761] flex flex-col">
            <CustomNavBar display={setDisplay}/>

            <div className="grid grid-cols-7 gap-4 min-h-[calc(100vh-160px)]">
                <div className="col-span-1">
                    <SideBar display={setDisplay}/>
                </div>
                <div className="col-span-6">
                {/* add code to select which display should be shown */}
                    {/* extract info from db and add loop here */}
                    <div style={{ display: displayOption==0 ? 'grid': 'none'}}>
                        <DisplayAll />
                        <DisplayAll />
                        <DisplayAll />
                    </div>

                    <div style={{ display: displayOption==1 || displayOption==2 || displayOption==3 ? 'grid': 'none'}}>
                        <DisplayEach />
                    </div>

                    <div style={{ display: displayOption==4 ? 'grid': 'none'}}>
                    <ContactForm />
                    </div>
                </div>
            </div>

            <div className="w-full">
                <Footer />
            </div>

        </div>
            
    );
    
}

export default CustomerHomePage;