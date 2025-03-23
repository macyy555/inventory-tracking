import { Button, Navbar, Typography } from "@material-tailwind/react";
import Film1 from "../../assets/Products/Film/Film1.png"
import React, { useState, useReducer } from "react";
import clsx from 'clsx';

function ViewProductDetail(props){

    function onCloseClick(e){
        props.viewDetail({viewDetail: false, productname: props.viewDetailState.productname});
        e.preventDefault();
    }

    return(
        <div className="bg-black/50 backdrop-opacity-25 backdrop-blur-sm fixed inset-0 flex justify-center items-center">
            <div className="bg-[#FAF2ED] justify-items-center w-fit h-fit grid">
                <Typography className="font-medium text-l tracking-wide text-black justify-self-end py-2 px-4 w-10 cursor-pointer drop-shadow-xs" onClick={onCloseClick}>
                X</Typography>
                <div className="flex flex-row p-15">
                    <img className="" src={Film1} alt="A" width="100" height="100" />
                    <div className="ml-20">
                        <Typography className="font-medium text-l tracking-wide text-black">
                        {props.viewDetailState.productname}</Typography>
                        <Typography className="font-medium text-l tracking-wide text-black">
                        product details</Typography>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ViewProductDetail;