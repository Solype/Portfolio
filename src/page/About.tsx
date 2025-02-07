import { Card, CardContent } from "@/components/ui/card";
import { Languages } from "lucide-react";
import { IconCloudDemo } from "@/components/about/CloudTech";

import climbingPic from "@/assets/hobbies/climbing.jpg";
import accordionPic from "@/assets/hobbies/accordion-icon.png";
import englishIcon from "@/assets/country/english-flag.jpg";
import frenchIcon from "@/assets/country/french-flag.jpg";
import germanIcon from "@/assets/country/german-flag.jpg";
import archerPic from "@/assets/hobbies/archery-icon.png";
import { motion } from "framer-motion";

export default function About() {
    return (
        <div className="flex flex-col lg:flex-row items-center lg:justify-between px-12 py-16 gap-12">
            {/* Left side - IconCloud */}
            <motion.div 
                className="w-full lg:w-1/2"
                initial={{ opacity: 0, x: -50 }} 
                animate={{ opacity: 1, x: 0 }} 
                transition={{ duration: 0.6 }}
            >
                <IconCloudDemo />
            </motion.div>

            {/* Right side - Expanded section */}
            <motion.div 
                className="w-full lg:w-1/2 flex flex-col gap-8"
                initial={{ opacity: 0, x: 50 }} 
                animate={{ opacity: 1, x: 0 }} 
                transition={{ duration: 0.6 }}
            >
                <h2 className="text-3xl font-bold text-gray-800 text-center lg:text-left">
                    More About Me
                </h2>

                {/* Languages */}
                <motion.div 
                    className="relative"
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }} 
                    transition={{ duration: 0.6 }}
                >
                    <Card className="relative border border-gray-200 shadow-md overflow-hidden">
                        <CardContent className="flex flex-col gap-4 relative z-10">
                            <h3 className="text-xl font-semibold flex items-center gap-3">
                                <Languages className="w-10 h-10 text-blue-300" /> Languages
                            </h3>

                            {/* Language proficiency */}
                            <div className="flex flex-col transition-opacity grid grid-cols-3 w-full">
                                {/* French */}
                                <div className="relative group w-full bg-otherDarkBlue">
                                    <img 
                                        src={frenchIcon} 
                                        alt="French" 
                                        className="w-full h-32 transition-all duration-300 ease-in-out group-hover:opacity-0 group-hover:scale-110" 
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                                        🇫🇷 French: Native
                                    </div>
                                </div>

                                {/* English */}
                                <div className="relative group w-full bg-otherDarkBlue">
                                    <img 
                                        src={englishIcon} 
                                        alt="English" 
                                        className="w-full h-32 transition-all duration-300 ease-in-out group-hover:opacity-0 group-hover:scale-110" 
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                                        🇬🇧 English: B2/C1
                                    </div>
                                </div>

                                {/* German */}
                                <div className="relative group w-full bg-otherDarkBlue">
                                    <img 
                                        src={germanIcon} 
                                        alt="German" 
                                        className="w-full h-32 transition-all duration-300 ease-in-out group-hover:opacity-0 group-hover:scale-110" 
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                                        🇩🇪 German: A2/B1
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </motion.div>

                {/* Hobbies */}
                <motion.div 
                    className="border border-gray-200 shadow-md hover:shadow-lg transition-all"
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }} 
                    transition={{ duration: 0.6 }}
                >
                    <CardContent className="p-6 flex flex-col gap-6">
                        <h3 className="text-xl font-semibold">Hobbies</h3>
                        <div className="grid grid-cols-3 gap-6">
                            <div className="flex flex-col items-center">
                                <img src={accordionPic} alt="Accordion" width={60} height={60} className="rounded-lg" />
                                <span className="text-gray-700 text-lg mt-2">Accordion</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <img src={climbingPic} alt="Climbing" width={60} height={60} className="rounded-lg" />
                                <span className="text-gray-700 text-lg mt-2">Climbing</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <img src={archerPic} alt="Archery" width={60} height={60} className="rounded-lg" />
                                <span className="text-gray-700 text-lg mt-2">Archery</span>
                            </div>
                        </div>
                    </CardContent>
                </motion.div>
            </motion.div>
        </div>
    );
}
