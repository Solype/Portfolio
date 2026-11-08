import softPic from "@/assets/skills/soft-skills.webp";
import useMediaQuery from '@/hooks/useMediaQuery';
import { motion } from 'framer-motion';
import LineGradient from '../LineGradient';

interface SoftSkillProps {
    id : number
    name : string
    content : string
}

const SoftSkill: React.FC<SoftSkillProps> = ({ id, name, content }) => {
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
            <div className="relative h-32">
                <div className="z-10">
                    <p className="font-playfair font-semibold text-5xl">{id}</p>
                    <p className="font-playfair font-semibold text-3xl mt-3">{name}</p>
                </div>
                <div className="w-1/2 md:w-3/4 h-32 bg-other/20 absolute right-0 top-0"/>
            </div>
            <p className="mt-5">
                {content}
            </p>
        </motion.div>
    );
};

const HomePage2: React.FC = () => {

    const propsSoftSkill : SoftSkillProps[] = [
        { id : 1, name : "Autonomous", content : "Epitech taught me to be autonomous. The project-based learning and intense coding environment helped me to learn how to work autonomously." },
        { id : 2, name : "Curiosity", content : "I have always been fascinated by technology. Especially how previous engineers shaped today's technology. I am always eager to learn new things and improve my skills." },
        { id : 3, name : "Problem Solving", content : "Thanks to my education, I am able to persevere when a problem occurs. Sometimes with a lot of patience, I can solve problems." },
        { id : 4, name : "Teamwork", content : "I am able to work in a team and be a good team player. With Epitech I had the experience to work in a team." },
    ]
    const isAboveLarge = useMediaQuery("(min-width: 1060px)");

    return (
        <div className="min-h-screen pt-10 pb-24 px-6 md:px-20">
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
                    MY <span className="text-accent">SOFT</span>  SKILLS
                </p>
                <LineGradient width="w-1/3" />
                </motion.div>

                <div className="mt-16 md:mt-0">
                {isAboveLarge ? (
                    <div
                        className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10
                        before:w-full before:h-full before:border-2 before:border-other before:z-[-1]"
                    >
                        <img alt="Soft skills illustration" className="w-full max-w-md h-auto object-contain" loading="lazy" src={softPic} />
                    </div>
                ) : (
                    <img alt="Soft skills illustration" className="w-full max-w-md h-auto object-contain" loading="lazy" src={softPic} />
                )}
                </div>
            </div>
            <div className="justify-center items-center">
                <div className="lg:flex lg:justify-between mt-16 gap-32">
                {propsSoftSkill.map((softSkill, index) => (
                    <SoftSkill key={index} {...softSkill} />
                ))}
                </div>
            </div>
        </div>
    );
};

export default HomePage2;