import { Button, list, Navbar, Typography } from "@material-tailwind/react";
import React, { useEffect, useState} from "react";

function ListInventory(props){

    useEffect(() => {
        console.log("ListInventory component reset"); 
        setproductname(items_db.filter(item => item.item_id == each_invent.items_id)[0].name);
        setcategory(category_db.filter(category => category.cate_id == (items_db.filter(item => item.item_id == each_invent.items_id)[0].cate_id))[0].name);
        setsupplier(supplier_db.filter(sup=> sup.sup_id == each_invent.sup_id)[0].name);
        setlot_order(each_invent.lot_order);
        setinstock(each_invent.instock);
        setdefect(each_invent.defect);
        setcapital(each_invent.capital);
        setsale1pc(each_invent.sale1pc);
    }, [props.refresh]);

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

    function SelectList(e){
        if (document.getElementById(e.target.id).checked){
            props.deleteListChange(e.target.id, "delete");
        }
        else{
            props.deleteListChange(e.target.id, "");
        }
    }

    return (
        <tbody>  
            <tr className="text-base text-black bg-white border-[#967761] border-1">
                <td className="pl-3 px-3 bg-[#bda492]">
                    <input className="w-4 h-4 accent-white border-gray-500 border-4 scheme-light" type="checkbox" id={each_invent.list_id} onClick={SelectList}/>
                </td>
                <th scope="row" className="pl-3 bg-[#bda492] text-white">
                    <input className="w-5" type="text" name="list_id" value={each_invent.list_id} disabled/>
                </th>
                <td className="pl-3 px-3">
                    <input type="text" name="list_id" value={productname} onChange={onproductnameChange}/>
                </td>
                <td className="pl-3 px-3">
                    <input className="w-25" type="text" name="category" value={category} onChange={oncategoryChange}/>
                </td>
                <td className="pl-3 px-3">
                    <input type="text" name="sup_id" value={supplier} onChange={onsupplierChange}/>
                </td>
                <td className="pl-3 px-3">
                    <input className="w-25" type="text" name="lot_order" value={lot_order} onChange={onlot_orderChange}/>
                </td>
                <td className="pl-3 px-3">
                    <input className="w-25" type="text" name="instock" value={instock} onChange={oninstockChange}/>
                </td>
                <td className="pl-3 px-3">
                    <input className="w-15" type="text" name="defect" value={defect} onChange={ondefectChange}/>
                </td>
                <td className="pl-3 px-3">
                    <input className="w-25" type="text" name="capital" value={capital} onChange={oncapitalChange}/>
                </td>
                <td className="pl-3 px-3">
                    <input className="w-25" type="text" name="sale1pc" value={sale1pc} onChange={onsale1pcChange}/>
                </td>
                <td className="pl-3 px-3 bg-[#bda492] text-white">
                    {each_invent.createdat}
                </td>
            </tr>
        </tbody>
    )
}

export default ListInventory;