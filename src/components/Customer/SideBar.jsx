import { Button, Navbar, Typography } from "@material-tailwind/react";
import searchimg from "../../assets/search.png";
import boximg from "../../assets/box.png";
import filmimg from "../../assets/film-roll.png";
import albumimg from "../../assets/album.png";
import frameimg from "../../assets/Frame.png";
import React, { useState } from "react";

function SideBar(props){

    const [value, setValue] = useState("");

    function onBoxClick(){
        props.display(0);
    }

    function onFilmClick(){
        props.display(1);
    }

    function onAlbumClick(){
        props.display(2);
    }

    function onFrameClick(){
        props.display(3);
    }

    function onInputChange(e){
        setValue(e.target.value);
    }

    return(

        
        <div className="bg-[#FAF2ED] flex flex-col h-full gap-0 p-0">
            <div className="bg-white w-full mt-10 flex flex-row">
                <img className="ml-5" src={searchimg} alt="A" width="25" height="15" />
                <input className="bg-white text-gray-600 shrink w-full ml-2" type="text" id="search-box" name="search-text" placeholder="Search" value={value} onChange={onInputChange}/>
            </div>
            <div className="w-full p-1 mt-2 flex flex-row cursor-pointer hover:bg-[#E2D5CD]" style={{ backgroundColor: props.displayOption==0 ? '#E2D5CD': '#FAF2ED'}}  onClick={onBoxClick}>
                <img className="ml-5" src={boximg} alt="A" width="25" height="15" />
                <Typography className="ml-3 font-medium text-l tracking-wide text-black">
                All Products</Typography>
            </div>
            <div className="w-full p-1 mt-2 flex flex-row cursor-pointer hover:bg-[#E2D5CD]" style={{ backgroundColor: props.displayOption==1 ? '#E2D5CD': '#FAF2ED'}}  onClick={onFilmClick}>
                <img className="ml-5" src={filmimg} alt="A" width="25" height="15" />
                <Typography className="ml-3 font-medium text-l tracking-wide text-black">
                Film</Typography>
            </div>
            <div className="w-full p-1 mt-2 flex flex-row cursor-pointer hover:bg-[#E2D5CD]" style={{ backgroundColor: props.displayOption==2 ? '#E2D5CD': '#FAF2ED'}}  onClick={onAlbumClick}>
                <img className="ml-5" src={albumimg} alt="A" width="25" height="15" />
                <Typography className="ml-3 font-medium text-l tracking-wide text-black">
                Album</Typography>
            </div>
            <div className="w-full p-1 mt-2 flex flex-row cursor-pointer hover:bg-[#E2D5CD]" style={{ backgroundColor: props.displayOption==3 ? '#E2D5CD': '#FAF2ED'}}  onClick={onFrameClick}>
                <img className="ml-5" src={frameimg} alt="A" width="25" height="15" />
                <Typography className="ml-3 font-medium text-l tracking-wide text-black">
                Frame</Typography>
            </div>
        </div>
    );
}

export default SideBar;


