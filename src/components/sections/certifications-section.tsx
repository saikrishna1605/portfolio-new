"use client";

import { userCertifications } from "@/lib/constants";
import { CertificationCard } from "@/components/ui/certification-card";
import { motion } from "framer-motion";

export function CertificationsSection() {
  if (!userCertifications || userCertifications.length === 0) {
    return null;
  }

  return (
    <section id="certifications" className="">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="font-headline text-4xl md:text-5xl font-bold text-center mb-12"
        >
          My Certifications
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {userCertifications.map((certification, index) => (
            <CertificationCard key={certification.id} certification={certification} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
