import { Button, Navbar, Typography } from "@material-tailwind/react";
import searchimg from "../../assets/search.png";
import boximg from "../../assets/box.png";
import filmimg from "../../assets/film-roll.png";
import albumimg from "../../assets/album.png";
import frameimg from "../../assets/Frame.png";
import leftimg from "../../assets/left.png";
import React, { useState, useReducer } from "react";
import clsx from 'clsx';
import ProductSideBarElement from "./ProductSideBarElement";

let category = "Film"; //for extracting from db

function SideBar(props){

    const [value, setValue] = useState("");

    function onInputChange(e){
        setValue(e.target.value);
    }

    function onEditClick(){
        props.viewEditPage(true);
    }

    function onOverviewClick(){
        props.display(0)
    }

    function onInDetailsClick(){
        props.display(1)
    }


    return(
        <div className="bg-[#FAF2ED] flex flex-col h-full gap-0 p-0">
            <div className="bg-white w-full mt-10 flex flex-row">
                <img className="ml-5" src={searchimg} alt="A" width="25" height="15" />
                <input className="bg-white text-gray-600 shrink w-full ml-2" type="text" id="search-box" name="search-text" placeholder="Search" value={value} onChange={onInputChange}/>
            </div>
            <Typography className="ml-4 mt-10 font-medium text-xs tracking-wide text-gray-500 italic">
                Filtered by Product</Typography>
            <div className="w-full mt-4 ml-1 flex flex-row">
                <input className="ml-3 w-6 h-6 accent-white border-gray-500 border-4 scheme-light" type="checkbox" id="allproduct" name="allproduct" value="allproduct"/>
                <img className="ml-1" src={boximg} alt="A" width="25" height="15" />
                <Typography className="ml-1 font-medium text-l tracking-wide text-black">
                All Products</Typography>
            </div>
            <ProductSideBarElement category={category}/>
            <ProductSideBarElement category="Album"/>
            <ProductSideBarElement category="Frame"/>

            <Typography className="ml-4 mt-10 font-medium text-xs tracking-wide text-gray-500 italic">
                Filtered by Supplier</Typography>
            <div className="w-full mt-2 ml-1 flex flex-row">
                <input className="ml-3 w-6 h-6 accent-white border-gray-500 border-4 scheme-light" type="checkbox" id="allproduct" name="allproduct" value="allproduct"/>
                <Typography className="ml-2 font-medium text-l tracking-wide text-black shrink">
                S1</Typography>
            </div>
            <div className="w-full mt-2 ml-1 flex flex-row">
                <input className="ml-3 w-6 h-6 accent-white border-gray-500 border-4 scheme-light" type="checkbox" id="allproduct" name="allproduct" value="allproduct"/>
                <Typography className="ml-2 font-medium text-l tracking-wide text-black shrink">
                S2</Typography>
            </div>
            <div className="w-full mt-2 ml-1 flex flex-row">
                <input className="ml-3 w-6 h-6 accent-white border-gray-500 border-4 scheme-light" type="checkbox" id="allproduct" name="allproduct" value="allproduct"/>
                <Typography className="ml-2 font-medium text-l tracking-wide text-black shrink">
                S3</Typography>
            </div>

            <div className="mt-10 mx-3">
                <Button className={clsx(props.viewEditPageState ? "bg-[#d19473] shadow-md outline-none" : "bg-[#D9B7A4]","w-full h-10")} onClick={onEditClick}>
                Edit list</Button>
            </div>
            <div className="mt-4 mx-3">
                <Button className={clsx(props.displayOption==0 ? "bg-[#d19473] shadow-md outline-none" : "bg-[#D9B7A4]","w-full h-10 focus:bg-[#d19473] focus:shadow-md focus:outline-none")} onClick={onOverviewClick} autofocus="true">
                Overview</Button>
            </div>
            <div className="mt-4 mx-3 mb-10">
                <Button className={clsx(props.displayOption==1 ? "bg-[#d19473] shadow-md outline-none" : "bg-[#D9B7A4]","w-full h-10")} onClick={onInDetailsClick}>
                In Details</Button>
            </div>
        </div>
    );
}

export default SideBar;


