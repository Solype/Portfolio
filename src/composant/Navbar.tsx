import { Link } from "react-router-dom";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@radix-ui/react-tooltip";
import { Button } from "@/components/ui/button";
import photoFace from "@/assets/Photo.jpg";
import frenchFlag from "@/assets/Flag_of_France.png";
import { FaExternalLinkAlt } from "react-icons/fa";


function Navbar() {
    const classNameLink = "p-3 hover:bg-accent hover:text-white transition duration-200 ease-in-out w-full text-center rounded-lg";

    function redirect() {
        window.open("https://github.com/Solype/Portfolio", "_blank");
    }

    return (
        <div className="sticky top-0 left-0 right-0 bg-primary text-background z-50 text-xl font-bold shadow-md">
            <div className="flex justify-between items-center px-4 h-16">
                <div className="flex gap-4 items-center">
                    <img src={photoFace} className="w-10 h-10 rounded-full" alt="A.JACQUEMET" />
                    <p className="text-lg font-semibold">A.JACQUEMET</p>
                    <img src={frenchFlag} className="w-8 h-5 rounded-sm" alt="French Flag" />
                </div>

                <div className='flex items-center'>
                    <div className="flex gap-6">
                        <Link className={classNameLink} to="/">Home</Link>
                        <Link className={classNameLink} to="/about">About</Link>
                        <Link className={classNameLink} to="/projects">Projects</Link>
                        <Link className={classNameLink} to="/contact">Contact</Link>
                    </div>
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Button onClick={redirect} className='w-8 h-full flex justify-center items-center hover:bg-accent'>
                                    <FaExternalLinkAlt />
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>See source code of this website</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
