import leftimg from "../../assets/left.png";
import filmimg from "../../assets/film-roll.png";
import { Button, Navbar, Typography } from "@material-tailwind/react";
import React, { useState, useReducer } from "react";
import clsx from 'clsx';

function ProductSideBarElement(props){

    const [expand, setExpand] = useState(true);

    function onArrowClick(){
        setExpand(!expand)
    }

    return (
        <React.Fragment>
        <div className="w-full mt-2 ml-1 flex flex-row justify-between">
            <div className="flex flex-row">
                <input className="ml-3 w-6 h-6 accent-white border-gray-500 border-4 scheme-light" type="checkbox" id="allproduct" name="allproduct" value="allproduct"/>
                <img className="ml-1" src={filmimg} alt="A" width="25" height="15" />
                <Typography className="ml-1 font-medium text-l tracking-wide text-black">
                {props.category}</Typography>
            </div>
            <img className={clsx("mr-2 cursor-pointer", expand ? '-rotate-90' : '')} onClick={onArrowClick} src={leftimg} width="25" height="20"/>
        </div>
            <div className={clsx(expand ? "opacity-100" : "opacity-0", "transition-opacity delay-150 ease-in-out duration-250")}>
            <div className={clsx(expand ? "grid" : "hidden transition-discrete duration-400", "")}>
            <div className="w-full mt-2 ml-1 flex flex-row pl-7">
                <input className="ml-3 w-6 h-6 accent-white border-gray-500 border-4 scheme-light" type="checkbox" id="allproduct" name="allproduct" value="allproduct"/>
                <Typography className="ml-2 font-medium text-l tracking-wide text-black shrink">
                A</Typography>
            </div>
            <div className="w-full mt-2 ml-1 flex flex-row pl-7">
                <input className="ml-3 w-6 h-6 accent-white border-gray-500 border-4 scheme-light" type="checkbox" id="allproduct" name="allproduct" value="allproduct"/>
                <Typography className="ml-2 font-medium text-l tracking-wide text-black shrink">
                B</Typography>
            </div>
            <div className="w-full mt-2 ml-1 flex flex-row pl-7">
                <input className="ml-3 w-6 h-6 accent-white border-gray-500 border-4 scheme-light" type="checkbox" id="allproduct" name="allproduct" value="allproduct"/>
                <Typography className="ml-2 font-medium text-l tracking-wide text-black shrink">
                C</Typography>
            </div>
            </div>
            </div>
        </React.Fragment>
    );

}

export default ProductSideBarElement;