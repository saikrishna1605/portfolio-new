"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink, Github, Eye } from "lucide-react";
import type { Project } from "@/lib/types";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useState, useRef, type MouseEvent } from "react";
import { ImageModal } from "@/components/ui/image-modal";
import ElectricBorder from "@/components/ui/electric-border";
import { MagicCardWrapper } from "./magic-card-wrapper";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: index * 0.1 } },
  };

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      cardRef.current.style.setProperty('--mouse-x', `${x}px`);
      cardRef.current.style.setProperty('--mouse-y', `${y}px`);
    }
  };

  const handleMouseLeave = () => {
    if (cardRef.current) {
      cardRef.current.style.setProperty('--mouse-x', `-9999px`);
      cardRef.current.style.setProperty('--mouse-y', `-9999px`);
    }
  };

  return (
    <>
      <motion.div 
        variants={cardVariants} 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true, amount: 0.2 }} 
        className="group h-full"
      >
        <ElectricBorder
          color="#7df9ff"
          speed={1}
          chaos={0.5}
          thickness={2}
          style={{ borderRadius: 16, height: '100%' }}
        >
          <Card 
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="h-full flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 interactive-glow-card"
          >
          <CardHeader className="p-4">
            <div 
              className="aspect-video relative overflow-hidden rounded-lg mb-3 cursor-pointer"
              onClick={() => setIsModalOpen(true)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && setIsModalOpen(true)}
              aria-label={`View larger image for ${project.title}`}
            >
              <Image
                src={project.imageUrl}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                data-ai-hint={project.imageHint}
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Eye className="h-10 w-10 text-white" />
              </div>
            </div>
            <CardTitle className="font-headline text-xl">{project.title}</CardTitle>
            <CardDescription className="text-sm">{project.description}</CardDescription>
          </CardHeader>
          <CardContent className="flex-grow p-4 pt-0">
            {project.longDescription && (
             <p className="text-xs text-muted-foreground mb-3 line-clamp-3">{project.longDescription}</p>
            )}
            <div className="mb-3">
              <h4 className="text-xs font-semibold mb-2 text-muted-foreground">Technologies Used:</h4>
              <div className="flex flex-wrap gap-1.5">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary" className="font-code text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex flex-wrap justify-start gap-2 p-4 pt-0">
            {project.liveUrl && (
              <Button asChild variant="default" size="sm" className="hover:shadow-primary/40 transition-all duration-300 ease-in-out transform hover:scale-105">
                <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  Live Demo <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            )}
            {project.repoUrl && (
              <Button asChild variant="outline" size="sm" className="hover:shadow-accent/40 transition-all duration-300 ease-in-out transform hover:scale-105">
                <Link href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                  View Code <Github className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            )}
             <Button variant="ghost" size="sm" onClick={() => setIsModalOpen(true)} className="text-primary hover:text-accent">
                View Image <Eye className="ml-2 h-4 w-4" />
             </Button>
          </CardFooter>
        </Card>
        </ElectricBorder>
      </motion.div>
      <ImageModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} imageUrl={project.imageUrl} altText={project.title} />
    </>
  );
}
