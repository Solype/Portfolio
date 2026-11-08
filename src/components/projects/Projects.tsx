import { Button } from "@/components/ui/button";
import { FaExternalLinkAlt } from "react-icons/fa";

import { AuthorCardProps } from "@/components/ui/content-card";
import { FeatureProps } from "@/components/ui/feature-with-image-carousel";

import AreaImage from "@/assets/projects/area-2.webp";
import AreaImage2 from "@/assets/projects/area-1.webp";
import ArcadeImage from "@/assets/projects/arcade-2.webp";
import ArcadeImage2 from "@/assets/projects/arcade-1.webp";
import RaytracerImage from "@/assets/projects/raytracer.webp";
import MyRPGImage from "@/assets/projects/myrpg.webp";
import RTypeImage from "@/assets/projects/rtype-2.webp";
import RTypeImage2 from "@/assets/projects/rtype-1.webp";
import PlazzaImage from "@/assets/projects/plazza.webp";
import GomokuImage from "@/assets/projects/gomoku.webp";
import PortfolioImage from "@/assets/projects/portfolio.webp";
import SoulConnectionImage from "@/assets/projects/soul-connection.webp";
import EpiTrelloImage from "@/assets/projects/epitrello.webp";
import MannheimImage from "@/assets/projects/mannheim.webp";

function SourceLink({ href }: { href: string }) {
    return (
        <Button asChild className="w-fit gap-2 bg-primary text-white hover:bg-accent">
            <a href={href} target="_blank" rel="noopener noreferrer">
                <FaExternalLinkAlt />
                <span>Source code</span>
            </a>
        </Button>
    );
}

function composeImageUrl(imageName: string): string {
    return `https://cdn.jsdelivr.net/npm/simple-icons@14.0.0/icons/${imageName}.svg`;
}

export type ProjectType = {
    cardProps: AuthorCardProps,
    projectProps?: FeatureProps
}

export const AreaProject: ProjectType = {
    cardProps: {
        author : {
            name: "Web language",
            avatar: composeImageUrl("react"),
            readTime: "3rd year project"
        },
        backgroundImage: AreaImage,
        content: {
            title: "Area",
            description: "Automation platform connecting APIs together"
        },
    },
    projectProps: {
        badge: "Epitech project",
        title: "Area",
        description:    <div className="space-y-4">
                            <p className="text-xl text-gray-700">
                                Area is all about API integration and automation. Built with <strong>React Native</strong>, <strong>Vite</strong> and <strong>Python</strong>.
                                The goal was to create a dynamic and responsive application that simplifies interactions between various APIs, making complex workflows more accessible to users.
                            </p>
                            <p className="text-lg text-gray-600">
                                For this project, we have integrated powerful APIs such as <strong>GMail</strong>, <strong>Discord</strong>, <strong>Spotify</strong>, 
                                <strong>Weather</strong>, and <strong>ChatGPT</strong>. These integrations allow users to automate daily tasks effortlessly.
                            </p>
                            <p className="text-lg text-gray-600">
                                One of the key features of Area is its flexibility in creating custom automation flows. Users can define triggers and actions across different services.
                            </p>
                        </div>,
        images: [AreaImage, AreaImage2]
    }
};

export const ArcadeProject: ProjectType = {
    cardProps: {
        author : {
            name: "C++",
            avatar: composeImageUrl("cplusplus"),
            readTime: "2nd year project"
        },
        backgroundImage: ArcadeImage,
        content: {
            title: "Arcade",
            description: "Retro game platform with hot-swappable graphics libraries"
        },
    },
    projectProps: {
        badge: "Epitech project",
        title: "Arcade",
        description:    <div className="space-y-4">
                            <p className="text-xl text-gray-700">
                                Arcade is a modular gaming project where you can play classic games like <strong>Pacman</strong> and <strong>Snake</strong>.
                            </p>
                            <p className="text-lg text-gray-600">
                                The highlight of the project is the ability to switch between different 
                                graphical libraries such as <strong>ncurses</strong>, <strong>SFML</strong>, 
                                and <strong>SDL2</strong>, dynamically during gameplay. The graphics and games can be changed without restarting the program at all.
                            </p>
                            <SourceLink href="https://github.com/Nalistas/Arcade" />
                        </div>,
        images: [ArcadeImage, ArcadeImage2]
    }
};

export const RTypeProject: ProjectType = {
    cardProps: {
        author : {
            name: "C++",
            avatar: composeImageUrl("cplusplus"),
            readTime: "3rd year project"
        },
        backgroundImage: RTypeImage,
        content: {
            title: "R-Type",
            description: "Space shooter game, game engine and multiplayer"
        },
    },
    projectProps: {
        badge: "Epitech project",
        title: "R-Type",
        description:    <div className="space-y-4">
                            <p className="text-xl text-gray-700">
                                R-Type is a space shooter game that features multiplayer capabilities.
                            </p>
                            <p className="text-lg text-gray-600">
                                The goal of the project was to create an ECS engine to handle the game's entities and components.
                                It also includes networking capabilities, allowing players to connect to a server and play together.
                            </p>
                            <SourceLink href="https://github.com/Nalistas/RType" />
                        </div>,
        images: [RTypeImage, RTypeImage2]
    }
}

export const PlazzaProject: ProjectType = {
    cardProps: {
        author : {
            name: "C++",
            avatar: composeImageUrl("cplusplus"),
            readTime: "2nd year project"
        },
        backgroundImage: PlazzaImage,
        content: {
            title: "Plazza",
            description: "Concurrent programming: threads and processes running a simulated kitchen"
        },
    },
    projectProps: {
        badge: "Epitech project",
        title: "Plazza",
        description:    <div className="space-y-4">
                            <p className="text-xl text-gray-700">
                                Plazza is a concurrent programming project that focuses on thread and process management.
                            </p>
                            <p className="text-lg text-gray-600">
                                The main challenge of the project is to design and implement a multi-threaded and multi-processed system.
                                It uses IPC (inter-process communication) to share data between threads and processes.
                            </p>
                            <SourceLink href="https://github.com/Nalistas/Plazza" />
                        </div>,
        images: [PlazzaImage]
    }
}

export const GomokuProject: ProjectType = {
    cardProps: {
        author : {
            name: "C++",
            avatar: composeImageUrl("cplusplus"),
            readTime: "3rd year project"
        },
        backgroundImage: GomokuImage,
        content: {
            title: "Gomoku",
            description: "AI bot for Gomoku using Monte Carlo search and a thread pool"
        },
    },
    projectProps: {
        badge: "Epitech project",
        title: "Gomoku",
        description:    <div className="space-y-4">
                            <p className="text-xl text-gray-700">
                                The Gomoku project is not about recoding the game, which would be too easy: the goal is to build a bot that plays the best possible moves.
                            </p>
                            <p className="text-lg text-gray-600">
                                The main challenge was choosing and implementing the right algorithm. We chose to master randomness with
                                Monte Carlo tree search, and used a thread pool to parallelise the computation and speed up the bot.
                            </p>
                            <SourceLink href="https://github.com/Nalistas/Gomoku" />
                        </div>,
        images: [GomokuImage]
    }
}

export const RaytracerProject: ProjectType = {
    cardProps: {
        author : {
            name: "C++",
            avatar: composeImageUrl("cplusplus"),
            readTime: "2nd year project"
        },
        backgroundImage: RaytracerImage,
        content: {
            title: "Raytracer",
            description: "Renders 3D scenes by tracing light rays"
        },
    },
    projectProps: {
        badge : "Epitech project",
        title: "Raytracer",
        description: <div className="space-y-4">
                        <p className="text-xl text-gray-700">
                            This is one of the most interesting projects in terms of mathematics and computer graphics.
                        </p>
                        <p className="text-lg text-gray-600">
                            The objective of this project was to build a <span className="italic">raytracer</span>, a program that renders 3D scenes by simulating the physics of light rays.
                        </p>
                        <p className="text-lg text-gray-600 italic">
                            A raytracer calculates how light interacts with objects in a scene to create realistic shadows, reflections, and refractions.
                        </p>
                        <p>
                            Written in C++.
                        </p>
                        <SourceLink href="https://github.com/Nalistas/Raytracer" />
                    </div>,
        images: [RaytracerImage]
    }
};

export const MyRPGProject: ProjectType = {
    cardProps: {
        author : {
            name: "C",
            avatar: composeImageUrl("c"),
            readTime: "1st year project"
        },
        backgroundImage: MyRPGImage,
        content: {
            title: "MyRPG",
            description: "RPG game fully made in C"
        },
    }
};

export const PortfolioProject: ProjectType = {
    cardProps: {
        author : {
            name: "Web language",
            avatar: composeImageUrl("react"),
            readTime: "3rd year project"
        },
        backgroundImage: PortfolioImage,
        content: {
            title: "Portfolio",
            description: "The portfolio website you are reading right now"
        },
    }
};

export const SurvivorPoolTek3Project: ProjectType = {
    cardProps: {
        author : {
            name: "Web language",
            avatar: composeImageUrl("react"),
            readTime: "3rd year project"
        },
        backgroundImage: SoulConnectionImage,
        content: {
            title: "Soul Connection",
            description: "Full-stack web app built for a real client during the Epitech Survivor Pool"
        },
    },
    projectProps: {
        badge: "Epitech project",
        title: "Soul Connection",
        description: <div className="text-sm">
                    <p className="font-medium">Full-stack web app built with <span className="text-blue-500">Python (backend)</span> and <span className="text-yellow-500">JavaScript (frontend)</span>,</p>
                    <p className="mt-1">using <span className="text-blue-500">Vite.js</span> and <span className="text-cyan-400">Tailwind CSS</span> for a responsive, modern UI.</p>
                    <p className="mt-1 italic">Developed as a team, simulating real client communication and feedback loops for a <strong>Survivor Pool</strong> project organised by EPITECH.</p>
                </div>,
        images: [SoulConnectionImage]
    }
}

export const EpiTrelloProject: ProjectType = {
    cardProps: {
        author : {
            name: "Web language",
            avatar: composeImageUrl("react"),
            readTime: "3rd year project"
        },
        backgroundImage: EpiTrelloImage,
        content: {
            title: "EpiTrello",
            description: "Trello clone, update of the task in real time by websocket"
        },
    },
    projectProps: {
        badge : "Epitech project",
        title: "EpiTrello",
        description: <div className="space-y-4">
                        <p className="text-xl text-gray-700">
                            This is one of the most interesting projects in terms of web development.
                        </p>
                        <SourceLink href="https://github.com/Nalistas/EpiTrello" />
                    </div>,
        images: [EpiTrelloImage]
    }
}

export const MannheimProject: ProjectType = {
    cardProps: {
        author : {
            name: "Web language",
            avatar: composeImageUrl("react"),
            readTime: "3rd year project"
        },
        backgroundImage: MannheimImage,
        content: {
            title: "Mannheim",
            description: "Website for role-playing games with my friends"
        },
    },
    projectProps: {
        badge : "Personal project",
        title: "Mannheim",
        description: "Website for role-playing games with my friends",
        images: [MannheimImage]
    }
}
