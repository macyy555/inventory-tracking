import { Button, Navbar, Typography } from "@material-tailwind/react";
import React, { useState } from "react";

function EditList(){

    const [productname, setproductname] = useState("");
    const [category, setcategory] = useState("");
    const [supplier, setsupplier] = useState("");
    const [lot_amount, setlot_amount] = useState("");
    const [instock, setinstock] = useState("");
    const [defect, setdefect] = useState("");
    const [capital, setcapital] = useState("");
    const [capital_1pc, setcapital_1pc] = useState("");
    const [sale_1pc, setsale_1pc] = useState("");

    function onproductnameChange(e){
        setproductname(e.target.value);
    }
    function oncategoryChange(e){
        setcategory(e.target.value);
    }
    function onsupplierChange(e){
        setsupplier(e.target.value);
    }
    function onlot_amountChange(e){
        setlot_amount(e.target.value);
    }
    function oninstockChange(e){
        setinstock(e.target.value);
    }
    function ondefectChange(e){
        setdefect(e.target.value);
    }
    function oncapitalChange(e){
        setcapital(e.target.value);
    }
    function oncaptial_1pcChange(e){
        setcapital_1pc(e.target.value);
    }
    function onsale_1pcChange(e){
        setsale_1pc(e.target.value);
    }
        
    return(
        <div className="p-10"> 
            <div className="bg-[#FAF2ED] rounded-xl">
                <form className="flex flex-col p-5">
                    <label className="text-black" for="productname">Product name</label>
                    <input className="bg-white border-[#967761] border-1 rounded-s mt-3 shadow-xs text-black autofill:shadow-[inset_0_0_0px_1000px_rgb(255,255,255)] autofill:scheme-light" type="text" id="productname" name="productname" value={productname} onChange={onproductnameChange}/>
                    <label className="text-black mt-3" for="category">Category</label>
                    <input className="text-black bg-white border-[#967761] border-1 rounded-s mt-3 shadow-xs autofill:shadow-[inset_0_0_0px_1000px_rgb(255,255,255)] autofill:scheme-light" type="text" id="category" name="category" value={category} onChange={oncategoryChange}/>
                    <label className="text-black mt-3" for="supplier">Supplier</label>
                    <input className="bg-white border-[#967761] border-1 rounded-s mt-3 shadow-xs text-black autofill:shadow-[inset_0_0_0px_1000px_rgb(255,255,255)] autofill:scheme-light" type="text" id="supplier" name="supplier" value={supplier} onChange={onsupplierChange}/>
                    <label className="text-black mt-3" for="lot_amount">Lot Order (amount in pieces)</label>
                    <input className="bg-white border-[#967761] border-1 rounded-s mt-3 shadow-xs text-black autofill:shadow-[inset_0_0_0px_1000px_rgb(255,255,255)] autofill:scheme-light" type="text" id="lot_amount" name="lot_amount" value={lot_amount} onChange={onlot_amountChange}/>
                    <label className="text-black mt-3" for="in_stock">In Stock</label>
                    <input className="bg-white border-[#967761] border-1 rounded-s mt-3 shadow-xs text-black autofill:shadow-[inset_0_0_0px_1000px_rgb(255,255,255)] autofill:scheme-light" type="text" id="instock" name="instock" value={instock} onChange={oninstockChange}/>
                    <label className="text-black mt-3" for="defect">Defect</label>
                    <input className="bg-white border-[#967761] border-1 rounded-s mt-3 shadow-xs text-black autofill:shadow-[inset_0_0_0px_1000px_rgb(255,255,255)] autofill:scheme-light" type="text" id="defect" name="defect" value={defect} onChange={ondefectChange}/>
                    <label className="text-black mt-3" for="capital">Capital (total in baht)</label>
                    <input className="bg-white border-[#967761] border-1 rounded-s mt-3 shadow-xs text-black autofill:shadow-[inset_0_0_0px_1000px_rgb(255,255,255)] autofill:scheme-light" type="text" id="capital" name="capital" value={capital} onChange={oncapitalChange}/>
                    <label className="text-black mt-3" for="capital_1pc">Capital (1 pc. in baht)</label>
                    <input className="bg-white border-[#967761] border-1 rounded-s mt-3 shadow-xs text-black autofill:shadow-[inset_0_0_0px_1000px_rgb(255,255,255)] autofill:scheme-light" type="text" id="capital_1pc" name="capital_1pc" value={capital_1pc} onChange={oncaptial_1pcChange}/>
                    <label className="text-black mt-3" for="sale_1pc">Sale prices (1 pc. in baht)</label>
                    <input className="bg-white border-[#967761] border-1 rounded-s mt-3 shadow-xs text-black autofill:shadow-[inset_0_0_0px_1000px_rgb(255,255,255)] autofill:scheme-light" type="text" id="sale_1pc" name="sale_1pc" value={sale_1pc} onChange={onsale_1pcChange}/>
                    <input className="bg-[#D99F7F] border-[#967761] w-fit px-10 py-1 mt-5 rounded-lg shadow-sm" type="submit" value="Submit"></input>
                </form>
            </div>
            
        </div>
        
    );
}

export default EditList;