import React from 'react';
import { motion } from 'framer-motion';
import { Section, SectionHeader } from '../components/Section';
import { aboutMe } from '../data/content';
import shahidAbout from '../assets/images/image.png';

const About = () => {
    return (
        <Section id="about">
            <SectionHeader title="A bit about me" subtitle="Identity" />

            <div className="grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="relative"
                >
                    <div className="aspect-square glass-card flex items-center justify-center relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-tr from-frog/10 to-accent-blue/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <img
                            src={shahidAbout}
                            alt="Shahid working"
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                    </div>
                    {/* Decorative floating stats - adjusted for responsiveness */}
                    <div className="absolute -bottom-6 -right-6 glass-card p-4 md:p-6 border-frog/30 hidden sm:block">
                        <div className="text-frog font-bold text-xl md:text-2xl">2025</div>
                        <div className="text-gray-400 text-[10px] md:text-xs">Graduate Year</div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <p className="text-gray-400 text-lg leading-relaxed mb-8">
                        {aboutMe.description}
                    </p>

                    <div className="grid grid-cols-2 gap-6 mb-8">
                        {aboutMe.stats.map((stat, index) => (
                            <div key={index} className="glass-card p-4">
                                <div className="text-gray-500 text-xs uppercase tracking-wider mb-1">{stat.label}</div>
                                <div className="text-white font-medium">{stat.value}</div>
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-wrap gap-3">
                        {aboutMe.interests.map((interest, index) => (
                            <span key={index} className="px-4 py-2 bg-frog/10 text-frog border border-frog/20 rounded-full text-sm">
                                {interest}
                            </span>
                        ))}
                    </div>
                </motion.div>
            </div>
        </Section>
    );
};

export default About;
