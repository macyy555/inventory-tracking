import { Button, Navbar, Typography } from "@material-tailwind/react";
import '../../css/components/CustomNavBar.css'
 
export default function CustomNavBar() {
  return (
  <div>
    <nav className="customnavbar rounded-none shadow-lg w-full h-20">
      <div>
      <Typography className="font-medium text-xl p-7 tracking-wide">
        ABC Shop</Typography>
      </div>
    </nav>
  </div>
  );
}