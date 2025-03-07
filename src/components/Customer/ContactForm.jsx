import { Button, Navbar, Typography } from "@material-tailwind/react";

function ContactForm(){
    return(
        <div className="p-10"> 
            <Typography className="font-medium text-xl tracking-wide text-white">
            Contact Us</Typography>
            <div className="bg-[#FAF2ED] rounded-xl mt-7">
                <form className="flex flex-col p-5">
                    <label className="text-black" for="name">Name</label>
                    <input className="bg-white border-[#967761] border-1 rounded-s mt-3 shadow-xs" type="text" id="name" name="name" value=""/>
                    <label className="text-black mt-3" for="email">Email</label>
                    <input className="bg-white border-[#967761] border-1 rounded-s mt-3 shadow-xs" type="text" id="email" name="email" value=""/>
                    <label className="text-black mt-3" for="phone">Phone number</label>
                    <input className="bg-white border-[#967761] border-1 rounded-s mt-3 shadow-xs" type="text" id="phone" name="phone" value=""/>
                    <label className="text-black mt-3" for="lineID">Line ID</label>
                    <input className="bg-white border-[#967761] border-1 rounded-s mt-3 shadow-xs" type="text" id="lineID" name="lineID" value=""/>
                    <label className="text-black mt-3" for="question">Questions</label>
                    <input className="bg-white border-[#967761] border-1 rounded-s mt-3 min-h-15 shadow-xs" type="text" id="question" name="question" value=""/>
                    <input className="bg-[#D99F7F] border-[#967761] w-fit px-10 py-1 mt-5 rounded-lg shadow-sm" type="submit" value="Submit"></input>
                </form>
            </div>
            
        </div>
        
    );
}

export default ContactForm;