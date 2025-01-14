import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './page/Home';
import Navbar from './composant/Navbar';
import About from './page/About';
import Projects from './page/Projects';
import Contact from './page/Contact';

function App() {
    return (
        <>
            <div>
                <Router>
                    <Navbar />
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/projects" element={<Projects />} />
                            <Route path="/contact" element={<Contact />} />
                            <Route path="*" element={<h1>Page Not Found</h1>} />
                        </Routes>
                </Router>
            </div>
        </>
    )
}

export default App
