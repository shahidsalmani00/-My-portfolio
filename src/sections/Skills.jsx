import React from 'react';
import { motion } from 'framer-motion';
import { Section, SectionHeader } from '../components/Section';
import { skills } from '../data/content';

const Skills = () => {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 10 },
        show: { opacity: 1, y: 0 }
    };

    const SkillCategory = ({ title, items, delay = 0 }) => (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay }}
            className="space-y-6"
        >
            <h4 className="text-white font-bold text-xl flex items-center gap-3">
                <span className="w-8 h-[2px] bg-frog"></span>
                {title}
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4">
                {items.map((skill, index) => (
                    <motion.div
                        key={index}
                        whileHover={{ y: -5 }}
                        className="glass-card p-3 md:p-4 flex flex-col items-center justify-center text-center gap-2 md:gap-3 border-white/5 hover:border-frog/50 hover:bg-frog/5 transition-all duration-300 group"
                    >
                        <skill.icon className="text-2xl md:text-3xl text-gray-500 group-hover:text-frog transition-colors duration-500" />
                        <span className="text-[10px] md:text-xs font-medium text-gray-400 group-hover:text-white line-clamp-1">{skill.name}</span>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );

    return (
        <Section id="skills" className="bg-dark-800/30">
            <SectionHeader title="Technical Stack" subtitle="Expertise" center />

            <div className="grid lg:grid-cols-2 gap-16 mt-16">
                <div className="space-y-12">
                    <SkillCategory title="Frontend Dev" items={skills.frontend} />
                    <SkillCategory title="Backend & Database" items={[...skills.backend, ...skills.database]} delay={0.2} />
                </div>
                <div className="space-y-12">
                    <SkillCategory title="Mobile Development" items={skills.mobile} delay={0.4} />
                    <SkillCategory title="Tools & Others" items={skills.tools} delay={0.6} />
                </div>
            </div>

            {/* Modern skills bar alternative/summary */}
            <div className="mt-24 glass-card p-8 border-frog/10">
                <div className="flex flex-wrap justify-center gap-x-12 gap-y-8">
                    <div className="text-center">
                        <div className="text-3xl font-bold text-frog">4+</div>
                        <div className="text-gray-500 text-xs uppercase">Years Coding</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl font-bold text-accent-blue">15+</div>
                        <div className="text-gray-500 text-xs uppercase">Projects</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl font-bold text-frog">20+</div>
                        <div className="text-gray-500 text-xs uppercase">Tech Skills</div>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Skills;
