import { FaJava, FaReact, FaDocker, FaGitAlt, FaLock, FaUserShield } from 'react-icons/fa';
import { FaGolang } from 'react-icons/fa6';
import { SiTypescript, SiPostgresql, SiSpringboot, SiApachekafka, SiMysql } from 'react-icons/si';
import { MdMiscellaneousServices } from "react-icons/md";
import { IoIosInfinite } from "react-icons/io";
import { TbApi } from 'react-icons/tb';
import { LuGlassWater } from 'react-icons/lu';
import { RiNextjsLine } from 'react-icons/ri';

export const SOCIAL_LINKS = {
    github: "https://github.com/DevaSinha",
    linkedin: "https://www.linkedin.com/in/devanshu-sinha-69136519b/",
    email: "devasinha1703@gmail.com"
};

export const NAV_ITEMS = ['About', 'Experience', 'Skills', 'Projects', 'Contact'];

export const EXPERIENCES = [
    {
        role: "Full Stack Developer",
        company: "Mahindra Finance",
        period: "Jun 2023 - Present",
        location: "Pune, Maharashtra",
        points: [
            "Built and maintained enterprise applications",
            "Reduced loan approval time by 90% via automated workflow engine.",
            "Optimized backend APIs improving performance by 35%.",
            "Automated 80% of payment reconciliations via third-party integrations.",
            "Developed 20+ reusable React.js components, accelerating frontend velocity by 50%."
        ]
    }
];

export const SKILL_CATEGORIES = [
    {
        title: "Languages & Databases",
        skills: [
            { name: "Java", icon: <FaJava /> },
            { name: "Go", icon: <FaGolang /> },
            { name: "TypeScript", icon: <SiTypescript /> },
            { name: "PostgreSQL", icon: <SiPostgresql /> },
            { name: "MySql", icon: <SiMysql /> }
        ]
    },
    {
        title: "Frontend & Backend",
        skills: [
            { name: "React.js", icon: <FaReact /> },
            { name: "Spring Boot", icon: <SiSpringboot /> },
            { name: "Next.js", icon: <RiNextjsLine /> },
            { name: 'Gin', icon: <LuGlassWater /> },
            { name: "REST APIs", icon: <TbApi /> }
        ]
    },
    {
        title: "Tools & Technologies",
        skills: [
            { name: "Docker", icon: <FaDocker /> },
            { name: "Git", icon: <FaGitAlt /> },
            { name: "Kafka", icon: <SiApachekafka /> },
            { name: "OAuth2", icon: <FaUserShield /> },
            { name: "Microservices", icon: <MdMiscellaneousServices /> },
            { name: "CI/CD", icon: <IoIosInfinite /> },
            { name: "AES Encryption", icon: <FaLock /> }
        ]
    }
];

export const PROJECTS = [
    {
        title: "StreamSight",
        tagline: "Real-time AI Surveillance System",
        description: "Real-time RTSP streaming application. Modular Go backend for stream management & WebSocket communication. React frontend with live preview.",
        tech: ["Go", "Docker", "Next.js", "PostgreSQL", "WebSocket"],
        links: { github: "https://github.com/DevaSinha/StreamSight", website: "https://featureflag-dashboard.vercel.app/" },
        inProgress: true
    },
    {
        title: "Loan Management System",
        tagline: "High-Scale Financial Processing Engine",
        description: "Scaled loan processing to handle 10,000+ new records monthly. Designed 99.9% uptime event-driven architecture.",
        tech: ["Spring Boot", "PostgreSQL", "Kafka", "React.js"],
    },
    {
        title: "Payment System",
        tagline: "Fault-Tolerant Transaction Platform",
        description: "Engineered transaction processing operations with auto-retry logic. Reduced failure recovery time by 50%.",
        tech: ["Spring Boot", "PostgreSQL", "React.js", "REST APIs"],
    }
];