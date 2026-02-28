import React from 'react';
import { motion } from 'framer-motion';
import { Section, SectionHeader } from '../components/Section';
import { frogTypingInfo } from '../data/content';
import { FaArrowRight, FaCheckCircle } from 'react-icons/fa';

const FrogTypingShowcase = () => {
    return (
        <Section id="frogtyping" className="bg-dark-800/30">
            <div className="glass-card p-8 md:p-12 relative overflow-hidden border-frog/20">
                {/* Animated Background Icon */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[300px] text-frog opacity-[0.02] pointer-events-none">
                    🐸
                </div>

                <div className="grid md:grid-cols-2 gap-12 relative z-10">
                    <div>
                        <SectionHeader title="The Platform: FrogTyping" subtitle="Founder's Choice" />
                        <p className="text-gray-400 text-lg mb-8 italic">
                            "Building FrogTyping was more than just a coding project; it was about creating a distraction-free environment for people to master their most fundamental digital skill."
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                            {frogTypingInfo.features.map((feature, index) => (
                                <div key={index} className="flex items-center gap-3 text-gray-300">
                                    <FaCheckCircle className="text-frog flex-shrink-0" />
                                    <span className="text-sm">{feature}</span>
                                </div>
                            ))}
                        </div>

                        <a
                            href={frogTypingInfo.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary group inline-flex"
                        >
                            Visit FrogTyping
                            <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </a>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        {/* Mockup or Visual of FrogTyping */}
                        <div className="bg-dark-700 rounded-xl overflow-hidden border border-white/10 shadow-2xl">
                            <div className="bg-dark-600 px-4 py-2 flex items-center gap-2 border-b border-white/5">
                                <div className="w-2 h-2 rounded-full bg-red-500"></div>
                                <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                <div className="ml-4 text-[10px] text-gray-500 font-mono">frogtyping.com</div>
                            </div>
                            <div className="p-8 aspect-video flex items-center justify-center bg-dark-900">
                                <div className="text-center">
                                    <div className="text-6xl mb-4">🐸</div>
                                    <div className="text-2xl font-bold text-white mb-2">Practice Typing</div>
                                    <div className="w-32 h-1 bg-frog mx-auto rounded-full"></div>
                                </div>
                            </div>
                        </div>

                        {/* Floating Achievement Card */}
                        <div className="absolute -bottom-6 -left-6 glass-card p-4 border-frog/30 animate-float">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 bg-frog/20 rounded-full flex items-center justify-center text-frog text-xl">🚀</div>
                                <div>
                                    <div className="text-white font-bold">10k+ Users</div>
                                    <div className="text-gray-500 text-xs text-nowrap">Improving skills daily</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </Section>
    );
};

export default FrogTypingShowcase;
