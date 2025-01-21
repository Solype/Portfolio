import { Card, CardFooter } from "@/components/ui/card";
import { motion } from "framer-motion";

interface propTypes {
    image: string;
    nom: string;
    children?: React.ReactNode | null;
    delay?: number;
};

function CardImage({ image, nom, children }: propTypes) {
    const imageClassname = children ? "w-full h-full object-cover group-hover:brightness-50 group-hover:opacity-50 bg-white" :
        "w-full h-full object-cover bg-white";

    return (
        <div>
            {image && (
                <div className="w-full h-32 bg-black">
                    <img
                        className={imageClassname}
                        src={image}
                        alt={nom || "Card image"}
                    />
                </div>
            )}
            { children &&
                <div className="flex flex-col justify-end bg-black bg-opacity-0 transition-all duration-300 group-hover:bg-opacity-100">
                    <div className="p-4 absolute inset-0 text-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {children}
                    </div>
                </div>
            }
        </div>
    );
}

function TechnoCard({ image, nom, children, delay }: propTypes) {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: delay, duration: 0.5 }}
            variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
            }}
        >
            <Card className="relative max-w-xs border border-gray-200 overflow-hidden group">
                <CardImage image={image} nom={nom}>
                    {children}
                </CardImage>
                <CardFooter className="text-center w-full justify-center">
                    <h2>{nom}</h2>
                </CardFooter>
            </Card>
        </motion.div>
    );
}
export default TechnoCard;