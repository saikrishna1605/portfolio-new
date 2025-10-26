
"use client";

import { userSkills } from "@/lib/constants";
import { motion } from "framer-motion";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import { ImageModal } from "@/components/ui/image-modal";
import { Button } from "../ui/button";
import { Eye } from "lucide-react";
import { MagicCardWrapper } from "@/components/ui/magic-card-wrapper";

export function SkillsSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!userSkills || !userSkills.toolsImage) {
    return null;
  }
  
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <>
      <section id="skills" className="bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="font-headline text-4xl md:text-5xl font-bold text-center mb-12"
          >
            My Tech Stack
          </motion.h2>

          <motion.div 
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="flex justify-center" // Center the single card
          >
            <motion.div variants={itemVariants} className="w-full max-w-lg"> {/* Constrain width of the card container */}
              <MagicCardWrapper
                enableStars={true}
                enableSpotlight={true}
                enableBorderGlow={true}
                enableTilt={true}
                enableMagnetism={true}
                clickEffect={true}
                spotlightRadius={300}
                particleCount={12}
                glowColor="132, 0, 255"
                className="h-full"
              >
                <Card className="shadow-md hover:shadow-lg transition-shadow group">
                <CardHeader>
                  <CardTitle className="font-headline text-xl text-primary text-center">My Development Toolkit</CardTitle>
                </CardHeader>
                <CardContent>
                  <div 
                    className="relative w-full h-72 overflow-hidden rounded-lg cursor-pointer group"
                    onClick={() => setIsModalOpen(true)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => e.key === 'Enter' && setIsModalOpen(true)}
                    aria-label={`View larger image for ${userSkills.toolsImage.alt}`}
                  >
                    <Image
                      src={userSkills.toolsImage.url}
                      alt={userSkills.toolsImage.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 30vw, 33vw"
                      className="object-contain transition-transform duration-300 group-hover:scale-105"
                      data-ai-hint={userSkills.toolsImage.imageHint}
                    />
                     <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Eye className="h-12 w-12 text-white" />
                    </div>
                  </div>
                  <Button variant="link" onClick={() => setIsModalOpen(true)} className="mt-2 text-primary hover:text-accent mx-auto block">
                    View Full Tech Stack Image
                  </Button>
                </CardContent>
              </Card>
              </MagicCardWrapper>
            </motion.div>
          </motion.div>
        </div>
      </section>
      <ImageModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        imageUrl={userSkills.toolsImage.url} 
        altText={userSkills.toolsImage.alt} 
      />
    </>
  );
}

