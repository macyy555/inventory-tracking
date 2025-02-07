import React from "react";
import '../../css/pages/WelcomePage.css'
import { Button, Navbar, Typography } from "@material-tailwind/react";

function WelcomePage(){
    return(
        <div className="body-welcomepage h-screen w-full place-content-center place-items-center">
            <Typography className="font-medium text-xl p-7 tracking-wide">
                    Welcome to ABC Shop</Typography>
            <div className="flex justify-center gap-2">
            <Button>
                Customer</Button>
            <Button>
                Employee</Button>
            </div>
        </div>
    );
    
}

export default WelcomePage;