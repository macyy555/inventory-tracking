import { Button, Navbar, Typography } from "@material-tailwind/react";

function DisplayEach(){
    return(
        <div class="flex flex-col">
            <div className="bg-[#FAF2ED] w-full p-10">
                {/* extract info from db and add loop here */}
                <Typography className="font-medium text-l tracking-wide text-black">
                Best seller in 3 months</Typography>
                <div className="w-fit flex flex-row ml-20 mt-7">
                    <img className="" src="src/assets/Products/Film/Film1.png" alt="A" width="100" height="100" />
                        <div className="ml-10">
                        <Typography className="font-medium text-l tracking-wide text-black">
                        #1 A</Typography>
                        <Typography className="font-medium text-l tracking-wide text-black">
                        product details</Typography>
                    </div>
                </div>
                <div className="w-fit flex flex-row ml-20 mt-7">
                    <img className="" src="src/assets/Products/Film/Film2.png" alt="A" width="100" height="100" />
                        <div className="ml-10">
                        <Typography className="font-medium text-l tracking-wide text-black">
                        #2 B</Typography>
                        <Typography className="font-medium text-l tracking-wide text-black">
                        product details</Typography>
                    </div>
                </div>
                <div className="w-fit flex flex-row ml-20 mt-7">
                    <img className="" src="src/assets/Products/Film/Film3.png" alt="A" width="100" height="100" />
                        <div className="ml-10">
                        <Typography className="font-medium text-l tracking-wide text-black">
                        #3 C</Typography>
                        <Typography className="font-medium text-l tracking-wide text-black">
                        product details</Typography>
                    </div>
                </div>
                
            </div>
            {/* extract info from db and add loop here */}
            <div className="bg-[#FAF2ED] grid grid-cols-5 mt-3 w-full">
                {/* extract info from db and add loop here */}
                <div className="p-3 justify-items-center">
                    <img src="src/assets/Products/Film/Film1.png" alt="A" width="100" height="100" />
                    <Typography className="font-medium text-l mt-3 tracking-wide text-black">
                    A</Typography>
                </div>
                <div className="p-3 justify-items-center">
                    <img src="src/assets/Products/Film/Film2.png" alt="A" width="100" height="100" />
                    <Typography className="font-medium text-l mt-3 tracking-wide text-black">
                    B</Typography>
                </div>
                <div className="p-3 justify-items-center">
                    <img src="src/assets/Products/Film/Film3.png" alt="A" width="100" height="100" />
                    <Typography className="font-medium text-l mt-3 tracking-wide text-black">
                    C</Typography>
                </div>
                <div className="p-3 justify-items-center">
                    <img src="src/assets/Products/Film/Film4.png" alt="A" width="100" height="100" />
                    <Typography className="font-medium text-l mt-3 tracking-wide text-black">
                    D</Typography>
                </div>
                <div className="p-3 justify-items-center">
                    <img src="src/assets/Products/Film/Film5.png" alt="A" width="100" height="100" />
                    <Typography className="font-medium text-l mt-3 tracking-wide text-black">
                    E</Typography>
                </div>
            </div>

        </div>
    );
}

export default DisplayEach;