import { Button, Navbar, Typography } from "@material-tailwind/react";
import film1img from "../../assets/Products/Film/Film1.png";
import film2img from "../../assets/Products/Film/Film2.png";
import film3img from "../../assets/Products/Film/Film3.png";
import film4img from "../../assets/Products/Film/Film4.png";
import film5img from "../../assets/Products/Film/Film5.png";

let idproductname = "A"; //for interacting with backend

function DisplayEach(props){

    function onViewDetailClick(e){
        console.log(e.target.id);
        props.viewDetail({viewDetail: true, productname: e.target.id});
        e.preventDefault();
    }

    return(
        <div className="flex flex-col">
            <div className="bg-[#FAF2ED] w-full p-10">
                {/* extract info from db and add loop here */}
                <Typography className="font-medium text-l tracking-wide text-black">
                Best seller in 3 months</Typography>
                <div className="w-fit flex flex-row ml-20 mt-7 cursor-pointer" id={idproductname} onClick={onViewDetailClick}>
                    <img className="" src={film1img} alt="A" width="100" height="100" id={idproductname}/>
                        <div className="ml-10" id={idproductname}>
                        <Typography className="font-medium text-l tracking-wide text-black" id={idproductname}>
                        #1 A</Typography>
                        <Typography className="font-medium text-l tracking-wide text-black" id={idproductname}>
                        product details</Typography>
                    </div>
                </div>
                <div className="w-fit flex flex-row ml-20 mt-7 cursor-pointer" id="B" onClick={onViewDetailClick}>
                    <img className="" src={film2img} alt="A" width="100" height="100" id="B"/>
                        <div className="ml-10">
                        <Typography className="font-medium text-l tracking-wide text-black" id="B">
                        #2 B</Typography>
                        <Typography className="font-medium text-l tracking-wide text-black" id="B">
                        product details</Typography>
                    </div>
                </div>
                <div className="w-fit flex flex-row ml-20 mt-7 cursor-pointer" id="C" onClick={onViewDetailClick}>
                    <img className="" src={film3img} alt="A" width="100" height="100" id="C"/>
                        <div className="ml-10">
                        <Typography className="font-medium text-l tracking-wide text-black" id="C">
                        #3 C</Typography>
                        <Typography className="font-medium text-l tracking-wide text-black" id="C">
                        product details</Typography>
                    </div>
                </div>
                
            </div>
            {/* extract info from db and add loop here */}
            <div className="bg-[#FAF2ED] grid grid-cols-5 mt-3 w-full">
                {/* extract info from db and add loop here */}
                <div className="p-3 justify-items-center cursor-pointer" id={idproductname} onClick={onViewDetailClick}>
                    <img src={film1img} alt="A" width="100" height="100" id={idproductname}/>
                    <Typography className="font-medium text-l mt-3 tracking-wide text-black" id={idproductname}>
                    A</Typography>
                </div>
                <div className="p-3 justify-items-center cursor-pointer" id="B" onClick={onViewDetailClick}>
                    <img src={film2img} alt="A" width="100" height="100" id="B"/>
                    <Typography className="font-medium text-l mt-3 tracking-wide text-black" id="B">
                    B</Typography>
                </div>
                <div className="p-3 justify-items-center cursor-pointer" id="C" onClick={onViewDetailClick}>
                    <img src={film3img} alt="A" width="100" height="100" id="C"/>
                    <Typography className="font-medium text-l mt-3 tracking-wide text-black" id="C">
                    C</Typography>
                </div>
                <div className="p-3 justify-items-center cursor-pointer" id="D" onClick={onViewDetailClick}>
                    <img src={film4img} alt="A" width="100" height="100" id="D"/>
                    <Typography className="font-medium text-l mt-3 tracking-wide text-black" id="D">
                    D</Typography>
                </div>
                <div className="p-3 justify-items-center cursor-pointer" id="E" onClick={onViewDetailClick}>
                    <img src={film5img} alt="A" width="100" height="100" id="E"/>
                    <Typography className="font-medium text-l mt-3 tracking-wide text-black" id="E">
                    E</Typography>
                </div>
            </div>

        </div>
    );
}

export default DisplayEach;