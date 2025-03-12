import { Button, Navbar, Typography } from "@material-tailwind/react";
import searchimg from "../../assets/search.png";
import boximg from "../../assets/box.png";
import filmimg from "../../assets/film-roll.png";
import albumimg from "../../assets/album.png";
import frameimg from "../../assets/Frame.png";
import leftimg from "../../assets/left.png";

function SideBar(){
    return(
        <div className="bg-[#FAF2ED] flex flex-col h-full gap-0 p-0">
            <div className="bg-white w-full mt-10 flex flex-row">
                <img className="ml-5" src={searchimg} alt="A" width="25" height="15" />
                <input className="bg-white text-gray-600 shrink w-full ml-2" type="text" id="search-box" name="search-text" value="Search"/>
            </div>
            <Typography className="ml-4 mt-10 font-medium text-xs tracking-wide text-gray-500 italic">
                Filtered by Product</Typography>
            <div className="w-full mt-4 ml-1 flex flex-row">
                <input className="ml-3 w-6 h-6 accent-white border-gray-500 border-4 scheme-light" type="checkbox" id="allproduct" name="allproduct" value="allproduct"/>
                <img className="ml-1" src={boximg} alt="A" width="25" height="15" />
                <Typography className="ml-1 font-medium text-l tracking-wide text-black">
                All Products</Typography>
            </div>
            <div className="w-full mt-2 ml-1 flex flex-row justify-between">
                <div className="flex flex-row">
                    <input className="ml-3 w-6 h-6 accent-white border-gray-500 border-4 scheme-light" type="checkbox" id="allproduct" name="allproduct" value="allproduct"/>
                    <img className="ml-1" src={filmimg} alt="A" width="25" height="15" />
                    <Typography className="ml-1 font-medium text-l tracking-wide text-black">
                    Film</Typography>
                </div>
                <img className="mr-2" src={leftimg} width="25" height="20"/>
            </div>
                <div className="w-full mt-2 ml-1 flex flex-row pl-7">
                    <input className="ml-3 w-6 h-6 accent-white border-gray-500 border-4 scheme-light" type="checkbox" id="allproduct" name="allproduct" value="allproduct"/>
                    <Typography className="ml-2 font-medium text-l tracking-wide text-black shrink">
                    A</Typography>
                </div>
                <div className="w-full mt-2 ml-1 flex flex-row pl-7">
                    <input className="ml-3 w-6 h-6 accent-white border-gray-500 border-4 scheme-light" type="checkbox" id="allproduct" name="allproduct" value="allproduct"/>
                    <Typography className="ml-2 font-medium text-l tracking-wide text-black shrink">
                    B</Typography>
                </div>
                <div className="w-full mt-2 ml-1 flex flex-row pl-7">
                    <input className="ml-3 w-6 h-6 accent-white border-gray-500 border-4 scheme-light" type="checkbox" id="allproduct" name="allproduct" value="allproduct"/>
                    <Typography className="ml-2 font-medium text-l tracking-wide text-black shrink">
                    C</Typography>
                </div>
            <div className="w-full mt-2 ml-1 flex flex-row justify-between">
                <div className="flex flex-row">
                    <input className="ml-3 w-6 h-6 accent-white border-gray-500 border-4 scheme-light" type="checkbox" id="allproduct" name="allproduct" value="allproduct"/>
                    <img className="ml-1" src={albumimg} alt="A" width="25" height="15" />
                    <Typography className="ml-1 font-medium text-l tracking-wide text-black">
                    Album</Typography>
                </div>
                <img className="mr-2" src={leftimg} width="25" height="20"/>
            </div>
            <div className="w-full mt-2 ml-1 flex flex-row justify-between">
                <div className="flex flex-row">
                    <input className="ml-3 w-6 h-6 accent-white border-gray-500 border-4 scheme-light" type="checkbox" id="allproduct" name="allproduct" value="allproduct"/>
                    <img className="ml-1" src={frameimg} alt="A" width="25" height="15" />
                    <Typography className="ml-1 font-medium text-l tracking-wide text-black">
                    Frame</Typography>
                </div>
                <img className="mr-2" src={leftimg} width="25" height="20"/>
            </div>

            <Typography className="ml-4 mt-10 font-medium text-xs tracking-wide text-gray-500 italic">
                Filtered by Supplier</Typography>
            <div className="w-full mt-2 ml-1 flex flex-row">
                <input className="ml-3 w-6 h-6 accent-white border-gray-500 border-4 scheme-light" type="checkbox" id="allproduct" name="allproduct" value="allproduct"/>
                <Typography className="ml-2 font-medium text-l tracking-wide text-black shrink">
                S1</Typography>
            </div>
            <div className="w-full mt-2 ml-1 flex flex-row">
                <input className="ml-3 w-6 h-6 accent-white border-gray-500 border-4 scheme-light" type="checkbox" id="allproduct" name="allproduct" value="allproduct"/>
                <Typography className="ml-2 font-medium text-l tracking-wide text-black shrink">
                S2</Typography>
            </div>
            <div className="w-full mt-2 ml-1 flex flex-row">
                <input className="ml-3 w-6 h-6 accent-white border-gray-500 border-4 scheme-light" type="checkbox" id="allproduct" name="allproduct" value="allproduct"/>
                <Typography className="ml-2 font-medium text-l tracking-wide text-black shrink">
                S3</Typography>
            </div>

            <div className="mt-10 mx-3">
                <Button className="bg-[#D99F7F] w-full h-10 ">
                Edit list</Button>
            </div>
            <div className="mt-4 mx-3">
                <Button className="bg-[#D99F7F] w-full h-10 ">
                Overview</Button>
            </div>
            <div className="mt-4 mx-3 mb-10">
                <Button className="bg-[#D99F7F] w-full h-10 ">
                In Details</Button>
            </div>
        </div>
    );
}

export default SideBar;


