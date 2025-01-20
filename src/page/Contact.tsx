import { Button } from "@/components/ui/button";
import { FaGithub, FaEnvelope, FaPhoneAlt, FaLinkedin, FaDiscord } from "react-icons/fa";

function Contact() {
    return (
        <div className="min-h-screen bg-background flex items-center justify-center">
            <div className="max-w-3xl w-full space-y-10 p-6 bg-white rounded-lg shadow-lg">
                <h1 className="text-4xl font-bold text-primary text-center mb-4">
                    Contact Me
                </h1>

                <p className="text-lg text-secondary text-center mb-6">
                    You can reach out to me through any of the following methods.
                </p>

                {/* GitHub Section */}
                <div className="bg-gray-100 p-6 rounded-lg shadow-md space-y-4">
                    <h2 className="text-2xl font-semibold text-primary">GitHub</h2>
                    <p className="text-secondary">
                        You can find my projects and repositories on GitHub.
                    </p>
                    <div className="flex flex-col gap-4">
                        <a href="https://github.com/Solype" target="_blank" rel="noopener noreferrer">
                            <Button className="flex items-center gap-2 bg-primary text-white hover:bg-accent">
                                <FaGithub />
                                Solype GitHub Profile
                            </Button>
                        </a>
                        <a href="https://github.com/Nalistas" target="_blank" rel="noopener noreferrer">
                            <Button className="flex items-center gap-2 bg-primary text-white hover:bg-accent">
                                <FaGithub />
                                Nalistas GitHub Profile
                            </Button>
                        </a>
                    </div>
                </div>

                {/* Email & Phone Section */}
                <div className="bg-gray-100 p-6 rounded-lg shadow-md space-y-4">
                    <h2 className="text-2xl font-semibold text-primary">Email & Phone</h2>
                    <p className="text-secondary">
                        Feel free to email me or give me a call for any inquiries.
                    </p>
                    <div className="flex flex-col gap-4">
                        <a href="mailto:ambroise.jacqemet-ramirez-vega@epitech.eu">
                            <Button className="flex items-center gap-2 bg-primary text-white hover:bg-accent">
                                <FaEnvelope />
                                EPITECH Email (prefered)
                            </Button>
                        </a>
                        <a href="mailto:ambroise.jacquemet@laposte.net">
                            <Button className="flex items-center gap-2 bg-primary text-white hover:bg-accent">
                                <FaEnvelope />
                                Private Email
                            </Button>
                        </a>
                    </div>
                </div>

                {/* Social Networks Section */}
                <div className="bg-gray-100 p-6 rounded-lg shadow-md space-y-4">
                    <h2 className="text-2xl font-semibold text-primary">Social Networks</h2>
                    <p className="text-secondary">
                        Connect with me on these social platforms.
                    </p>
                    <div className="flex gap-4">
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
                </div>
            </div>
        </div>
    );
}

export default Contact;
