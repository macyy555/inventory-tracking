import { Button, Navbar, Typography } from "@material-tailwind/react";

function AddList(){
    return(
        <div className="p-10"> 
            <div className="bg-[#FAF2ED] rounded-xl">
                <form className="flex flex-col p-5">
                    <label className="text-black" for="productname">Product name</label>
                    <input className="bg-white border-[#967761] border-1 rounded-s mt-3 shadow-xs" type="text" id="productname" name="productname" value=""/>
                    <label className="text-black mt-3" for="category">Category</label>
                    <input className="bg-white border-[#967761] border-1 rounded-s mt-3 shadow-xs" type="text" id="category" name="category" value=""/>
                    <label className="text-black mt-3" for="supplier">Supplier</label>
                    <input className="bg-white border-[#967761] border-1 rounded-s mt-3 shadow-xs" type="text" id="supplier" name="supplier" value=""/>
                    <label className="text-black mt-3" for="lot_amount">Lot Order (amount in pieces)</label>
                    <input className="bg-white border-[#967761] border-1 rounded-s mt-3 shadow-xs" type="text" id="lot_amount" name="lot_amount" value=""/>
                    <label className="text-black mt-3" for="capital">Capital (total in baht)</label>
                    <input className="bg-white border-[#967761] border-1 rounded-s mt-3 shadow-xs" type="text" id="capital" name="capital" value=""/>
                    <label className="text-black mt-3" for="capital_1pc">Capital (1 pc. in baht)</label>
                    <input className="bg-white border-[#967761] border-1 rounded-s mt-3 shadow-xs" type="text" id="capital_1pc" name="capital_1pc" value=""/>
                    <label className="text-black mt-3" for="sale_1pc">Sale prices (1 pc. in baht)</label>
                    <input className="bg-white border-[#967761] border-1 rounded-s mt-3 shadow-xs" type="text" id="sale_1pc" name="sale_1pc" value=""/>
                    <input className="bg-[#D99F7F] border-[#967761] w-fit px-10 py-1 mt-5 rounded-lg shadow-sm" type="submit" value="Submit"></input>
                </form>
            </div>
            
        </div>
        
    );
}

export default AddList;