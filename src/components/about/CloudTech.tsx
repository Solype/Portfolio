import { IconCloud } from "@/components/ui/interactive-icon-cloud"

import React, { useRef, useState, useEffect } from "react";
import { TechnoCard, TechnoCardStepContentProps } from "./Technocard";


const slugs = [
    "typescript",
    "javascript",
    "react",
    "nodedotjs",
    "tailwindcss",
    "mysql",
    "postgresql",
    "cplusplus",
    "c",
    "cmake",
    "python",
    "docker",
    "git",
    "jira",
    "github",
    "gnubash",
    "linux",
    "sqlite",
    "fastapi",
    "rust"
]

// Levels re-rated in Nov 2026 from how recently and how much each tech appears in my repositories.
const slugs2: { [id: string]: TechnoCardStepContentProps; } = {
    "Rust": {
        title: "Rust",
        description: "Rust is a fast, memory-safe systems programming language designed to provide high performance without sacrificing safety.",
        level: "Advanced",
        uses: [
            "Krc: a Korean programming language and its compiler (lexer, LR(1) parser, x86-64 encoder, ELF writer)",
            "Asteroid: a 3D game built with the Bevy engine",
            "An SLR(1) syntax analyzer for the Compiler class at Chung-Ang University"
        ],
        image: "rust"
    },
    "React": {
        title: "React.js",
        description: "A JavaScript library for building reactive and high-performance user interfaces.",
        level: "Advanced",
        uses: [
            "Building Single Page Applications",
            "NewMannheim, EpiTrello, Area and professional projects",
            "This website is built with React.js, more specifically Vite.js"
        ],
        image: "react"
    },
    "TypeScript": {
        title: "TypeScript",
        description: "A strongly typed superset of JavaScript that improves code robustness.",
        level: "Advanced",
        uses: [
            "My default language for frontend work, including professional projects",
            "NewMannheim, Mannheim and this portfolio",
            "Typed API clients generated from OpenAPI"
        ],
        image: "typescript"
    },
    "JavaScript": {
        title: "JavaScript",
        description: "The primary programming language for web development.",
        level: "Intermediate",
        uses: [
            "Frontend development with React",
            "Backend development with Node.js",
            "DOM manipulation and user interactions"
        ],
        image: "javascript"
    },
    "Node.js": {
        title: "Node.js",
        description: "A JavaScript runtime environment for server-side applications, built on V8.",
        level: "Intermediate",
        uses: [
            "Server-side code in professional projects",
            "Express backend for a hackathon chat app calling the OpenAI API"
        ],
        image: "nodedotjs"
    },
    "Tailwind CSS": {
        title: "Tailwind CSS",
        description: "A utility-first CSS framework for building custom designs directly in the markup.",
        level: "Intermediate",
        uses: [
            "Styling of this portfolio, NewMannheim and Mannheim",
            "Used with shadcn/ui components"
        ],
        image: "tailwindcss"
    },
    "MySQL": {
        title: "MySQL",
        description: "A popular open-source relational database management system.",
        level: "Familiar",
        uses: [
            "Backends of Mannheim (V1) and Area, until early 2025",
            "Used with Python for backend development"
        ],
        image: "mysql"
    },
    "PostgreSQL": {
        title: "PostgreSQL",
        description: "A powerful open-source relational database.",
        level: "Intermediate",
        uses: [
            "Database of NewMannheim, with SQLAlchemy and Alembic migrations",
            "Professional projects"
        ],
        image: "postgresql"
    },
    "C++": {
        title: "C++",
        description: "A powerful high-performance programming language used for system and game development.",
        level: "Advanced",
        uses: [
            "Solypengine: my own C++20 parallel-ECS game engine",
            "R-Type: ECS engine and multiplayer server",
            "Concurrent programming: Plazza, Gomoku's thread pool"
        ],
        image: "cplusplus"
    },
    "C": {
        title: "C",
        description: "A foundational programming language known for its efficiency and low-level memory access.",
        level: "Advanced",
        uses: [
            "My most used language: many projects since 2022, see the projects section",
            "Ftrace: a syscall and library call tracer using ptrace",
            "Linux kernel work: a custom syscall and kernel modules"
        ],
        image: "c"
    },
    "CMake": {
        title: "CMake",
        description: "A cross-platform build system generator for C and C++.",
        level: "Intermediate",
        uses: [
            "Builds of Solypengine (FetchContent, Linux and Windows) and R-Type",
            "C and C++ libraries such as a basic ECS"
        ],
        image: "cmake"
    },
    "Python": {
        title: "Python",
        description: "A versatile, high-level programming language known for its simplicity and readability.",
        level: "Advanced",
        uses: [
            "Backend development with FastAPI and Flask",
            "Image processing for a university assignment",
            "Automation and scripting"
        ],
        image: "python"
    },
    "Docker": {
        title: "Docker",
        description: "A platform for developing, shipping, and running applications in containers.",
        level: "Intermediate",
        uses: [
            "Containerizing applications for portability",
            "Docker Compose stacks for web apps (frontend, backend, database)",
            "Building an Android APK inside a container for NewMannheim"
        ],
        image: "docker"
    },
    "Git": {
        title: "Git",
        description: "A distributed version control system for tracking code changes.",
        level: "Advanced",
        uses: [
            "Collaborating on projects with GitHub and GitLab",
            "Tracking and managing source code changes",
            "Handling branching and merging strategies"
        ],
        image: "git"
    },
    "Jira": {
        title: "Jira",
        description: "A project management tool for tracking issues and agile development workflows.",
        level: "Familiar",
        uses: [
            "Tracking issues and organizing sprints in team projects"
        ],
        image: "jira"
    },
    "GitHub": {
        title: "GitHub",
        description: "A cloud-based platform for hosting and collaborating on Git repositories.",
        level: "Intermediate",
        uses: [
            "Hosting and managing my projects",
            "Collaborative coding with pull requests and issues",
            "GitHub Actions for CI and releases (Krc, professional projects)"
        ],
        image: "github"
    },
    "GNU Bash": {
        title: "GNU Bash",
        description: "A command-line shell used for scripting and automating tasks.",
        level: "Intermediate",
        uses: [
            "Automating repetitive tasks with shell scripts",
            "Build and test scripts in most of my projects",
            "Handling file and process management"
        ],
        image: "gnubash"
    },
    "Linux": {
        title: "Linux",
        description: "An open-source operating system used for servers, development, and security.",
        level: "Advanced",
        uses: [
            "My daily development environment",
            "Kernel programming: a custom syscall, a filesystem and kernel modules",
            "Server management and deployment"
        ],
        image: "linux"
    },
    "SQLite": {
        title: "SQLite",
        description: "A lightweight, file-based relational database system.",
        level: "Familiar",
        uses: [
            "Development database of NewMannheim",
            "Backend of the Epitech Survivor Pool project",
            "Rapid prototyping of database applications"
        ],
        image: "sqlite"
    },
    "FastAPI": {
        title: "FastAPI",
        description: "A high-performance web framework for building APIs with Python.",
        level: "Intermediate",
        uses: [
            "Backends of NewMannheim, EpiTrello, Mannheim and Area",
            "Building real-time applications with WebSockets"
        ],
        image: "fastapi"
    },
};


interface TitleProps {
    titleSetter: React.MutableRefObject<((title: string) => void) | undefined>;
}

const Title = React.memo(({ titleSetter }: TitleProps) => {
    const [title, setTitle] = useState<string>("");
    const [open, setOpen] = useState<boolean>(false);
    const [stepContent, setStepContent] = useState<TechnoCardStepContentProps>(slugs2["React"]);

    useEffect(() => {
        titleSetter.current = setTitle;
    }, [titleSetter]);

    useEffect(() => {
        setOpen(slugs2[title] != undefined);
        if (slugs2[title] != undefined) {
            setStepContent(slugs2[title]);
        }
    }, [title]);

    useEffect(() => {
        if (open == false) {
            setTitle("");
        }
    }, [open]);

    return (
        <TechnoCard isOpen={open} setOpen={setOpen} stepContent={stepContent} />
    );
});


export function IconCloudDemo() {
    const titleRefSetter = useRef<((title: string) => void) | undefined>()

    return (
        <div className="h-full items-center justify-center overflow-hidden rounded-lg border bg-background px-20 pb-20 pt-8 ">
            <IconCloud
                iconSlugs={slugs}
                onIconClick={(target) => {
                    if (titleRefSetter.current) {
                        titleRefSetter.current(target.title);
                    }
                }}
            />
            <Title titleSetter={titleRefSetter} />
        </div>
    );
}
