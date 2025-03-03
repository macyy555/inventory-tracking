import { Button, Navbar, Typography } from "@material-tailwind/react";
import '../../../css/components/Customer/Footer.css'

function Footer(){
    return(
        <div class="footer w-full">
            <Typography className="font-medium text-l pl-7 pt-3 tracking-wide">
            Tel: xxx-xxxx</Typography>
            <Typography className="font-medium text-l pl-7 pb-3 tracking-wide">
            123, Bangkok</Typography>
        </div>
    );
}

export default Footer;