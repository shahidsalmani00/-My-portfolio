import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useScroll } from '../hooks/useScroll';

const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { y, direction } = useScroll();
    const isScrolled = y > 20;
    const isHidden = y > 100 && direction === 'down';

    return (
        <motion.nav
            initial={{ y: 0 }}
            animate={{ y: isHidden ? -100 : 0 }}
            transition={{ duration: 0.3 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-4 bg-dark-900/80 backdrop-blur-lg border-b border-white/10' : 'py-6 bg-transparent'
                }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                <motion.a
                    href="#"
                    whileHover={{ scale: 1.05 }}
                    className="text-2xl font-bold flex items-center gap-2"
                >
                    <span className="w-8 h-8 bg-frog rounded-lg flex items-center justify-center text-white text-xs">S</span>
                    <span className="text-white">Shahid<span className="text-frog">.</span></span>
                </motion.a>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-gray-300 hover:text-frog transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}
                    <a href="#contact" className="btn-primary text-sm py-2">
                        Hire Me
                    </a>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-2xl text-white"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-dark-800 border-b border-white/10 overflow-hidden"
                    >
                        <div className="container mx-auto px-6 py-8 flex flex-col gap-6">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-lg font-medium text-gray-300 hover:text-frog"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <a
                                href="#contact"
                                onClick={() => setIsOpen(false)}
                                className="btn-primary text-center justify-center"
                            >
                                Hire Me
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
