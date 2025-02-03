import { IconCloud } from "@/components/ui/interactive-icon-cloud"

import React, { useRef, useState, useEffect } from "react";
import { TechnoCard, TechnoCardStepContentProps } from "./Technocard";


const slugs = [
    "typescript",
    "javascript",
    "react",
    "nodedotjs",
    "mysql",
    "cplusplus",
    "c",
    "python",
    "docker",
    "git",
    "jira",
    "github",
    "gnubash",
    "linux",
    "sqlite",
    "fastapi"
]

const slugs2: { [id: string]: TechnoCardStepContentProps; } = {
    "React": { 
        title: "React.js",
        description: "A JavaScript library for building reactive and high-performance user interfaces.",
        level: "Advanced",
        uses: [
            "Building Single Page Applications",
            "Creating dynamic and reactive interfaces",
            "This website is built with React.js, more specifically Vite.js"
        ],
        image: "react"
    },
    "TypeScript": { 
        title: "TypeScript",
        description: "A strongly typed superset of JavaScript that improves code robustness.",
        level: "Intermediate",
        uses: [
            "Frontend and backend application development",
            "Enhancing code maintainability",
            "Reducing errors with static typing"
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
            "Developing RESTful APIs and microservices",
            "Building real-time applications with WebSockets",
            "I used node.js multiple times for backend development"
        ],
        image: "nodedotjs"
    },
    "MySQL": { 
        title: "MySQL",
        description: "A popular open-source relational database management system.",
        level: "Intermediate",
        uses: [
            "Storing and managing structured data",
            "Handling relational databases for web applications",
            "Optimizing queries for better performance",
            "I used MySQL especially with python for backend development"
        ],
        image: "mysql"
    },
    "C++": { 
        title: "C++",
        description: "A powerful high-performance programming language used for system and game development.",
        level: "Advanced",
        uses: [
            "Developing high-performance applications",
            "Game development, by building an ecs engine and multiplayer server",
            "Also used for concurrent programming"
        ],
        image: "cplusplus"
    },
    "C": { 
        title: "C",
        description: "A foundational programming language known for its efficiency and low-level memory access.",
        level: "Advanced",
        uses: [
            "I have done a lot of projects in C, you can see them in the projects section",
            "Well understanding the low level of the system",
            "I am currently working on An Http server with C"
        ],
        image: "c"
    },
    "Python": { 
        title: "Python",
        description: "A versatile, high-level programming language known for its simplicity and readability.",
        level: "Advanced",
        uses: [
            "Data science and machine learning",
            "Backend development with FastAPI and Flask",
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
            "Managing microservices architectures",
            "CI/CD pipeline integration",
            "I usually use it for Web Development, to encapsulate the frontend and backend applications"
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
        level: "Intermediate",
        uses: [
            "Managing software development projects",
            "Tracking issues and bugs",
            "Organizing agile sprints"
        ],
        image: "jira"
    },
    "GitHub": { 
        title: "GitHub",
        description: "A cloud-based platform for hosting and collaborating on Git repositories.",
        level: "Intermediate",
        uses: [
            "Hosting and managing open-source projects",
            "Collaborative coding with pull requests and issues",
            "Using GitHub Actions for CI/CD automation"
        ],
        image: "github"
    },
    "GNU Bash": { 
        title: "GNU Bash",
        description: "A command-line shell used for scripting and automating tasks.",
        level: "Intermediate",
        uses: [
            "Automating repetitive tasks with shell scripts",
            "Managing Unix/Linux systems",
            "Handling file and process management"
        ],
        image: "gnubash"
    },
    "Linux": { 
        title: "Linux",
        description: "An open-source operating system used for servers, development, and security.",
        level: "Intermediate",
        uses: [
            "Server management and deployment",
            "Shell scripting"
        ],
        image: "linux"
    },
    "SQLite": { 
        title: "SQLite",
        description: "A lightweight, file-based relational database system.",
        level: "Familiar",
        uses: [
            "Storing data in mobile and embedded applications",
            "Local database management for small-scale projects",
            "Rapid prototyping of database applications"
        ],
        image: "sqlite"
    },
    "FastAPI": { 
        title: "FastAPI",
        description: "A high-performance web framework for building APIs with Python.",
        level: "Intermediate",
        uses: [
            "Developing fast and scalable APIs",
            "Building real-time applications with WebSockets",
            "I used FastAPI multiple times for backend development"
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
                onIconClick={(e: any) => {
                    if (titleRefSetter.current) {
                        titleRefSetter.current(e.title);
                    }
                }} 
            />
            <Title titleSetter={titleRefSetter} />
        </div>
    );
}
