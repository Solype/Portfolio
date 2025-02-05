import { AuthorCardProps } from "@/components/ui/content-card";
import AreaImage from "@/assets/Area2.png";
import ArcadeImage from "@/assets/Arcade2.png";
import RaytracerImage from "@/assets/raytracer.jpg";
import MyRPGImage from "@/assets/MyRPG1.png";

function composeImageUrl(imageName: string): string {
    return `https://cdn.jsdelivr.net/npm/simple-icons@14.0.0/icons/${imageName}.svg`;
}

export type ProjectType = {
    cardProps: AuthorCardProps,
    projectProps?: AuthorCardProps
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
    }
};

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
