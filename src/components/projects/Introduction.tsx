import quote from "@/assets/quote1.png"
import { motion } from "framer-motion";

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
                        My projects
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

export default Introduction;
