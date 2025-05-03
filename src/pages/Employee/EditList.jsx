import { Button, Navbar, Typography } from "@material-tailwind/react";
import React, { useState} from "react";
import ListInventory from "../../components/Employee/ListInventory";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function EditList(props){

    const db_url = 'http://'+import.meta.env.VITE_DB_HOST+":"+import.meta.env.VITE_DB_EXP_PORT;
    const default_url = db_url+"/employee/editlist/delete";
    const client_origin = 'http://'+import.meta.env.VITE_CLIENT_HOST+":"+import.meta.env.VITE_CLIENT_PORT;

    const [refresh, setRefresh] = useState(false);
    const items_db = props.items_db;
    const inventory = props.inventory;
    const supplier_db = props.supplier_db;
    const category_db = props.category_db;
    let inventoryList = [];
    let deleteList = [];

    function inventoryChange(inventoryChangeData){
        console.log(inventoryChangeData);
        //remove old list_id before adding new one.
        let duplicate_list = inventoryList.filter(list => list.list_id == inventoryChangeData.list_id); 
        if (duplicate_list.length > 0){
            inventoryList = inventoryList.filter(list => list.list_id != inventoryChangeData.list_id);
            console.log("remove duplicated data");
        }
        inventoryList.push(inventoryChangeData);
        console.log(inventoryList); 
    }

    function deleteListChange(deleteListData, status){
        console.log(deleteListData);
        if (status == "delete"){
            deleteList.push(deleteListData);
        } else {
            deleteList = deleteList.filter(list => list !== deleteListData);
        }
        console.log(deleteList);
    }

    async function updateInventory(){
        console.log("test update button");
        await axios.put(db_url+"/employee/editlist/update", JSON.stringify(inventoryList)).then( response => {
            console.log(response);
            if(response.data.submitstatus == "update completed"){
                console.log("completed");
                window.location.href=client_origin+"/employee/submitlistcomplete?submitstatus=completed";
            }
        }).catch(error => {
            console.log(error);
          });
    }

    async function deleteInventory(){
        console.log("test delete button");
        await axios.put(db_url+"/employee/editlist/delete", JSON.stringify(deleteList)).then( response => {
            console.log(response);
            if(response.data.submitstatus == "delete completed"){
                console.log("completed");
                window.location.href=client_origin+"/employee/submitlistcomplete?submitstatus=completed";
            }
        }).catch(error => {
            console.log(error);
          });
    }

    async function resetInventory(){
        setRefresh(!refresh);
        console.log("test reset button");
        inventoryList = [];
        deleteList = [];
        console.log("Inventory and delete lists have been reset.");
    }

        
    return(
        <div className="flex flex-col p-10 mih-h-max h-auto"> 
            <div className="bg-[#FAF2ED] rounded-xl flex flex-col mih-h-max"> 
                {/* <form className="flex flex-col mih-h-max p-5 items-center" action={default_url} method="POST"> */}
                <table className="w-fit text-base text-left rtl:text-right bg-[#bda492]">
                    <thead className="text-base text-white uppercase border-[#967761] border-1 bg-[#967761]">
                        <tr>
                            <th scope="col" className="italic pt-3 px-3">
                                Select (for delete)
                            </th>
                            <th scope="col" className="italic pt-3 px-3">
                                No.
                            </th>
                            <th scope="col" className="italic pt-3 px-3">
                                Product name
                            </th>
                            <th scope="col" className="italic pt-3 px-3">
                                Category
                            </th>
                            <th scope="col" className="italic pt-3 px-3">
                                Supplier
                            </th>
                            <th scope="col" className="italic pt-3 px-3">
                                Lot Order
                            </th>
                            <th scope="col" className="italic pt-3 px-3">
                                In Stock
                            </th>
                            <th scope="col" className="italic pt-3 px-3">
                                Defect
                            </th>
                            <th scope="col" className="italic pt-3 px-3">
                                (total) Capital
                            </th>
                            <th scope="col" className="italic pt-3 px-3">
                                Sales (1 pc.)
                            </th>
                            <th scope="col" className="italic pt-3 px-3">
                                Created On
                            </th>
                        </tr>
                    </thead>
                    {
                        inventory.map(each_invent => ( 
                            <ListInventory each_invent={each_invent} items_db={items_db} supplier_db={supplier_db} category_db={category_db} inventoryChange={inventoryChange} deleteListChange={deleteListChange} refresh={refresh}/>
                        ))
                    }
                </table>
                    <div className="flex flex-row justify-center gap-5">
                    <Button className="bg-[#be6536] border-[#967761] w-fit px-10 py-1 mt-5 rounded-lg shadow-md text-base hover:bg-[#c0571f] hover:shadow-md hover:outline-none" type="submit" formAction={db_url+"/employee/editlist/update"} onClick={updateInventory}>Update</Button>
                    <Button className="bg-[#D99F7F] border-[#967761] w-fit px-10 py-1 mt-5 rounded-lg shadow-md text-base hover:bg-[#d68d66] hover:shadow-md hover:outline-none" type="submit" formAction={db_url+"/employee/editlist/delete"} onClick={deleteInventory}>Delete</Button>
                    <Button className="bg-[#775745] border-[#967761] w-fit px-10 py-1 mt-5 rounded-lg shadow-md text-base hover:bg-[#6b4b38] hover:shadow-md hover:outline-none" type="submit" formAction={db_url+"/employee"} onClick={resetInventory}>Reset</Button>
                    </div>
                {/* </form> */}
            </div>
            
        </div>
        
    );
}

export default EditList;