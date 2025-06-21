
import type { Project, Certification, TechnicalSkills } from './types';

export const userProjects: Project[] = [
  {
    id: '1',
    title: 'AI Email Generator',
    description: 'AI-powered email generator using Google technology, featuring personalized email composition, multiple tone options, and template management.',
    longDescription: 'This project leverages generative AI to assist users in crafting professional and personalized emails. It offers features like selecting different tones (formal, casual, persuasive), generating email bodies based on short prompts, and managing reusable email templates. The backend is built with Python and FastAPI, interfacing with the OpenAI API for generation, while the frontend is a responsive React application styled with TailwindCSS and hosted on Firebase.',
    imageUrl: 'https://drive.google.com/uc?id=1Z8igcEZWWWpaSFgisjNGuIkwxw0vNMAA',
    imageHint: 'email interface',
    technologies: ['Python', 'FastAPI', 'OpenAI API', 'React', 'Firebase', 'TailwindCSS'],
    // liveUrl: '#', // Add live URL if available
    // repoUrl: '#', // Add repo URL if available
  },
  {
    id: '2',
    title: 'AI Data Driven Student Mentoring System',
    description: 'AI-driven student mentoring system that automates paperwork. Reduced manual paperwork by 90% and improved student engagement tracking.',
    longDescription: 'This system was developed to streamline the student mentoring process by automating paperwork and providing data-driven insights. It features modules for tracking student progress, managing mentor-mentee interactions, and generating reports. The use of Chart.js allows for visual representation of student engagement and performance metrics. This significantly reduced manual effort and enhanced the effectiveness of the mentoring program.',
    imageUrl: 'https://drive.google.com/uc?id=1rIb6j4UhluOZeNt9DdMurOmvcRb8H6z0',
    imageHint: 'dashboard chart',
    technologies: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Node.js', 'Chart JS'],
    // liveUrl: '#', // Add live URL if available
    // repoUrl: '#', // Add repo URL if available
  },
];

export const userCertifications: Certification[] = [
  {
    id: '1',
    title: 'Google Cloud Computing Foundations',
    issuer: 'Google Cloud',
    description: 'Comprehensive training in cloud computing, covering infrastructure, deployment, and scalability on Google Cloud Platform.',
    imageUrl: 'https://drive.google.com/uc?id=12Q4VZhHvj5ehzAKftLhWU7hCHo_ZzTS9',
    imageHint: 'certificate document',
    skills: ['GCP', 'Cloud Computing', 'DevOps', 'Scalability', 'Cloud Infrastructure'],
    // verifyUrl: '#', // Add verification link if available
  },
  {
    id: '3',
    title: 'Postman API Fundamentals Student Expert',
    issuer: 'Postman',
    description: 'Postman Student Expert certification covering API testing, documentation, request building, and automation fundamentals.',
    imageUrl: 'https://drive.google.com/uc?id=1bwJvL2d8pL_b4feNV7_KFTHBsOIQHjnY',
    imageHint: 'certificate document',
    skills: ['API Testing', 'Postman', 'REST APIs', 'API Documentation', 'Automation'],
    // verifyUrl: '#', // Add verification link if available
  },
  {
    id: 'oracle-gen-ai',
    title: 'Oracle Cloud Infrastructure - Generative AI',
    issuer: 'Oracle',
    description: 'Oracle Cloud Infrastructure 2024 Generative AI Professional certification.',
    imageUrl: 'https://lh3.googleusercontent.com/d/135sAvtMQklostJh7W-S3h5nY00lAtXLs',
    imageHint: 'certificate document oracle',
    skills: ['OCI', 'Generative AI', 'Cloud Infrastructure', 'AI/ML'],
    // verifyUrl: '#',
  },
  {
    id: 'oracle-apex-cloud-dev',
    title: 'Oracle APEX Cloud Developer Certified Professional',
    issuer: 'Oracle',
    description: 'Demonstrates expertise in developing and deploying cloud-native applications using Oracle APEX on Oracle Cloud Infrastructure.',
    imageUrl: 'https://lh3.googleusercontent.com/d/1OzDhXqhEj8alSkZ-Etxg68lJnqGDey3p',
    imageHint: 'certificate document oracle apex',
    skills: ['Oracle APEX', 'OCI', 'Cloud Development', 'SQL', 'PL/SQL', 'Database Applications'],
    // verifyUrl: '#', // Add verification link if available
  },
];

export const userSkills: TechnicalSkills = {
  categories: [],
  toolsImage: {
    url: 'https://drive.google.com/uc?id=13vgRtM-mT6g5pRUHpaZZcINjWTolYrK9',
    alt: 'Technical Tools and Skills Stack',
    imageHint: 'tech stack logos',
  },
};
