import softPic from "@/assets/skills/soft.png";
import useMediaQuery from '@/hooks/useMediaQuery';
import { motion } from 'framer-motion';
import LineGradient from '../LineGradient';

interface HomePage2Props {
    isVisible: boolean;
}

interface SoftSkillProps {
    isVisible: boolean;
    id : number
    name : string
    content : string
}

{/* <div class="md:grid md:grid-cols-3 mt-10 gap-32"><div class=" mt-10" style="opacity: 1; transform: none;"><div class="flex flex-col"><div class="self-center"><img alt="skills" class="z-10 h-40 w-auto" src="teamword.png"></div><div class="z-10"><p class="font-playfair font-semibold text-5xl">01</p><p class="font-playfair font-semibold text-3xl mt-3">Team work</p></div></div></div><div class=" mt-10" style="opacity: 1; transform: none;"><div class="flex flex-col"><div class="self-center"><img alt="skills" class="z-10 h-40 w-auto" src="crea.png"></div><div class="z-10"><p class="font-playfair font-semibold text-5xl">02</p><p class="font-playfair font-semibold text-3xl mt-3">Creative</p></div></div></div><div class=" mt-10" style="opacity: 1; transform: none;"><div class="flex flex-col gap-6"><div class="self-center"><img alt="skills" class="z-10 h-32 w-auto" src="curious.png"></div><div class="z-10"><p class="font-playfair font-semibold text-5xl">03</p><p class="font-playfair font-semibold text-3xl mt-3">Curiousity</p></div></div></div><div class=" mt-10" style="opacity: 1; transform: none;"><div class="flex flex-col"><div class="self-center"><img alt="skills" class="z-10 h-32 w-auto" src="autonomous.png"></div><div class="z-10"><p class="font-playfair font-semibold text-5xl">04</p><p class="font-playfair font-semibold text-3xl mt-3">Autonomous</p></div></div></div><div class=" mt-10" style="opacity: 1; transform: none;"><div class="flex flex-col"><div class="self-center"><img alt="skills" class="z-10 h-32 w-auto" src="time.png"></div><div class="z-10"><p class="font-playfair font-semibold text-5xl">05</p><p class="font-playfair font-semibold text-3xl mt-3">Time management</p></div></div></div><div class=" mt-10" style="opacity: 1; transform: none;"><div class="flex flex-col"><div class="self-center"><img alt="skills" class="z-10 h-32 w-auto" src="problem.png"></div><div class="z-10"><p class="font-playfair font-semibold text-5xl">06</p><p class="font-playfair font-semibold text-3xl mt-3">Problem solving</p></div></div></div></div> */}

const SoftSkill: React.FC<SoftSkillProps> = ({ isVisible, id, name, content }) => {
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
            <div className="relative h-32">
                <div className="z-10">
                    <p className="font-playfair font-semibold text-5xl">{id}</p>
                    <p className="font-playfair font-semibold text-3xl mt-3">{name}</p>
                </div>
                <div className="w-1/2 md:w-3/4 h-32 bg-blue absolute right-0 top-0"/>
            </div>
            <p className="mt-5">
                {content}
            </p>
        </motion.div>
    );
};

const HomePage2: React.FC<HomePage2Props> = ({ isVisible }) => {

    const propsSoftSkill : SoftSkillProps[] = [
        { isVisible : isVisible, id : 1, name : "Autonomous", content : "Epitech taught me to be autonomous. The project-based learning and intense coding environment helped me to learn how to work autonomously." },
        { isVisible : isVisible, id : 2, name : "Curiosity", content : "I have always been fascinated by technology. Especially how previous engineer made the actual change. I am always eager to learn new things and improve my skills." },
        { isVisible : isVisible, id : 3, name : "Problem Solving", content : "Thanks to my education, I am able persevere when a problem occurs. Sometimes with a lot of patience, I can solve problems." },
        { isVisible : isVisible, id : 4, name : "Teamwork", content : "I am able to work in a team and be a good team player. With Epitech I had the experience to work in a team." },
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
                    MY <span className="text-red">SOFT</span>  SKILLS
                </p>
                <LineGradient width="w-1/3" />
                </motion.div>

                <div className="mt-16 md:mt-0">
                {isAboveLarge ? (
                    <div
                        className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10
                        before:w-full before:h-full before:border-2 before:border-blue before:z-[-1]"
                    >
                        <img alt="skills" className="z-10" src={softPic} />
                    </div>
                ) : (
                    <img alt="skills" className="z-10" src={softPic} />
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