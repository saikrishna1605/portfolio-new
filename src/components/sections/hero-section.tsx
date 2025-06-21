
"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
// import WebGLBackground from "@/components/ui/webgl-background"; // Removed
import { ArrowDown } from "lucide-react";
import Image from "next/image";

export function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center text-center overflow-hidden py-16 md:py-24">
      {/* <WebGLBackground /> Removed */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-8"
        >
          <Image
            src="https://drive.google.com/uc?id=1vIDX6F060bxV0CbgDlJAzM-csuzPeFwx"
            alt="Sai Krishna Mukka"
            width={150}
            height={150}
            className="rounded-full mx-auto border-4 border-primary shadow-lg"
            priority
            data-ai-hint="profile portrait"
          />
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-headline text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
        >
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
            Sai Krishna Mukka
          </span>
          <span className="block text-foreground/80 text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-2">
            AI/ML Engineer | Full Stack Developer
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-2xl mx-auto text-lg sm:text-xl text-muted-foreground mb-10"
        >
          I craft innovative AI solutions and robust web experiences, transforming ideas into digital realities.
          Explore my work and let&apos;s build something amazing together.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-4"
        >
          <Button asChild size="lg" className="font-headline text-lg px-8 py-6 rounded-lg shadow-lg hover:shadow-primary/50 transition-all duration-300 ease-in-out transform hover:scale-105">
            <Link href="#projects">
              View Projects <ArrowDown className="ml-2 h-5 w-5 group-hover:animate-bounce" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="font-headline text-lg px-8 py-6 rounded-lg shadow-lg hover:shadow-accent/50 transition-all duration-300 ease-in-out transform hover:scale-105">
            <Link href="#contact">Get In Touch</Link>
          </Button>
        </motion.div>
      </div>
       <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <ArrowDown className="h-8 w-8 text-foreground/50 animate-bounce" />
      </motion.div>
    </section>
  );
}
