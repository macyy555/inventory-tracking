import { Button, Navbar, Typography } from "@material-tailwind/react";
 
export default function CustomNavBar() {
  return (
  <div>
    <nav className="bg-[#583c21] flex justify-between rounded-none shadow-lg w-full h-20 text-white">
      <Typography className="font-medium text-xl p-7">
        ABC Shop</Typography>
        <Typography className="font-medium text-xl p-7">
        123 Macy Logged in</Typography>
    </nav>
  </div>
  );
}