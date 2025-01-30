"use client";

import { motion } from "framer-motion";
import { Circle } from "lucide-react";
import { cn } from "@/lib/utils";

function ElegantShape({
    className,
    delay = 0,
    width = 400,
    height = 100,
    rotate = 0,
    gradient = "from-white/[0.08]",
} : {
    className?: string;
    delay?: number;
    width?: number;
    height?: number;
    rotate?: number;
    gradient?: string;
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: -150, rotate: rotate - 15 }}
            animate={{ opacity: 1, y: 0, rotate: rotate }}
            transition={{
                duration: 2.4,
                delay,
                ease: [0.23, 0.86, 0.39, 0.96],
                opacity: { duration: 1.2 },
            }}
            className={cn("absolute", className)}
        >
            <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{
                    duration: 12,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                }}
                style={{ width, height }}
                className="relative"
            >
                <div
                    className={cn(
                        "absolute inset-0 rounded-full",
                        "bg-gradient-to-r to-transparent",
                        gradient,
                        "backdrop-blur-[2px] border-2 border-[#0B4F6C]/50",
                        "shadow-[0_8px_32px_0_rgba(11,79,108,0.1)]",
                        "after:absolute after:inset-0 after:rounded-full",
                        "after:bg-[radial-gradient(circle_at_50%_50%,rgba(11,79,108,0.2),transparent_70%)]"
                    )}
                />
            </motion.div>
        </motion.div>
    );
}

function HeroGeometric({
    badge = "Design Collective",
    title1 = "Elevate Your Digital Vision",
    title2 = "Crafting Exceptional Websites",
    comment = "Crafting exceptional digital experiences through innovative design and cutting-edge technology."
}) {
    const fadeUpVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: (i : number) => ({
            opacity: 1,
            y: 0,
            transition: { duration: 1, delay: 0.5 + i * 0.2, ease: [0.25, 0.4, 0.25, 1] },
        }),
    };

    return (
        <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 blur-3xl" />

            <div className="absolute inset-0 overflow-hidden">
                <ElegantShape delay={0.3} width={600} height={140} rotate={12} gradient="from-[#0B4F6C]/40" className="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]" />
                <ElegantShape delay={0.5} width={500} height={120} rotate={-15} gradient="from-[#B80C09]/40" className="right-[-5%] md:right-[0%] top-[70%] md:top-[75%]" />
                <ElegantShape delay={0.4} width={300} height={80} rotate={-8} gradient="from-[#01BAEF]/40" className="left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]" />
            </div>

            <div className="relative z-10 container mx-auto px-4 md:px-6">
                <div className="max-w-3xl mx-auto text-center">
                    <motion.div
                        custom={0}
                        variants={fadeUpVariants}
                        initial="hidden"
                        animate="visible"
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B4F6C]/10 border border-[#0B4F6C]/30 mb-8 md:mb-12"
                    >
                        <Circle className="h-2 w-2 fill-[#B80C09]" />
                        <span className="text-sm text-[#040F16]/80 tracking-wide">{badge}</span>
                    </motion.div>

                    <motion.div custom={1} variants={fadeUpVariants} initial="hidden" animate="visible">
                        <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-6 md:mb-8 tracking-tight">
                            <span className="bg-clip-text text-transparent bg-gradient-to-b from-[#0B4F6C] to-[#01002C]">{title1}</span>
                            <br />
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#B80C09] via-[#0B4F6C] to-[#01BAEF]">
                                {title2}
                            </span>
                        </h1>
                    </motion.div>

                    <motion.div custom={2} variants={fadeUpVariants} initial="hidden" animate="visible">
                        <p className="text-base sm:text-lg md:text-xl text-[#040F16]/60 mb-8 leading-relaxed font-light tracking-wide max-w-xl mx-auto px-4">
                            {comment}
                        </p>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

export { HeroGeometric };
