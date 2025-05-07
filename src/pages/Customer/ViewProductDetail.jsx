import { Button, Navbar, Typography } from "@material-tailwind/react";
import Film1 from "../../assets/Products/Film/Kodak color plus.png"
import React, { useState, useReducer } from "react";
import clsx from 'clsx';
import { fromByteArray } from 'base64-js';

function ViewProductDetail(props){

    let item_img = Film1;
    if (props.viewDetailState.product[0].img != null){
        item_img = `data:image/png;base64,${fromByteArray(new Uint8Array(props.viewDetailState.product[0].img.data))}`;
    } // Use base64-js

    function onCloseClick(e){
        props.viewDetail({viewDetail: false, product: props.viewDetailState.product});
        e.preventDefault();
    }

    return(
        <div className="bg-black/50 backdrop-opacity-25 backdrop-blur-sm fixed inset-0 flex justify-center items-center">
            <div className="bg-[#FAF2ED] justify-items-center w-fit h-fit grid">
                <Typography className="font-medium text-l tracking-wide text-black justify-self-end py-2 px-4 w-10 cursor-pointer drop-shadow-xs" onClick={onCloseClick}>
                X</Typography>
                <div className="flex flex-row p-15 max-w-3xl">
                    <img className="h-fit" src={item_img} alt="A" width="100" height="100" />
                    <div className="ml-20">
                        <Typography className="font-medium text-l tracking-wide text-black">
                        {props.viewDetailState.product[0].name}</Typography>
                        <Typography className="font-medium text-l tracking-wide text-black mt-5">
                        {(props.viewDetailState.product[0]).description}</Typography>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ViewProductDetail;