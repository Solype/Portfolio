import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Home from './page/Home';
import Navbar from './components/Navbar';
import About from './page/About';
import Projects from './page/Projects';
import Contact from './page/Contact';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect } from 'react';

const SITE_URL = 'https://ambroise-jacquemet.netlify.app';

const PAGE_META: Record<string, { title: string; description: string }> = {
    '/': {
        title: 'Ambroise Jacquemet · Full-Stack Developer Portfolio',
        description: 'Portfolio of Ambroise Jacquemet, full-stack developer and Epitech student: C, C++, Rust, React and Python projects, from a Korean-language compiler to game engines.',
    },
    '/projects': {
        title: 'Projects · Ambroise Jacquemet',
        description: 'Projects by Ambroise Jacquemet: Krc compiler in Rust, Solypengine C++ game engine, R-Type, Corewar, 42sh, NewMannheim and more.',
    },
    '/about': {
        title: 'About · Ambroise Jacquemet',
        description: 'Skills, languages and hobbies of Ambroise Jacquemet: C, C++, Rust, TypeScript, React, Python, FastAPI, Docker and Linux.',
    },
    '/contact': {
        title: 'Contact · Ambroise Jacquemet',
        description: 'Contact Ambroise Jacquemet, full-stack developer: send a message or find him on GitHub and LinkedIn.',
    },
};

function usePageMeta(pathname: string) {
    useEffect(() => {
        const path = PAGE_META[pathname] ? pathname : '/';
        const { title, description } = PAGE_META[path];
        document.title = title;
        document.querySelector('meta[name="description"]')?.setAttribute('content', description);
        document.querySelector('link[rel="canonical"]')?.setAttribute('href', SITE_URL + (path === '/' ? '/' : path));
    }, [pathname]);
}

function AppChild() {
    const location = useLocation();
    usePageMeta(location.pathname);

    return (
        <div>
            <Navbar />
            <AnimatePresence mode='wait'>
                <Routes location={location} key={location.pathname}>
                        <Route path="/" element={<MotionWrapper><Home /></MotionWrapper>} />
                        <Route path="/about" element={<MotionWrapper><About /></MotionWrapper>} />
                        <Route path="/projects" element={<MotionWrapper><Projects /></MotionWrapper>} />
                        <Route path="/contact" element={<MotionWrapper><Contact /></MotionWrapper>} />
                        <Route path="*" element={<MotionWrapper><Home /></MotionWrapper>} />
                </Routes>
            </AnimatePresence>
        </div>
    );
}

function MotionWrapper({ children }: { children: React.ReactNode }) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
            {children}
        </motion.div>
    );
}

export default function App() {
    return (
        <Router>
            <AppChild />
        </Router>
    );
}
