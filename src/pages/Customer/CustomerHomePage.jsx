import React, { useState } from "react";
import CustomNavBar from '../../components/Customer/CustomNavBar.jsx'
import Footer from '../../components/Customer/Footer.jsx'
import SideBar from '../../components/Customer/SideBar.jsx'
import DisplayAll from '../../components/Customer/DisplayAll.jsx'
import DisplayEach from '../../components/Customer/DisplayEach.jsx'
import ContactForm from '../../components/Customer/ContactForm.jsx'
import clsx from 'clsx';
import ViewProductDetail from "./ViewProductDetail.jsx";

function CustomerHomePage(){

    const [displayOption, setDisplayOption] = useState(0);
    const [viewDetail, setViewDetail] = useState(false);

    function setDisplay(user_displayOption){
        console.log(user_displayOption); 
        setDisplayOption(user_displayOption);
    }

    function setViewDetailStatus(user_viewDetailStatus){
        console.log(user_viewDetailStatus);
        setViewDetail(user_viewDetailStatus)
    }

    return(
        <React.Fragment>
        <div className="bg-[#967761] flex flex-col">
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
                        <DisplayAll viewDetailStatus={setViewDetailStatus}/>
                        <DisplayAll viewDetailStatus={setViewDetailStatus}/>
                        <DisplayAll viewDetailStatus={setViewDetailStatus}/>
                    </div>
                    </div>

                    <div className={clsx(displayOption==1 || displayOption==2 || displayOption==3 ? "opacity-100" : "opacity-0", "transition-opacity ease-in-out duration-150")}>
                    <div className={clsx(displayOption==1 || displayOption==2 || displayOption==3 ? "grid" : "hidden transition-discrete duration-150", "")}>
                        <DisplayEach viewDetailStatus={setViewDetailStatus}/>
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

        <div className={clsx(viewDetail ? "grid" : "hidden transition-discrete duration-150", "")}>
            <ViewProductDetail viewDetailStatus={setViewDetailStatus}/>
        </div>
        </React.Fragment>
            
    );
    
}

export default CustomerHomePage;