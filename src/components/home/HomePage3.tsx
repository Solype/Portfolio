import softPic from "@/assets/education.jpg"
import useMediaQuery from '@/hooks/useMediaQuery';
import { motion } from 'framer-motion';
import LineGradient from '@/components/LineGradient';
import NDPLogo from "@/assets/NDP.png";
import Epitech from "@/assets/epitech.png"

interface EducationCardProps {
    isVisible: boolean;
    id: number;
    name: string;
    image: string;
    content: string;
}

interface HomePage3Props {
    isVisible: boolean;
}

const EducationCard: React.FC<EducationCardProps> = ({ isVisible, id, name, image, content }) => {
    console.log(isVisible);
  
    return (
        <motion.div
            className="md:w-1/3 mt-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
            }}
        >
            <img alt="skills" className="z-10 max-h-24 w-auto mx-auto" src={image} />
            <div className="relative h-32">
                <div className="z-10">
                    <p className="font-playfair font-semibold text-5xl">{id}</p>
                    <p className="font-playfair font-semibold text-3xl mt-3">{name}</p>
                </div>
            </div>
            <p className="mt-5 text-italic">
                {content}
            </p>
        </motion.div>
    );
};

const HomePage3: React.FC<HomePage3Props> = ({ isVisible }) => {
    const schools : EducationCardProps[] = [
        { isVisible : isVisible, id : 1, name : "NDP", image : NDPLogo, content : "Notre Dame Providence at Enghien, High School. French Baccalaureate with IT and Mathematics specialities." },
        { isVisible : isVisible, id : 2, name : "Epitech", image : Epitech, content : "I am currently a student at Epitech Paris. I am currently my a 3rd year in computer science." },
    ]
    const isAboveLarge = useMediaQuery("(min-width: 1060px)");

    return (
        <div className="min-h-screen pt-10 pb-24 p-20">
            <div className="md:flex md:justify-between md:gap-16 mt-32">
                <motion.div
                    className="md:w-1/3"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                    }}
                >
                    <p className="font-playfair font-semibold text-4xl mb-5">
                        MY <span className="text-accent">EDUCATION</span>
                    </p>
                    <LineGradient width="w-1/3" />
                </motion.div>

                <div className="mt-16 md:mt-0">
                {isAboveLarge ? (
                    <div
                        className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10
                        before:w-full before:h-full before:border-2 before:border-blue before:z-[-1]"
                    >
                        <img alt="skills" className="z-10 border border-color-other" style={{width: "400px"}} src={softPic} />
                    </div>
                ) : (
                    <img alt="skills" className="z-10 border border-color-other" style={{width: "400px"}} src={softPic} />
                )}
                </div>
            </div>
            <div className="justify-center items-center">
                <div className="lg:flex lg:justify-between mt-16 gap-32">
                {schools.map((softSkill, index) => (
                    <EducationCard key={index} {...softSkill} />
                ))}
                </div>
            </div>
        </div>
    );
};

export default HomePage3;
