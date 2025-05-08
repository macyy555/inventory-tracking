import React from "react";
import { Button, Navbar, Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function WelcomePage(){

    const navigate = useNavigate()

    function onCustomerClick(){
        navigate("/customer/home");
    }

    function onEmployeeClick(){
        navigate("/employee/home/login");
    }

    return(
        <div className="bg-[#583c21] h-screen w-full place-content-center place-items-center">
            <Typography className="font-medium text-xl p-7 tracking-wide">
                    Welcome to ABC Shop</Typography>
            <div className="flex justify-center gap-2">
            <Button className="cursor-pointer" onClick={onCustomerClick}>Customer</Button>
            <Button className="cursor-pointer" onClick={onEmployeeClick}>Employee</Button>
            </div>
        </div>
    );
    
}

export default WelcomePage;