import { Button, Navbar, Typography } from "@material-tailwind/react";
import leftimg from "../../assets/left.png";
import React, { useState, useReducer, useEffect } from "react";
import clsx from 'clsx';

function DisplayInDetails(props){

    const category = props.category;
    const items = props.items;
    const inventory = props.inventory;
    const supplier = props.supplier;
    const column_display = ["Lot Order", "In Stock", "Defect", "Sales (1 pc.)", "Capital (1 pc.)", "last edited on", "last edieted by", "created on", "created by"];

    const [expand, setExpand] = useState(true);

    useEffect(() => {
        console.log("refresh in DisplayInDetails");
    }, [props.refresh]);

    //set inventory to display according to supplier filter
    let inventory_display = inventory.filter(invent => supplier.some(sup => sup.sup_id == invent.sup_id));
    let items_from_selected_inventory = items.filter(item => inventory_display.some(invent => invent.items_id == item.item_id));
    let items_display = items_from_selected_inventory.map(item => [{"item": item, "instock": 0}]);
    
    function onArrowClick(){
        setExpand(!expand)
    }

    for (let item of items_display){
        inventory_display.filter(invent => invent.items_id == item[0].item.item_id).map( each_invent => 
            item[0].instock = parseInt(item[0].instock) + parseInt(each_invent.instock)           
        )
    }
    
    return(
        <div className="bg-[#FAF2ED] mb-5 pb-5">
            <div className="flex justify-between">
                <Typography className="font-medium text-l pl-7 pt-3 tracking-wide text-black">
                {category.name}</Typography>
            <div className={clsx("pt-2 pr-3 cursor-pointer", expand ? '-rotate-90' : '')} onClick={onArrowClick}>
                <img src={leftimg} width="30" height="30"/>
            </div>
            </div>
            {/* extract info from db and add loop here */}
            <div className={clsx(expand ? "opacity-100" : "opacity-0", "transition-opacity delay-150 ease-in-out duration-300")}>
            <div className={clsx(expand ? "grid" : "hidden transition-discrete duration-450", "")}>
            {
                items_display.map(item => (
                    <dl className="bg-[#ECE1D5] mt-3 ml-5 mr-5 p-3 rounded-lg">
                        <div className="flex flex-row">
                            <Typography className="font-medium text-xl ml-5 tracking-wide text-black">
                            {item[0].item.name}</Typography>
                            <dt className="ml-5 w-fit h-full px-5 py-1 rounded-lg bg-[#D9B7A4] text-black flex items-center justify-center">
                            <Typography className="font-medium text-sm tracking-wide text-black italic">
                            In stock</Typography>
                            <Typography className="font-medium text-xl tracking-wide text-black ml-3">
                            {item[0].instock}</Typography>
                            </dt>
                        </div>
                    
                        <div className="flex justify-items-start">
                            <table className="ml-10 w-fit text-base text-left rtl:text-right text-gray-800">
                                    <thead className="text-base text-black uppercase">
                                        <tr>
                                            <th scope="col" className="pt-3 pr-3">
                                            </th>
                                            {
                                                column_display.map(column_name => (
                                                    <th scope="col" className="italic pt-3 pr-10">
                                                        {column_name}
                                                    </th>
                                                ))
                                            }
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            inventory_display.filter(invent => invent.items_id == item[0].item.item_id).map(each_invent => (
                                                <tr className="text-lg text-black">
                                                    <th scope="row" className="pr-10 w-40">
                                                        {supplier.filter(sup => sup.sup_id == each_invent.sup_id)[0].name}
                                                    </th>
                                                    <td className="pr-10">
                                                        {each_invent.lot_order}
                                                    </td>
                                                    <td className="pr-10">
                                                        {each_invent.instock}
                                                    </td>
                                                    <td className="pr-10">
                                                        {each_invent.defect}
                                                    </td>
                                                    <td className="pr-10">
                                                        {each_invent.sale1pc}
                                                    </td>
                                                    <td className="pr-10">
                                                        {each_invent.capital/each_invent.lot_order}
                                                    </td>
                                                    <td className="pr-10">
                                                        {each_invent.updateat}
                                                    </td>
                                                    <td className="pr-10">
                                                        {each_invent.updateby}
                                                    </td>
                                                    <td className="pr-10">
                                                        {each_invent.createdat}
                                                    </td>
                                                    <td className="pr-10">
                                                        {each_invent.createdby}
                                                    </td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                            </table>
                        </div>
                    </dl>
                ))
            }
            </div>
            </div>

        </div>
    );
}

export default DisplayInDetails;