import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import LineGradient from '../LineGradient';
import { AuthorCard } from '@/components/ui/content-card';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Feature, FeatureProps } from '@/components/ui/feature-with-image-carousel';
import { AreaProject, GomokuProject, KrcProject } from '@/components/projects/Projects';

const TOP_PROJECTS = [KrcProject, AreaProject, GomokuProject];

const HomePage2: React.FC = () => {
    const [current, setCurrent] = useState<FeatureProps | null>(null);

    return (
        <div className="pt-10 pb-24 px-6 md:px-20">
            <motion.div
                className="mt-32"
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
                    MY <span className="text-accent">TOP</span> PROJECTS
                </p>
                <LineGradient width="w-1/3" />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-16">
                {TOP_PROJECTS.map((project, index) => (
                    <motion.div
                        key={project.cardProps.content.title}
                        className="flex justify-center"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.5, delay: index * 0.15 }}
                        onClick={() => project.projectProps && setCurrent(project.projectProps)}
                    >
                        <AuthorCard {...project.cardProps} />
                    </motion.div>
                ))}
            </div>

            <div className="flex justify-center mt-12">
                <Link
                    to="/projects"
                    className="rounded-md bg-primary px-6 py-3 font-semibold text-white transition hover:bg-accent"
                >
                    See all projects
                </Link>
            </div>

            <Dialog open={current != null} onOpenChange={(open) => !open && setCurrent(null)}>
                <DialogContent className="max-h-[85vh] overflow-y-auto w-[95vw] max-w-6xl flex flex-col justify-center items-center">
                    {current && <Feature {...current} />}
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default HomePage2;
