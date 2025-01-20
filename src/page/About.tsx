import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FaArrowRight } from "react-icons/fa";
import profilePic from "@/assets/Photo.jpg"; // Replace with your image path
import hobbiesPic from "@/assets/climbing.jpg"; // Replace with your hobbies image path
import englishIcon from "@/assets/english-icon.png"; // Replace with actual language icon
import frenchIcon from "@/assets/Flag_of_France.png"; // Replace with actual language icon
import germanIcon from "@/assets/german-flag.jpg"; // Replace with actual language icon
import pythonIcon from "@/assets/python-icon.png"; // Replace with actual tech icon
import cppIcon from "@/assets/cpp-icon.jpg"; // Replace with actual tech icon
import reactIcon from "@/assets/react-icon.png"; // Replace with actual tech icon

export default function About() {
    return (
        <div className="min-h-screen bg-background flex items-center justify-center">
            <div className="max-w-5xl w-full space-y-10 p-6">
                {/* Header Section */}
                <Card className="bg-primary text-white">
                    <CardHeader className="text-center">
                        <CardTitle className="text-4xl font-bold">About Me</CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="md:w-1/2 space-y-4 text-left">
                            <p>
                                Hi! I'm a passionate developer who loves solving problems and learning new technologies. 
                                My expertise spans low-level programming, automation, and modern web frameworks.
                            </p>
                            <a href="/assets/AmbroiseCV.pdf" download>
                                <Button className="mt-4">
                                    My CV <FaArrowRight className="ml-2" />
                                </Button>
                            </a>
                        </div>
                        <img
                            src={profilePic}
                            alt="Profile Picture"
                            className="w-40 h-40 rounded-full border-4 border-white shadow-lg"
                        />
                    </CardContent>
                </Card>

                {/* Language Proficiency Section */}
                <Card>
                    <CardHeader>
                        <CardTitle className="text-2xl font-bold">Languages</CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col md:flex-row items-center gap-6">
                        <div className="space-y-2 text-secondary">
                            <div className="flex items-center gap-2">
                                <img src={englishIcon} alt="English" className="w-8 h-8" />
                                <span><strong>English:</strong> B2/C1</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <img src={frenchIcon} alt="French" className="w-8 h-8" />
                                <span><strong>French:</strong> Native</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <img src={germanIcon} alt="German" className="w-8 h-8" />
                                <span><strong>German:</strong> A2</span>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Skills Section with Graph */}
                <Card>
                    <CardHeader>
                        <CardTitle className="text-2xl font-bold">Technical Skills</CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="space-y-2">
                            <div className="flex items-center gap-2">
                                <img src={cppIcon} alt="C++" className="w-8 h-8" />
                                <span><strong>Expert:</strong> C, C++, Python</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <img src={pythonIcon} alt="Python" className="w-8 h-8" />
                                <span><strong>Proficient:</strong> React.js, JavaScript</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <img src={reactIcon} alt="React" className="w-8 h-8" />
                                <span><strong>Familiar:</strong> Bash, Assembly</span>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2">
                            <canvas id="skillsChart" className="w-full"></canvas>
                        </div>
                    </CardContent>
                </Card>

                {/* Hobbies Section */}
                <Card>
                    <CardHeader>
                        <CardTitle className="text-2xl font-bold">Hobbies</CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="space-y-2">
                            <p><strong>Music:</strong> Accordion</p>
                            <p><strong>Sports:</strong> Archery, Rock Climbing</p>
                        </div>
                        <img
                            src={hobbiesPic}
                            alt="Hobbies Image"
                            className="rounded-lg shadow-md border-2 border-gray-300 w-60"
                        />
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
