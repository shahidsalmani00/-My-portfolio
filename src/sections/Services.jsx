import React from 'react';
import { motion } from 'framer-motion';
import { Section, SectionHeader } from '../components/Section';
import { services } from '../data/content';

const Services = () => {
    return (
        <Section id="services" className="bg-dark-800/30">
            <SectionHeader title="What I Offer" subtitle="Services" center />

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ y: -10 }}
                        className="glass-card p-8 border-white/5 hover:border-frog/40 hover:bg-frog/5 transition-all duration-300 group"
                    >
                        <div className="w-14 h-14 rounded-2xl bg-frog/10 flex items-center justify-center text-frog text-2xl mb-6 group-hover:bg-frog group-hover:text-white transition-all duration-500">
                            <service.icon />
                        </div>
                        <h4 className="text-white font-bold text-xl mb-4">{service.title}</h4>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            {service.description}
                        </p>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
};

export default Services;
