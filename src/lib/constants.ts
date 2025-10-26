
import type { Project, Certification, TechnicalSkills } from './types';

export const userProjects: Project[] = [
  {
    id: '1',
    title: 'BhuSakshi',
    description: 'Digital platform empowering Indian farmers with comprehensive agricultural services',
    longDescription: 'BhuSakshi is an AgriTech platform designed to reduce farmer administrative dependencies through digitized services. The platform provides farmers with access to essential agricultural information, resources, and services, helping them make informed decisions and improve their productivity.',
    imageUrl: 'https://drive.google.com/uc?id=1Z8igcEZWWWpaSFgisjNGuIkwxw0vNMAA',
    imageHint: 'agriculture platform interface',
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Firebase', 'Google AI Studio'],
    repoUrl: 'https://github.com/saikrishna1605/BhuSakshi',
  },
  {
    id: '2',
    title: 'FolioFinds',
    description: 'Full-stack marketplace for books and blogs with integrated cart, chatbot and payment features',
    longDescription: 'FolioFinds is a comprehensive e-commerce marketplace that enables users to buy and sell books and blogs. The platform features user authentication, listing management, an AI-powered chatbot for customer support, shopping cart functionality, and secure payment processing through PayPal API integration.',
    imageUrl: 'https://drive.google.com/uc?id=1LrtCmlyvlwchHK77X1fACNCZZi57clCh',
    imageHint: 'e-commerce marketplace interface',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'MongoDB', 'Firebase', 'PayPal API'],
    liveUrl: 'https://tinyurl.com/foliofinds',
  },
  {
    id: '3',
    title: 'AutoVision: Real-Time Road Awareness',
    description: 'AI-based system for real-time traffic sign detection and speed monitoring',
    longDescription: 'AutoVision is an intelligent safety system that uses computer vision and machine learning to detect traffic signs in real-time and monitor vehicle speed. The system provides drivers with immediate audio-visual alerts, improving driver awareness and road safety through accurate, real-time detection.',
    imageUrl: 'https://drive.google.com/uc?id=1rIb6j4UhluOZeNt9DdMurOmvcRb8H6z0',
    imageHint: 'AI traffic detection system',
    technologies: ['Python', 'YOLOv5', 'OpenCV', 'Murf AI', 'FastAPI', 'ReactJS', 'MongoDB', 'Firebase'],
    // repoUrl: '#', // Add repo URL if available
  },
  {
    id: '4',
    title: 'AI Email Generator',
    description: 'AI-powered email generator using Google technology, featuring personalized email composition, multiple tone options, and template management.',
    longDescription: 'This project leverages generative AI to assist users in crafting professional and personalized emails. It offers features like selecting different tones (formal, casual, persuasive), generating email bodies based on short prompts, and managing reusable email templates. The backend is built with Python and FastAPI, interfacing with the OpenAI API for generation, while the frontend is a responsive React application styled with TailwindCSS and hosted on Firebase.',
    imageUrl: 'https://drive.google.com/uc?id=1Z8igcEZWWWpaSFgisjNGuIkwxw0vNMAA',
    imageHint: 'email interface',
    technologies: ['Python', 'FastAPI', 'OpenAI API', 'React', 'Firebase', 'TailwindCSS'],
    // liveUrl: '#', // Add live URL if available
    // repoUrl: '#', // Add repo URL if available
  },
];

export const userCertifications: Certification[] = [
  {
    id: 'oracle-gen-ai',
    title: 'Oracle Cloud Infrastructure - Generative AI Professional',
    issuer: 'Oracle',
    description: 'Oracle Cloud Infrastructure 2024 Generative AI Professional certification demonstrating expertise in AI/ML services and implementation.',
    imageUrl: 'https://lh3.googleusercontent.com/d/135sAvtMQklostJh7W-S3h5nY00lAtXLs',
    imageHint: 'certificate document oracle',
    skills: ['OCI', 'Generative AI', 'Cloud Infrastructure', 'AI/ML', 'Cloud Computing'],
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
    // verifyUrl: '#',
  },
  {
    id: '1',
    title: 'Google Cloud Computing Foundations',
    issuer: 'Google Cloud',
    description: 'Comprehensive training in cloud computing, covering infrastructure, deployment, and scalability on Google Cloud Platform.',
    imageUrl: 'https://drive.google.com/uc?id=12Q4VZhHvj5ehzAKftLhWU7hCHo_ZzTS9',
    imageHint: 'certificate document',
    skills: ['GCP', 'Cloud Computing', 'DevOps', 'Scalability', 'Cloud Infrastructure'],
    // verifyUrl: '#',
  },
  {
    id: '2',
    title: 'Postman API Fundamentals Student Expert',
    issuer: 'Postman',
    description: 'Postman Student Expert certification covering API testing, documentation, request building, and automation fundamentals.',
    imageUrl: 'https://drive.google.com/uc?id=1bwJvL2d8pL_b4feNV7_KFTHBsOIQHjnY',
    imageHint: 'certificate document',
    skills: ['API Testing', 'Postman', 'REST APIs', 'API Documentation', 'Automation'],
    // verifyUrl: '#',
  },
  {
    id: 'aws-academy',
    title: 'AWS Academy Graduate - AWS Academy Cloud Foundations',
    issuer: 'Amazon Web Services (AWS)',
    description: 'Comprehensive understanding of AWS Cloud concepts, AWS services, security, architecture, pricing, and support.',
    imageUrl: 'https://drive.google.com/uc?id=12Q4VZhHvj5ehzAKftLhWU7hCHo_ZzTS9',
    imageHint: 'certificate document aws',
    skills: ['AWS', 'Cloud Architecture', 'Cloud Security', 'AWS Services', 'Cloud Computing'],
    // verifyUrl: '#',
  },
  {
    id: 'ai-ml-basics',
    title: 'Artificial Intelligence & Machine Learning Fundamentals',
    issuer: 'Online Learning Platform',
    description: 'Foundation course covering AI/ML concepts, algorithms, neural networks, and practical implementations.',
    imageUrl: 'https://drive.google.com/uc?id=1bwJvL2d8pL_b4feNV7_KFTHBsOIQHjnY',
    imageHint: 'certificate document',
    skills: ['Machine Learning', 'Neural Networks', 'AI Algorithms', 'Python', 'Data Science'],
    // verifyUrl: '#',
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
