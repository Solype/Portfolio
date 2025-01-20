import { motion, useAnimation } from "framer-motion";
import Arcade1 from "@/assets/Arcade1.png";
import Arcade2 from "@/assets/Arcade2.png";
import { Button } from "@/components/ui/button";
import { FaExternalLinkAlt } from "react-icons/fa";
import { useEffect } from "react";

function ArcadeProject({ isVisible }: { isVisible: boolean }) {
    const controls = useAnimation();

    useEffect(() => {
        if (isVisible) {
            controls.start("visible");
        } else {
            controls.start("hidden");
        }
    }, [isVisible, controls]);

    // Variants for animations
    const titleVariants = {
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0 },
    };

    const textVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    const imageVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1 },
    };

    return (
        <div className="relative min-h-screen flex items-center justify-center">
            <div className="max-w-5xl mx-auto p-8 space-y-8 text-center">
                {/* Title */}
                <motion.div
                    variants={titleVariants}
                    initial="hidden"
                    animate={controls}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex items-center justify-center gap-4"
                >
                    <h1 className="text-5xl font-extrabold text-primary">Arcade Project</h1>
                    <Button
                        onClick={() => window.open("https://github.com/Nalistas/Arcade", "_blank")}
                        className="flex items-center gap-2 px-4 py-2 bg-primary text-black rounded-lg hover:bg-accent transition-all"
                    >
                        <FaExternalLinkAlt />
                        <span>Source Code</span>
                    </Button>
                </motion.div>

                {/* Description */}
                <motion.div
                    variants={textVariants}
                    initial="hidden"
                    animate={controls}
                    transition={{ duration: 0.8, ease: "easeInOut", delay: 0.4 }}
                    className="space-y-4"
                >
                    <p className="text-xl text-gray-700">
                        Arcade is a modular gaming project where you can play classic games like <strong>Pacman</strong> and <strong>Snake</strong>.
                    </p>
                    <p className="text-lg text-gray-600">
                        The highlight of the project is the ability to switch between different 
                        graphical libraries such as <strong>ncurse</strong>, <strong>SFML</strong>, 
                        and <strong>SDL2</strong>, dynamically during gameplay. The graphics and games can be changed without restarting the program at all.
                    </p>
                    <p className="text-lg text-gray-600 italic">
                        Below are examples of the project.
                    </p>
                </motion.div>

                {/* Images */}
                <div className="flex justify-center gap-8">
                    <motion.div
                        className="rounded-lg shadow-lg border-4 border-primary overflow-hidden"
                        variants={imageVariants}
                        initial="hidden"
                        animate={controls}
                        transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
                        style={{ height: "50%" }} // First image styling
                    >
                        <img
                            src={Arcade1}
                            className="w-full h-full object-cover"
                            alt="Arcade example 1"
                        />
                    </motion.div>
                    <motion.div
                        className="rounded-lg shadow-lg border-4 border-primary overflow-hidden"
                        variants={imageVariants}
                        initial="hidden"
                        animate={controls}
                        transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
                        style={{ height: "50%" }} // Second image styling
                    >
                        <img
                            src={Arcade2}
                            className="w-full h-full object-cover"
                            alt="Arcade example 2"
                        />
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

export default ArcadeProject;
