function Project1() {
    return (
        <div className={`relative min-h-screen flex items-center justify-center`}>
            <div className="text-center p-6 rounded-lg shadow-lg">
                <h1 className="text-4xl font-bold text-primary mb-4">
                    Other Section
                </h1>
                <p className="text-lg text-secondary">
                    This is section number.
                </p>
            </div>
        </div>
    );
}


function Introduction() {
    return (
        <div className={`min-h-screen flex items-center justify-center`}>
            <div className="text-center p-6 rounded-lg shadow-lg">
                <h1 className="text-4xl font-bold text-primary mb-4">
                    Project section
                </h1>
                <p className="text-lg text-secondary">
                    Welcome to the project section.
                </p>
                <p className="text-lg text-secondary">
                    Here you can find all the most technical or interesting projects I have worked on.
                </p>
                <p className="text-lg text-secondary">
                    Scroll down to see more.
                </p>
            </div>
        </div>
    );
}

function Projects() {
    // Crée un tableau avec 20 éléments pour la démonstration

    return (

        <div className="snap-y snap-mandatory overflow-y-scroll h-screen ">
            <div className="snap-always snap-center" >
                <Introduction />
            </div>
            <div className="snap-always snap-center" >
                <Project1 />
            </div>
        </div>
    );
}

export default Projects;
