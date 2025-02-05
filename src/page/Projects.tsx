import { useState, useEffect, useRef } from "react";
import Autoplay from "embla-carousel-autoplay"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious
} from "@/components/ui/carousel";

import { AuthorCard } from "@/components/ui/content-card"
import { ArcadeProject, AreaProject, GomokuProject, MyRPGProject, PlazzaProject, ProjectType, RaytracerProject, RTypeProject } from "@/components/projects/Projects";
import LineGradient from "@/components/LineGradient";
type GroupOfProjects = {
    nameCategory: string;
    projects: ProjectType[];
}

function CarouselProject ({ list_project, index }: { list_project: GroupOfProjects; index: number; }) {
    return (
        <div className="flex justify-center">
            <Carousel key={index} opts={{
                    loop: true,
                }}
                className="w-full"
                plugins={[Autoplay({delay: 5000})]}
            >
                <CarouselContent className="-ml-1">
                    {list_project.projects.map((project: ProjectType, index) => (
                        <CarouselItem key={index} className="basis-1/3">
                            <div className="p-1">
                                <AuthorCard
                                    backgroundImage={project.cardProps.backgroundImage}
                                    author={project.cardProps.author}
                                    content={project.cardProps.content}
                                />
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    )
}

function Projects() {
    const [visibleMaxIndex, setVisibleMaxIndex] = useState<number>(0);
    const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);
    const [ projectsList, setProjectsList ] = useState<GroupOfProjects[]>([]);


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
    const list_web_project: GroupOfProjects = { nameCategory: "Web", projects: [ AreaProject ] };
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
                        <h2 className="text-2xl text-center font-semibold">{list_project.nameCategory}</h2>
                        <CarouselProject list_project={list_project} index={index} />
                    </div>
                    <LineGradient width="w-full" />
                </div>
            ))}
        </div>

    );
}

export default Projects;
