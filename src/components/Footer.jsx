import React from 'react';
import { personalInfo } from '../data/content';
import { FaArrowUp } from 'react-icons/fa';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-12 px-6 border-t border-white/5 bg-dark-900">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
                    <div className="text-center md:text-left">
                        <a href="#" className="text-2xl font-bold flex items-center gap-2 justify-center md:justify-start mb-4">
                            <span className="w-8 h-8 bg-frog rounded-lg flex items-center justify-center text-white text-xs">S</span>
                            <span className="text-white">Shahid<span className="text-frog">.</span></span>
                        </a>
                        <p className="text-gray-500 text-sm max-w-xs">
                            Building fast websites and modern mobile applications. B.Tech Graduate 2025.
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-8 text-sm font-medium text-gray-400">
                        <a href="#about" className="hover:text-frog transition-colors">About</a>
                        <a href="#projects" className="hover:text-frog transition-colors">Projects</a>
                        <a href="#services" className="hover:text-frog transition-colors">Services</a>
                        <a href="#contact" className="hover:text-frog transition-colors">Contact</a>
                    </div>

                    <div className="flex items-center gap-4">
                        {personalInfo.socials.map((social) => (
                            <a
                                key={social.name}
                                href={social.url}
                                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-frog hover:border-frog transition-all duration-300"
                                title={social.name}
                            >
                                <social.icon />
                            </a>
                        ))}
                    </div>
                </div>

                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600 font-medium">
                    <p>© {currentYear} Shahid Salmani. All rights reserved.</p>
                    <p>Made with ❤️ for typing efficiency.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
