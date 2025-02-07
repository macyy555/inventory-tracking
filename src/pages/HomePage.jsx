import React from "react";
import '../../css/pages/HomePage.css'
import CustomNavBar from '../components/CustomNavBar.jsx'
import Footer from '../components/Footer.jsx'

function HomePage(){
    return(
        <div className="body-homepage h-screen static">
            <CustomNavBar />
            <div className="absolute bottom-0 w-full">
                <Footer className="absolute bottom-0"/>
            </div>
        </div>
            
    );
    
}

export default HomePage;