import { Button, Navbar, Typography } from "@material-tailwind/react";

function SideBar(){
    return(
        <div class="bg-[#FAF2ED] flex flex-col h-full gap-0 p-0">
            <div className="bg-white w-full mt-10 flex flex-row">
                <img className="ml-5" src="src/assets/search.png" alt="A" width="25" height="15" />
                <input className="bg-white text-gray-600 shrink w-full ml-2" type="text" id="search-box" name="search-text" value="Search"/>
            </div>
            <div className="w-full mt-4 flex flex-row">
                <img className="ml-5" src="src/assets/box.png" alt="A" width="25" height="15" />
                <Typography className="ml-3 font-medium text-l tracking-wide text-black">
                All Products</Typography>
            </div>
            <div className="w-full mt-4 flex flex-row">
                <img className="ml-5" src="src/assets/film-roll.png" alt="A" width="25" height="15" />
                <Typography className="ml-3 font-medium text-l tracking-wide text-black">
                Film</Typography>
            </div>
            <div className="w-full mt-4 flex flex-row">
                <img className="ml-5" src="src/assets/album.png" alt="A" width="25" height="15" />
                <Typography className="ml-3 font-medium text-l tracking-wide text-black">
                Album</Typography>
            </div>
            <div className="w-full mt-4 flex flex-row">
                <img className="ml-5" src="src/assets/Frame.png" alt="A" width="25" height="15" />
                <Typography className="ml-3 font-medium text-l tracking-wide text-black">
                Frame</Typography>
            </div>
        </div>
    );
}

export default SideBar;


