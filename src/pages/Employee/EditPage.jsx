import React from "react";
import AddList from '../../pages/Employee/AddList.jsx'
import EditList from '../../pages/Employee/EditList.jsx'

function EditPage(){
    return(
        <div className="bg-[#FAF2ED] ">
            <div className="flex flex-row-reverse">
                <button className="text-black bg-[#ECE1D5] py-3 px-5">Edit</button>
                <button className="text-black bg-[#ECE1D5] py-3 px-5">Add</button>
            </div>
            {/* <AddList /> */}
            <EditList />
        </div>
        
    );
    
}

export default EditPage;