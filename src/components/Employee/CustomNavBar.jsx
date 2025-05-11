import { Button, Navbar, Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import React, { useState, useRef } from "react";
import axios from "axios";

const db_url = 'http://'+import.meta.env.VITE_DB_HOST+":"+import.meta.env.VITE_DB_EXP_PORT+"/employee/home/logout";
 
export default function CustomNavBar(props) {

  const [open, setOpen] = useState(false);

  async function onLogoutClick(e){
    console.log("logout");
    setOpen(false);
    await axios.post(db_url, {}, { withCredentials: true }).then(response => {
      console.log(response);
      if (response.data.submitstatus == "Logout successful"){
        window.location.href = '/';
      } else {
        alert("Logout failed");
      }
    }).catch(error => {
      console.log(error);
      if (error.response && error.response.data) {
        alert(error.response.data); // This will show "Logout failed"
      } else {
        alert("Unknown error");
      }
    });

  }

  return (
  <div>
    <nav className="bg-[#583c21] flex justify-between rounded-none shadow-lg w-full h-20 text-white">
      <Typography className="font-medium text-xl p-7">
        <Link to="/">ABC Shop</Link>
      </Typography>
      <div className="">
        <button type="button" className="font-medium text-xl pt-7 pr-7 cursor-pointer" onClick={() => setOpen(!open)}>
          {props.employee_id} {props.employee_name}
        </button>
        { open && <div className="absolute right-0 w-56 mt-2 rounded-md bg-white shadow-lg">
            <button type="submit" className="cursor-pointer block w-full px-4 py-3 text-left text-sm text-gray-700" onClick={onLogoutClick}>Sign out</button>
          </div>
        }
      </div> 
    </nav>
  </div>
  );
}