import React from 'react';
import { motion } from 'framer-motion';
import { Section, SectionHeader } from '../components/Section';
import { achievements } from '../data/content';
import { FaAward } from 'react-icons/fa';

const Achievements = () => {
    return (
        <Section id="achievements">
            <SectionHeader title="Key Milestones" subtitle="Achievements" center />

            <div className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-6 mt-16">
                {achievements.map((achievement, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start gap-5 glass-card p-6 border-white/5 group hover:border-frog/30 transition-colors"
                    >
                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-frog/10 flex items-center justify-center text-frog text-xl group-hover:rotate-12 transition-transform duration-500">
                            <FaAward />
                        </div>
                        <p className="text-gray-300 font-medium">
                            {achievement}
                        </p>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
};

export default Achievements;
