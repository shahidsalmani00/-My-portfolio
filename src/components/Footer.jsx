import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/content';
import { FaEnvelope, FaWhatsapp, FaMapMarkerAlt } from 'react-icons/fa';
import logo from '../assets/images/logo.png';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const footerLinks = [
        { name: 'About', href: '#about' },
        { name: 'Projects', href: '#projects' },
        { name: 'Services', href: '#services' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <footer className="relative pt-16 pb-8 px-6 overflow-hidden bg-dark-900">
            {/* Background Decoration */}
            <div className="absolute top-0 left-1/4 w-64 h-64 bg-frog/5 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="container mx-auto relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-12 border-b border-white/5">

                    {/* Column 1: Branding & About */}
                    <div className="space-y-6">
                        <motion.a
                            href="#"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="flex items-center gap-3 group"
                        >
                            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-frog/30 bg-dark-800 shadow-lg shadow-frog/10 group-hover:border-frog transition-all duration-300">
                                <img src={logo} alt="Shahid Salmani Logo" className="w-full h-full object-cover" />
                            </div>
                            <span className="text-white text-3xl font-bold">Shahid<span className="text-frog">.</span></span>
                        </motion.a>
                        <p className="text-gray-400 leading-relaxed max-w-sm">
                            Building innovative digital experiences through clean code and modern aesthetics. B.Tech Graduate 2025.
                        </p>
                        <div className="flex items-center gap-3">
                            {personalInfo.socials.map((social) => (
                                <motion.a
                                    key={social.name}
                                    href={social.url}
                                    whileHover={{ y: -3, scale: 1.1 }}
                                    className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-frog hover:border-frog/50 transition-all"
                                    title={social.name}
                                >
                                    <social.icon size={20} />
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div className="md:pl-12">
                        <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Quick Navigation</h4>
                        <ul className="space-y-4">
                            {footerLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-gray-400 hover:text-frog transition-colors flex items-center gap-2 group"
                                    >
                                        <span className="w-1.5 h-1.5 rounded-full bg-frog scale-0 group-hover:scale-100 transition-transform"></span>
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Contact Info */}
                    <div>
                        <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Get In Touch</h4>
                        <div className="space-y-4">
                            <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-4 text-gray-400 hover:text-white transition-colors group">
                                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-frog/10 text-frog">
                                    <FaEnvelope />
                                </div>
                                <span>{personalInfo.email}</span>
                            </a>
                            <a href={`https://wa.me/${personalInfo.whatsapp.replace('+', '')}`} className="flex items-center gap-4 text-gray-400 hover:text-white transition-colors group">
                                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-frog/10 text-frog">
                                    <FaWhatsapp />
                                </div>
                                <span>{personalInfo.whatsapp}</span>
                            </a>
                            <div className="flex items-center gap-4 text-gray-400">
                                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-frog">
                                    <FaMapMarkerAlt />
                                </div>
                                <span>{personalInfo.location}</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-sm">
                    <p className="text-gray-500 order-2 md:order-1">
                        © {currentYear} <span className="text-white font-semibold">Shahid Salmani</span>. All rights reserved.
                    </p>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-gray-400 font-medium order-1 md:order-2 flex items-center gap-2"
                    >
                        Made by <span className="text-red-500 animate-pulse">❤️</span> <span className="text-white">Shahid Salmani</span>.
                    </motion.p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
