import leftimg from "../../assets/left.png";
import filmimg from "../../assets/film-roll.png";
import { Button, Navbar, Typography } from "@material-tailwind/react";
import React, { useState, useReducer } from "react";
import clsx from 'clsx';
import { fromByteArray } from 'base64-js';

function ProductSideBarElement(props){

    const items = props.items;
    console.log(props.category.img);
    
    const cate_img = `data:image/png;base64,${fromByteArray(new Uint8Array(props.category.img.data))}`; // Use base64-js

    const [expand, setExpand] = useState(true);
    
    function onArrowClick(){
        setExpand(!expand)
    }

    function onCategoryClick(e){
        if (document.getElementById(e.target.id).checked)
        {
            items.map(item => (
                document.getElementById(item.name).checked = true
            ))
        }
        else{
            console.log("category unchecked");
        }
    }

    return (
        <React.Fragment>
        <div className="w-full mt-2 ml-1 flex flex-row justify-between">
            <div className="flex flex-row">
                <input className="ml-3 w-6 h-6 accent-white border-gray-500 border-4 scheme-light" type="checkbox" id={props.category.name} onClick={onCategoryClick}/>
                <img className="ml-1" src={cate_img} alt="A" width="25" height="15" />
                <Typography className="ml-1 font-medium text-l tracking-wide text-black">
                {props.category.name}</Typography>
            </div>
            <img className={clsx("mr-2 cursor-pointer", expand ? '-rotate-90' : '')} onClick={onArrowClick} src={leftimg} width="25" height="20"/>
        </div>
            <div className={clsx(expand ? "opacity-100" : "opacity-0", "transition-opacity delay-150 ease-in-out duration-250")}>
            <div className={clsx(expand ? "grid" : "hidden transition-discrete duration-400", "")}>
            {
                items.map(item => (
                    <div className="w-full mt-2 ml-1 flex flex-row pl-7">
                        <input className="ml-3 w-6 h-6 accent-white border-gray-500 border-4 scheme-light" type="checkbox" id={item.name}/>
                        <Typography className="ml-2 font-medium text-l tracking-wide text-black shrink">
                        {item.name}</Typography>
                    </div>
                ))
            }
            </div>
            </div>
        </React.Fragment>
    );

}

export default ProductSideBarElement;