import climbingPic from "@/assets/climbing.jpg";
import accordionPic from "@/assets/accordion-icon.png";
import englishIcon from "@/assets/english-flag.jpg";
import frenchIcon from "@/assets/french-flag.jpg";
import germanIcon from "@/assets/german-flag.jpg";
import archerPic from "@/assets/archery-icon.png";

import { IconCloudDemo } from "@/components/about/CloudTech";
// import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { LayoutGrid } from "@/components/ui/layout-grid";

export function LayoutGridDemo() {
    return (
        <div className="h-screen py-20 w-full">
            <LayoutGrid cards={cards} />
        </div>
    );
}

const FrenchSkeleton = () => {
    return (
        <div>
            <p className="font-bold md:text-4xl text-xl text-white">
                French
            </p>
            <p className="font-normal text-base text-white"></p>
            <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
                This is my mother tongue.
            </p>
        </div>
    );
};

const EnglishSkeleton = () => {
    return (
        <div>
            <p className="font-bold md:text-4xl text-xl text-white">
                English
            </p>
            <p className="font-normal text-base text-white"></p>
            <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
                My level in English is around C1.
            </p>
        </div>
    );
};
const GermanSkeleton = () => {
    return (
        <div>
            <p className="font-bold md:text-4xl text-xl text-white">
                German
            </p>
            <p className="font-normal text-base text-white"></p>
            <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
                I have a basic understanding of German. Level A2
            </p>
        </div>
    );
};
const ClimbingSkeleton = () => {
    return (
        <div>
            <p className="font-bold md:text-4xl text-xl text-white">
                Climbing
            </p>
            <p className="font-normal text-base text-white"></p>
            <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
                I started recently climbing. I like this sport. I started in Berlin at the
                Bertablock climbing gym.
            </p>
        </div>
    );
};

const ArcherSkeleton = () => {
    return (
        <div>
            <p className="font-bold md:text-4xl text-xl text-white">
                Archery
            </p>
            <p className="font-normal text-base text-white"></p>
            <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
                I did archery from 2018 to 2021. I'm looking forward to do it again.
            </p>
        </div>
    );
};

const AccordionSkeleton = () => {
    return (
        <div>
            <p className="font-bold md:text-4xl text-xl text-white">
                Accordion
            </p>
            <p className="font-normal text-base text-white"></p>
            <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
                I'm learning accordion from 2016. But due to my travel in Europe,
                it started to be hard to continue. But i try my best to play it from time to time.
            </p>
        </div>
    );
};

const cards = [
    {
        id: 1,
        content: <FrenchSkeleton />,
        className: "col-span-1",
        thumbnail: frenchIcon
    },
    {
        id: 2,
        content: <EnglishSkeleton />,
        className: "col-span-1",
        thumbnail: englishIcon
    },
    {
        id: 3,
        content: <GermanSkeleton />,
        className: "col-span-1",
        thumbnail: germanIcon
    },
    {
        id: 4,
        content: <ClimbingSkeleton />,
        className: "col-span-1",
        thumbnail: climbingPic
    },
    {
        id: 5,
        content: <ArcherSkeleton />,
        className: "col-span-1",
        thumbnail: archerPic
    },
    {
        id: 6,
        content: <AccordionSkeleton />,
        className: "col-span-1",
        thumbnail: accordionPic
    }
];




export default function About() {
    return (
        <div className="flex flex-col lg:flex-row items-center lg:justify-between px-8 py-12 gap-8">
            {/* IconCloudDemo à gauche */}
            <div className="w-full lg:w-1/2">
                <IconCloudDemo />
            </div>
            <div className="w-full lg:w-1/2 gap-6 lg:h-1/2">
                <LayoutGridDemo />
            </div>
        </div>
    );
}



// export default function About() {
//     return (
//         <div className="min-h-screen bg-background flex items-center justify-center">
//             <div className="max-w-5xl w-full space-y-10 p-6">
//                 {/* Header Section */}
//                 <Card className="bg-primary text-white">
//                     <CardHeader className="text-center">
//                         <CardTitle className="text-4xl font-bold">About Me</CardTitle>
//                     </CardHeader>
//                     <CardContent className="flex flex-col md:flex-row items-center justify-between gap-6">
//                         <div className="md:w-1/2 space-y-4 text-left">
//                             <p>
//                                 Hi! I'm a passionate developer who loves solving problems and learning new technologies. 
//                                 My expertise spans low-level programming, automation, and modern web frameworks.
//                             </p>
//                             <a href="src/assets/AmbroiseJACQUEMET_CV.pdf" download>
//                                 <Button className="mt-4">
//                                     My CV <FaArrowRight className="ml-2" />
//                                 </Button>
//                             </a>
//                         </div>
//                         <img
//                             src={profilePic}
//                             alt="Profile Picture"
//                             className="w-40 h-40 rounded-full border-4 border-white shadow-lg"
//                         />
//                     </CardContent>
//                 </Card>

//                 <Card>
//                 <CardHeader>
//                         <CardTitle className="text-2xl font-bold">Languages</CardTitle>
//                     </CardHeader>
//                     <CardContent className="flex flex-col items-center justify-between gap-6">
//                         <div className="flex gap-4 justify-center">
//                             <TechnoCard image={frenchIcon} nom="Français" delay={0.2}>
//                                 Mother tongue
//                             </TechnoCard>
//                             <TechnoCard image={englishIcon} nom="English" delay={0.4}>
//                                 B2/C1
//                             </TechnoCard>
//                             <TechnoCard image={germanIcon} nom="Deutsch" delay={0.6}>
//                                 A2
//                             </TechnoCard>
//                         </div>
//                     </CardContent>
//                 </Card>

//                 {/* Skills Section with Graph */}
//                 <Card>
//                     <CardHeader>
//                         <CardTitle className="text-2xl font-bold">Techo Used</CardTitle>
//                     </CardHeader>
//                     <CardContent className="flex flex-col md:flex-row items-center justify-between gap-6">
//                         <div className="flex flex-wrap justify-center gap-4">
//                             <TechnoCard image={cppIcon} nom="C++" delay={0}/>
//                             <TechnoCard image={pythonIcon} nom="Python" delay={0.1}/>
//                             <TechnoCard image={cIcon} nom="C" delay={0.2}/>
//                             <TechnoCard image={reactIcon} nom="React" delay={0.4}/>
//                             <TechnoCard image={javascriptIcon} nom="JavaScript" delay={0.5}/>
//                             <TechnoCard image={bashIcon} nom="Bash" delay={0.6}/>
//                             <TechnoCard image={linuxIcon} nom="Linux" delay={0.7}/>
//                             <TechnoCard image={dockerIcon} nom="Docker" delay={0.8}/>
//                         </div>
//                     </CardContent>
//                 </Card>

//                 {/* Hobbies Section */}
//                 <Card>
//                     <CardHeader>
//                         <CardTitle className="text-2xl font-bold">Hobbies</CardTitle>
//                     </CardHeader>
//                     <CardContent className="flex flex-col items-center justify-between gap-6">
//                         <div className="flex gap-4 justify-center">
//                             <Card>
//                                 <CardHeader>
//                                     <CardTitle className="text-2xl font-bold">Music</CardTitle>
//                                 </CardHeader>
//                                 <CardContent className="flex flex-col md:flex-row items-center justify-between gap-6">
//                                     <div className="flex flex-wrap justify-center gap-4">
//                                         <TechnoCard image={accordionPic} nom="Accordion">
//                                             <p>I started playing accordion at 13yo</p>
//                                         </TechnoCard>
//                                     </div>
//                                 </CardContent>
//                             </Card>
//                             <Card>
//                                 <CardHeader>
//                                     <CardTitle className="text-2xl font-bold text-center">Sports</CardTitle>
//                                 </CardHeader>
//                                 <CardContent className="flex flex-col md:flex-row items-center justify-between gap-6">
//                                     <div className="flex flex-wrap justify-center gap-4">
//                                         <TechnoCard image={climbingPic} nom="Climbing">
//                                             <p>I started in September 2024</p>
//                                         </TechnoCard>
//                                         <TechnoCard image={archerPic} nom="Archery">
//                                             <p>My favorite sport</p>
//                                         </TechnoCard>
//                                     </div>
//                                 </CardContent>
//                             </Card>
//                         </div>
//                     </CardContent>
//                 </Card>
//             </div>
//         </div>
//     );
// }
