import React from 'react';
import { motion } from 'framer-motion';

export const Section = ({ id, children, className = "" }) => (
    <section id={id} className={`py-20 px-6 ${className}`}>
        <div className="container mx-auto">
            {children}
        </div>
    </section>
);

export const SectionHeader = ({ title, subtitle, center = false }) => (
    <div className={`mb-12 ${center ? 'text-center' : ''}`}>
        <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-frog font-medium uppercase tracking-widest text-sm mb-2"
        >
            {subtitle}
        </motion.h2>
        <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold"
        >
            {title}
        </motion.h3>
    </div>
);
