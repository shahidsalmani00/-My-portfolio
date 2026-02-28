import React from 'react';
import { motion } from 'framer-motion';
import { Section, SectionHeader } from '../components/Section';
import { projects } from '../data/content';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
    return (
        <Section id="projects">
            <SectionHeader title="Featured Projects" subtitle="My Work" center />

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="group glass-card overflow-hidden flex flex-col h-full border-white/5 hover:border-frog/30 transition-all duration-500 hover:shadow-2xl hover:shadow-frog/10"
                    >
                        {/* Project Image Placeholder */}
                        <div className="relative aspect-video overflow-hidden bg-dark-700">
                            <div className="absolute inset-0 bg-gradient-to-br from-frog/20 to-accent-blue/20 flex items-center justify-center text-4xl group-hover:scale-110 transition-transform duration-700">
                                {project.title === 'FrogTyping' ? '🐸' :
                                    project.title === 'PriceMaker' ? '🏷️' :
                                        project.title === 'PriceScout' ? '🚕' :
                                            project.title === 'Uskill' ? '🎓' : '📦'}
                            </div>
                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-dark-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                                <a href={project.github} className="w-10 h-10 bg-white text-dark-900 rounded-full flex items-center justify-center hover:bg-frog hover:text-white transition-colors">
                                    <FaGithub />
                                </a>
                                <a href={project.demo} className="w-10 h-10 bg-white text-dark-900 rounded-full flex items-center justify-center hover:bg-frog hover:text-white transition-colors">
                                    <FaExternalLinkAlt />
                                </a>
                            </div>
                        </div>

                        <div className="p-6 flex flex-col flex-grow">
                            <div className="flex gap-2 mb-3">
                                {project.tech.map((t) => (
                                    <span key={t} className="text-[10px] uppercase font-bold tracking-widest text-frog bg-frog/10 px-2 py-1 rounded">
                                        {t}
                                    </span>
                                ))}
                            </div>
                            <h4 className="text-white font-bold text-xl mb-3 group-hover:text-frog transition-colors">
                                {project.title}
                            </h4>
                            <p className="text-gray-400 text-sm mb-6 flex-grow">
                                {project.description}
                            </p>

                            <div className="flex items-center gap-4 mt-auto">
                                <a href={project.demo} className="text-sm font-bold text-white flex items-center gap-2 hover:text-frog transition-colors">
                                    Live Demo <FaExternalLinkAlt className="text-xs" />
                                </a>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="mt-16 text-center">
                <a href="https://github.com/ShahidSalmani" className="btn-secondary inline-flex">
                    View More on GitHub <FaGithub />
                </a>
            </div>
        </Section>
    );
};

export default Projects;
