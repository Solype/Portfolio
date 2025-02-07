import { AuthorCardProps } from "@/components/ui/content-card";
import { FeatureProps } from "../ui/feature-with-image-carousel";
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
