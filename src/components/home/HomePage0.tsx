import cadeImage from "@/assets/bg-top.png"

interface HomePage0Props {
    isVisible: boolean;
}

const HomePage0: React.FC<HomePage0Props> = ({ isVisible }) => {
    console.log(isVisible);

    return (
        <div className="flex flex-row min-w-full">
            <img
                src={cadeImage}
                className="w-full object-cover"
                alt="Cade"
                style={{
                    height: '33.33vh', // 1/3 de la hauteur de la page
                    width: '100vw', // toute la largeur de la page
                }}
            />
        </div>
    );
};

export default HomePage0;