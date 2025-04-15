import { Button, Navbar, Typography } from "@material-tailwind/react";
import React, { useState } from "react";
import filmimg from "../../../assets/film-roll.png";

function Category(props){

    function onEleClick(){
        props.display(props.cate_data.cate_id);
    }

    return(
        <div className="w-full p-1 mt-2 flex flex-row cursor-pointer hover:bg-[#E2D5CD]" style={{ backgroundColor: props.displayOption==props.cate_data.cate_id ? '#E2D5CD': '#FAF2ED'}}  onClick={onEleClick}>
            <img className="ml-5" src={filmimg} alt="A" width="25" height="15" />
            <Typography className="ml-3 font-medium text-l tracking-wide text-black">
            {props.cate_data.name}</Typography>
        </div>
    );
}

export default Category;