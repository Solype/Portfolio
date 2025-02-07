import { HeroGeometric } from "@/components/ui/shape-landing-hero"

const HomePage1 = () => {
    return (
        <div className="bg-gradient-to-b from-primary via-other to-background gap-16" style={{ height: "90vh" }}>
            <HeroGeometric
                badge="3rd year in computer science"
                title1="Ambroise Jacquemet"
                title2="Full Stack Developer"
                comment="Ready to code the world again"
            />
            <div className="m-8"/>
        </div>
    );
};

export default HomePage1;
