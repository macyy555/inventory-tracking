import { Button, Navbar, Typography } from "@material-tailwind/react";
import leftimg from "../../assets/left.png";
import film1img from "../../assets/Products/Film/Film1.png";
import film2img from "../../assets/Products/Film/Film2.png";
import film3img from "../../assets/Products/Film/Film3.png";
import film4img from "../../assets/Products/Film/Film4.png";
import film5img from "../../assets/Products/Film/Film5.png";



function DisplayAll(){
    return(
        <div className="bg-[#FAF2ED] mb-5">
            <div className="flex justify-between">
            <Typography className="font-medium text-l pl-7 pt-3 tracking-wide text-black">
            Film</Typography>
            <div className="pt-2 pr-3">
            <img src={leftimg} width="30" height="30"/>
            </div>
            </div>
            {/* extract info from db and add loop here */}
            <div className="grid grid-cols-5 mt-3">
                {/* extract info from db and add loop here */}
                <div className="p-3 justify-items-center">
                    <img src={film1img} alt="A" width="100" height="100" />
                    <Typography className="font-medium text-l mt-3 tracking-wide text-black">
                    A</Typography>
                </div>
                <div className="p-3 justify-items-center">
                    <img src={film2img} alt="A" width="100" height="100" />
                    <Typography className="font-medium text-l mt-3 tracking-wide text-black">
                    B</Typography>
                </div>
                <div className="p-3 justify-items-center">
                    <img src={film3img} alt="A" width="100" height="100" />
                    <Typography className="font-medium text-l mt-3 tracking-wide text-black">
                    C</Typography>
                </div>
                <div className="p-3 justify-items-center">
                    <img src={film4img} alt="A" width="100" height="100" />
                    <Typography className="font-medium text-l mt-3 tracking-wide text-black">
                    D</Typography>
                </div>
                <div className="p-3 justify-items-center">
                    <img src={film5img} alt="A" width="100" height="100" />
                    <Typography className="font-medium text-l mt-3 tracking-wide text-black">
                    E</Typography>
                </div>
            </div>

        </div>
    );
}

export default DisplayAll;