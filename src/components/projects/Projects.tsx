import { Button } from "@/components/ui/button";
import { FaExternalLinkAlt } from "react-icons/fa";

import { AuthorCardProps } from "@/components/ui/content-card";
import { FeatureProps } from "@/components/ui/feature-with-image-carousel";

import AreaImage from "@/assets/projects/area-2.webp";
import ArcadeImage from "@/assets/projects/arcade-2.webp";
import ArcadeImage2 from "@/assets/projects/arcade-1.webp";
import RaytracerImage from "@/assets/projects/raytracer.webp";
import MyRPGMenu from "@/assets/projects/myrpg-menu.webp";
import MyRPGCharacter from "@/assets/projects/myrpg-character.webp";
import MyRPGMap from "@/assets/projects/myrpg-map.webp";
import MyRPGInventory from "@/assets/projects/myrpg-inventory.webp";
import CorewarAsm from "@/assets/projects/corewar-asm.webp";
import CorewarDump from "@/assets/projects/corewar-dump.webp";
import Sh42Session from "@/assets/projects/42sh-session.webp";
import DanteMaze from "@/assets/projects/dante-maze.webp";
import DanteTerminal from "@/assets/projects/dante-terminal.webp";
import Navy1 from "@/assets/projects/navy-1.webp";
import Navy2 from "@/assets/projects/navy-2.webp";
import MyRadarImage from "@/assets/projects/my-radar.webp";
import RTypeImage from "@/assets/projects/rtype-2.webp";
import RTypeImage2 from "@/assets/projects/rtype-1.webp";
import PlazzaImage from "@/assets/projects/plazza.webp";
import GomokuImage from "@/assets/projects/gomoku.webp";
import GomokuMatch1 from "@/assets/projects/gomoku-match-1.webp";
import GomokuMatch2 from "@/assets/projects/gomoku-match-2.webp";
import PortfolioImage from "@/assets/projects/portfolio.webp";
import SoulConnectionImage from "@/assets/projects/soul-connection.webp";
import EpiTrelloImage from "@/assets/projects/epitrello.webp";
import MannheimImage from "@/assets/projects/mannheim.webp";
import NewMannheimImage1 from "@/assets/projects/newmannheim-1.webp";
import NewMannheimImage2 from "@/assets/projects/newmannheim-2.webp";
import NewMannheimImage3 from "@/assets/projects/newmannheim-3.webp";
import NewMannheimImage4 from "@/assets/projects/newmannheim-4.webp";
import SolypengineImage1 from "@/assets/projects/solypengine-1.webp";
import SolypengineImage2 from "@/assets/projects/solypengine-2.webp";
import SolypengineImage3 from "@/assets/projects/solypengine-3.webp";
import KrcImage from "@/assets/projects/krc.webp";
import AsteroidImage1 from "@/assets/projects/asteroid-1.webp";
import AsteroidImage2 from "@/assets/projects/asteroid-2.webp";
import AsteroidImage3 from "@/assets/projects/asteroid-3.webp";
import AsteroidImage4 from "@/assets/projects/asteroid-4.webp";
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

const ME = { login: "Solype", name: "Ambroise Jacquemet" };
const HUGO = { login: "ugeaux", name: "Hugo Tesson" };
const SATINE = { login: "Satineee", name: "Satine Fouque" };
const ETIENNE = { login: "Tounn10", name: "Etienne Namur" };
const LUCIA = { login: "luciajd", name: "Lucia Jimenez Diaz" };

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
        images: [AreaImage],
        contributors: [ME, HUGO, SATINE]
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
                            <p className="text-lg text-gray-600">
                                The graphics and game interfaces were designed in collaboration with another group
                                (Satine Fouque, Romain Pichon, Hugo Tesson and Nicolas Loiseau), so our libraries and games are interchangeable.
                            </p>
                            <SourceLink href="https://github.com/Solype/Arcade" />
                        </div>,
        images: [ArcadeImage, ArcadeImage2],
        contributors: [ME, ETIENNE, LUCIA]
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
                                <SourceLink href="https://github.com/Solype/Rtype" />
                                <SourceLink href="https://github.com/Solype/Cpp_basic_ecs" label="Standalone ECS" />
                            </div>
                        </div>,
        images: [RTypeImage, RTypeImage2],
        contributors: [ME, HUGO, SATINE]
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
                            <SourceLink href="https://github.com/Solype/Plazza" />
                        </div>,
        images: [PlazzaImage],
        contributors: [ME, SATINE]
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
            description: "Gomoku AI bot: Monte Carlo playouts on a home-made thread pool"
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
                                a Monte Carlo search: 50,000 random playouts per move, run on our own thread pool to parallelise the computation.
                            </p>
                            <p className="text-lg text-gray-600">
                                The bot speaks the <strong>Gomocup</strong> protocol, so it plays against other bots through liskvork,
                                the game manager, whose web page shows the match live.
                            </p>
                            <SourceLink href="https://github.com/Solype/Gomoku" />
                        </div>,
        images: [GomokuImage, GomokuMatch1, GomokuMatch2],
        contributors: [ME, HUGO, SATINE]
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
                            <SourceLink href="https://github.com/Solype/Raytracer" />
                            <SourceLink href="https://github.com/Solype/GPU_raytracer" label="GPU version" />
                        </div>
                    </div>,
        images: [RaytracerImage],
        contributors: [ME, ETIENNE, LUCIA, HUGO, SATINE]
    }
};

export const MyRPGProject: ProjectType = {
    cardProps: {
        author : {
            name: "C",
            avatar: composeImageUrl("c"),
            readTime: "1st year project"
        },
        backgroundImage: MyRPGMenu,
        content: {
            title: "MyRPG",
            description: "Desert-themed 2D RPG written in C with CSFML"
        },
    },
    projectProps: {
        badge: "Epitech project",
        title: "MyRPG",
        description: <div className="space-y-4">
                        <p className="text-xl text-gray-700">
                            Our first-year final graphical project: a 2D role-playing game set in an Egyptian desert, written entirely in
                            <strong> C</strong> with the <strong>CSFML</strong> library.
                        </p>
                        <p className="text-lg text-gray-600">
                            It has a main menu with settings and help, a character selection screen, a tile map to explore and an
                            inventory with equipment slots. Built by a team of three in about a month (March–April 2023).
                        </p>
                    </div>,
        images: [MyRPGMenu, MyRPGCharacter, MyRPGMap, MyRPGInventory],
        contributors: [ME, { name: "Lou Onezime" }, { name: "Iona Prigent" }]
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
                        <SourceLink href="https://github.com/Solype/EpiTrello" />
                    </div>,
        images: [EpiTrelloImage],
        contributors: [ME]
    }
}

export const MannheimProject: ProjectType = {
    cardProps: {
        author : {
            name: "Web language",
            avatar: composeImageUrl("react"),
            readTime: "Personal project, V1"
        },
        backgroundImage: MannheimImage,
        content: {
            title: "Mannheim (V1)",
            description: "First website for our tabletop RPG, coded with friends"
        },
    },
    projectProps: {
        badge : "Personal project · V1",
        title: "Mannheim (V1)",
        description: <div className="space-y-4">
                        <p className="text-xl text-gray-700">
                            The first version of the companion website for Mannheim, the tabletop role-playing game I play with my friends.
                        </p>
                        <p className="text-lg text-gray-600">
                            Built in <strong>TypeScript</strong> with two friends from the group. It is the ancestor of
                            NewMannheim, the V2.
                        </p>
                        <SourceLink href="https://github.com/Solype/Mannheim" />
                    </div>,
        images: [MannheimImage],
        contributors: [ME, SATINE, HUGO]
    }
}

export const NewMannheimProject: ProjectType = {
    cardProps: {
        author : {
            name: "Python · React",
            avatar: composeImageUrl("fastapi"),
            readTime: "Personal project, V2"
        },
        backgroundImage: NewMannheimImage1,
        content: {
            title: "NewMannheim (V2)",
            description: "Tabletop RPG companion: rule-checked character builder and live game rooms"
        },
    },
    projectProps: {
        badge : "Personal project · V2 · built with Claude Code",
        title: "NewMannheim (V2)",
        description: <div className="space-y-4">
                        <p className="text-xl text-gray-700">
                            The V2 of our tabletop RPG companion. Players build characters, NPCs and monsters in a step-by-step
                            editor that checks them against the game rules as they go, and keeps track of the points and money left.
                            It also has a searchable rules reader, printable character sheets and JSON export/import.
                        </p>
                        <p className="text-lg text-gray-600">
                            Any account can open a <strong>game room</strong> as game master: players join with an invite code,
                            characters in play get health gauges, statuses and a damage calculator with armor and penetration, and the
                            GM decides whether monsters are hidden, visible or revealed, filtered per player on the server.
                            Chat, presence and gauges update live over <strong>WebSockets</strong>.
                        </p>
                        <p className="text-lg text-gray-600">
                            <strong>FastAPI</strong>, SQLAlchemy 2 and <strong>PostgreSQL</strong> on the back end;
                            <strong> React 19</strong>, TypeScript, Tailwind 4 and shadcn/ui on the front end, with API types generated
                            from OpenAPI. Deployed with Docker Compose, plus a self-updating <strong>Android</strong> app.
                        </p>
                        <p className="text-lg text-gray-600 italic">
                            Unlike the V1, this version was built mostly through AI-assisted coding with Claude Code,
                            with hooks that run the tests and type checks after every change.
                        </p>
                        <SourceLink href="https://github.com/Solype/Ul-s-World" />
                    </div>,
        images: [NewMannheimImage1, NewMannheimImage2, NewMannheimImage3, NewMannheimImage4],
        contributors: [ME]
    }
}

const firstYearC = (readTime = "1st year project") => ({
    name: "C",
    avatar: composeImageUrl("c"),
    readTime
});

export const CorewarProject: ProjectType = {
    cardProps: {
        author: firstYearC(),
        backgroundImage: CorewarAsm,
        content: {
            title: "Corewar",
            description: "Assembler and virtual machine where programs fight for memory"
        },
    },
    projectProps: {
        badge: "Epitech project",
        title: "Corewar",
        description: <div className="space-y-4">
                        <p className="text-xl text-gray-700">
                            Corewar is a game where small programs, the "champions", fight inside the memory of a virtual machine.
                        </p>
                        <p className="text-lg text-gray-600">
                            We wrote both halves in <strong>C</strong>: an <strong>assembler</strong> that compiles champions from
                            their assembly language into bytecode, and the <strong>virtual machine</strong> that loads them into a shared
                            circular memory and runs their processes until one is left alive.
                        </p>
                        <p className="text-lg text-gray-600">
                            Re-tested in 2026 against Epitech's reference virtual machine: our memory dumps are byte-identical to
                            the reference ones up to cycle 500.
                        </p>
                    </div>,
        images: [CorewarAsm, CorewarDump],
        contributors: [ME, ETIENNE, { name: "Marius Rousset" }, { name: "Iona Prigent" }]
    }
};

export const Sh42Project: ProjectType = {
    cardProps: {
        author: firstYearC(),
        backgroundImage: Sh42Session,
        content: {
            title: "42sh",
            description: "A Unix shell written from scratch, inspired by tcsh"
        },
    },
    projectProps: {
        badge: "Epitech project",
        title: "42sh",
        description: <div className="space-y-4">
                        <p className="text-xl text-gray-700">
                            The end-of-year shell project: a command interpreter written from scratch in <strong>C</strong>.
                        </p>
                        <p className="text-lg text-gray-600">
                            Command lines go through an <strong>LL parser</strong> that builds the execution tree from operator
                            priorities: pipes, redirections, <code>;</code>, <code>&amp;&amp;</code> and <code>||</code>.
                            It also has the built-ins (cd, echo, setenv, unsetenv), tcsh-style error messages and command history.
                        </p>
                        <p className="text-lg text-gray-600">
                            Re-tested in 2026 against tcsh: 17 of 23 test commands give exactly the same output and exit status.
                        </p>
                    </div>,
        images: [Sh42Session],
        contributors: [ME, ETIENNE, { name: "Louis" }, { name: "Yanis" }, { name: "Lou Onezime" }]
    }
};

export const DanteProject: ProjectType = {
    cardProps: {
        author: firstYearC(),
        backgroundImage: DanteMaze,
        content: {
            title: "Dante",
            description: "Perfect-maze generator (growing tree) and A* solver"
        },
    },
    projectProps: {
        badge: "Epitech project",
        title: "Dante",
        description: <div className="space-y-4">
                        <p className="text-xl text-gray-700">
                            Two programs in <strong>C</strong>: one generates mazes, the other solves them.
                        </p>
                        <p className="text-lg text-gray-600">
                            The generator builds <strong>perfect</strong> mazes (exactly one path between any two cells) with the
                            <strong> growing-tree</strong> algorithm, and imperfect ones with loops on demand. The solver finds the exit
                            with <strong>A*</strong> and a Manhattan-distance heuristic, and prints the path on the maze.
                        </p>
                        <p className="text-lg text-gray-600">
                            Re-tested in 2026: a 1000×1000 maze is generated in about 0.55 s and solved in 0.06 s, using about 6 MB of memory.
                        </p>
                    </div>,
        images: [DanteMaze, DanteTerminal],
        contributors: [ME, ETIENNE]
    }
};

export const NavyProject: ProjectType = {
    cardProps: {
        author: firstYearC(),
        backgroundImage: Navy1,
        content: {
            title: "Navy",
            description: "Two-player battleship where processes talk only through signals"
        },
    },
    projectProps: {
        badge: "Epitech project",
        title: "Navy",
        description: <div className="space-y-4">
                        <p className="text-xl text-gray-700">
                            A terminal battleship game for two players, each running their own process.
                        </p>
                        <p className="text-lg text-gray-600">
                            The two processes communicate only through UNIX signals: player 2 connects using player 1's PID, then
                            every shot and every answer is sent bit by bit as <strong>SIGUSR1</strong> / <strong>SIGUSR2</strong>
                            signals (16 per shot), handled with <code>sigaction</code>. Invalid coordinates are rejected.
                        </p>
                    </div>,
        images: [Navy1, Navy2],
        contributors: [ME, ETIENNE]
    }
};

export const MyRadarProject: ProjectType = {
    cardProps: {
        author: firstYearC(),
        backgroundImage: MyRadarImage,
        content: {
            title: "My Radar",
            description: "Air traffic simulation with CSFML and grid-based collision checks"
        },
    },
    projectProps: {
        badge: "Epitech project",
        title: "My Radar",
        description: <div className="space-y-4">
                        <p className="text-xl text-gray-700">
                            An air traffic simulation in <strong>C</strong> with <strong>CSFML</strong>: planes fly between airports,
                            crash into each other, and are safe inside control tower areas.
                        </p>
                        <p className="text-lg text-gray-600">
                            To keep many planes smooth, the screen is split into a grid and each plane is only checked for
                            collisions against planes in the same cell.
                        </p>
                    </div>,
        images: [MyRadarImage],
        contributors: [ME]
    }
};

export const SolypengineProject: ProjectType = {
    cardProps: {
        author : {
            name: "C++",
            avatar: composeImageUrl("cplusplus"),
            readTime: "Personal project, 2026"
        },
        backgroundImage: SolypengineImage1,
        content: {
            title: "Solypengine",
            description: "C++20 parallel-ECS game engine with plugin renderers and its own 3D physics"
        },
    },
    projectProps: {
        badge : "Personal project · R-Type rework",
        title: "Solypengine",
        description: <div className="space-y-4">
                        <p className="text-xl text-gray-700">
                            A C++20 game engine I wrote on my own after Epitech's R-Type, to see how much better I could do than the
                            engine I built in 3rd year. Its demo, <strong>Bullet Hell 3D</strong>, is a third-person arena shooter with
                            animated robots and physics-driven crates.
                        </p>
                        <p className="text-lg text-gray-600">
                            The core is a <strong>parallel ECS</strong>: a scheduler groups systems into parallel batches from the
                            components they declare, on a fixed 60 Hz tick. Renderers and games are <strong>shared libraries</strong>
                            loaded at runtime, so the engine can also run headless.
                        </p>
                        <p className="text-lg text-gray-600">
                            The <strong>raylib</strong> renderer does GPU skeletal animation (glTF), dynamic lights, shadow maps, fog and
                            hot-reloaded shaders; a second renderer draws the same 3D world as coloured ASCII art in a terminal.
                            The in-house 3D physics uses a sequential-impulse solver with sleeping bodies and raycasts. Builds on Linux
                            and Windows. Networking (authoritative UDP server) is next on the roadmap.
                        </p>
                        <p className="text-lg text-gray-600 italic">
                            I wrote the engine core myself; the demo game and the graphics side were built with AI (Claude Code).
                        </p>
                        <p className="text-sm text-gray-500 italic">Private repository.</p>
                    </div>,
        images: [SolypengineImage1, SolypengineImage2, SolypengineImage3],
        contributors: [ME]
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
        images: [KrcImage],
        contributors: [ME]
    }
}

export const AsteroidProject: ProjectType = {
    cardProps: {
        author : {
            name: "Rust",
            avatar: composeImageUrl("rust"),
            readTime: "Chung-Ang University, 2025"
        },
        backgroundImage: AsteroidImage1,
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
                            From the cockpit, the player flies through a low-poly asteroid field, dodging and shooting asteroids to score points.
                            Built by a team of four for the game software design course at Chung-Ang University.
                        </p>
                        <p className="text-lg text-gray-600">
                            The menus are <strong>diegetic</strong>: the main menu, settings and game-over screens are displayed on the
                            ship's dashboard inside the 3D scene, not as a flat overlay.
                        </p>
                        <SourceLink href="https://github.com/Solype/Asteroid" />
                    </div>,
        images: [AsteroidImage1, AsteroidImage2, AsteroidImage3, AsteroidImage4],
        contributors: [
            ME,
            { login: "Popochounet", name: "Adrien Audiard" },
            { login: "Mael-RABOT", name: "Maël Rabot" },
            { login: "zaotic165", name: "Zaotic" },
        ]
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
                        <SourceLink href="https://github.com/Solype/Ftrace" />
                    </div>,
        images: [FtraceImage],
        contributors: [ME]
    }
}
