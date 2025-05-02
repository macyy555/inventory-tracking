import { Button, Navbar, Typography } from "@material-tailwind/react";
import React, { useState} from "react";

function ListInventory(props){

    const each_invent = props.each_invent;
    const items_db = props.items_db;
    const supplier_db = props.supplier_db;
    const category_db = props.category_db;

    const [productname, setproductname] = useState(items_db.filter(item => item.item_id == each_invent.items_id)[0].name);
    const [category, setcategory] = useState(category_db.filter(category => category.cate_id == (items_db.filter(item => item.item_id == each_invent.items_id)[0].cate_id))[0].name);
    const [supplier, setsupplier] = useState(supplier_db.filter(sup=> sup.sup_id == each_invent.sup_id)[0].name);
    const [lot_order, setlot_order] = useState(each_invent.lot_order);
    const [instock, setinstock] = useState(each_invent.instock);
    const [defect, setdefect] = useState(each_invent.defect);
    const [capital, setcapital] = useState(each_invent.capital);
    const [sale1pc, setsale1pc] = useState(each_invent.sale1pc);

    let inventory = {"list_id": each_invent.list_id, "productname": productname, "category": category, "supplier": supplier, "lot_order": lot_order, "instock": instock, "defect": defect, "capital": capital, "sale1pc": sale1pc};

    function onproductnameChange(e){
        setproductname(e.target.value);
        inventory["productname"] = e.target.value;
        props.inventoryChange(inventory);
    }
    function oncategoryChange(e){
        setcategory(e.target.value);
        inventory["category"] = e.target.value;
        props.inventoryChange(inventory);
    }
    function onsupplierChange(e){
        setsupplier(e.target.value);
        inventory["supplier"] = e.target.value;
        props.inventoryChange(inventory);
    }
    function onlot_orderChange(e){
        setlot_order(e.target.value);
        inventory["lot_order"] = e.target.value;
        props.inventoryChange(inventory);
    }
    function oninstockChange(e){
        setinstock(e.target.value);
        inventory["instock"] = e.target.value;
        props.inventoryChange(inventory);
    }
    function ondefectChange(e){
        setdefect(e.target.value);
        inventory["defect"] = e.target.value;
        props.inventoryChange(inventory);
    }
    function oncapitalChange(e){
        setcapital(e.target.value);
        inventory["capital"] = e.target.value;
        props.inventoryChange(inventory);
    }
    function onsale1pcChange(e){
        setsale1pc(e.target.value);
        inventory["sale1pc"] = e.target.value;
        props.inventoryChange(inventory);
    }

    return (
        <tbody>  
            <tr className="text-base text-black bg-white border-[#967761] border-1">
                <th scope="row" className="pl-3 bg-[#bda492] text-white">
                    <input className="w-5" type="text" name="list_id" value={each_invent.list_id} disabled/>
                </th>
                <td className="pl-3 px-3" contenteditable="true" onChange={onproductnameChange}>
                    <input type="text" name="list_id" value={productname}/>
                </td>
                <td className="pl-3 px-3" contenteditable="true" onChange={oncategoryChange}>
                    <input className="w-25" type="text" name="category" value={category}/>
                </td>
                <td className="pl-3 px-3" contenteditable="true" onChange={onsupplierChange}>
                    <input type="text" name="sup_id" value={supplier}/>
                </td>
                <td className="pl-3 px-3" contenteditable="true" onChange={onlot_orderChange}>
                    <input className="w-25" type="text" name="lot_order" value={lot_order}/>
                </td>
                <td className="pl-3 px-3" contenteditable="true" onChange={oninstockChange}>
                    <input className="w-25" type="text" name="instock" value={instock}/>
                </td>
                <td className="pl-3 px-3" contenteditable="true" onChange={ondefectChange}>
                    <input className="w-15" type="text" name="defect" value={defect}/>
                </td>
                <td className="pl-3 px-3" contenteditable="true" onChange={oncapitalChange}>
                    <input className="w-25" type="text" name="capital" value={capital}/>
                </td>
                <td className="pl-3 px-3" contenteditable="true" onChange={onsale1pcChange}>
                    <input className="w-25" type="text" name="sale1pc" value={sale1pc}/>
                </td>
                <td className="pl-3 px-3 bg-[#bda492] text-white">
                    {each_invent.createdat}
                </td>
            </tr>
        </tbody>
    )
}

export default ListInventory;