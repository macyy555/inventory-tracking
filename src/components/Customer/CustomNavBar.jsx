import { Button, Navbar, Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";
 
export default function CustomNavBar(props) {

  function onContactClick(){
    props.display(4)
  }

  return (
  <div>
    <nav className="bg-[#583c21] flex justify-between rounded-none shadow-lg w-full h-20 text-white">
      <Typography className="font-medium text-xl p-7">
      <Link to="/">ABC Shop</Link></Typography>
        <div className="pr-7 pt-5">
          <Button className="bg-[#D99F7F] h-10" onClick={onContactClick}>
          Contact Us</Button>
        </div>
    </nav>
  </div>
  );
}