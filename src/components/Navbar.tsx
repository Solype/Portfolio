import { Link, useLocation } from "react-router-dom";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@radix-ui/react-tooltip";
import { Button } from "@/components/ui/button";
import photoFace from "@/assets/Photo.jpg";
import frenchFlag from "@/assets/country/Flag_of_France.png";
import { FaExternalLinkAlt, FaDownload } from "react-icons/fa";
import { BiMenu } from "react-icons/bi";
import { useState } from "react";
import CV from "@/assets/other/AmbroiseJACQUEMET_CV.pdf";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

function DropdownNavBar() {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsOpen((isOpen) => !isOpen);
      console.log(isOpen);
    };

    const classNameBiMenu = "text-3xl" + ( isOpen ? " transform rotate-90" : "" );
  
    return (
        <div className="flex md:hidden">
                <DropdownMenu onOpenChange={toggleMenu}>
                    <DropdownMenuTrigger >
                            <BiMenu className={classNameBiMenu} />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuLabel>Navigate</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <Link to="/"><DropdownMenuItem>Home</DropdownMenuItem></Link>
                        <Link to="about"><DropdownMenuItem>About</DropdownMenuItem></Link>
                        <Link to="projects"><DropdownMenuItem>Projects</DropdownMenuItem></Link>
                        <Link to="contact"><DropdownMenuItem>Contact</DropdownMenuItem></Link>
                    </DropdownMenuContent>
                </DropdownMenu>
        </div>
    );
}


function Navbar() {

    function redirect() {
        window.open("https://github.com/Solype/Portfolio", "_blank");
    }

    const classNameLinkfct = (path: string) => {
        const location = useLocation();
        const base_name = "p-3 hover:text-white transition duration-200 ease-in-out w-full text-center rounded-lg";
        if (location.pathname === path) {
            return base_name + " bg-otherDarkBlue text-white";
        } else {
            return base_name + " bg-primary text-white hover:bg-accent";
        }
    }

    return (
        <div className="sticky top-0 left-0 right-0 bg-primary text-background z-50 text-xl font-bold shadow-md">
            <div className="flex justify-between items-center px-4 h-16">
                    <div className="flex gap-4 items-center">
                        <img src={photoFace} className="w-10 h-10 rounded-full" alt="A.JACQUEMET" />
                        <p className="text-lg font-semibold">A.JACQUEMET</p>
                        <img src={frenchFlag} className="w-8 h-5 rounded-sm" alt="French Flag" />
                        <Button className="h-full flex justify-center items-center gap-2 hover:bg-accent" onClick={() => window.open(CV, "_blank")}>
                            <p>CV</p><FaDownload className="w-4 h-4"/>
                        </Button>
                    </div>

                <div className="flex items-center hidden md:flex">
                    <div className="flex gap-6">
                        <Link className={classNameLinkfct("/")} to="/">Home</Link>
                        <Link className={classNameLinkfct("/about")} to="/about">About</Link>
                        <Link className={classNameLinkfct("/projects")} to="/projects">Projects</Link>
                        <Link className={classNameLinkfct("/contact")} to="/contact">Contact</Link>
                    </div>
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Button onClick={redirect} className="h-full flex justify-center items-center hover:bg-accent">
                                    <FaExternalLinkAlt className="w-4 h-4"/>
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent className="bg-accent text-background py-2 px-4 rounded">
                                <p className="text-center text-sm">See source code of this website</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </div>
                <DropdownNavBar />
            </div>
        </div>
    );
}

export default Navbar;