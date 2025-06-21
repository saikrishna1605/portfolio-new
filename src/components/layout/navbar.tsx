
"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Button } from "@/components/ui/button";
import { useScrollListener } from "@/hooks/use-scroll-listener";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Projects", href: "#projects" },
  { name: "Resume", href: "#resume" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const { scrolled } = useScrollListener(50); // Removed isHidden, navbar will always be visible
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  
  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  const navbarVariants = {
    visible: { y: 0, opacity: 1 },
    // hidden variant is no longer explicitly used by animate but kept for potential future use
    hidden: { y: "-100%", opacity: 0 }, 
  };

  if (!mounted) {
    return null; // or a placeholder navbar
  }

  return (
    <>
      <motion.nav
        variants={navbarVariants}
        animate={"visible"} // Navbar is now always set to be visible
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled ? "bg-background/80 shadow-md backdrop-blur-md" : "bg-transparent"
        )}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="text-2xl font-headline font-bold text-primary hover:text-accent transition-colors">
              Portfolio
            </Link>
            <div className="hidden md:flex items-center space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="px-3 py-2 rounded-md text-sm font-medium text-foreground hover:text-primary hover:bg-accent/10 transition-colors"
                >
                  {item.name}
                </Link>
              ))}
              <ThemeToggle />
            </div>
            <div className="md:hidden flex items-center">
              <ThemeToggle />
              <Button variant="ghost" size="icon" onClick={toggleMobileMenu} className="ml-2" aria-label="Toggle menu">
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden fixed top-16 left-0 right-0 z-40 bg-background shadow-lg"
            onClick={(e) => {
              // Close menu if a link is clicked
              if ((e.target as HTMLElement).tagName === 'A') {
                setMobileMenuOpen(false);
              }
            }}
          >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-primary hover:bg-accent/10 transition-colors"
                  onClick={() => setMobileMenuOpen(false)} 
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
