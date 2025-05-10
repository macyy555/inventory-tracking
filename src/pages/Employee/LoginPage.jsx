import { Button, Navbar, Typography } from "@material-tailwind/react";
import React, { useState, useReducer } from "react";
import clsx from 'clsx';
import { Link } from "react-router-dom";
import { useNavigate, useLoaderData, useParams } from "react-router-dom";
import { useQuery } from "react-query";
import axios from "axios";
import { useRouteLoaderData } from "react-router";

const db_url = 'http://'+import.meta.env.VITE_DB_HOST+":"+import.meta.env.VITE_DB_EXP_PORT+"/employee/home/login";


function LoginPage(){

    const navigate = useNavigate();

    const [employee_id, setemployee_id] = useState("");
    const [password, setpassword] = useState("");
    
    function onemployee_idChange(e) {
        setemployee_id(e.target.value);
    }

    function onpasswordChange(e) {
        setpassword(e.target.value);
    }

    function onCloseClick(e){
        navigate('/');
    }

    return(
        <React.Fragment>
        <div className="bg-[#583c21] h-screen w-full place-content-center place-items-center"/>
        <div className="bg-black/50 backdrop-opacity-25 backdrop-blur-sm fixed inset-0 flex justify-center items-center">
            <div className="bg-[#FAF2ED] justify-items-center w-100 h-80 grid">
                <Typography className="font-medium text-l tracking-wide text-black justify-self-end py-2 px-4 w-10 cursor-pointer drop-shadow-xs" onClick={onCloseClick}>
                X</Typography>
                <div className="bg-[#FAF2ED] rounded-xl flex flex-col mih-h-max w-80">
                    <form className="flex flex-col p-5" action={db_url} method="POST">
                    <label className="text-black" htmlFor="username">Username</label>
                    <input className="text-black bg-white border-[#967761] border-1 rounded-s mt-3 shadow-xs autofill:shadow-[inset_0_0_0px_1000px_rgb(255,255,255)] autofill:scheme-light" type="text" id="username" name="username" value={employee_id} onChange={onemployee_idChange} required/>
                    <label className="text-black mt-3" htmlFor="password">Password</label>
                    <input className="text-black bg-white border-[#967761] border-1 rounded-s mt-3 shadow-xs autofill:shadow-[inset_0_0_0px_1000px_rgb(255,255,255)] autofill:scheme-light" type="password" id="password" name="password" value={password} onChange={onpasswordChange} required/>
                    <Button className="bg-[#D99F7F] border-[#967761] w-fit px-10 py-1 mt-7 rounded-lg shadow-sm" type="submit">Submit</Button>
                    </form>
                </div>
            </div>
        </div>
        </React.Fragment>
    );
}

export default LoginPage;