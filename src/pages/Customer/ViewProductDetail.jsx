import { Button, Navbar, Typography } from "@material-tailwind/react";

function ViewProductDetail(){
    return(
        <div className="bg-[#FAF2ED] justify-items-center p-20">
            <div className="flex flex-row ml-20 mt-7">
                    <img className="" src="src/assets/Products/Film/Film1.png" alt="A" width="100" height="100" />
                        <div className="ml-10">
                        <Typography className="font-medium text-l tracking-wide text-black">
                        A</Typography>
                        <Typography className="font-medium text-l tracking-wide text-black">
                        product details</Typography>
                    </div>
                </div>
        </div>
    );
}

export default ViewProductDetail;