import {
    FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaGithub, FaFigma, FaMobileAlt,
    FaDatabase, FaRocket, FaCode, FaPaintBrush, FaGraduationCap, FaBriefcase, FaAward,
    FaLinkedin, FaInstagram, FaYoutube, FaEnvelope, FaWhatsapp, FaMapMarkerAlt
} from 'react-icons/fa';
import { SiFirebase, SiMongodb, SiExpress, SiFramer, SiTailwindcss, SiVite } from 'react-icons/si';

export const personalInfo = {
    name: "Shahid Salmani",
    title: "Web Developer | React Native Developer | Founder of FrogTyping",
    tagline: "Building Fast Websites & Modern Mobile Applications.",
    location: "India",
    email: "shahidsalmani350@gmail.com",
    whatsapp: "+919511180737",
    socials: [
        { name: "GitHub", url: "https://github.com/shahidsalmani00", icon: FaGithub },
        { name: "LinkedIn", url: "https://www.linkedin.com/in/shahid-salmani-4227a71b8/", icon: FaLinkedin },
        { name: "YouTube", url: "https://www.youtube.com/channel/UChM_fxlBUHDKTj0ZojCBKcQ", icon: FaYoutube },
        { name: "Instagram", url: "https://www.instagram.com/shahidsalmani00/", icon: FaInstagram },
    ]
};

export const aboutMe = {
    description: "I am a passionate B.Tech Information Technology graduate with a strong focus on building scalable web and mobile applications. As the founder of FrogTyping, I combine my technical skills with an entrepreneurial mindset to create tools that solve real-world problems.",
    stats: [
        { label: "College", value: "ABES Engineering College" },
        { label: "Batch", value: "2025" },
        { label: "Degree", value: "B.Tech IT" },
    ],
    interests: ["Startups", "AI Tools", "Productivity", "Ed-Tech"]
};

export const frogTypingInfo = {
    title: "FrogTyping",
    description: "An online typing practice platform designed to help users improve speed and accuracy through real-time tests and challenges.",
    features: [
        "WPM Improvement tracking",
        "Accuracy monitoring",
        "Real-time typing tests",
        "Performance analytics",
        "Beginner to advanced levels",
        "Distraction-free interface"
    ],
    url: "https://frogtyping.com" // Placeholder
};

export const education = [
    {
        degree: "B.Tech in Information Technology",
        institution: "ABES Engineering College, Ghaziabad",
        duration: "2021 - 2025",
        description: "Focused on information systems, software engineering, and modern web technologies.",
        status: "Completed"
    }
];

export const skills = {
    frontend: [
        { name: "HTML5", icon: FaHtml5 },
        { name: "CSS3", icon: FaCss3Alt },
        { name: "JavaScript", icon: FaJs },
        { name: "React.js", icon: FaReact },
        { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
    mobile: [
        { name: "React Native", icon: FaMobileAlt },
    ],
    backend: [
        { name: "Node.js", icon: FaNodeJs },
        { name: "Express.js", icon: SiExpress },
    ],
    database: [
        { name: "Firebase", icon: SiFirebase },
        { name: "MongoDB", icon: SiMongodb },
    ],
    tools: [
        { name: "Git", icon: FaGitAlt },
        { name: "GitHub", icon: FaGithub },
        { name: "Figma", icon: FaFigma },
    ]
};

export const projects = [
    {
        id: 1,
        title: "FrogTyping",
        description: "Online typing speed platform with real-time analytics and challenges.",
        tech: ["React", "Firebase", "Tailwind"],
        demo: "https://frogetyping.com",
        github: "#",
        image: "frogtyping_preview"
    },
    {
        id: 4,
        title: "Uskill",
        description: "Modern E-learning platform for skill development and certification.",
        tech: ["React", "Node.js", "Express"],
        demo: "#",
        github: "#",
        image: "uskill_preview"
    },
    {
        id: 5,
        title: "Ultra-Fast Delivery System",
        description: "Research project on a 10-minute delivery ecosystem optimization.",
        tech: ["Research", "Supply Chain", "AI"],
        demo: "#",
        github: "#",
        image: "delivery_research"
    }
];

export const services = [
    {
        title: "Website Development",
        description: "Building responsive and fast web applications using modern stacks.",
        icon: FaCode
    },
    {
        title: "Mobile App Development",
        description: "Cross-platform mobile apps built with React Native.",
        icon: FaMobileAlt
    },
    {
        title: "UI/UX Design",
        description: "Crafting intuitive and aesthetically pleasing user interfaces.",
        icon: FaPaintBrush
    },
    {
        title: "Custom Web Applications",
        description: "Tailored software solutions to solve specific business problems.",
        icon: FaRocket
    }
];

export const achievements = [
    "Successfully built and launched FrogTyping",
    "B.Tech Graduate (2025) from ABES Engineering College",
    "Built multiple real-world web & mobile applications",
    "Published Research project on Ultra-Fast Delivery System"
];
