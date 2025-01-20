import { Card, CardFooter } from "@/components/ui/card";

interface propTypes {
    image: string;
    nom: string;
    children?: React.ReactNode | null;
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

function TechnoCard({ image, nom, children }: propTypes) {
    return (
        <Card className="relative max-w-xs border border-gray-200 overflow-hidden group">
            <CardImage image={image} nom={nom}>
                {children}
            </CardImage>
            <CardFooter className="text-center w-full justify-center">
                <h2>{nom}</h2>
            </CardFooter>
        </Card>
    );
}
export default TechnoCard;