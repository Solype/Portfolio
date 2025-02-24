import { Button } from "@/components/ui/button";
import { FaExternalLinkAlt } from "react-icons/fa";

import { AuthorCardProps } from "@/components/ui/content-card";
import { FeatureProps } from "@/components/ui/feature-with-image-carousel";

import AreaImage from "@/assets/projects/Area2.png";
import ArcadeImage from "@/assets/projects/Arcade2.png";
import RaytracerImage from "@/assets/projects/raytracer.jpg";
import MyRPGImage from "@/assets/projects/MyRPG1.png";
import RTypeImage from "@/assets/projects/RtypeScreenShot.png";
import PlazzaImage from "@/assets/projects/PlazzaImage.png";
import GomokuImage from "@/assets/projects/gomoku.jpg";
import PortfolioImage from "@/assets/projects/Portfolio.png";
import SoulConnectionImage from "@/assets/projects/SoulConnection.png";
import EpiTrelloImage from "@/assets/projects/EpiTrello.png";
import MannheimImage from "@/assets/projects/Mannheim.png";

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
            description: "An automation of API"
        },
    },
    projectProps: {
        badge: "Epitech project",
        title: "Area",
        description:    <div className="space-y-4">
                            <p className="text-xl text-gray-700">
                                Area is all about API integration and automation. Built using <strong>React Native</strong>, <strong>ViteJs</strong>, and <strong>Python</strong>.
                                The goal was to create a dynamic and responsive application that simplifies interactions between various APIs, making complex workflows more accessible to users.
                            </p>
                            <p className="text-lg text-gray-600">
                                For this project, we have integrated powerful APIs such as <strong>GMail</strong>, <strong>Discord</strong>, <strong>Spotify</strong>, 
                                <strong>Weather</strong>, and <strong>ChatGPT</strong>. These integrations allow users to automate daily tasks effortlessly.
                            </p>
                            <p className="text-lg text-gray-600">
                                One of the key features of Area is its flexibility in creating custom automation flows. Users can define triggers and actions across different services.
                            </p>
                            {/* <Button
                                onClick={() => window.open("https://github.com/Nalistas/Raytracer", "_blank")}
                                className="flex items-center gap-2 px-4 py-2 bg-primary text-black rounded-lg hover:bg-accent transition-all"
                            >
                                <FaExternalLinkAlt />
                                <span>Source Code</span>
                            </Button> */}
                        </div>,
        images: [AreaImage]
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
            description: "Platformer game, using dynamic library"
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
                                graphical libraries such as <strong>ncurse</strong>, <strong>SFML</strong>, 
                                and <strong>SDL2</strong>, dynamically during gameplay. The graphics and games can be changed without restarting the program at all.
                            </p>
                            <Button
                                onClick={() => window.open("https://github.com/Nalistas/Arcade", "_blank")}
                                className="flex items-center gap-2 px-4 py-2 bg-primary text-black rounded-lg hover:bg-accent transition-all"
                            >
                                <FaExternalLinkAlt />
                                <span>Source Code</span>
                            </Button>
                        </div>,
        images: [ArcadeImage]
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
                            <Button
                                onClick={() => window.open("https://github.com/Nalistas/RType", "_blank")}
                                className="flex items-center gap-2 px-4 py-2 bg-primary text-black rounded-lg hover:bg-accent transition-all"
                            >
                                <FaExternalLinkAlt />
                                <span>Source Code</span>
                            </Button>
                        </div>,
        images: [RTypeImage]
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
            description: "Concurrent Programming project ! Thread and Process, let's cook some food"
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
                                Using IPC (Inter-Process Communication) to share data between threads and processes.
                            </p>
                            <Button
                                onClick={() => window.open("https://github.com/Nalistas/Plazza", "_blank")}
                                className="flex items-center gap-2 px-4 py-2 bg-primary text-black rounded-lg hover:bg-accent transition-all"
                            >
                                <FaExternalLinkAlt />
                                <span>Source Code</span>
                            </Button>
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
            description: "IA and concurrent programming project ! Let's master the Gomoku game with the random"
        },
    },
    projectProps: {
        badge: "Epitech project",
        title: "Gomoku",
        description:    <div className="space-y-4">
                            <p className="text-xl text-gray-700">
                                Gomoku project is not about recoding a game, that would be too easy. the goal is to create an bot that play the best moves possible.
                            </p>
                            <p className="text-lg text-gray-600">
                                The main challenge was to choose and implement the best algorithm to play the game. We choose to master the randomness and
                                use the Monte Carlo algorithm. And using a thread-pool to parallelize the computation and fasten the bot. 
                            </p>
                            <Button
                                onClick={() => window.open("https://github.com/Nalistas/Gomoku", "_blank")}
                                className="flex items-center gap-2 px-4 py-2 bg-primary text-black rounded-lg hover:bg-accent transition-all"
                            >
                                <FaExternalLinkAlt />
                                <span>Source Code</span>
                            </Button>
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
            description: "Trace lightrays through a scene in 3D"
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
                            The objective of this project was to build a <span className="font-italic">raytracer</span>, a program that renders 3D scenes by simulating the physics of light rays.
                        </p>
                        <p className="text-lg text-gray-600 italic">
                            A raytracer calculates how light interacts with objects in a scene to create realistic shadows, reflections, and refractions.
                        </p>
                        <p>
                            It was made in CPP.
                        </p>
                        <Button
                            onClick={() => window.open("https://github.com/Nalistas/Raytracer", "_blank")}
                            className="flex items-center gap-2 px-4 py-2 bg-primary text-black rounded-lg hover:bg-accent transition-all"
                        >
                            <FaExternalLinkAlt />
                            <span>Source Code</span>
                        </Button>
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
            description: "SurvivorPoolTek3 website, having true client to communicate with"
        },
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
                        <Button
                            onClick={() => window.open("https://github.com/Nalistas/EpiTrello", "_blank")}
                            className="flex items-center gap-2 px-4 py-2 bg-primary text-black rounded-lg hover:bg-accent transition-all"
                        >
                            <FaExternalLinkAlt />
                            <span>Source Code</span>
                        </Button>
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
            description: "Mannheim website, for RP games with my friends"
        },
    },
    projectProps: {
        badge : "Personal project",
        title: "Mannheim",
        description: "Mannheim website, for RP games with my friends",
        images: [MannheimImage]
    }
}
