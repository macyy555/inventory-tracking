import { Button, Navbar, Typography } from "@material-tailwind/react";
import React, { useState } from "react";

function ContactForm(){

    const db_url = 'http://'+import.meta.env.VITE_DB_HOST+":"+import.meta.env.VITE_DB_EXP_PORT+"/customer/submitquiz";
    
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhoneNumber] = useState("");
    const [lineID, setLineID] = useState("");
    const [question, setQuestion] = useState("");

    function onNameChange(e){
        setName(e.target.value);
    }
    function onEmailChange(e){
        setEmail(e.target.value);
    }
    function onPhoneChange(e){
        setPhoneNumber(e.target.value);
    }
    function onLineIDChange(e){
        setLineID(e.target.value);
    }
    function onQuestionChange(e){
        setQuestion(e.target.value);
    }
    
    return(
        <div className="p-10"> 
            <Typography className="font-medium text-xl tracking-wide text-white">
            Contact Us</Typography>
            <div className="bg-[#FAF2ED] rounded-xl mt-7">
                <form className="flex flex-col p-5" action={db_url} method="POST">
                    <label className="text-black" htmlFor="name">Name</label>
                    <input className="bg-white border-[#967761] border-1 rounded-s mt-3 p-1 shadow-xs text-black autofill:shadow-[inset_0_0_0px_1000px_rgb(255,255,255)] autofill:scheme-light" type="text" id="name" name="name" value={name} onChange={onNameChange} required/>
                    <label className="text-black mt-3" htmlFor="email">Email</label>
                    <input className="bg-white border-[#967761] border-1 rounded-s mt-3 p-1 shadow-xs text-black autofill:shadow-[inset_0_0_0px_1000px_rgb(255,255,255)] autofill:scheme-light" type="text" id="email" name="email" value={email} onChange={onEmailChange}/>
                    <label className="text-black mt-3" htmlFor="phone">Phone number</label>
                    <input className="bg-white border-[#967761] border-1 rounded-s mt-3 p-1 shadow-xs text-black autofill:shadow-[inset_0_0_0px_1000px_rgb(255,255,255)] autofill:scheme-light" type="text" id="phone" name="phone" value={phone} onChange={onPhoneChange}/>
                    <label className="text-black mt-3" htmlFor="lineID">Line ID</label>
                    <input className="bg-white border-[#967761] border-1 rounded-s mt-3 p-1 shadow-xs text-black autofill:shadow-[inset_0_0_0px_1000px_rgb(255,255,255)] autofill:scheme-light" type="text" id="lineID" name="lineID" value={lineID} onChange={onLineIDChange}/>
                    <label className="text-black mt-3" htmlFor="question">Questions</label>
                    <input className="bg-white border-[#967761] border-1 rounded-s mt-3 p-1 min-h-15 shadow-xs text-black autofill:shadow-[inset_0_0_0px_1000px_rgb(255,255,255)] autofill:scheme-light" type="text" id="question" name="question" value={question} onChange={onQuestionChange} required/>
                    <input className="bg-[#D99F7F] border-[#967761] w-fit px-10 py-1 mt-5 rounded-lg shadow-sm" type="submit" value="Submit"></input>
                </form>
            </div>
            
        </div>
        
    );
}

export default ContactForm;