import { Button, Navbar, Typography } from "@material-tailwind/react";
import '../../../css/components/Customer/SideBar.css'

function SideBar(){
    return(
        <div class="sidebar h-full">
            <div className="w-full">
                <form className="w-full">
                <input className="bg-white" type="text" id="search-box" name="search-text" value="Search"/>
                </form>
            </div>
            <Typography className="font-medium text-l pl-7 pt-3 tracking-wide text-black">
            Tel: xxx-xxxx</Typography>
            <Typography className="font-medium text-l pl-7 pb-3 tracking-wide text-black">
            123, Bangkok</Typography>
        </div>
    );
}

export default SideBar;


