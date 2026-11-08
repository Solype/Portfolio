import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Home from './page/Home';
import Navbar from './components/Navbar';
import About from './page/About';
import Projects from './page/Projects';
import Contact from './page/Contact';
import { AnimatePresence, motion } from 'framer-motion';

function AppChild() {
    const location = useLocation();

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
