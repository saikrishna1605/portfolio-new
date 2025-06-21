"use client";

import { Github, Linkedin } from "lucide-react";
import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground py-8 border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <Link href="https://github.com/saikrishna1605/" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-primary transition-colors">
            <Github className="h-6 w-6" />
          </Link>
          <Link href="https://www.linkedin.com/in/saikrishna-mukka-7b9247265/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-primary transition-colors">
            <Linkedin className="h-6 w-6" />
          </Link>
        </div>
        <p className="text-sm">
          &copy; {currentYear} Sai Krishna Mukka. All rights reserved.
        </p>
        <p className="text-xs mt-2">
          Built with <Link href="https://nextjs.org" target="_blank" rel="noopener noreferrer" className="hover:text-primary underline">Next.js</Link> and <Link href="https://tailwindcss.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary underline">Tailwind CSS</Link>.
        </p>
      </div>
    </footer>
  );
}
