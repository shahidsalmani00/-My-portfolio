import React from 'react';
import { motion } from 'framer-motion';
import { Section, SectionHeader } from '../components/Section';
import { personalInfo } from '../data/content';
import { FaEnvelope, FaWhatsapp, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
    return (
        <Section id="contact" className="bg-dark-800/30">
            <SectionHeader title="Get In Touch" subtitle="Contact" center />

            <div className="max-w-4xl mx-auto mt-16">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="glass-card p-8 md:p-12 border-white/5 flex flex-col md:flex-row justify-between items-center gap-12"
                >
                    <div className="text-center md:text-left">
                        <h4 className="text-2xl font-bold text-white mb-6">Let's discuss your project</h4>
                        <p className="text-gray-400 mb-0 max-w-md">
                            I'm currently available for freelance work and new opportunities. If you have a question or just want to say hi, feel free to contact me!
                        </p>
                    </div>

                    <div className="space-y-6 w-full md:w-auto">
                        <ContactInfoItem
                            icon={<FaEnvelope />}
                            label="Email"
                            value={personalInfo.email}
                            href={`mailto:${personalInfo.email}`}
                        />
                        <ContactInfoItem
                            icon={<FaWhatsapp />}
                            label="WhatsApp"
                            value={personalInfo.whatsapp}
                            href={`https://wa.me/${personalInfo.whatsapp.replace('+', '')}`}
                        />
                        <ContactInfoItem
                            icon={<FaMapMarkerAlt />}
                            label="Location"
                            value={personalInfo.location}
                        />
                    </div>
                </motion.div>
            </div>
        </Section>
    );
};

const ContactInfoItem = ({ icon, label, value, href }) => {
    const Content = () => (
        <div className="flex items-center gap-5 group">
            <div className="w-12 h-12 rounded-xl bg-dark-700 border border-white/10 flex items-center justify-center text-frog text-xl group-hover:bg-frog group-hover:text-white transition-all duration-300">
                {icon}
            </div>
            <div>
                <div className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-1">{label}</div>
                <div className="text-white font-medium group-hover:text-frog transition-colors">{value}</div>
            </div>
        </div>
    );

    return href ? (
        <a href={href} target="_blank" rel="noopener noreferrer" className="block">
            <Content />
        </a>
    ) : (
        <Content />
    );
};

export default Contact;
