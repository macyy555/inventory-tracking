import { Button, Navbar, Typography } from "@material-tailwind/react";

function Footer(){
    return(
        <div className="bg-[#583c21] w-full text-white h-20">
            <Typography className="font-medium text-l pl-7 pt-3 tracking-wide">
            Tel: xxx-xxxx</Typography>
            <Typography className="font-medium text-l pl-7 pb-3 tracking-wide">
            123, Bangkok</Typography>
        </div>
    );
}

export default Footer;