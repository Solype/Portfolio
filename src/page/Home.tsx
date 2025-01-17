// import joke1 from "@/assets/joke1.jpg"

function Home() {
    return (
        <div className="min-h-screen bg-background flex items-center justify-center">
            <div className="text-center p-6 bg-white rounded-lg shadow-lg">
                <h1 className="text-4xl font-bold text-primary mb-4">
                    Ambroise Jacquemet
                </h1>
                <p className="text-lg text-secondary">
                    Greetings ! I'm an Epitech Student 
                </p>
                <button className="mt-6 px-6 py-2 bg-accent text-white font-semibold rounded-full hover:bg-accent/80">
                    Contact Me
                </button>
            </div>
        </div>
    );
}

export default Home;
