import React from 'react';
import { motion } from 'framer-motion';
import { Section, SectionHeader } from '../components/Section';
import { education } from '../data/content';
import { FaGraduationCap } from 'react-icons/fa';

const Education = () => {
    return (
        <Section id="education">
            <SectionHeader title="Education Journey" subtitle="Academic" center />

            <div className="max-w-3xl mx-auto mt-16 relative">
                {/* Timeline Line */}
                <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-frog via-accent-blue/50 to-transparent transform md:-translate-x-1/2"></div>

                {education.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 }}
                        className={`relative mb-12 md:w-1/2 ${index % 2 === 0 ? 'md:ml-auto md:pl-12' : 'md:mr-auto md:pr-12 md:text-right'}`}
                    >
                        {/* Timeline Dot */}
                        <div className={`absolute top-0 w-6 h-6 rounded-full bg-dark-900 border-2 border-frog z-10 hidden md:block ${index % 2 === 0 ? 'left-0 -translate-x-1/2' : 'right-0 translate-x-1/2'}`}></div>
                        <div className="absolute left-0 top-0 w-6 h-6 rounded-full bg-dark-900 border-2 border-frog z-10 md:hidden -translate-x-1/2"></div>

                        <div className="glass-card p-6 border-white/5 hover:border-frog/30 transition-colors group">
                            <div className={`flex items-center gap-4 mb-4 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                                <div className="w-12 h-12 rounded-xl bg-frog/10 flex items-center justify-center text-frog text-2xl group-hover:bg-frog group-hover:text-white transition-all duration-500">
                                    <FaGraduationCap />
                                </div>
                                <div>
                                    <div className="text-frog text-sm font-bold">{item.duration}</div>
                                    <h4 className="text-white font-bold text-lg">{item.degree}</h4>
                                </div>
                            </div>
                            <p className="text-gray-400 mb-2">{item.institution}</p>
                            <div className="inline-block px-3 py-1 bg-green-500/10 text-green-500 text-[10px] rounded-full font-bold uppercase tracking-wider">
                                {item.status}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
};

export default Education;
