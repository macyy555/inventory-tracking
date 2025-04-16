import { Button, Navbar, Typography } from "@material-tailwind/react";
import leftimg from "../../assets/left.png";
import React, { useState, useReducer } from "react";
import clsx from 'clsx';

function DisplayOverview(props){

    const category = props.category;
    const items = props.items;
    const inventory = props.inventory;
    const supplier = props.supplier;
    const items_display = items.filter(item => item.cate_id == category.cate_id).map(item => [{"item": item, "instock": 0}]);
    
    const [expand, setExpand] = useState(true);
    
    function onArrowClick(){
        setExpand(!expand)
    }

    for (let item of items_display){
        inventory.filter(invent => invent.items_id == item[0].item.item_id).map( each_invent => 
            item[0].instock = item[0].instock + each_invent.instock           
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
            <div className={clsx(expand ? "grid grid-cols-3 mt-3 justify-between" : "hidden transition-discrete duration-450", "")}>
                {
                    items_display.map(item => (
                        <dl className="bg-[#ECE1D5] mt-3 ml-5 p-3 rounded-lg">
                            <Typography className="font-medium text-xl ml-5 tracking-wide text-black">
                            {item[0].item.name}</Typography>
                            <div className="justify-items-center">                                  
                                <dt className="w-15 h-15 rounded-full bg-[#D9B7A4] text-black text-xl flex items-center justify-center">{item[0].instock}</dt>
                                <table className="w-fit text-sm text-left rtl:text-right text-gray-800">
                                    <thead className="text-xs text-black uppercase">
                                        <tr>
                                            <th scope="col" className="pt-3 pr-3">
                                            </th>
                                            <th scope="col" className="italic pt-3 pr-3">
                                                In Stock
                                            </th>
                                            <th scope="col" className="italic pt-3 pr-3">
                                                Prices
                                            </th>
                                        </tr>
                                    </thead>
                                    {
                                        inventory.filter(each_list => each_list.items_id == item[0].item.item_id).map(each_invent => ( 
                                            <tbody>  
                                                <tr className="text-xs text-black">
                                                    <th scope="row" className="pr-3">
                                                        {supplier.filter(sup => each_invent.sup_id == sup.sup_id)[0].name}
                                                    </th>
                                                    <td className="pr-3">
                                                        {each_invent.instock}
                                                    </td>
                                                    <td className="pr-3">
                                                        {each_invent.sale1pc}
                                                    </td>
                                                </tr>
                                            </tbody>
                                        ))
                                    }
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

export default DisplayOverview;