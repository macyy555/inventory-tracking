import { Button, Navbar, Typography } from "@material-tailwind/react";
import leftimg from "../../assets/left.png";
import React, { useState, useReducer, useEffect } from "react";
import clsx from 'clsx';
import { fromByteArray } from 'base64-js';
import Film1 from "../../assets/Products/Film/Kodak color plus.png"

function DisplayAll(props){

    let category_menu = props.category;
    let items = props.items;
    console.log(items);
    

    const [expand, setExpand] = useState(true);

    useEffect(() => {
        category_menu = props.category;
        items = props.items;
        console.log("refresh in DisplayAll");
    }, [props.refresh]);

    function onArrowClick(){
        setExpand(!expand)
    }

    function onViewDetailClick(e){
        console.log(e.target.id);
        console.log(items.filter((item) => item.name == e.target.id));
        
        props.viewDetail({viewDetail: true, product: items.filter((item) => item.name == e.target.id) });
        e.preventDefault();
    }

    return(
        <div className="bg-[#FAF2ED] mb-5">
            <div className="flex justify-between pb-3">
                <Typography className="font-medium text-l pl-7 pt-3 tracking-wide text-black">
                {category_menu.name}</Typography>
                <div className={clsx("py-3 px-3 cursor-pointer", expand ? '-rotate-90' : '')} onClick={onArrowClick}>
                    <img src={leftimg} width="30" height="30"/>
                </div>
            </div>
                {/* extract info from db and add loop here */}
            <div className={clsx(expand ? "opacity-100" : "opacity-0", "transition-opacity delay-150 ease-in-out duration-300")}>
            <div className={clsx(expand ? "grid grid-cols-5 mt-3" : "hidden transition-discrete duration-450", "")}>
            {
                items.map(item => (
                    <div className="p-3 justify-items-center cursor-pointer" onClick={onViewDetailClick} id={item.name}>
                        <img src={item.img == null ? Film1 : `data:image/png;base64,${fromByteArray(new Uint8Array(item.img.data))}`} alt="A" width="100" height="100" id={item.name}/>
                        <Typography className="font-medium text-l mt-3 tracking-wide text-black" id={item.name}>
                        {item.name}</Typography>
                    </div>
                ))
            }
            </div>
            </div>
        </div>
    );
}

export default DisplayAll;