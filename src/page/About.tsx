// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { FaArrowRight } from "react-icons/fa";
// import profilePic from "@/assets/Photo.jpg";
// import climbingPic from "@/assets/climbing.jpg";
// import accordionPic from "@/assets/accordion-icon.png";
// import englishIcon from "@/assets/english-icon.png";
// import frenchIcon from "@/assets/Flag_of_France.png";
// import germanIcon from "@/assets/german-flag.jpg";
import pythonIcon from "@/assets/python-icon.png";
import cppIcon from "@/assets/cpp-icon.jpg";
import reactIcon from "@/assets/react-icon.png";
import TechnoCard from "@/components/about/Technocard";
import cIcon from "@/assets/c-icon.png";
import linuxIcon from "@/assets/linux-icon.png";
import bashIcon from "@/assets/bash-icon.png";
import javascriptIcon from "@/assets/js-icon.png";
import dockerIcon from "@/assets/docker-icon.png";
// import archerPic from "@/assets/archery-icon.png";

import { BentoGrid, BentoCard } from "@/components/ui/bento-grid";
import {
    BellIcon,
    CalendarIcon,
    FileTextIcon,
    GlobeIcon,
    InputIcon,
} from "@radix-ui/react-icons";


const features = [
    {
        Icon: FileTextIcon,
        name: "Programming languages",
        description: "Here are the main programming languages I know.",
        cta: "Learn more",
        background: <div className="inline-flex flex-wrap items-center justify-between gap-4 m-4">
                                    <TechnoCard image={cppIcon} nom="C++" delay={0}/>
                                    <TechnoCard image={pythonIcon} nom="Python" delay={0.1}/>
                                    <TechnoCard image={cIcon} nom="C" delay={0.2}/>
                                    <TechnoCard image={reactIcon} nom="React" delay={0.4}/>
                                    <TechnoCard image={javascriptIcon} nom="JavaScript" delay={0.5}/>
                                    {/* <TechnoCard image={bashIcon} nom="Bash" delay={0.6}/> */}
                                    {/* <TechnoCard image={linuxIcon} nom="Linux" delay={0.7}/> */}
                                    {/* <TechnoCard image={dockerIcon} nom="Docker" delay={0.8}/> */}
                                </div>,
        className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
    },
    {
        Icon: InputIcon,
        name: "Full text search",
        description: "Search through all your files in one place.",
        href: "/",
        cta: "Learn more",
        background: <img className="absolute -right-20 -top-20 opacity-60" />,
        className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
    },
    {
        Icon: CalendarIcon,
        name: "Calendar",
        description: "Use the calendar to filter your files by date.",
        href: "/",
        cta: "Learn more",
        background: <img className="absolute -right-20 -top-20 opacity-60" />,
        className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
    },
    // {
    //   Icon: GlobeIcon,
    //   name: "Multilingual",
    //   description: "Supports 100+ languages and counting.",
    //   href: "/",
    //   cta: "Learn more",
    //   background: <img className="absolute -right-20 -top-20 opacity-60" />,
    //   className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
    // },
    {
        Icon: BellIcon,
        name: "Notifications",
        description:
          "Get notified when someone shares a file or mentions you in a comment.",
        href: "/",
        cta: "Learn more",
        background: <img className="absolute -right-20 -top-20 opacity-60" />,
        className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
    }
    // {
    //   Icon: BellIcon,
    //   name: "Notifications",
    //   description:
    //     "Get notified when someone shares a file or mentions you in a comment.",
    //   href: "/",
    //   cta: "Learn more",
    //   background: <img className="absolute -right-20 -top-20 opacity-60"/>,
    //   className: "lg:col-start-1 lg:col-end-4 lg:row-start-4 lg:row-end-4",
    // },
];

function BentoDemo() {
    return (
        <BentoGrid className="lg:grid-rows-3">
            {features.map((feature) => (
                <BentoCard key={feature.name} {...feature} />
            ))}
        </BentoGrid>
    );
}

export default function About() {
    return (
        <div className="gap-8">
              <div className="m-8"/>
              <BentoDemo/>
        </div>
    )
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
