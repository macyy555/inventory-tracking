import { Button, Navbar, Typography } from "@material-tailwind/react";
import leftimg from "../../assets/left.png";
import React, { useState, useReducer } from "react";
import clsx from 'clsx';

function DisplayInDetails(props){

    const [expand, setExpand] = useState(true);
    
    function onArrowClick(){
        setExpand(!expand)
    }

    return(
        <div className="bg-[#FAF2ED] mb-5 pb-5">
            <div className="flex justify-between">
                <Typography className="font-medium text-l pl-7 pt-3 tracking-wide text-black">
                Film</Typography>
            <div className={clsx("pt-2 pr-3 cursor-pointer", expand ? '-rotate-90' : '')} onClick={onArrowClick}>
                <img src={leftimg} width="30" height="30"/>
            </div>
            </div>
            {/* extract info from db and add loop here */}
            <div className={clsx(expand ? "opacity-100" : "opacity-0", "transition-opacity delay-150 ease-in-out duration-300")}>
            <div className={clsx(expand ? "grid" : "hidden transition-discrete duration-450", "")}>
            <dl className="bg-[#ECE1D5] mt-3 ml-5 mr-5 p-3 rounded-lg">
                <div className="flex flex-row">
                    <Typography className="font-medium text-xl ml-5 tracking-wide text-black">
                    A</Typography>
                    <dt className="ml-5 w-fit h-full px-5 py-1 rounded-lg bg-[#D9B7A4] text-black flex items-center justify-center">
                    <Typography className="font-medium text-sm tracking-wide text-black italic">
                    In stock</Typography>
                    <Typography className="font-medium text-xl tracking-wide text-black ml-3">
                    12</Typography>
                    </dt>
                </div>
               
                <div className="justify-items-start">
                    <table className="w-fit text-sm text-left rtl:text-right text-gray-800">
                            <thead className="text-xs text-black uppercase">
                                <tr>
                                    <th scope="col" class="pt-3 pr-3">
                                    </th>
                                    <th scope="col" class="italic pt-3 pr-3">
                                        In Stock
                                    </th>
                                    <th scope="col" class="italic pt-3 pr-3">
                                        Prices
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="text-xs text-black">
                                    <th scope="row" class="pr-3">
                                        S1
                                    </th>
                                    <td class="pr-3">
                                        10
                                    </td>
                                    <td class="pr-3">
                                        320
                                    </td>
                                </tr>
                                <tr class="text-xs text-black">
                                    <th scope="row" class="pr-3">
                                        S2
                                    </th>
                                    <td class="pr-3">
                                        20
                                    </td>
                                    <td class="pr-3">
                                        340
                                    </td>
                                </tr>
                            </tbody>
                    </table>
                </div>
            </dl>
            <dl className="bg-[#ECE1D5] mt-3 ml-5 mr-5 p-3 rounded-lg">
                <div className="flex flex-row">
                    <Typography className="font-medium text-xl ml-5 tracking-wide text-black">
                    B</Typography>
                    <dt className="ml-5 w-fit h-full px-5 py-1 rounded-lg bg-[#D9B7A4] text-black flex items-center justify-center">
                    <Typography className="font-medium text-sm tracking-wide text-black italic">
                    In stock</Typography>
                    <Typography className="font-medium text-xl tracking-wide text-black ml-3">
                    12</Typography>
                    </dt>
                </div>
               
                <div className="justify-items-start">
                    <table className="w-fit text-sm text-left rtl:text-right text-gray-800">
                            <thead className="text-xs text-black uppercase">
                                <tr>
                                    <th scope="col" class="pt-3 pr-3">
                                    </th>
                                    <th scope="col" class="italic pt-3 pr-3">
                                        In Stock
                                    </th>
                                    <th scope="col" class="italic pt-3 pr-3">
                                        Prices
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="text-xs text-black">
                                    <th scope="row" class="pr-3">
                                        S1
                                    </th>
                                    <td class="pr-3">
                                        10
                                    </td>
                                    <td class="pr-3">
                                        320
                                    </td>
                                </tr>
                                <tr class="text-xs text-black">
                                    <th scope="row" class="pr-3">
                                        S2
                                    </th>
                                    <td class="pr-3">
                                        20
                                    </td>
                                    <td class="pr-3">
                                        340
                                    </td>
                                </tr>
                            </tbody>
                    </table>
                </div>
            </dl>
            </div>
            </div>

        </div>
    );
}

export default DisplayInDetails;