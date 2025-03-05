import { Button, Navbar, Typography } from "@material-tailwind/react";

function DisplayAll(){
    return(
        <div class="bg-[#FAF2ED] mb-5">
            <div className="flex justify-between">
            <Typography className="font-medium text-l pl-7 pt-3 tracking-wide text-black">
            Film</Typography>
            <div className="pt-2 pr-3">
            <img src="src/assets/left.png" width="30" height="30"/>
            </div>
            </div>
            {/* extract info from db and add loop here */}
            <div className="grid grid-cols-5 pt-3">
                {/* extract info from db and add loop here */}
                <div className="p-3 justify-items-center">
                    <img src="src/assets/Products/Film/Film1.png" alt="A" width="100" height="100" />
                    <Typography className="font-medium text-l pt-3 tracking-wide text-black">
                    A</Typography>
                </div>
                <div className="p-3 justify-items-center">
                    <img src="src/assets/Products/Film/Film2.png" alt="A" width="100" height="100" />
                    <Typography className="font-medium text-l pt-3 tracking-wide text-black">
                    B</Typography>
                </div>
                <div className="p-3 justify-items-center">
                    <img src="src/assets/Products/Film/Film3.png" alt="A" width="100" height="100" />
                    <Typography className="font-medium text-l pt-3 tracking-wide text-black">
                    C</Typography>
                </div>
                <div className="p-3 justify-items-center">
                    <img src="src/assets/Products/Film/Film4.png" alt="A" width="100" height="100" />
                    <Typography className="font-medium text-l pt-3 tracking-wide text-black">
                    D</Typography>
                </div>
                <div className="p-3 justify-items-center">
                    <img src="src/assets/Products/Film/Film5.png" alt="A" width="100" height="100" />
                    <Typography className="font-medium text-l pt-3 tracking-wide text-black">
                    E</Typography>
                </div>
            </div>

        </div>
    );
}

export default DisplayAll;