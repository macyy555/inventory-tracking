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

function SideBar(props){

    const category = props.category;
    const items_db = props.items_db;
    const supplier = props.supplier;

    const [value, setValue] = useState("");
    const [showall, setShowall] = useState(true);
    const [isChecked, setCheckbox] = useState(true);

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

    function onAllProductsClick(e){
        if (document.getElementById(e.target.id).checked)
        {
            setShowall(true);
            supplier.map(each_supplier => (
                document.getElementById(each_supplier.name).checked = true
            ))
            category.map(each_category => (
                document.getElementById(each_category.name).checked = true
            ))
            items_db.map(item => (
                document.getElementById(item.name).checked = true
            ))
        }
        else{
            setShowall(false);
        }
    }

    function onSupplierClick(e){
        if (document.getElementById(e.target.id).checked){
            //will do
        }
        else{
            setShowall(false);
        }
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
                <input className="ml-3 w-6 h-6 accent-white border-gray-500 border-4 scheme-light" type="checkbox" id="allproducts" onClick={onAllProductsClick} checked={showall ? true:false}/>
                <img className="ml-1" src={boximg} alt="A" width="25" height="15" />
                <Typography className="ml-1 font-medium text-l tracking-wide text-black">
                All Products</Typography>
            </div>
            {
                category.map(each_category => (
                    <ProductSideBarElement category={each_category} items={items_db.filter((item) => item.cate_id == each_category.cate_id)} showall={showall}/>
                ))
            }

            <Typography className="ml-4 mt-10 font-medium text-xs tracking-wide text-gray-500 italic">
                Filtered by Supplier</Typography>
            {
                supplier.map(each_supplier => (
                    <div className="w-full mt-2 ml-1 flex flex-row">
                        <input className="ml-3 w-6 h-6 accent-white border-gray-500 border-4 scheme-light" type="checkbox" id={each_supplier.name} onChange={onSupplierClick}/>
                        <Typography className="ml-2 font-medium text-l tracking-wide text-black shrink">
                        {each_supplier.name}</Typography>
                    </div>
                ))
            }

            <div className="mt-10 mx-3">
                <Button className={clsx(props.displayOption==0 ? "bg-[#d19473] shadow-md outline-none" : "bg-[#D9B7A4]","w-full h-10 focus:bg-[#d19473] focus:shadow-md focus:outline-none")} onClick={onOverviewClick} autoFocus={true}>
                Overview</Button>
            </div>
            <div className="mt-4 mx-3">
                <Button className={clsx(props.displayOption==1 ? "bg-[#d19473] shadow-md outline-none" : "bg-[#D9B7A4]","w-full h-10")} onClick={onInDetailsClick}>
                In Details</Button>
            </div>
            <div className="mt-4 mx-3 mb-10">
                <Button className={clsx(props.viewEditPageState ? "bg-[#d19473] shadow-md outline-none" : "bg-[#D9B7A4]","w-full h-10")} onClick={onEditClick}>
                Edit list</Button>
            </div>
        </div>
    );
}

export default SideBar;


