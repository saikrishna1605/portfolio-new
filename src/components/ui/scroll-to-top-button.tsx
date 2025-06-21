
"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

export function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const toggleVisibility = () => {
      if (window.pageYOffset > 300) { // Show button after scrolling 300px
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility, { passive: true });
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, [mounted]);

  const scrollToTop = () => {
    if (!mounted) return;
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!mounted) return null; // Avoid rendering on server or before mount

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          className="fixed bottom-6 right-6 z-40" // Positioned bottom-right, z-index below navbar/modals
        >
          <Button
            onClick={scrollToTop}
            size="icon"
            className="rounded-full shadow-lg h-12 w-12" // Slightly larger for better touch target
            aria-label="Scroll to top"
            variant="default" // This will use theme's primary colors
          >
            <ArrowUp className="h-6 w-6" />
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
