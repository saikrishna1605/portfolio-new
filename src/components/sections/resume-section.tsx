"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Download, Printer, Eye, EyeOff } from "lucide-react";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";

export function ResumeSection() {
  const [showPdfViewer, setShowPdfViewer] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { toast } = useToast();
  // Use direct download link for resume
  const resumeUrl = "https://drive.google.com/uc?export=download&id=1I4dJGeGENshqcFEjwqtmQe-nzaVfSkBS";
  const resumeViewUrl = "https://drive.google.com/file/d/1I4dJGeGENshqcFEjwqtmQe-nzaVfSkBS/preview";


  useEffect(() => {
    setMounted(true);
  }, []);

  const handlePrint = () => {
    if (typeof window !== "undefined") {
      // Always open in new tab for printing to avoid CORS issues with Google Drive iframe
      window.open(resumeViewUrl, '_blank');
      toast({
        title: "Opening Resume",
        description: "Resume opened in a new tab. You can print from there using Ctrl+P or Cmd+P.",
      });
    }
  };
  
  if (!mounted) {
    return (
      <section id="resume" className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-headline text-4xl md:text-5xl font-bold mb-8">My Resume</h2>
        <div className="animate-pulse">
          <div className="h-10 bg-muted rounded w-1/4 mx-auto mb-4"></div>
          <div className="h-40 bg-muted rounded w-full max-w-2xl mx-auto"></div>
        </div>
      </section>
    );
  }

  return (
    <section id="resume" className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="font-headline text-4xl md:text-5xl font-bold mb-12"
      >
        My Resume
      </motion.h2>
      
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto"
      >
        Education: CVR College Of Engineering (Computer Science and Engineering - 2026)
      </motion.p>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="space-x-2 sm:space-x-4 mb-8 flex flex-wrap justify-center items-center gap-y-4"
      >
        <Button asChild size="lg" className="shadow-md hover:shadow-primary/50 transition-all duration-300 ease-in-out transform hover:scale-105">
          <a href={resumeUrl} download="SaiKrishnaMukka_Resume.pdf">
            <Download className="mr-2 h-5 w-5" /> Download PDF
          </a>
        </Button>
        <Button variant="outline" size="lg" onClick={() => setShowPdfViewer(!showPdfViewer)} className="shadow-md hover:shadow-accent/50 transition-all duration-300 ease-in-out transform hover:scale-105">
          {showPdfViewer ? <EyeOff className="mr-2 h-5 w-5" /> : <Eye className="mr-2 h-5 w-5" />}
          {showPdfViewer ? "Hide Resume" : "View Resume"}
        </Button>
        <Button variant="outline" size="lg" onClick={handlePrint} className="shadow-md hover:shadow-accent/50 transition-all duration-300 ease-in-out transform hover:scale-105">
          <Printer className="mr-2 h-5 w-5" /> Print Resume
        </Button>
      </motion.div>

      {showPdfViewer && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "70vh" }} // Use vh for responsive height
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-4xl mx-auto border rounded-lg shadow-xl overflow-hidden"
          style={{aspectRatio: "8.5 / 11"}}
          aria-label="PDF Resume Viewer"
        >
          <iframe
            id="pdf-viewer-frame"
            src={`${resumeViewUrl}#toolbar=0&navpanes=0&scrollbar=0`}
            title="Resume PDF Viewer"
            className="w-full h-full border-none"
            aria-describedby="pdf-viewer-description"
          />
          <p id="pdf-viewer-description" className="sr-only">An embedded viewer for my PDF resume. Use download or print buttons for full access.</p>
        </motion.div>
      )}
      <style jsx global>{`
        @media print {
          body * {
            visibility: hidden;
          }
          #resume-content-for-print, #resume-content-for-print * {
            visibility: visible;
          }
          #resume-content-for-print {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
          }
          nav, footer, #contact, #projects, #hero, #certifications, #skills, button, h2:not(#resume h2) {
            display: none !important;
          }
          iframe#pdf-viewer-frame {
            visibility: visible !important;
            position: absolute !important;
            left: 0 !important;
            top: 0 !important;
            width: 100vw !important;
            height: 100vh !important;
            z-index: 9999 !important;
          }
        }
      `}</style>
      <div id="resume-content-for-print" className="hidden print:block">
      </div>
    </section>
  );
}
