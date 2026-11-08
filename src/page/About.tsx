import { Card, CardContent } from "@/components/ui/card";
import { Languages } from "lucide-react";
import { IconCloudDemo } from "@/components/about/CloudTech";

import climbingPic from "@/assets/hobbies/climbing.webp";
import accordionPic from "@/assets/hobbies/accordion.webp";
import englishIcon from "@/assets/country/flag-uk.webp";
import frenchIcon from "@/assets/country/flag-france.webp";
import germanIcon from "@/assets/country/flag-germany.webp";
import koreanIcon from "@/assets/country/flag-korea.webp";
import archerPic from "@/assets/hobbies/archery.webp";
import { motion } from "framer-motion";

const LANGUAGES = [
    { name: "French", level: "Native", flag: frenchIcon },
    { name: "English", level: "B2/C1", flag: englishIcon },
    { name: "German", level: "A2", flag: germanIcon },
    { name: "Korean", level: "A1 · learning", flag: koreanIcon },
];

export default function About() {
    return (
        <div className="flex flex-col lg:flex-row items-center lg:justify-between px-6 md:px-12 py-16 gap-12">
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
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full">
                                {LANGUAGES.map(({ name, level, flag }) => (
                                    <div key={name} className="group overflow-hidden rounded-lg border bg-background">
                                        <div className="overflow-hidden">
                                            <img
                                                src={flag}
                                                alt={`${name} flag`}
                                                loading="lazy"
                                                className="w-full h-24 object-cover transition-transform duration-300 group-hover:scale-110"
                                            />
                                        </div>
                                        <div className="px-2 py-2 text-center">
                                            <p className="font-semibold">{name}</p>
                                            <p className="text-sm text-muted-foreground">{level}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </motion.div>

                {/* Hobbies */}
                <motion.div 
                    className="rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition-all"
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }} 
                    transition={{ duration: 0.6 }}
                >
                    <CardContent className="p-6 flex flex-col gap-6">
                        <h3 className="text-xl font-semibold">Hobbies</h3>
                        <div className="grid grid-cols-3 gap-6">
                            <div className="flex flex-col items-center">
                                <img src={accordionPic} alt="Accordion" width={64} height={64} loading="lazy" className="h-16 w-16 object-contain rounded-lg" />
                                <span className="text-gray-700 text-lg mt-2">Accordion</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <img src={climbingPic} alt="Climbing" width={64} height={64} loading="lazy" className="h-16 w-16 object-contain rounded-lg" />
                                <span className="text-gray-700 text-lg mt-2">Climbing</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <img src={archerPic} alt="Archery" width={64} height={64} loading="lazy" className="h-16 w-16 object-contain rounded-lg" />
                                <span className="text-gray-700 text-lg mt-2">Archery</span>
                            </div>
                        </div>
                    </CardContent>
                </motion.div>
            </motion.div>
        </div>
    );
}
