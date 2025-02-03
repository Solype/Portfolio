import { useState, useEffect, useRef } from "react";
import Project1 from "@/components/projects/Project1";
import Introduction from "@/components/projects/Introduction";
import AreaProject from "@/components/projects/Area";
import ArcadeProject from "@/components/projects/Arcade";
import Autoplay from "embla-carousel-autoplay"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious
} from "@/components/ui/carousel";
import {
    Card,
    CardContent
} from "@/components/ui/card";

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

    const components = [Introduction, Project1, AreaProject, ArcadeProject];

    console.log(components);
    return (
        <div className="py-20 w-4/5 mx-auto">
            <Carousel opts={{ loop: true, axis: "x" }} plugins={[Autoplay({delay: 5000})]}>
                <CarouselContent className="-ml-1">
                    {Array.from({ length: 5 }).map((_, index) => (
                        <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
                            <div className="p-1">
                                <Card>
                                    <CardContent className="flex aspect-square items-center justify-center p-6">
                                    <span className="text-2xl font-semibold">{index + 1}</span>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
        // <div className="snap-y snap-mandatory overflow-y-scroll h-screen bg-background">
        //     {components.map((Component, index) => (
        //         <div
        //             key={index}
        //             id={"DIV" + index}
        //             className="snap-always snap-center"
        //             ref={(el) => (sectionsRef.current[index] = el)}
        //         >
        //             <Component isVisible={ index <= visibleMaxIndex} />
        //         </div>
        //     ))}
        // </div>
    );
}

export default Projects;
