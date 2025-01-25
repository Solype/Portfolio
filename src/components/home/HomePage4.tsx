import { Timeline, TimelineEntry } from "../ui/timeline";
import NDP_icon from "@/assets/NDP.png";
import Epitech_icon from "@/assets/epitech.png";

function HomePage4() {
    const image_className = "rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]";
    const data : TimelineEntry[] = [
        {
            title: "Sep-Mar 2025 : Epitech Berlin",
            content: (
                <div>
                    <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
                        Thanks to the international track i follow, I have done my third year at Epitech Berlin.
                        Doing a lot of long project, I have learned how to work on a project that last several months.
                    </p>
                    <div>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <img src={Epitech_icon} alt="hero template" width={500} height={500} className={image_className}/>
                        <img src={Epitech_icon} alt="hero template" width={500} height={500} className={image_className}/>
                        <img src={Epitech_icon} alt="hero template" width={500} height={500} className={image_className}/>
                        <img src={Epitech_icon} alt="hero template" width={500} height={500} className={image_className}/>
                    </div>
                </div>
            )
        },
        {
            title: "Jan-Jun 2024 : Epitech Barcelona",
            content: (
                <div>
                    <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
                        Due to my study, and more precisely, due to the international track i follow, I have done my
                        second year at Epitech Barcelona.
                    </p>
                    <div>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <img src={Epitech_icon} alt="hero template" width={500} height={500} className={image_className}/>
                        <img src={Epitech_icon} alt="hero template" width={500} height={500} className={image_className}/>
                        <img src={Epitech_icon} alt="hero template" width={500} height={500} className={image_className}/>
                        <img src={Epitech_icon} alt="hero template" width={500} height={500} className={image_className}/>
                    </div>
                </div>
            )
        },
        {
            title: "Mar-Dec 2023 : Intership",
            content: (
                <div>
                    <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
                        I worked as a software developer at the French company Safran. 
                    </p>
                    <div className="mb-8">
                        <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                            ✅ Working Experience as a Software Developer
                        </div>
                        <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                            ✅ Autonomous Learning
                        </div>
                        <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                            ✅ Serious development
                        </div>
                        <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                            ✅ Use of the languages XSLT and Javascript
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <img src={Epitech_icon} alt="hero template" width={500} height={500} className={image_className}/>
                        <img src={Epitech_icon} alt="hero template" width={500} height={500} className={image_className}/>
                        <img src={Epitech_icon} alt="hero template" width={500} height={500} className={image_className}/>
                        <img src={Epitech_icon} alt="hero template" width={500} height={500} className={image_className}/>
                    </div>
                </div>
            )
        },
        {
            title: "Oct 2022 : Epitech Paris",
            content: (
                <div>
                    <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
                        I started my studies at Epitech Paris. I am currently a student in computer science.
                        I am currently my a 3rd year in computer science.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <img src={Epitech_icon} alt="hero template" width={500} height={500} className={image_className}/>
                        <img src={Epitech_icon} alt="hero template" width={500} height={500} className={image_className}/>
                        <img src={Epitech_icon} alt="hero template" width={500} height={500} className={image_className}/>
                        <img src={Epitech_icon} alt="hero template" width={500} height={500} className={image_className}/>
                    </div>
                </div>
            )
        },
        {
            title: "Mar 2022 : Baccalaureat",
            content: (
                <div>
                    <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
                        I finished my French Baccalaureat with IT and Mathematics specialities. I finised with good mentions.
                        I passed the Baccalaureat in the High School of Enghien "Notre Dame Providence".
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <img src={NDP_icon} alt="hero template" width={500} height={500} className={image_className}/>
                        <img src={NDP_icon} alt="hero template" width={500} height={500} className={image_className}/>
                        <img src={NDP_icon} alt="hero template" width={500} height={500} className={image_className}/>
                        <img src={NDP_icon} alt="hero template" width={500} height={500} className={image_className}/>
                    </div>
                </div>
            )
        }
    ]
    return (
        <Timeline data={data} />
    );
}

export default HomePage4