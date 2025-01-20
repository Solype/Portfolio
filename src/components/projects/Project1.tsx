import { motion, useAnimation } from "framer-motion";
import raytracer_photo1 from "@/assets/raytracer.jpg";
import { Button } from "@/components/ui/button";
import { FaExternalLinkAlt } from "react-icons/fa";
import { useEffect } from "react";

function Project1({ isVisible }: { isVisible: boolean }) {
    const controls = useAnimation();

    useEffect(() => {
        if (isVisible) {
            controls.start("visible");
        } else {
            controls.start("hidden");
        }
    }, [isVisible, controls]);

    return (
        <motion.div
            className="relative min-h-screen flex items-center justify-center"
            variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.8, ease: "easeInOut" }}
        >
            <div className="max-w-5xl mx-auto p-8 space-y-8 text-center">
                <div className="flex items-center justify-center gap-4">
                    <h1 className="text-5xl font-extrabold text-primary">
                        Raytracer
                    </h1>
                    <Button
                        onClick={() => window.open("https://github.com/Nalistas/Raytracer", "_blank")}
                        className="flex items-center gap-2 px-4 py-2 bg-primary text-black rounded-lg hover:bg-accent transition-all"
                    >
                        <FaExternalLinkAlt />
                        <span>Source Code</span>
                    </Button>
                </div>

                <div className="space-y-4">
                    <p className="text-xl text-gray-700">
                        This is one of the most interesting projects in terms of mathematics and computer graphics.
                    </p>
                    <p className="text-lg text-gray-600">
                        The objective of this project was to build a **raytracer**, a program that renders 3D scenes by simulating the physics of light rays.
                    </p>
                    <p className="text-lg text-gray-600 italic">
                        A raytracer calculates how light interacts with objects in a scene to create realistic shadows, reflections, and refractions.
                    </p>
                    <p>
                        It was made in CPP.
                    </p>
                </div>

                <div className="relative">
                    <img
                        src={raytracer_photo1}
                        className="rounded-lg shadow-lg border-4 border-primary"
                        alt="Raytracer rendering example"
                    />
                    <p className="mt-4 text-sm text-gray-400">
                        Example of a 3D scene rendered using the Raytracer.
                    </p>
                </div>
            </div>
        </motion.div>
    );
}

export default Project1;
