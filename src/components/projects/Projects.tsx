import { AuthorCardProps } from "@/components/ui/content-card";
import AreaImage from "@/assets/Area1.png";
import ArcadeImage from "@/assets/Arcade1.png";

function composeImageUrl(imageName: string): string {
    return `https://cdn.jsdelivr.net/npm/simple-icons@14.0.0/icons/${imageName}.svg`;
}

export const AreaProject: AuthorCardProps = {
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
};

export const ArcadeProject: AuthorCardProps = {
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
};
