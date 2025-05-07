import { Button, Navbar, Typography } from "@material-tailwind/react";
import React, { useState, useReducer, useEffect } from "react";
import { fromByteArray } from 'base64-js';
import Film1 from "../../assets/Products/Film/Kodak color plus.png"
import Film2 from "../../assets/Products/Film/Kodak gold.png"
import Film3 from "../../assets/Products/Film/Fuji C200.png"


function DisplayEach(props){

    const all_items = props.all_items;
    const items = props.items;
    let item_1st_img = Film1;
    let item_2nd_img = Film2;
    let item_3rd_img = Film3;

    useEffect(() => {
        console.log("refresh in DisplayEach");
    }, [props.refresh]);

    if (all_items.length > 0){
        if (all_items[0].img != null){
            item_1st_img = `data:image/png;base64,${fromByteArray(new Uint8Array(all_items[0].img.data))}`; // Use base64-js
        }

        if (all_items[1].img != null){
            item_2nd_img = `data:image/png;base64,${fromByteArray(new Uint8Array(all_items[1].img.data))}`;
        }
        
        if (all_items[2].img != null){
            item_3rd_img = `data:image/png;base64,${fromByteArray(new Uint8Array(all_items[2].img.data))}`;
        }
    }

    function onViewDetailClick(e){
        console.log(e.target.id);
        props.viewDetail({viewDetail: true, product: items.filter((item) => item.name == e.target.id)});
        e.preventDefault();
    }

    return(
        <div className="flex flex-col">
            {
                all_items.length != 0 ? (
                    <React.Fragment>
                        <div className="bg-[#FAF2ED] w-full p-10">
                        {/* extract info from db and add loop here */}
                        <Typography className="font-medium text-l tracking-wide text-black">
                        Best seller in 3 months</Typography>
                        <div className="w-fit flex flex-row ml-20 mt-7 cursor-pointer" id={all_items[0].name} onClick={onViewDetailClick}>
                            <img className="" src={item_1st_img} alt="A" width="100" height="100" id={all_items[0].name}/>
                                <div className="ml-10" id={all_items[0].name}>
                                <Typography className="font-medium text-l tracking-wide text-black" id={all_items[0].name}>
                                #1 {all_items[0].name}</Typography>
                                <Typography className="font-medium text-l tracking-wide text-black mt-3" id={all_items[0].name}>
                                {all_items[0].description}</Typography>
                            </div>
                        </div>
                        <div className="w-fit flex flex-row ml-20 mt-7 cursor-pointer" id={all_items[1].name} onClick={onViewDetailClick}>
                            <img className="" src={item_2nd_img} alt="A" width="100" height="100" id={all_items[1].name}/>
                                <div className="ml-10">
                                <Typography className="font-medium text-l tracking-wide text-black" id={all_items[1].name}>
                                #2 {all_items[1].name}</Typography>
                                <Typography className="font-medium text-l tracking-wide text-black mt-3" id={all_items[1].name}>
                                {all_items[1].description}</Typography>
                            </div>
                        </div>
                        <div className="w-fit flex flex-row ml-20 mt-7 cursor-pointer" id={all_items[2].name} onClick={onViewDetailClick}>
                            <img className="" src={item_3rd_img} alt="A" width="100" height="100" id={all_items[2].name}/>
                                <div className="ml-10">
                                <Typography className="font-medium text-l tracking-wide text-black" id={all_items[2].name}>
                                #3 {all_items[2].name}</Typography>
                                <Typography className="font-medium text-l tracking-wide text-black mt-3" id={all_items[2].name}>
                                {all_items[2].description}</Typography>
                            </div>
                        </div>
                        
                    </div>
                    <div className="bg-[#FAF2ED] grid grid-cols-5 mt-3 pt-3 w-full">
                        {
                            items.map(item => (
                                <div className="p-3 justify-items-center cursor-pointer" id={item.name} onClick={onViewDetailClick}>
                                    <img src={item.img == null ? Film1 : `data:image/png;base64,${fromByteArray(new Uint8Array(item.img.data))}`} alt="A" width="100" height="100" id={item.name}/>
                                    <Typography className="font-medium text-l mt-3 tracking-wide text-black" id={item.name}>
                                    {item.name}</Typography>
                                </div>
                            ))
                        }
                    </div> 
                    </React.Fragment>
                ) : (
                    console.log("nothing to show")
                )
            }
        </div>
    );
}

export default DisplayEach;