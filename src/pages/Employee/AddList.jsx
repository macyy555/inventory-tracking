import { Button, Navbar, Typography } from "@material-tailwind/react";
import React, { useState } from "react";

function AddList(){

    const db_url = 'http://'+import.meta.env.VITE_DB_HOST+":"+import.meta.env.VITE_DB_EXP_PORT+"/employee/addlist";

    const [productname, setproductname] = useState("");
    const [category, setcategory] = useState("");
    const [supplier, setsupplier] = useState("");
    const [lot_order, setlot_order] = useState("");
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
                <form className="flex flex-col p-5" action={db_url} method="POST">
                    <label className="text-black" htmlFor="productname">Product name</label>
                    <input className="text-black bg-white border-[#967761] border-1 rounded-s mt-3 shadow-xs autofill:shadow-[inset_0_0_0px_1000px_rgb(255,255,255)] autofill:scheme-light" type="text" id="productname" name="productname" value={productname} onChange={onproductnameChange} required/>
                    <label className="text-black mt-3" htmlFor="category">Category</label>
                    <input className="text-black bg-white border-[#967761] border-1 rounded-s mt-3 shadow-xs autofill:shadow-[inset_0_0_0px_1000px_rgb(255,255,255)] autofill:scheme-light" type="text" id="category" name="category" value={category} onChange={oncategoryChange} required/>
                    <label className="text-black mt-3" htmlFor="supplier">Supplier</label>
                    <input className="text-black bg-white border-[#967761] border-1 rounded-s mt-3 shadow-xs autofill:shadow-[inset_0_0_0px_1000px_rgb(255,255,255)] autofill:scheme-light" type="text" id="supplier" name="supplier" value={supplier} onChange={onsupplierChange} required/>
                    <label className="text-black mt-3" htmlFor="lot_amount">Lot Order (amount in pieces)</label>
                    <input className="text-black bg-white border-[#967761] border-1 rounded-s mt-3 shadow-xs autofill:shadow-[inset_0_0_0px_1000px_rgb(255,255,255)] autofill:scheme-light" type="number" id="lot_order" name="lot_order" value={lot_order} onChange={onlot_orderChange} required/>
                    <label className="text-black mt-3" htmlFor="capital">Capital (total in baht)</label>
                    <input className="text-black bg-white border-[#967761] border-1 rounded-s mt-3 shadow-xs autofill:shadow-[inset_0_0_0px_1000px_rgb(255,255,255)] autofill:scheme-light" type="number" id="capital" name="capital" value={capital} onChange={oncapitalChange} required/>
                    <label className="text-black mt-3" htmlFor="capital_1pc">Capital (1 pc. in baht)</label>
                    <input className="text-black bg-white border-[#967761] border-1 rounded-s mt-3 shadow-xs autofill:shadow-[inset_0_0_0px_1000px_rgb(255,255,255)] autofill:scheme-light disabled:border-gray-200" type="number" id="capital1pc" name="capital1pc" value={capital1pc} disabled/>
                    <label className="text-black mt-3" htmlFor="sale_1pc">Sale prices (1 pc. in baht)</label>
                    <input className="text-black bg-white border-[#967761] border-1 rounded-s mt-3 shadow-xs autofill:shadow-[inset_0_0_0px_1000px_rgb(255,255,255)] autofill:scheme-light" type="number" id="sale1pc" name="sale1pc" value={sale1pc} onChange={onsale1pcChange} required/>
                    <input className="bg-[#D99F7F] border-[#967761] w-fit px-10 py-1 mt-5 rounded-lg shadow-sm" type="submit" value="Submit"></input>
                </form>
            </div>
            
        </div>
        
    );
}

export default AddList;