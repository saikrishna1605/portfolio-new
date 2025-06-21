"use client";

import { userProjects } from "@/lib/constants"; // Updated to use userProjects
import { ProjectCard } from "@/components/ui/project-card";
import { motion } from "framer-motion";

export function ProjectsSection() {
  return (
    <section id="projects" className="bg-background"> {/* Changed background to default */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="font-headline text-4xl md:text-5xl font-bold text-center mb-12"
        >
          My Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8"> {/* Max 2 columns for better readability */}
          {userProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
