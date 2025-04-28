import { Button, Navbar, Typography } from "@material-tailwind/react";
import Film1 from "../../assets/Products/Film/Film1.png"
import React, { useState, useReducer } from "react";
import clsx from 'clsx';
import { Link } from "react-router-dom";
import { useNavigate, useLoaderData, useParams } from "react-router-dom";
import { useQuery } from "react-query";
import axios from "axios";
import { useRouteLoaderData } from "react-router";

const client_origin = 'http://'+process.env.VITE_CLIENT_HOST+":"+process.env.VITE_CLIENT_PORT;
let msg = "";


function SubmitListComplete(props){

    const navigate = useNavigate();
    const searchParams = new URLSearchParams(window.location.search);
    if (searchParams.get("submitstatus") == "completed"){
        msg = "Submit Completed";
    } else if (searchParams.get("submitstatus") == "itemnotfound"){
        msg = "Product not found";
    }

    function onCloseClick(e){
        props.setshowsubmitcomplete(false);
        e.preventDefault();
        navigate('/employee/home');
    }

    return(
        <div className="bg-black/50 backdrop-opacity-25 backdrop-blur-sm fixed inset-0 flex justify-center items-center">
            <div className="bg-[#FAF2ED] justify-items-center w-fit h-fit grid">
                <Typography className="font-medium text-l tracking-wide text-black justify-self-end py-2 px-4 w-10 cursor-pointer drop-shadow-xs" onClick={onCloseClick}>
                X</Typography>
                <div className="flex flex-row p-15 max-w-3xl">
                    <Typography className="font-medium text-l tracking-wide text-black">{msg}</Typography>
                </div>
            </div>
        </div>
    );
}

export default SubmitListComplete;