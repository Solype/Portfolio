import { IconCloud } from "@/components/ui/interactive-icon-cloud"

import React, { useRef, useState, useEffect } from "react";

interface drawerProps {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
    title: string;
}

const slugs = [
    "typescript",
    "javascript",
    "react",
    "html5",
    "css3",
    "nodedotjs",
    "nextdotjs",
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

const slugs2 = {
    "typescript": "TypeScript",
    "javascript": "JavaScript",
    "react": <div><h2>React</h2><p>I usually use React for my personal projects.</p><p>This Portfolio is made with React and shadcn/ui</p></div>,
    "html5": "HTML5",
    "css3": "CSS3",
    "nodedotjs": "Node.js",
    "nextdotjs": "Next.js",
    "mysql": "MySQL",
    "cplusplus": "C++",
    "c": "C",
    "python": "Python",
    "docker": "Docker",
    "git": "Git",
    "jira": "Jira",
    "github": "GitHub",
    "gnubash": "GNU Bash",
    "linux": "Linux",
    "sqlite": "SQLite",
    "fastapi": "FastAPI",
}

interface TitleProps {
    titleSetter: React.MutableRefObject<((title: string) => void) | undefined>;
}

const Title = React.memo(({ titleSetter }: TitleProps) => {
    const [title, setTitle] = useState("")

    useEffect(() => {
        titleSetter.current = setTitle
    }, [])
    return (
        <div className="flex items-center justify-center">
            {title}
        </div>
    );
});

export function IconCloudDemo() {
    const titleRefSetter = useRef<((title: string) => void) | undefined>()

    return (
        <div className="w-full items-center justify-center overflow-hidden rounded-lg border bg-background px-20 pb-20 pt-8 ">
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
