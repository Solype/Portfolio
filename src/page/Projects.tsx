import { motion } from "framer-motion";
import quote from "@/assets/quote1.png"

function Project1() {
    return (
        <div className={`relative min-h-screen flex items-center justify-center`}>
            <div className="text-center p-6 rounded-lg shadow-lg">
                <h1 className="text-4xl font-bold text-primary mb-4">
                    Other Section
                </h1>
                <p className="text-lg text-secondary">
                    This is section number.
                </p>
            </div>
        </div>
    );
}


function Introduction() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-primary via-other to-background text-white">
            <div className="text-center p-10 rounded-lg shadow-2xl border-2 border-gray-700 bg-opacity-80 bg-gray-800 max-w-2xl space-y-6">
                {/* Texte principal */}
                <motion.div
                    className="space-y-4"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                    <h1 className="text-5xl font-extrabold text-accent mb-4">
                        Project Section
                    </h1>
                    <p className="text-xl text-gray-300">
                        Welcome to the project section.
                    </p>
                    <p className="text-lg text-gray-400">
                        Here you can find all the most technical or interesting projects I have worked on.
                        Those projects are also the one that helped me the most to learn new things.
                    </p>
                    <p className="text-lg text-gray-400 font-light italic">
                        Scroll down to see more.
                    </p>
                </motion.div>

                {/* Image avec animation */}
                <motion.div
                    className="flex justify-center"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeInOut", delay: 0.3 }}
                >
                    <img
                        src={quote}
                        className="w-90 h-48 md:w-122 md:h-64 rounded-full border-4 border-primary shadow-lg"
                        alt="Quote"
                    />
                </motion.div>
            </div>
        </div>
    );
}


function Projects() {
    // Crée un tableau avec 20 éléments pour la démonstration

    return (

        <div className="snap-y snap-mandatory overflow-y-scroll h-screen bg-background">
            <div className="snap-always snap-center" >
                <Introduction />
            </div>
            <div className="snap-always snap-center" >
                <Project1 />
            </div>
        </div>
    );
}

export default Projects;
