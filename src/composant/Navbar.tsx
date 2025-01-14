import { Link } from 'react-router-dom';
import photo from '@/assets/Photo.jpg';

function Navbar() {
    const classNameLink = "text-white p-3 hover:bg-slate-200 hover:bg-foret transition duration-200 ease-in-out w-full text-center h-full w-full";

    return (
        <div className="fixed top-0 left-0 right-0 bg-foret text-white z-50 shadow-[0_0_18px_4px_rgba(255,255,255,0.2)] text-xl font-bold">
            <div className="flex justify-between items-center px-4 relative z-10 h-full">
                <div className="flex gap-2 items-center p-2">
                    <img src={photo} className="w-10 h-10 rounded-full" alt="A.JACQUEMET" /><p>A.JACQUEMET</p>
                </div>
                <div className="flex h-full">
                    <Link className={classNameLink} to="/">Home</Link>
                    <Link className={classNameLink} to="/about">About</Link>
                    <Link className={classNameLink} to="/projects">Projects</Link>
                    <Link className={classNameLink} to="/contact">Contact</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
