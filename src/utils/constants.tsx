import {
    FaJava,
    FaReact,
    FaDocker,
    FaGitAlt,
    FaUserShield,
} from "react-icons/fa";
import { FaGolang } from "react-icons/fa6";
import {
    SiTypescript,
    SiPostgresql,
    SiSpringboot,
    SiApachekafka,
    SiMysql,
    SiRedis,
    SiTailwindcss,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { LuGlassWater } from "react-icons/lu";
import { RiNextjsLine } from "react-icons/ri";
import { MdMiscellaneousServices } from "react-icons/md";

export const SOCIAL_LINKS = {
    github: "https://github.com/DevaSinha",
    linkedin: "https://www.linkedin.com/in/devanshu-sinha-69136519b/",
    email: "devasinha1703@gmail.com",
};

export const NAV_ITEMS = ["About", "Experience", "Skills", "Projects", "Contact"];

export const EXPERIENCES = [
    {
        role: "Full Stack Developer",
        company: "Mahindra Finance",
        period: "Jun 2023 - Present",
        location: "Pune, India",
        points: [
            "Built and enhanced fintech workflows and backend services, contributing to a 30% reduction in loan approval turnaround time through automation and streamlined processing.",
            "Improved API performance with Redis caching and fewer redundant DB calls, increasing overall system throughput by 20% while supporting 99.9% uptime.",
            "Developed and maintained Spring Boot REST APIs with secure authentication using OAuth2/JWT for compliance-driven financial modules.",
            "Built reusable React + TypeScript UI components (tables, filters, modals, step-based flows), improving UI consistency and accelerating delivery by 30%.",
            "Collaborated across React frontend, Spring Boot services, and PostgreSQL-backed workflows to deliver end-to-end features.",
            "Strengthened reliability via structured validation, error handling, and logging to improve debugging and production stability.",
        ],
    },
];

export const SKILL_CATEGORIES = [
    {
        title: "Languages & Databases",
        skills: [
            { name: "Java", icon: <FaJava /> },
            { name: "Go", icon: <FaGolang /> },
            { name: "TypeScript", icon: <SiTypescript /> },
            { name: "SQL", icon: <TbApi /> },
            { name: "PostgreSQL", icon: <SiPostgresql /> },
            { name: "MySQL", icon: <SiMysql /> },
        ],
    },
    {
        title: "Backend",
        skills: [
            { name: "Spring Boot", icon: <SiSpringboot /> },
            { name: "Go (Gin)", icon: <LuGlassWater /> },
            { name: "REST APIs", icon: <TbApi /> },
            { name: "Kafka", icon: <SiApachekafka /> },
            { name: "Redis", icon: <SiRedis /> },
            { name: "WebSockets", icon: <MdMiscellaneousServices /> },
        ],
    },
    {
        title: "Frontend & DevOps",
        skills: [
            { name: "React.js", icon: <FaReact /> },
            { name: "Next.js", icon: <RiNextjsLine /> },
            { name: "Redux", icon: <MdMiscellaneousServices /> },
            { name: "Tailwind CSS", icon: <SiTailwindcss /> },
            { name: "Docker", icon: <FaDocker /> },
            { name: "Git", icon: <FaGitAlt /> },
            { name: "CI/CD", icon: <MdMiscellaneousServices /> },
            { name: "OAuth2 / JWT", icon: <FaUserShield /> },
        ],
    },
];

export const PROJECTS = [
    {
        title: "Flagship — Feature Flag Platform",
        description:
            "Multi-tenant feature flag platform using Go (Gin) and Redis, enabling real-time toggling with low-latency evaluation. Includes a type-safe TypeScript SDK with local caching to simplify integration and reduce repeated network calls.",
        tech: ["Go (Gin)", "Next.js", "PostgreSQL", "Redis", "Docker", "TypeScript SDK"],
        links: {
            github: "https://github.com/DevaSinha/featureflag-sdk",
            website: "https://featureflag-dashboard.vercel.app/",
        },
        inProgress: false,
    },
    {
        title: "Loan Management System",
        description:
            "Event-driven microservices processing 5000+ daily records with Kafka for asynchronous workflows and audit logging. Designed PostgreSQL-backed workflow state transitions for traceability across approval journeys and operational visibility.",
        tech: ["Spring Boot", "Kafka", "PostgreSQL", "Microservices"],
        inProgress: false,
    },
    {
        title: "Payment System",
        description:
            "Transaction processing module supporting 20,000+ monthly operations using retries and idempotent API patterns. Reduced failure recovery time by 50% with structured logging and resilient error-handling workflows.",
        tech: ["Spring Boot", "PostgreSQL", "REST APIs", "OAuth2/JWT"],
        inProgress: false,
    },
];

export const ABOUT = {
    title: "About Me",
    description: [
        "I’m a Full Stack Developer with 2+ years of experience building scalable fintech systems and modern web applications. I work across the stack using Java/Spring Boot, Go, Kafka, PostgreSQL, and React/Next.js.",
        "At Mahindra Finance, I’ve contributed to workflow automation that reduced loan approval turnaround time by 30% and improved backend throughput by 20% through performance optimizations and caching strategies.",
        "I enjoy designing secure, event-driven systems and building reusable UI components that improve consistency and speed up delivery. I care deeply about clean architecture, reliability, and writing code that scales with both users and teams."
    ],
    highlights: [
        "2+ years in fintech & enterprise systems",
        "Event-driven architectures with Kafka",
        "Performance-focused backend development",
        "Secure APIs with OAuth2 / JWT",
        "Reusable, type-safe frontend components"
    ]
};