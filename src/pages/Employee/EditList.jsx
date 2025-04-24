import { Button, Navbar, Typography } from "@material-tailwind/react";
import React, { useState} from "react";

function EditList(props){

    const db_url = 'http://'+import.meta.env.VITE_DB_HOST+":"+import.meta.env.VITE_DB_EXP_PORT;
    const default_url = db_url+"/employee/delete";

    const items_db = props.items_db;
    const inventory = props.inventory;
    const supplier_db = props.supplier_db;
    const category_db = props.category_db;
    
    const [productname, setproductname] = useState("");
    const [category, setcategory] = useState("");
    const [supplier, setsupplier] = useState("");
    const [lot_order, setlot_order] = useState("");
    const [instock, setinstock] = useState("");
    const [defect, setdefect] = useState("");
    const [capital, setcapital] = useState("");
    const [capital1pc, setcapital1pc] = useState("");
    const [sale1pc, setsale1pc] = useState("");

    function onproductnameChange(e){
        setproductname(e.target.value);
    }
    function oncategoryChange(e){
        setcategory(e.target.value);
    }
    function onsupplierChange(e){
        setsupplier(e.target.value);
    }
    function onlot_orderChange(e){
        setlot_order(e.target.value);
        if (!isNaN(document.getElementById("capital").value/document.getElementById("lot_order").value)){
            setcapital1pc(document.getElementById("capital").value/document.getElementById("lot_order").value)
        }
    }
    function oninstockChange(e){
        setinstock(e.target.value);
    }
    function ondefectChange(e){
        setdefect(e.target.value);
    }
    function oncapitalChange(e){
        setcapital(e.target.value);
        if (!isNaN(document.getElementById("capital").value/document.getElementById("lot_order").value)){
            setcapital1pc(document.getElementById("capital").value/document.getElementById("lot_order").value)
        }
    }
    function onsale1pcChange(e){
        setsale1pc(e.target.value);
    }
        
    return(
        <div className="flex flex-col p-10 mih-h-max h-auto"> 
            <div className="bg-[#FAF2ED] rounded-xl flex flex-col mih-h-max"> 
                <form className="flex flex-col mih-h-max p-5 items-center" action={default_url} method="POST">
                <table className="w-fit text-base text-left rtl:text-right bg-[#bda492]">
                    <thead className="text-base text-white uppercase border-[#967761] border-1 bg-[#967761]">
                        <tr>
                            <th scope="col" className="italic pt-3 pl-3 pr-10">
                                No.
                            </th>
                            <th scope="col" className="italic pt-3 pl-3 pr-10">
                                Product name
                            </th>
                            <th scope="col" className="italic pt-3 pl-3 pr-10">
                                Category
                            </th>
                            <th scope="col" className="italic pt-3 pl-3 pr-10">
                                Supplier
                            </th>
                            <th scope="col" className="italic pt-3 pl-3 pr-10">
                                Lot Order
                            </th>
                            <th scope="col" className="italic pt-3 pl-3 pr-10">
                                In Stock
                            </th>
                            <th scope="col" className="italic pt-3 pl-3 pr-10">
                                Defect
                            </th>
                            <th scope="col" className="italic pt-3 pl-3 pr-10">
                                (total) Capital
                            </th>
                            <th scope="col" className="italic pt-3 pl-3 pr-10">
                                Sales (1 pc.)
                            </th>
                            <th scope="col" className="italic pt-3 pl-3 pr-10">
                                Created On
                            </th>
                        </tr>
                    </thead>
                    {
                        inventory.map(each_invent => ( 
                            <tbody>  
                                <tr className="text-base text-black bg-white border-[#967761] border-1">
                                    <th scope="row" className="pl-3 bg-[#bda492] text-white">
                                        {each_invent.list_id}
                                    </th>
                                    <td className="pl-3 pr-3" contenteditable="true">
                                        {items_db.filter(item => item.item_id == each_invent.items_id)[0].name}
                                    </td>
                                    <td className="pl-3 pr-3" contenteditable="true">
                                        {category_db.filter(category => category.cate_id == (items_db.filter(item => item.item_id == each_invent.items_id)[0].cate_id))[0].name}
                                    </td>
                                    <td className="pl-3 pr-3" contenteditable="true">
                                        {supplier_db.filter(sup=> sup.sup_id == each_invent.sup_id)[0].name}
                                    </td>
                                    <td className="pl-3 pr-3" contenteditable="true">
                                        {each_invent.lot_order}
                                    </td>
                                    <td className="pl-3 pr-3" contenteditable="true">
                                        {each_invent.instock}
                                    </td>
                                    <td className="pl-3 pr-3" contenteditable="true">
                                        {each_invent.defect}
                                    </td>
                                    <td className="pl-3 pr-3" contenteditable="true">
                                        {each_invent.capital}
                                    </td>
                                    <td className="pl-3 pr-3" contenteditable="true">
                                        {each_invent.sale1pc}
                                    </td>
                                    <td className="pl-3 pr-3 bg-[#bda492] text-white">
                                        {each_invent.createdat}
                                    </td>
                                </tr>
                            </tbody>
                        ))
                    }
                </table>
                    <label className="text-black" htmlFor="productname">Product name</label>
                    <input className="bg-white border-[#967761] border-1 rounded-s mt-3 shadow-xs text-black autofill:shadow-[inset_0_0_0px_1000px_rgb(255,255,255)] autofill:scheme-light" type="text" id="productname" name="productname" value={productname} onChange={onproductnameChange} required/>
                    <label className="text-black mt-3" htmlFor="category">Category</label>
                    <input className="text-black bg-white border-[#967761] border-1 rounded-s mt-3 shadow-xs autofill:shadow-[inset_0_0_0px_1000px_rgb(255,255,255)] autofill:scheme-light" type="text" id="category" name="category" value={category} onChange={oncategoryChange}/>
                    <label className="text-black mt-3" htmlFor="supplier">Supplier</label>
                    <input className="bg-white border-[#967761] border-1 rounded-s mt-3 shadow-xs text-black autofill:shadow-[inset_0_0_0px_1000px_rgb(255,255,255)] autofill:scheme-light" type="text" id="supplier" name="supplier" value={supplier} onChange={onsupplierChange}/>
                    <label className="text-black mt-3" htmlFor="lot_amount">Lot Order (amount in pieces)</label>
                    <input className="bg-white border-[#967761] border-1 rounded-s mt-3 shadow-xs text-black autofill:shadow-[inset_0_0_0px_1000px_rgb(255,255,255)] autofill:scheme-light" type="number" id="lot_order" name="lot_order" value={lot_order} onChange={onlot_orderChange}/>
                    <label className="text-black mt-3" htmlFor="in_stock">In Stock</label>
                    <input className="bg-white border-[#967761] border-1 rounded-s mt-3 shadow-xs text-black autofill:shadow-[inset_0_0_0px_1000px_rgb(255,255,255)] autofill:scheme-light" type="number" id="instock" name="instock" value={instock} onChange={oninstockChange}/>
                    <label className="text-black mt-3" htmlFor="defect">Defect</label>
                    <input className="bg-white border-[#967761] border-1 rounded-s mt-3 shadow-xs text-black autofill:shadow-[inset_0_0_0px_1000px_rgb(255,255,255)] autofill:scheme-light" type="number" id="defect" name="defect" value={defect} onChange={ondefectChange}/>
                    <label className="text-black mt-3" htmlFor="capital">Capital (total in baht)</label>
                    <input className="bg-white border-[#967761] border-1 rounded-s mt-3 shadow-xs text-black autofill:shadow-[inset_0_0_0px_1000px_rgb(255,255,255)] autofill:scheme-light" type="number" id="capital" name="capital" value={capital} onChange={oncapitalChange}/>
                    <label className="text-black mt-3" htmlFor="capital_1pc">Capital (1 pc. in baht)</label>
                    <input className="bg-white border-[#967761] border-1 rounded-s mt-3 shadow-xs text-black autofill:shadow-[inset_0_0_0px_1000px_rgb(255,255,255)] autofill:scheme-light disabled:border-gray-200" type="number" id="capital1pc" name="capital1pc" value={capital1pc} disabled/>
                    <label className="text-black mt-3" htmlFor="sale_1pc">Sale prices (1 pc. in baht)</label>
                    <input className="bg-white border-[#967761] border-1 rounded-s mt-3 shadow-xs text-black autofill:shadow-[inset_0_0_0px_1000px_rgb(255,255,255)] autofill:scheme-light" type="number" id="sale1pc" name="sale1pc" value={sale1pc} onChange={onsale1pcChange}/>
                    <div className="grid grid-cols-3">
                    <input className="bg-[#D99F7F] border-[#967761] w-fit px-10 py-1 mt-5 rounded-lg shadow-sm" type="submit" value="Update" formaction={db_url+"/employee/editlist/update"}></input>
                    <input className="bg-[#D99F7F] border-[#967761] w-fit px-10 py-1 mt-5 rounded-lg shadow-sm" type="submit" value="Delele"></input>
                    <input className="bg-[#D99F7F] border-[#967761] w-fit px-10 py-1 mt-5 rounded-lg shadow-sm" type="submit" value="Reset"></input>
                    </div>
                </form>
            </div>
            
        </div>
        
    );
}

export default EditList;