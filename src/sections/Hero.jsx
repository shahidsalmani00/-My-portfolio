import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaYoutube, FaInstagram, FaArrowRight } from 'react-icons/fa';
import { personalInfo } from '../data/content';
import shahidHero from '../assets/images/profile picture.jpg';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
            {/* Background Gradient Orbs */}
            <div className="absolute top-1/4 -left-20 w-80 h-80 bg-frog/20 rounded-full blur-[120px] animate-pulse"></div>
            <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-accent-blue/20 rounded-full blur-[120px] animate-pulse delay-1000"></div>

            <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-frog font-medium mb-4 flex items-center gap-2"
                    >
                        <span className="w-10 h-[2px] bg-frog"></span>
                        Hello, I am Shahid Salmani
                    </motion.p>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-4xl md:text-7xl font-bold mb-6 leading-tight"
                    >
                        Architecting High-Performance
                        <span className="text-gradient block">Web & Mobile Apps</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="text-gray-400 text-xl mb-10 max-w-lg"
                    >
                        {personalInfo.tagline}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                        className="flex flex-wrap gap-4 items-center"
                    >
                        <a href="#projects" className="btn-primary group">
                            View Projects
                            <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a href="#contact" className="btn-secondary">
                            Contact Me
                        </a>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.2 }}
                        className="mt-12 flex items-center gap-6"
                    >
                        {personalInfo.socials.map((social) => (
                            <a
                                key={social.name}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-2xl text-gray-400 hover:text-frog transition-colors"
                                title={social.name}
                            >
                                <social.icon />
                            </a>
                        ))}
                    </motion.div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="relative hidden md:block -mt-16"
                >
                    {/* Main Visual/Illustration */}
                    <div className="relative w-full aspect-square max-w-md mx-auto">
                        {/* Decorative circles */}
                        <div className="absolute inset-0 border-2 border-frog/20 rounded-full animate-[spin_20s_linear_infinite]"></div>
                        <div className="absolute inset-8 border-2 border-accent-blue/20 rounded-full animate-[spin_30s_linear_infinite_reverse]"></div>

                        {/* Inner Content Placeholder */}
                        <div className="absolute inset-4 bg-gradient-to-br from-frog/10 to-accent-blue/10 backdrop-blur-3xl rounded-full flex items-center justify-center overflow-hidden border border-white/10 group">
                            <img
                                src={shahidHero}
                                alt="Shahid Salmani"
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            />

                            {/* Floating Tech Stack Icons */}
                            <div className="absolute top-1/4 right-0 w-12 h-12 bg-dark-800 rounded-xl flex items-center justify-center border border-white/10 shadow-xl animate-float">
                                <div className="text-frog text-2xl">JS</div>
                            </div>
                            <div className="absolute bottom-1/4 left-0 w-12 h-12 bg-dark-800 rounded-xl flex items-center justify-center border border-white/10 shadow-xl animate-float delay-1000">
                                <div className="text-accent-blue text-2xl">⚛️</div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator - Hidden on mobile to prevent overlap */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
            >
                <div className="w-[1px] h-12 bg-gradient-to-b from-frog to-transparent"></div>
                <span className="text-[10px] uppercase tracking-widest text-gray-500">Scroll</span>
            </motion.div>
        </section>
    );
};

export default Hero;
