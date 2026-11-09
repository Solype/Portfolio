import { useState, useEffect, useRef, useMemo } from "react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious
} from "@/components/ui/carousel";
import { motion } from "framer-motion";
import { AuthorCard } from "@/components/ui/content-card"
import { CorewarProject, DanteProject, MyRadarProject, NavyProject, Sh42Project, ArcadeProject, AreaProject, AsteroidProject, EpiTrelloProject, FtraceProject, KrcProject, GomokuProject, MannheimProject, NewMannheimProject, MyRPGProject, PlazzaProject, PortfolioProject, ProjectType, RaytracerProject, RTypeProject, SolypengineProject, SurvivorPoolTek3Project } from "@/components/projects/Projects";
import LineGradient from "@/components/LineGradient";

import {
    Dialog,
    DialogContent
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

const projectsList: GroupOfProjects[] = [
    { nameCategory: "Rust", projects: [ KrcProject, AsteroidProject ] },
    { nameCategory: "C++", projects: [ SolypengineProject, RTypeProject, ArcadeProject, RaytracerProject, PlazzaProject, GomokuProject ] },
    { nameCategory: "Web", projects: [ NewMannheimProject, MannheimProject, AreaProject, EpiTrelloProject, SurvivorPoolTek3Project, PortfolioProject ] },
    { nameCategory: "C", projects: [ CorewarProject, Sh42Project, FtraceProject, DanteProject, MyRPGProject, MyRadarProject, NavyProject ] },
];

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

    // Random entry offsets computed once per mount, not on every render.
    const offsets = useMemo(() => list_project.projects.map(() => ({
        x: (Math.random() - 0.5) * 100,
        y: (Math.random() - 0.5) * 100,
        delay: Math.random() * 0.5,
    })), [list_project]);

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
                        const { x: randomX, y: randomY, delay: randomDelay } = offsets[index];

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
    const [ modalOpen, setModalOpen ] = useState<boolean>(false);
    const [ featurePropsCurrent, setFeaturePropsCurrent ] = useState<FeatureProps | null>(null);

    return (
        <div className="w-4/5 mx-auto py-20 space-y-8">
            {projectsList.map((list_project: GroupOfProjects, index) => (
                <div key={index} className="space-y-6">
                    <div>
                        <motion.h2
                            className="text-2xl text-center font-semibold"
                            initial={{ opacity: 0, y: -30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
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
                <DialogContent className="max-h-[85vh] overflow-y-auto w-[95vw] max-w-6xl flex flex-col justify-center items-center">
                    {
                        featurePropsCurrent && (
                            <Feature {...featurePropsCurrent} />
                        )
                    }
                </DialogContent>
            </Dialog>
        </div>

    );
}

export default Projects;
