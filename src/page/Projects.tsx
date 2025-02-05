import { useState, useEffect, useRef } from "react";
import Autoplay from "embla-carousel-autoplay"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious
} from "@/components/ui/carousel";

import { AuthorCard, AuthorCardProps } from "@/components/ui/content-card"
import { ArcadeProject, AreaProject } from "@/components/projects/Projects";

function Projects() {
    const [visibleMaxIndex, setVisibleMaxIndex] = useState<number>(0);
    const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);


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


    const list_cpp_project = [ ArcadeProject ];
    const list_web_project = [ AreaProject ];

    const list_of_list_project = [ list_cpp_project, list_web_project ];

    return (
        <div className="py-20 w-4/5 mx-auto gap-4">
            {
                list_of_list_project.map((list_project : AuthorCardProps[], index) => (
                    <Carousel key={index} opts={{ loop: true, axis: "x" }} plugins={[Autoplay({delay: 3000})]}>
                        <CarouselContent className="-ml-1">
                            {list_project.map((project: AuthorCardProps, index) => (
                                <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
                                    <div className="p-1">
                                        <AuthorCard
                                            backgroundImage={project.backgroundImage}
                                            author={project.author}
                                            content={project.content}
                                        />
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                ))
            }
        </div>
    );
}

export default Projects;
