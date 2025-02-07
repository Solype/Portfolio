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
import { Feature, FeatureProps } from "@/components/ui/feature-with-image-carousel";

type GroupOfProjects = {
    nameCategory: string;
    projects: ProjectType[];
}

interface CarouselProjectProps {
    list_project: GroupOfProjects;
    index: number;
    featurePropSetter: React.Dispatch<React.SetStateAction<FeatureProps | null>>;
    setModalOpen: React.Dispatch<React.SetStateAction<boolean>>
}

function CarouselProject ({
    list_project,
    index,
    featurePropSetter,
    setModalOpen
}: CarouselProjectProps) {

    const prevButtonRef = useRef<HTMLButtonElement>(null);

    const handlePrevClick = () => {
        if (prevButtonRef.current) {
            prevButtonRef.current.click();
        }
    };

    useEffect(() => {
        const interval = setInterval(() => {
            handlePrevClick();
        }, 5000)

        return () => clearInterval(interval);
    }, []);

    const handleOnClick = (project: ProjectType) => {
        if (project.projectProps != null) {
            featurePropSetter(project.projectProps);
            setModalOpen(true);
        }
    }

    return (
        <div className="flex justify-center">
            <Carousel key={index} opts={{
                    loop: true,
                }}
                className="w-full"
            >
                <CarouselContent className="-ml-1">
                    {list_project.projects.map((project: ProjectType, index) => {
                        const randomX = (Math.random() - 0.5) * 100;
                        const randomY = (Math.random() - 0.5) * 100;
                        const randomDelay = Math.random() * 0.5;

                        return (
                            <CarouselItem key={index} className="xl:basis-1/3 md:basis-1/2 basis-1/1" onClick={() => handleOnClick(project)}>
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
    const [ projectsList, setProjectsList ] = useState<GroupOfProjects[]>([]);
    const [ modalOpen, setModalOpen ] = useState<boolean>(false);
    const [ featurePropsCurrent, setFeaturePropsCurrent ] = useState<FeatureProps | null>(null);

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
                            initial={{ opacity: 0, y: -30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: "easeOut", delay: Math.random() * 0.5 }}
                            onClick={() => setModalOpen(true)}
                        >
                            {list_project.nameCategory}
                        </motion.h2>
                        <CarouselProject list_project={list_project} index={index} featurePropSetter={setFeaturePropsCurrent} setModalOpen={setModalOpen} />
                    </div>
                    <motion.div
                        initial={{ opacity: 0, scaleX: 0 }}
                        animate={{ opacity: 1, scaleX: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
                    >
                        <LineGradient width="w-full" />
                    </motion.div>
                </div>
            ))}
            <Dialog open={modalOpen && featurePropsCurrent != null} onOpenChange={setModalOpen}>
                <DialogContent className="w-screen max-w-full h-screen-3/4 flex flex-col justify-center items-center">
                    <DialogHeader>
                        <DialogTitle>Modal title</DialogTitle>
                        <DialogDescription>Modal description</DialogDescription>
                    </DialogHeader>
                    <div className="w-screen max-w-full h-screen-3/4 flex flex-col justify-center items-center">
                        {
                            featurePropsCurrent && (
                                <Feature
                                    badge={featurePropsCurrent.badge}
                                    title={featurePropsCurrent.title}
                                    description={featurePropsCurrent.description}
                                    images={featurePropsCurrent.images}
                                />
                            )
                        }
                    </div>
                </DialogContent>
            </Dialog>
        </div>

    );
}

export default Projects;
