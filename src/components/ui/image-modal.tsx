
"use client";

import React from "react";
import Image from "next/image";
import { Dialog, DialogContent, DialogOverlay, DialogPortal, DialogClose, DialogTitle } from "@/components/ui/dialog";
import { X } from "lucide-react";
import { motion } from "framer-motion";

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
  altText: string;
}

export function ImageModal({ isOpen, onClose, imageUrl, altText }: ImageModalProps) {
  if (!isOpen) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogPortal>
        <DialogOverlay className="bg-black/80 backdrop-blur-sm" />
        <DialogContent 
          className="p-0 max-w-3xl w-[90vw] h-auto max-h-[85vh] bg-transparent border-none shadow-none outline-none focus:ring-0 focus:ring-offset-0"
          onInteractOutside={(e) => {
            // Allow closing by clicking outside the image content itself, but not on overlay alone.
            // This behavior might need adjustment based on exact UX preference for Radix dialogs.
            // Radix default for onInteractOutside is to close. If we want X only, we'd preventDefault.
            // For now, let's keep default Radix behavior (closes on outside click)
            // To restrict to X button only: e.preventDefault();
          }}
          aria-describedby={undefined} // Remove if DialogDescription is not used.
        >
          <DialogTitle className="sr-only">{altText}</DialogTitle>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="relative rounded-lg overflow-hidden shadow-2xl 
                       border-2 border-primary 
                       dark:border-accent
                       shadow-[0_0_15px_5px_hsl(var(--primary)),_0_0_30px_10px_hsl(var(--accent)/0.7)] 
                       dark:shadow-[0_0_15px_5px_hsl(var(--accent)),_0_0_30px_10px_hsl(var(--primary)/0.7)]"
          >
            <Image
              src={imageUrl}
              alt={altText} // Alt text is crucial for image accessibility itself
              width={1200}
              height={800}
              className="object-contain w-full h-full max-h-[80vh]"
              sizes="(max-width: 768px) 90vw, (max-width: 1200px) 70vw, 1200px"
            />
            <DialogClose asChild>
              <button
                onClick={onClose}
                aria-label="Close image viewer"
                className="absolute top-2 right-2 p-2 bg-background/70 hover:bg-background rounded-full text-foreground hover:text-primary transition-colors z-50"
              >
                <X className="h-6 w-6" />
              </button>
            </DialogClose>
          </motion.div>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
}
