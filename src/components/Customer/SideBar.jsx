import { Button, Navbar, Typography } from "@material-tailwind/react";
import searchimg from "../../assets/search.png";
import boximg from "../../assets/box.png";
import filmimg from "../../assets/film-roll.png";
import albumimg from "../../assets/album.png";
import frameimg from "../../assets/Frame.png";
import React, { useState } from "react";
import Category from "./SideBarCpt/category_menu"

function SideBar(props){

    const category_menu = props.category;
    const items_db = props.items_db;

    const [displayOption, setDisplayOption] = useState(0);
    const [value, setValue] = useState("");

    function setDisplay(user_displayOption){
        // console.log(user_displayOption); 
        props.display(user_displayOption);
        setDisplayOption(user_displayOption);
    }

    function onBoxClick(){
        props.display(0);
        setDisplayOption(0);
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
            <div className="w-full p-1 mt-2 flex flex-row cursor-pointer hover:bg-[#E2D5CD]" style={{ backgroundColor: displayOption==0 ? '#E2D5CD': '#FAF2ED'}}  onClick={onBoxClick}>
                <img className="ml-5" src={boximg} alt="A" width="25" height="15" />
                <Typography className="ml-3 font-medium text-l tracking-wide text-black">
                All Products</Typography>
            </div>
            {
                category_menu.map(each_category => (
                    <Category cate_data={each_category} display={setDisplay} displayOption={displayOption}/>
                ))
            }
        </div>
    );
}

export default SideBar;


