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
import KrcImage from "@/assets/projects/krc.webp";
import AsteroidImage from "@/assets/projects/asteroid.webp";
import CHttpImage from "@/assets/projects/c-http.webp";
import FtraceImage from "@/assets/projects/ftrace.webp";

function SourceLink({ href, label = "Source code" }: { href: string; label?: string }) {
    return (
        <Button asChild className="w-fit gap-2 bg-primary text-white hover:bg-accent">
            <a href={href} target="_blank" rel="noopener noreferrer">
                <FaExternalLinkAlt />
                <span>{label}</span>
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
                            <p className="text-lg text-gray-600">
                                I later extracted the core of this ECS (entity registry, sparse component arrays, zipper iterator) into a small standalone C++ library.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                <SourceLink href="https://github.com/Nalistas/RType" />
                                <SourceLink href="https://github.com/Solype/Cpp_basic_ecs" label="Standalone ECS" />
                            </div>
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
                        <p className="text-lg text-gray-600">
                            Written in C++. As a follow-up, I started a GPU version that runs the rendering in OpenCL kernels.
                        </p>
                        <div className="flex flex-wrap gap-2">
                            <SourceLink href="https://github.com/Nalistas/Raytracer" />
                            <SourceLink href="https://github.com/Solype/GPU_raytracer" label="GPU version" />
                        </div>
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
            readTime: "Personal project"
        },
        backgroundImage: MannheimImage,
        content: {
            title: "Mannheim",
            description: "Character builder and live game tables for our tabletop RPG"
        },
    },
    projectProps: {
        badge : "Personal project",
        title: "Mannheim",
        description: <div className="space-y-4">
                        <p className="text-xl text-gray-700">
                            A full-stack companion app for Mannheim, the tabletop role-playing game I play with my friends.
                        </p>
                        <p className="text-lg text-gray-600">
                            Players create characters, NPCs and monsters checked live against the rulebook, print character sheets
                            and import or export them as JSON. Game masters open shared <strong>rooms</strong> with invitations,
                            chat and live tracking of damage and statuses over <strong>WebSockets</strong>; hidden information is
                            filtered on the server.
                        </p>
                        <p className="text-lg text-gray-600">
                            The new version runs on <strong>FastAPI</strong>, <strong>SQLAlchemy</strong> and <strong>PostgreSQL</strong>,
                            with a <strong>React 19</strong>, <strong>Vite</strong> and <strong>Tailwind</strong> front end,
                            Docker Compose, and an Android build.
                        </p>
                        <div className="flex flex-wrap gap-2">
                            <SourceLink href="https://github.com/Solype/Ul-s-World" label="New version" />
                            <SourceLink href="https://github.com/Solype/Mannheim" label="First version" />
                        </div>
                    </div>,
        images: [MannheimImage]
    }
}

export const KrcProject: ProjectType = {
    cardProps: {
        author : {
            name: "Rust",
            avatar: composeImageUrl("rust"),
            readTime: "Chung-Ang University, 2026"
        },
        backgroundImage: KrcImage,
        content: {
            title: "Krc",
            description: "A Korean programming language and its compiler, written in Rust"
        },
    },
    projectProps: {
        badge : "Compiler",
        title: "Krc",
        description: <div className="space-y-4">
                        <p className="text-xl text-gray-700">
                            Krc is a programming language written in Korean: functions are verbs and arguments carry their particles.
                        </p>
                        <p className="text-lg text-gray-600">
                            The compiler is built from scratch in <strong>Rust</strong>: its own lexer, a particle-aware pre-parser,
                            an <strong>LR(1)</strong> parser, a semantic checker, a typed IR, an <strong>x86-64</strong> encoder and
                            an <strong>ELF</strong> object writer. It comes with CI, release binaries, a website and syntax highlighting
                            for several editors.
                        </p>
                        <p className="text-lg text-gray-600">
                            It started in the Compiler class at Chung-Ang University, where we first built an SLR(1) syntax analyzer
                            as a team, and I kept developing it as a personal project.
                        </p>
                        <div className="flex flex-wrap gap-2">
                            <SourceLink href="https://github.com/Solype/Krc" />
                            <SourceLink href="https://solype.github.io/Krc" label="Website" />
                            <SourceLink href="https://github.com/Solype/CAUCompilerClassSpring2026" label="Class project" />
                        </div>
                    </div>,
        images: [KrcImage]
    }
}

export const AsteroidProject: ProjectType = {
    cardProps: {
        author : {
            name: "Rust",
            avatar: composeImageUrl("rust"),
            readTime: "Chung-Ang University, 2025"
        },
        backgroundImage: AsteroidImage,
        content: {
            title: "Asteroid",
            description: "3D remake of the arcade classic, built with the Bevy engine"
        },
    },
    projectProps: {
        badge : "Game",
        title: "Asteroid",
        description: <div className="space-y-4">
                        <p className="text-xl text-gray-700">
                            A 3D game inspired by the classic Asteroids arcade game, made with the <strong>Bevy</strong> engine in <strong>Rust</strong>.
                        </p>
                        <p className="text-lg text-gray-600">
                            The player flies a spaceship through an asteroid field, dodging and destroying asteroids to score points.
                            Built by a team of four for the game software design course at Chung-Ang University.
                        </p>
                        <SourceLink href="https://github.com/Solype/Asteroid" />
                    </div>,
        images: [AsteroidImage]
    }
}

export const CHttpProject: ProjectType = {
    cardProps: {
        author : {
            name: "C",
            avatar: composeImageUrl("c"),
            readTime: "Personal project"
        },
        backgroundImage: CHttpImage,
        content: {
            title: "C_HTTP",
            description: "HTTP server library in C with a router and select()-based I/O"
        },
    },
    projectProps: {
        badge : "Personal project",
        title: "C_HTTP",
        description: <div className="space-y-4">
                        <p className="text-xl text-gray-700">
                            An HTTP/1.1 server library written from scratch in <strong>C</strong>.
                        </p>
                        <p className="text-lg text-gray-600">
                            It parses requests and headers, builds responses with automatic 404/500 pages, routes requests through a
                            route tree with wildcards, and handles connections with non-blocking <strong>select()</strong> I/O and
                            a growable request buffer.
                        </p>
                        <SourceLink href="https://github.com/Solype/C_HTTP" />
                    </div>,
        images: [CHttpImage]
    }
}

export const FtraceProject: ProjectType = {
    cardProps: {
        author : {
            name: "C",
            avatar: composeImageUrl("c"),
            readTime: "2nd year project"
        },
        backgroundImage: FtraceImage,
        content: {
            title: "Ftrace",
            description: "strace / ltrace-like tracer using ptrace and ELF symbols"
        },
    },
    projectProps: {
        badge : "Epitech project",
        title: "Ftrace",
        description: <div className="space-y-4">
                        <p className="text-xl text-gray-700">
                            A partial rewrite of <strong>strace</strong> and <strong>ltrace</strong>: it traces the system calls and
                            library calls of a running x86-64 program in real time.
                        </p>
                        <p className="text-lg text-gray-600">
                            It uses <strong>ptrace</strong>, reads registers following the x86-64 calling convention and resolves
                            function names from the ELF dynamic symbols (PLT/GOT). A bonus mode exports the call graph and renders it as an image.
                        </p>
                        <SourceLink href="https://github.com/Nalistas/Ftrace" />
                    </div>,
        images: [FtraceImage]
    }
}
