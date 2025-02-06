import { useState, useEffect, useRef } from "react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious
} from "@/components/ui/carousel";
import { motion } from "framer-motion";
import { AuthorCard } from "@/components/ui/content-card"
import { ArcadeProject, AreaProject, EpiTrelloProject, GomokuProject, MannheimProject, MyRPGProject, PlazzaProject, PortfolioProject, ProjectType, RaytracerProject, RTypeProject, SurvivorPoolTek3Project } from "@/components/projects/Projects";
import LineGradient from "@/components/LineGradient";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle
} from "@/components/ui/dialog";
import { Feature } from "@/components/ui/feature-with-image-carousel";

type GroupOfProjects = {
    nameCategory: string;
    projects: ProjectType[];
}

function CarouselProject ({ list_project, index }: { list_project: GroupOfProjects; index: number; }) {

    const prevButtonRef = useRef<HTMLButtonElement>(null);

    const handlePrevClick = () => {
        if (prevButtonRef.current) {
            prevButtonRef.current.click(); // Simule un clic sur le bouton précédent
        }
    };

    useEffect(() => {
        const interval = setInterval(() => {
            handlePrevClick();
        }, 5000)

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex justify-center">
            <Carousel key={index} opts={{
                    loop: true,
                }}
                className="w-full"
            >
                <CarouselContent className="-ml-1">
                    {list_project.projects.map((project: ProjectType, index) => {
                        // Générer une animation aléatoire pour chaque élément
                        const randomX = (Math.random() - 0.5) * 100; // Déplacement entre -50px et 50px
                        const randomY = (Math.random() - 0.5) * 100; // Déplacement entre -50px et 50px
                        const randomDelay = Math.random() * 0.5; // Délai entre 0s et 0.5s

                        return (
                            <CarouselItem key={index} className="basis-1/3">
                                <motion.div
                                    className="p-1"
                                    initial={{ opacity: 0, x: randomX, y: randomY }}
                                    animate={{ opacity: 1, x: 0, y: 0 }}
                                    transition={{ duration: 0.7, ease: "easeOut", delay: randomDelay }}
                                >
                                    <AuthorCard
                                        backgroundImage={project.cardProps.backgroundImage}
                                        author={project.cardProps.author}
                                        content={project.cardProps.content}
                                    />
                                </motion.div>
                            </CarouselItem>
                        );
                    })}
                </CarouselContent>
                <CarouselPrevious ref={(index % 2 === 0) ? prevButtonRef : null}/>
                <CarouselNext ref={(index % 2 === 1) ? prevButtonRef : null}/>
            </Carousel>
        </div>
    )
}

function Projects() {
    const [visibleMaxIndex, setVisibleMaxIndex] = useState<number>(0);
    const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);
    const [ projectsList, setProjectsList ] = useState<GroupOfProjects[]>([]);
    const [ modalOpen, setModalOpen ] = useState<boolean>(false);

    function extractNumber(divId : string) {
        const match = divId.match(/\d+/); // Cherche les chiffres dans la chaîne
        return match ? parseInt(match[0], 10) : null; // Convertit en entier
    }

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                console.log(entries[0].target.id);
                const tmp : number | null = extractNumber(entries[0].target.id);
                console.log(tmp, visibleMaxIndex);
                if (tmp != null) {
                    console.log("update");
                    setVisibleMaxIndex((prevIdex) => Math.max(prevIdex, tmp));
                }
            },
            { threshold: 0.6 } // Trigger visibility at 60%
        );

        sectionsRef.current.forEach((section) => {
            if (section) observer.observe(section);
        });

        return () => observer.disconnect();
    }, []);

    const list_cpp_project: GroupOfProjects = { nameCategory: "CPP", projects: [ ArcadeProject, RaytracerProject, RTypeProject, PlazzaProject, GomokuProject ] };
    const list_web_project: GroupOfProjects = { nameCategory: "Web", projects: [ AreaProject, PortfolioProject, SurvivorPoolTek3Project, EpiTrelloProject, MannheimProject ] };
    const list_c_project: GroupOfProjects = { nameCategory: "C", projects: [ MyRPGProject ] };

    const list_of_list_project_tech = [ list_cpp_project, list_web_project, list_c_project ];

    useEffect(() => {
        setProjectsList(list_of_list_project_tech);
    }, []);

    return (
        <div className="w-4/5 mx-auto py-20 space-y-8">
            {projectsList.map((list_project: GroupOfProjects, index) => (
                <div key={index} className="space-y-6">
                    <div>
                        <motion.h2
                            className="text-2xl text-center font-semibold"
                            initial={{ opacity: 0, y: -30 }} // Commence caché et décalé vers le haut
                            animate={{ opacity: 1, y: 0 }} // Arrive en douceur
                            transition={{ duration: 0.6, ease: "easeOut", delay: Math.random() * 0.5 }} // Délai aléatoire
                            onClick={() => setModalOpen(true)}
                        >
                            {list_project.nameCategory}
                        </motion.h2>
                        <CarouselProject list_project={list_project} index={index} />
                    </div>
                    <motion.div
                        initial={{ opacity: 0, scaleX: 0 }} // Commence invisible et rétréci
                        animate={{ opacity: 1, scaleX: 1 }} // Apparition en élargissement
                        transition={{ duration: 0.8, ease: "easeOut", delay: Math.random() * 0.5 }} // Délai aléatoire
                    >
                        <LineGradient width="w-full" />
                    </motion.div>
                </div>
            ))}
            <Dialog open={modalOpen} onOpenChange={setModalOpen}>
                <DialogContent className="w-screen max-w-full h-screen flex flex-col justify-center items-center">
                    <DialogHeader>
                        <DialogTitle>Modal title</DialogTitle>
                        <DialogDescription>Modal description</DialogDescription>
                    </DialogHeader>
                    <div className="w-screen max-w-full h-screen flex flex-col justify-center items-center">
                        <Feature />
                    </div>
                </DialogContent>
            </Dialog>
        </div>

    );
}

export default Projects;
