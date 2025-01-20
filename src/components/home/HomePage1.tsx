import { motion } from "framer-motion";
import profile from "@/assets/Photo.jpg";

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

interface HomePage1Props {
    isVisible: boolean;
}


const HomePage1: React.FC<HomePage1Props> = ({ isVisible }) => {
    console.log(isVisible);

    return (
        <div className="min-h-screen flex flex-row min-w-full max-w-4xl bg-gradient-to-b from-otherDarkBlue via-other to-background p-10">
            <div className="flex flex-wrap justify-center items-center" style={{ width: "50%" }}>
                <motion.div
                    className="flex flex-col"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                    <Card className="relative border border-gray-200 overflow-hidden group w-full">
                        <CardHeader className="text-center w-full">
                            <CardTitle className="text-2xl font-bold">Ambroise JACQUEMET</CardTitle>
                        </CardHeader>
                        <CardContent className="flex flex-col items-center">
                            <p>Hello, I am an Epitech Student and a full-stack developer.</p>
                            <p> For now I am based in Berlin, but maybe tomorrow I will be in your city, who knows ?</p>
                            <p>I am currently looking for an intership !</p>
                        </CardContent>
                        <CardFooter className="w-full justify-center">
                            <CardDescription className="text-center">
                                <p className="text-lg text-gray-400">
                                    Welcome to my portfolio !
                                </p>
                            </CardDescription>
                        </CardFooter>
                    </Card>
                </motion.div>
            </div>
            <div className="max-w-1/2 " style={{ width: "50%", height: "100%" }}>
                <div className="flex flex-col w-full items-center justify-center">
                    <motion.img
                        src={profile}
                        alt="Profile Picture"
                        className="border-4 border-white shadow-lg self-center"
                        style={{
                            borderTopLeftRadius: '50%',
                            borderBottomRightRadius: '50%',
                            width: '50%',
                            height: '50%',
                        }}
                        whileHover={{
                            borderTopLeftRadius: '0%',
                            borderBottomRightRadius: '0%',
                            borderTopRightRadius: '50%',
                            borderBottomLeftRadius: '50%',
                        }}/>
                </div>
            </div>
        </div>
    );
};

export default HomePage1;