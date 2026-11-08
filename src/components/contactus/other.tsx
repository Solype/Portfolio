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
                    <Button asChild className="flex items-center gap-2 bg-primary text-white hover:bg-accent">
                        <a href="https://github.com/Solype" target="_blank" rel="noopener noreferrer">
                            <FaGithub />
                            GitHub
                        </a>
                    </Button>
                    <Button asChild className="flex items-center gap-2 bg-primary text-white hover:bg-accent">
                        <a href="mailto:ambroise.jacquemet-ramirez-vega@epitech.eu">
                            <FaEnvelope />
                            Email
                        </a>
                    </Button>
                    <Button asChild className="flex items-center gap-2 bg-primary text-white hover:bg-accent">
                        <a href="https://discord.com/users/solype" target="_blank" rel="noopener noreferrer">
                            <FaDiscord />
                            Discord
                        </a>
                    </Button>
                    <Button asChild className="flex items-center gap-2 bg-primary text-white hover:bg-accent">
                        <a href="https://www.linkedin.com/in/ambroise-jacquemet-a07610266/" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin />
                            LinkedIn
                        </a>
                    </Button>
                </div>

                <p className="text-lg text-center text-primary">
                    &copy; {new Date().getFullYear()} Ambroise Jacquemet. All rights reserved.
                </p>
            </div>
        </footer>
    )
}

export default Footer
