"use client";

import { motion } from "framer-motion";
import { MagicCardWrapper } from "@/components/ui/magic-card-wrapper";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Mail, Linkedin, Award, Code2, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface BentoCard {
  id: string;
  title: string;
  label: string;
  description: string;
  techStack?: string[];
  link?: string;
  githubLink?: string;
  imageUrl?: string;
  features?: string[];
  accentColor: string;
  icon?: React.ReactNode;
  size: "small" | "medium" | "large";
  links?: { type: string; url: string; label: string }[];
}

const bentoCards: BentoCard[] = [
  {
    id: "bhusakthi",
    title: "BhuSakshi",
    label: "AgriTech Platform",
    description: "Digital platform empowering Indian farmers with comprehensive agricultural services",
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Firebase", "Google AI"],
    githubLink: "https://github.com/saikrishna1605/BhuSakshi",
    features: ["Reduced farmer administrative dependencies through digitized services"],
    accentColor: "34, 197, 94", // Green
    icon: <Sparkles className="h-6 w-6" />,
    size: "large",
  },
  {
    id: "foliofinds",
    title: "FolioFinds",
    label: "E-Commerce Marketplace",
    description: "Full-stack marketplace for books and blogs with integrated cart, chatbot and payment features",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "MongoDB", "Firebase", "PayPal API"],
    link: "https://tinyurl.com/foliofinds",
    imageUrl: "https://drive.google.com/uc?id=1LrtCmlyvlwchHK77X1fACNCZZi57clCh",
    features: ["Authentication", "AI Chatbot", "Secure Transactions", "Listing Management"],
    accentColor: "147, 51, 234", // Purple
    icon: <Code2 className="h-6 w-6" />,
    size: "large",
  },
  {
    id: "autovision",
    title: "AutoVision",
    label: "AI Safety System",
    description: "AI-based system for real-time traffic sign detection and speed monitoring",
    techStack: ["Python", "YOLOv5", "OpenCV", "Murf AI", "FastAPI", "React", "MongoDB"],
    features: ["Real-time alerts", "Improved driver awareness"],
    accentColor: "239, 68, 68", // Red/Orange
    icon: <Award className="h-6 w-6" />,
    size: "medium",
  },
  {
    id: "skills",
    title: "Tech Stack",
    label: "Expertise",
    description: "Full-stack developer proficient in MERN stack, AI/ML integration, and cloud deployment",
    techStack: ["Java", "C", "JavaScript", "React", "Node.js", "MongoDB", "MySQL", "Firebase", "AWS", "Jenkins", "Google Cloud"],
    accentColor: "59, 130, 246", // Blue
    icon: <Code2 className="h-6 w-6" />,
    size: "medium",
  },
  {
    id: "achievements",
    title: "Recognition",
    label: "Accomplishments",
    description: "Runner-up at Startup Olympiad (IIT Hyderabad) • AI Voice Agent Challenge Winner • 4+ Certifications",
    accentColor: "234, 179, 8", // Gold
    icon: <Award className="h-6 w-6" />,
    size: "medium",
  },
  {
    id: "contact",
    title: "Let's Connect",
    label: "Get in Touch",
    description: "Open to collaboration and opportunities",
    accentColor: "6, 182, 212", // Cyan
    icon: <Mail className="h-6 w-6" />,
    size: "medium",
    links: [
      { type: "portfolio", url: "https://tinyurl.com/saikrishna-m", label: "Portfolio" },
      { type: "linkedin", url: "https://www.linkedin.com/in/saikrishna-mukka-7b9247265/", label: "LinkedIn" },
      { type: "github", url: "https://github.com/saikrishna1605/", label: "GitHub" },
      { type: "email", url: "mailto:saikrishnamukka942@gmail.com", label: "Email" },
    ],
  },
];

export function BentoGridSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="bento-grid" className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="font-headline text-4xl md:text-5xl font-bold mb-4">
            Featured Work
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore my journey through innovative projects and achievements
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
        >
          {bentoCards.map((card) => (
            <motion.div
              key={card.id}
              variants={itemVariants}
              className={`group ${
                card.size === "large"
                  ? "md:col-span-2"
                  : card.size === "medium"
                  ? "md:col-span-1"
                  : ""
              }`}
            >
              <MagicCardWrapper
                enableStars={true}
                enableSpotlight={true}
                enableBorderGlow={true}
                enableTilt={true}
                enableMagnetism={true}
                clickEffect={true}
                spotlightRadius={300}
                particleCount={15}
                glowColor={card.accentColor}
                className="h-full"
              >
                <div
                  className="relative h-full min-h-[300px] rounded-xl overflow-hidden"
                  style={{
                    background: `linear-gradient(135deg, rgba(${card.accentColor}, 0.1) 0%, rgba(6, 0, 16, 0.95) 100%)`,
                  }}
                >
                  {/* Background Pattern */}
                  <div
                    className="absolute inset-0 opacity-5"
                    style={{
                      backgroundImage: `radial-gradient(circle at 2px 2px, rgba(${card.accentColor}, 0.3) 1px, transparent 0)`,
                      backgroundSize: "32px 32px",
                    }}
                  />

                  {/* Image for FolioFinds */}
                  {card.imageUrl && (
                    <div className="absolute inset-0 opacity-20">
                      <Image
                        src={card.imageUrl}
                        alt={card.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}

                  {/* Content */}
                  <div className="relative z-10 p-6 md:p-8 h-full flex flex-col">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div
                          className="p-2 rounded-lg"
                          style={{
                            backgroundColor: `rgba(${card.accentColor}, 0.2)`,
                            color: `rgb(${card.accentColor})`,
                          }}
                        >
                          {card.icon}
                        </div>
                        <div>
                          <Badge
                            variant="outline"
                            className="mb-2"
                            style={{
                              borderColor: `rgba(${card.accentColor}, 0.5)`,
                              color: `rgb(${card.accentColor})`,
                            }}
                          >
                            {card.label}
                          </Badge>
                          <h3 className="text-2xl md:text-3xl font-bold font-headline">
                            {card.title}
                          </h3>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {card.link && (
                          <Button
                            asChild
                            size="icon"
                            variant="ghost"
                            className="hover:bg-primary/20"
                          >
                            <Link href={card.link} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="h-4 w-4" />
                            </Link>
                          </Button>
                        )}
                        {card.githubLink && (
                          <Button
                            asChild
                            size="icon"
                            variant="ghost"
                            className="hover:bg-primary/20"
                          >
                            <Link
                              href={card.githubLink}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Github className="h-4 w-4" />
                            </Link>
                          </Button>
                        )}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground mb-4 flex-grow">
                      {card.description}
                    </p>

                    {/* Features */}
                    {card.features && card.features.length > 0 && (
                      <div className="mb-4">
                        <ul className="text-sm space-y-1">
                          {card.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center gap-2">
                              <span
                                className="w-1.5 h-1.5 rounded-full"
                                style={{ backgroundColor: `rgb(${card.accentColor})` }}
                              />
                              <span className="text-muted-foreground">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Tech Stack */}
                    {card.techStack && card.techStack.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-auto">
                        {card.techStack.slice(0, 6).map((tech) => (
                          <Badge
                            key={tech}
                            variant="secondary"
                            className="text-xs font-code bg-background/50 backdrop-blur-sm"
                          >
                            {tech}
                          </Badge>
                        ))}
                        {card.techStack.length > 6 && (
                          <Badge
                            variant="secondary"
                            className="text-xs font-code bg-background/50 backdrop-blur-sm"
                          >
                            +{card.techStack.length - 6} more
                          </Badge>
                        )}
                      </div>
                    )}

                    {/* Contact Links */}
                    {card.links && card.links.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-4">
                        {card.links.map((linkItem) => (
                          <Button
                            key={linkItem.type}
                            asChild
                            size="sm"
                            variant="outline"
                            className="hover:bg-primary/20"
                            style={{
                              borderColor: `rgba(${card.accentColor}, 0.3)`,
                            }}
                          >
                            <Link
                              href={linkItem.url}
                              target={linkItem.type !== "email" ? "_blank" : undefined}
                              rel={linkItem.type !== "email" ? "noopener noreferrer" : undefined}
                            >
                              {linkItem.type === "linkedin" && <Linkedin className="h-4 w-4 mr-2" />}
                              {linkItem.type === "github" && <Github className="h-4 w-4 mr-2" />}
                              {linkItem.type === "email" && <Mail className="h-4 w-4 mr-2" />}
                              {linkItem.type === "portfolio" && <ExternalLink className="h-4 w-4 mr-2" />}
                              {linkItem.label}
                            </Link>
                          </Button>
                        ))}
                      </div>
                    )}

                    {/* Hover Overlay */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                      style={{
                        background: `radial-gradient(circle at center, rgba(${card.accentColor}, 0.1) 0%, transparent 70%)`,
                      }}
                    />
                  </div>
                </div>
              </MagicCardWrapper>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
