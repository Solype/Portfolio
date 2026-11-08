import HomePage1 from "@/components/home/HomePage1";
import HomePage2 from "@/components/home/HomePage2";
import LineGradient from "@/components/LineGradient";
import HomePage4 from "@/components/home/HomePage4";


function Home() {
    return (
        <div className="overflow-y-scroll h-screen bg-background">
            <div className="w-full">
                <HomePage1 />
            </div>
            <div className="w-full">
                <HomePage2 />
            </div>
            <LineGradient width="w-full" />
            <div className="w-5/6 mx-auto">
                <HomePage4 />
            </div>
            <LineGradient />
            <footer className="border-t border-primary p-4">
                <div className=" px-10">
                    <div className="md:flex justify-center md:justify-between text-center ">
                        <div className="flex items-end gap-2">
                            <p className="font-playfair font-semibold text-2xl text-primary">by Ambroise JACQUEMET</p>
                            <p className="font-playfair text-s text-primary">with React js &amp; Tailwind</p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Home;
