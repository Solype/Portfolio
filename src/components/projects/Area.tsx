import { motion, useAnimation } from "framer-motion";
import Area1 from "@/assets/Area1.png";
import Area2 from "@/assets/Area2.png";
import { Button } from "@/components/ui/button";
import { FaExternalLinkAlt } from "react-icons/fa";
import { useEffect } from "react";

function AreaProject({ isVisible }: { isVisible: boolean }) {
    const controls = useAnimation();

    useEffect(() => {
        if (isVisible) {
            controls.start("visible");
        } else {
            controls.start("hidden");
        }
    }, [isVisible, controls]);

    // Variantes pour chaque animation
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
                {/* Titre */}
                <motion.div
                    variants={titleVariants}
                    initial="hidden"
                    animate={controls}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex items-center justify-center gap-4"
                >
                    <h1 className="text-5xl font-extrabold text-primary">Area</h1>
                    <Button
                        onClick={() => window.open("https://github.com/Nalistas/Raytracer", "_blank")}
                        className="flex items-center gap-2 px-4 py-2 bg-primary text-black rounded-lg hover:bg-accent transition-all"
                    >
                        <FaExternalLinkAlt />
                        <span>Source Code</span>
                    </Button>
                </motion.div>

                {/* Texte */}
                <motion.div
                    variants={textVariants}
                    initial="hidden"
                    animate={controls}
                    transition={{ duration: 0.8, ease: "easeInOut", delay: 0.4 }}
                    className="space-y-4"
                >
                    <p className="text-xl text-gray-700">
                        Area is all about API and automation. Made with React Native, ViteJs and Python, the goal was to link multiple APIs to create a complete application.
                    </p>
                    <p className="text-lg text-gray-600">
                        For this project, we have linked <strong>GMail</strong>, <strong>Discord</strong>, <strong>Spotify</strong>,
                        <strong>Weather</strong> and <strong>ChatGPE</strong> APIs.
                    </p>
                    <p className="text-lg text-gray-600 italic">Here is some example</p>
                </motion.div>

                {/* Images */}
                <div className="flex justify-center gap-8">
                    <motion.div
                        className="rounded-lg shadow-lg border-4 border-primary overflow-hidden"
                        variants={imageVariants}
                        initial="hidden"
                        animate={controls}
                        transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
                        style={{ height: "50%" }} // Taille fixe pour la première image
                    >
                        <img
                            src={Area1}
                            className="w-full h-full object-cover"
                            alt="Area example 1"
                        />
                    </motion.div>
                    <motion.div
                        className="rounded-lg shadow-lg border-4 border-primary overflow-hidden"
                        variants={imageVariants}
                        initial="hidden"
                        animate={controls}
                        transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
                        style={{ height: "50%" }} // Taille plus large pour la deuxième image
                    >
                        <img
                            src={Area2}
                            className="w-full h-full object-cover"
                            alt="Area example 2"
                        />
                    </motion.div>
                </div>

            </div>
        </div>
    );
}

export default AreaProject;
