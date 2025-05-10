import React from "react";
import { Button, Navbar, Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import LoginPage from "./Employee/LoginPage";

function WelcomePage(){

    const navigate = useNavigate();

    function onCustomerClick(){
        navigate("/customer/home");
    }

    async function onEmployeeClick(){
        const db_url = 'http://'+import.meta.env.VITE_DB_HOST+":"+import.meta.env.VITE_DB_EXP_PORT+"/employee";
        await axios.get(db_url, {params: {reload: false}, withCredentials: true}).then( response => {
            console.log("welcome page login");
            
            console.log(response.data);
            if(response.data.login){
                console.log("Login Successful");
                navigate("/employee/home");
            } else {
                navigate("/employee/home/login");
            }
        }).catch(error => {
            console.log(error);
        });
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