import { Button, Navbar, Typography } from "@material-tailwind/react";
import '../../../css/components/Customer/CustomNavBar.css'
 
export default function CustomNavBar() {
  return (
  <div>
    <nav className="customnavbar rounded-none shadow-lg w-full h-20">
      <Typography className="font-medium text-xl p-7">
        ABC Shop</Typography>
        <div className="pr-7">
          <Button className="bg-[#D99F7F] h-10">
          Contact Us</Button>
        </div>
    </nav>
  </div>
  );
}