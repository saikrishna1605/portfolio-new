"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Award, Eye } from "lucide-react";
import type { Certification } from "@/lib/types";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useState, useRef, type MouseEvent } from "react";
import { ImageModal } from "@/components/ui/image-modal";

interface CertificationCardProps {
  certification: Certification;
  index: number;
}

export function CertificationCard({ certification, index }: CertificationCardProps) {
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
        <Card 
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="h-full flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 interactive-glow-card"
        >
          <CardHeader>
            <div 
              className="aspect-[16/10] relative overflow-hidden rounded-t-lg mb-4 cursor-pointer" 
              onClick={() => setIsModalOpen(true)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && setIsModalOpen(true)}
              aria-label={`View larger image for ${certification.title}`}
            >
              <Image
                src={certification.imageUrl}
                alt={certification.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-contain transition-transform duration-300 group-hover:scale-105" 
                data-ai-hint={certification.imageHint}
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Eye className="h-12 w-12 text-white" />
              </div>
            </div>
            <CardTitle className="font-headline text-xl">{certification.title}</CardTitle>
            <CardDescription>Issued by: {certification.issuer}</CardDescription>
          </CardHeader>
          <CardContent className="flex-grow">
            <p className="text-sm text-muted-foreground mb-4">{certification.description}</p>
            {certification.skills && certification.skills.length > 0 && (
              <div className="mb-4">
                <h4 className="text-sm font-semibold mb-2 text-muted-foreground">Skills Covered:</h4>
                <div className="flex flex-wrap gap-2">
                  {certification.skills.map((skill) => (
                    <Badge key={skill} variant="outline" className="font-code">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </CardContent>
          <CardFooter className="flex flex-wrap justify-start gap-2">
            {certification.verifyUrl && (
              <Button asChild variant="default" size="sm" className="hover:shadow-primary/40 transition-all duration-300 ease-in-out transform hover:scale-105">
                <Link href={certification.verifyUrl} target="_blank" rel="noopener noreferrer">
                  Verify <Award className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            )}
            <Button variant="ghost" size="sm" onClick={() => setIsModalOpen(true)} className="text-primary hover:text-accent">
              View Certificate <Eye className="ml-2 h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>
      </motion.div>
      <ImageModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} imageUrl={certification.imageUrl} altText={certification.title} />
    </>
  );
}
