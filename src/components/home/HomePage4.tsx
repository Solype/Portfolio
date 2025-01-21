import { motion } from "framer-motion";
import LineGradient from "../LineGradient";

interface TimeLineElementProps {
    title : string
    time : string
    children : React.ReactNode
}

function TimeLineElement({ title, time, children }: TimeLineElementProps) {
    return (
        <motion.div
            initial={{ y: 50, x: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: 'backInOut' }}
            className="relative md:w-1/2"
        >
            <div className="border bg-white/20 border-otherDarkBlue rounded-xl p-4 text-yellow flex flex-col">
                <h3 className="text-xl font-semibold self-center">{title}</h3>
                <span className="italic mb-2">{time}</span>
                <p>{children}</p>
            </div>
        </motion.div>
    )
}
function HomePage4() {

    return (
        <div className="min-h-screen pt-10 pb-24 p-20">
            <div className="md:flex md:justify-between md:gap-16 mt-32">
                <motion.div
                    className="md:w-1/3"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                    }}
                >
                    <p className="font-playfair font-semibold text-4xl mb-5">
                        MY <span className="text-accent">PROFESSIONNAL</span> EXPERIENCES
                    </p>
                    <LineGradient width="w-1/3" />
                </motion.div>
            </div>
            <div className="relative flex flex-col gap-12 mt-16 items-center">
                
                <TimeLineElement title="Safran, France, July 2023" time="6 months">
                    <>
                        <span style={{ display: 'block', marginLeft: 0 }}>Coding in XSLT and JS: </span>
                        <span style={{ display: 'block', marginLeft: 20 }}>• Creation an internal app to display XML data correctly</span>
                        <span style={{ display: 'block', marginLeft: 20 }}>• Transform XML document to other format</span>
                    </>
                </TimeLineElement>
                <TimeLineElement title="AI Hackathon with Extia, Barcelona - 05/24" time="2 days">
                    <>
                        <span style={{ display: 'block', marginLeft: 0 }}>Participation in an AI Hackathon with Extia in Barcelona.
                            Creation of an AI model to help users to properly code.
                        </span>
                    </>
                </TimeLineElement>
            </div>
        </div>
    )
}

export default HomePage4