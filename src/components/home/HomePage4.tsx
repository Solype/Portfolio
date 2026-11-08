import { Timeline, TimelineEntry } from "../ui/timeline";
import NDPLogo from "@/assets/journey/ndp-logo.webp";
import EpitechLogo from "@/assets/journey/epitech-logo.webp";
import SafranLogo from "@/assets/journey/safran-logo.webp";
import AllInAppliLogo from "@/assets/journey/all-in-appli-logo.webp";
import CAULogo from "@/assets/journey/cau-logo.webp";
import CAUCampus from "@/assets/journey/cau-campus-map.webp";
import CAUDragoon from "@/assets/journey/cau-dragoon.webp";
import EpitechParis1 from "@/assets/journey/epitech-paris-1.webp";
import EpitechBarcelona1 from "@/assets/journey/epitech-barcelona-1.webp";
import EpitechBarcelona2 from "@/assets/journey/epitech-barcelona-2.webp";
import EpitechBerlin1 from "@/assets/journey/epitech-berlin-1.webp";
import EpitechBerlin2 from "@/assets/journey/epitech-berlin-2.webp";
import AreaImage from "@/assets/projects/area-2.webp";
import RTypeImage from "@/assets/projects/rtype-1.webp";
import ArcadeImage from "@/assets/projects/arcade-1.webp";
import RaytracerImage from "@/assets/projects/raytracer.webp";
import MyRPGImage from "@/assets/projects/myrpg.webp";

const textClass = "text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4";

/** Photo or screenshot: fills its grid cell with a fixed 16:9 ratio. */
function Photo({ src, alt }: { src: string; alt: string }) {
    return (
        <img
            src={src}
            alt={alt}
            loading="lazy"
            className="w-full aspect-video object-cover rounded-lg shadow-md"
        />
    );
}

/** Logo: never cropped, centred on a light card of fixed height. */
function Logo({ src, alt }: { src: string; alt: string }) {
    return (
        <div className="flex items-center justify-center h-24 md:h-32 w-full rounded-lg bg-white shadow-md p-4">
            <img src={src} alt={alt} loading="lazy" className="max-h-full max-w-full object-contain" />
        </div>
    );
}

function Gallery({ children }: { children: React.ReactNode }) {
    return <div className="grid grid-cols-2 gap-4 mt-4">{children}</div>;
}

function HomePage4() {
    const data: TimelineEntry[] = [
        {
            title: "Sep 2025 – Jun 2026: Exchange at Chung-Ang University",
            content: (
                <div>
                    <p className={textClass}>
                        My school sends its fourth-year students abroad, to international campuses or partner universities.
                        I chose, and was admitted to, Chung-Ang University in Seoul, South Korea, for this year.
                    </p>
                    <Logo src={CAULogo} alt="Chung-Ang University logo" />
                    <Gallery>
                        <Photo src={CAUCampus} alt="Chung-Ang University campus map" />
                        <Photo src={CAUDragoon} alt="Chung-Ang University dragon statue" />
                    </Gallery>
                </div>
            ),
        },
        {
            title: "Apr – Aug 2025: Internship at All-In-Appli",
            content: (
                <div>
                    <p className={textClass}>
                        Back in France, I completed an internship at All-In-Appli, a company that manages and hosts
                        websites for associations and trade unions.
                    </p>
                    <p className={textClass}>
                        During this internship, I managed several websites and migrated them from one server to another.
                    </p>
                    <Logo src={AllInAppliLogo} alt="All-In-Appli logo" />
                </div>
            ),
        },
        {
            title: "Sep 2024 – Mar 2025: Epitech Berlin",
            content: (
                <div>
                    <p className={textClass}>
                        Thanks to the international track I follow, I spent my third year at Epitech Berlin.
                        Working on many long projects, I learned how to drive a project that lasts several months.
                    </p>
                    <p className={textClass}>
                        This year I worked on projects like Area and R-Type, which you can discover in the projects section.
                    </p>
                    <Gallery>
                        <Photo src={EpitechBerlin1} alt="Epitech Berlin campus" />
                        <Photo src={EpitechBerlin2} alt="Epitech Berlin" />
                        <Photo src={AreaImage} alt="Area project" />
                        <Photo src={RTypeImage} alt="R-Type project" />
                    </Gallery>
                </div>
            ),
        },
        {
            title: "Jan – Jun 2024: Epitech Barcelona",
            content: (
                <div>
                    <p className={textClass}>
                        As part of the international track, I spent the second half of my second year at Epitech Barcelona.
                    </p>
                    <p className={textClass}>
                        It was my first time studying abroad, far from France, and I learned a lot, especially C++.
                        I worked on projects like Arcade and Raytracer, which you can discover in the projects section.
                    </p>
                    <Gallery>
                        <Photo src={EpitechBarcelona1} alt="Epitech Barcelona campus" />
                        <Photo src={EpitechBarcelona2} alt="Epitech Barcelona" />
                        <Photo src={ArcadeImage} alt="Arcade project" />
                        <Photo src={RaytracerImage} alt="Raytracer project" />
                    </Gallery>
                </div>
            ),
        },
        {
            title: "Mar – Dec 2023: Internship at Safran",
            content: (
                <div>
                    <p className={textClass}>I worked as a software developer at the French company Safran.</p>
                    <ul className="mb-4 space-y-1 text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                        <li>✅ Professional experience as a software developer</li>
                        <li>✅ Autonomous learning</li>
                        <li>✅ Production-grade development</li>
                        <li>✅ XSLT and JavaScript</li>
                    </ul>
                    <p className={textClass}>
                        The goal of the internship was to build a viewer for XML files that are hard for humans to read.
                    </p>
                    <Logo src={SafranLogo} alt="Safran logo" />
                </div>
            ),
        },
        {
            title: "Oct 2022: Epitech Paris",
            content: (
                <div>
                    <p className={textClass}>
                        I started my computer science studies at Epitech Paris, where I worked on projects like MyRPG,
                        which you can discover in the projects section.
                    </p>
                    <Logo src={EpitechLogo} alt="Epitech logo" />
                    <Gallery>
                        <Photo src={EpitechParis1} alt="Epitech Paris campus" />
                        <Photo src={MyRPGImage} alt="MyRPG project" />
                    </Gallery>
                </div>
            ),
        },
        {
            title: "Mar 2022: Baccalauréat",
            content: (
                <div>
                    <p className={textClass}>
                        I graduated from the French Baccalauréat with Computer Science and Mathematics specialities,
                        with honours, at the Notre-Dame Providence high school in Enghien.
                    </p>
                    <Logo src={NDPLogo} alt="Notre-Dame Providence logo" />
                </div>
            ),
        },
    ];

    return <Timeline data={data} />;
}

export default HomePage4;
