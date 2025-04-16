import React, {useState} from "react";
import AddList from '../../pages/Employee/AddList.jsx'
import EditList from '../../pages/Employee/EditList.jsx'
import { Button, Navbar, Typography } from "@material-tailwind/react";
import clsx from 'clsx';

function EditPage(props){

    const [displayOption, setDisplayOption] = useState(0);

    function onCloseClick(e){
        props.viewEditPage(false);
        e.preventDefault();
    }

    function onEditClick(){
        setDisplayOption(1)
    }

    function onAddClick(){
        setDisplayOption(0)
    }

    return(
        <div className="bg-black/60 backdrop-opacity-25 backdrop-blur-sm fixed inset-0">
            <Typography className="font-medium text-3xl tracking-wide text-white justify-self-end py-8 px-20 w-10 cursor-pointer drop-shadow-sm mt-20" onClick={onCloseClick}>
            X</Typography>
            <div className="bg-[#FAF2ED] w-3/5 h-max-fit grid justify-self-center">
                <div className="flex flex-row-reverse">
                    <button className={clsx(displayOption==1 ? "text-black bg-[#FAF2ED]" : "text-white bg-[#ECE1D5]", "font-semibold py-3 px-5 justify-self-end")} onClick={onEditClick}>Edit</button>
                    <button className={clsx(displayOption==0 ? "text-black bg-[#FAF2ED]" : "text-white bg-[#ECE1D5]", "font-semibold py-3 px-5 justify-self-end")} onClick={onAddClick}>Add</button>
                </div>
                <div className={clsx(displayOption==0 ? "grid" : "hidden")}>
                    <AddList />
                </div>
                <div className={clsx(displayOption==1 ? "grid" : "hidden")}>
                    <EditList />
                </div>
            </div>
        </div>

        
    );
    
}

export default EditPage;