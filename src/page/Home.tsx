import HomePage1 from "@/components/home/HomePage1";
// import HomePage0 from "@/components/home/HomePage0";
import { useState, useEffect, useRef } from "react";
import HomePage2 from "@/components/home/HomePage2";
import LineGradient from "@/components/LineGradient";
import HomePage4 from "@/components/home/HomePage4";


function Home() {
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

    const components = [HomePage1, HomePage2, HomePage4];

    function getClassName(index: number) {
        if (index > 1) {
            return "w-5/6 mx-auto";
        }
        return "w-full";
    }

    return (
        <div className="overflow-y-scroll h-screen bg-background">
            {components.map((Component, index) => (
                <>
                {
                    (index > 1) && <LineGradient width="w-full" /> 
                }
                <div className={getClassName(index)} key={index} id={"DIV" + index} ref={(el) => (sectionsRef.current[index] = el)}>
                    <Component isVisible={ index <= visibleMaxIndex} />
                </div>
                </>
            ))}
            <LineGradient />
            <footer className="border-t border-yellow p-4">
                <div className=" px-10">
                    <div className="md:flex justify-center md:justify-between text-center ">
                        <div className="flex items-end gap-2">
                            <p className="font-playfair font-semibold text-2xl text-yellow">by Ambroise JACQUEMET</p>
                            <p className="font-playfair text-s text-yellow">with React js &amp; Tailwind</p>
                        </div>
                        <div className="flex gap-3 justify-center md:justify-start">
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Home;
