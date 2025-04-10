import { Button, Navbar, Typography } from "@material-tailwind/react";
import leftimg from "../../assets/left.png";
import film1img from "../../assets/Products/Film/Film1.png";
import film2img from "../../assets/Products/Film/Film2.png";
import film3img from "../../assets/Products/Film/Film3.png";
import film4img from "../../assets/Products/Film/Film4.png";
import film5img from "../../assets/Products/Film/Film5.png";
import React, { useState, useReducer } from "react";
import clsx from 'clsx';

let idproductname = "A"; //for interacting with backend

function DisplayAll(props){

    const [expand, setExpand] = useState(true);

    function onArrowClick(){
        setExpand(!expand)
    }

    function onViewDetailClick(e){
        console.log(e.target.id);
        props.viewDetail({viewDetail: true, productname: e.target.id});
        e.preventDefault();
    }

    return(
        <div className="bg-[#FAF2ED] mb-5">
            <div className="flex justify-between pb-3">
                <Typography className="font-medium text-l pl-7 pt-3 tracking-wide text-black">
                Film</Typography>
                <div className={clsx("py-3 px-3 cursor-pointer", expand ? '-rotate-90' : '')} onClick={onArrowClick}>
                    <img src={leftimg} width="30" height="30"/>
                </div>
            </div>
                {/* extract info from db and add loop here */}
            <div className={clsx(expand ? "opacity-100" : "opacity-0", "transition-opacity delay-150 ease-in-out duration-300")}>
            <div className={clsx(expand ? "grid grid-cols-5 mt-3" : "hidden transition-discrete duration-450", "")}>
                {/* extract info from db and add loop here */}
                <div className="p-3 justify-items-center cursor-pointer" onClick={onViewDetailClick} id={idproductname}>
                    <img src={film1img} alt="A" width="100" height="100" id={idproductname}/>
                    <Typography className="font-medium text-l mt-3 tracking-wide text-black" id={idproductname}>
                    A</Typography>
                </div>
                <div className="p-3 justify-items-center cursor-pointer" onClick={onViewDetailClick} id="B">
                    <img src={film2img} alt="A" width="100" height="100" id="B"/>
                    <Typography className="font-medium text-l mt-3 tracking-wide text-black" id="B">
                    B</Typography>
                </div>
                <div className="p-3 justify-items-center cursor-pointer" onClick={onViewDetailClick} id="C">
                    <img src={film3img} alt="A" width="100" height="100" id="C"/>
                    <Typography className="font-medium text-l mt-3 tracking-wide text-black" id="C">
                    C</Typography>
                </div>
                <div className="p-3 justify-items-center cursor-pointer" onClick={onViewDetailClick} id="D">
                    <img src={film4img} alt="A" width="100" height="100" id="D"/>
                    <Typography className="font-medium text-l mt-3 tracking-wide text-black" id="D">
                    D</Typography>
                </div>
                <div className="p-3 justify-items-center cursor-pointer" onClick={onViewDetailClick} id="E">
                    <img src={film5img} alt="A" width="100" height="100" id="E"/>
                    <Typography className="font-medium text-l mt-3 tracking-wide text-black" id="E">
                    E</Typography>
                </div>
            </div>
            </div>
        </div>
    );
}

export default DisplayAll;