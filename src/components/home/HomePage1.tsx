import useMediaQuery from "@/hooks/useMediaQuery";
import { motion } from "framer-motion";
import ProfilePic from "@/assets/Photo.jpg";
import { HeroGeometric } from "@/components/ui/shape-landing-hero"

const HomePage1 = () => {
    const isAboveLarge = useMediaQuery("(min-width: 1060px)");
    return (
        <div className="bg-gradient-to-b from-primary via-other to-background gap-16" style={{ height: "90vh" }}>
            <HeroGeometric
                badge="3rd year in computer science"
                title1="Ambroise Jacquemet"
                title2="Full Stack Developer"
                />
            <div className="m-8"/>
        </div>
        // <div className="bg-gradient-to-b from-primary via-other to-background" style={{ height: "80vh" }}>
        //     <section
        //         id="home"
        //         className="w-5/6 mx-auto md:flex md:justify-between md:items-center gap-16 md:h-full py-10"
        //     >
        //         {/* IMAGE SECTION */}
        //         <div className="basis-3/5 z-10 mt-16 md:mt-32 flex justify-center md:order-2">
        //                 {isAboveLarge ? (
        //                     <motion.img
        //                     src={ProfilePic}
        //                     alt="Profile Picture"
        //                     className="border-4 border-white shadow-lg items-center justify-center"
        //                     style={{
        //                         borderTopLeftRadius: '50%',
        //                         borderBottomRightRadius: '50%',
        //                     }}
        //                     whileHover={{
        //                         borderTopLeftRadius: '0%',
        //                         borderBottomRightRadius: '0%',
        //                         borderTopRightRadius: '50%',
        //                         borderBottomLeftRadius: '50%',
        //                     }}/>
        //                 ) : (
        //                 <img
        //                     alt="profile"
        //                     className="z-10 w-full max-w-[400px] md:max-w-[600px]"
        //                     src={ProfilePic}
        //                 />
        //                 )}
        //         </div>

        //         {/* MAIN TEXT */}
        //         <div className="z-30 basis-2/5 mt-12 md:mt-32">
        //             {/* HEADINGS */}
        //             <motion.div
        //                 initial="hidden"
        //                 whileInView="visible"
        //                 viewport={{ once: true, amount: 0.5 }}
        //                 transition={{ duration: 0.5 }}
        //                 variants={{
        //                     hidden: { opacity: 0, x: -50 },
        //                     visible: { opacity: 1, x: 0 },
        //                 }}
        //             >
        //                 <p className="text-6xl font-playfair z-10 text-center md:text-start">
        //                     Ambroise {""}
        //                     <span
        //                         className="xs:relative xs:text-deep-blue xs:font-semibold z-20 xs:before:content-brush
        //                     before:absolute before:-left-[25px] before:-top-[70px] before:z-[-1]"
        //                 >
        //                     JACQUEMET
        //                     </span>
        //                 </p>

        //                 <p className="mt-10 mb-7 text-sm text-center md:text-start">
        //                     Hello, I am an Epitech Student and a full-stack developer.
        //                     For now I am based in Berlin, but maybe tomorrow I will be in your city, who knows ?
        //                     I am currently looking for an intership !
        //                 </p>
        //             </motion.div>
        //         </div>
        //     </section>
        // </div>

    );
};

export default HomePage1;
