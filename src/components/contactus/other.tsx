import { Button } from "@/components/ui/button"
import { FaGithub, FaEnvelope} from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"
import { FaDiscord } from "react-icons/fa"

function Footer() {
    return (
        <footer className="bg-background p-6 text-white">
            <div className="max-w-3xl w-full mx-auto space-y-10">

                <div className="flex flex-wrap justify-center items-center gap-4">
                    <p className="text-primary">You can also find me on:</p>
                    <a href="https://github.com/Solype" target="_blank" rel="noopener noreferrer">
                        <Button className="flex items-center gap-2 bg-primary text-white hover:bg-accent">
                            <FaGithub />
                            GitHub
                        </Button>
                    </a>
                    <a href="mailto:ambroise.jacqemet-ramirez-vega@epitech.eu">
                        <Button className="flex items-center gap-2 bg-primary text-white hover:bg-accent">
                            <FaEnvelope />
                            Outlook
                        </Button>
                    </a>
                    <a href="https://discord.com/users/solype" target="_blank" rel="noopener noreferrer">
                        <Button className="flex items-center gap-2 bg-primary text-white hover:bg-accent">
                            <FaDiscord />
                            Discord
                        </Button>
                    </a>
                    <a href="https://www.linkedin.com/in/ambroise-jacquemet-a07610266/" target="_blank" rel="noopener noreferrer">
                        <Button className="flex items-center gap-2 bg-primary text-white hover:bg-accent">
                            <FaLinkedin />
                            LinkedIn
                        </Button>
                    </a>
                </div>

                <p className="text-lg text-center">
                    &copy; 2023 Ambroise Jacquemet. All rights reserved.
                </p>
            </div>
        </footer>
    )
}

export default Footer