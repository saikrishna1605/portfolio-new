
"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function ContactSection() {
  return (
    <section id="contact" className="">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* The main "Get In Touch" h2 heading is removed as per request. 
            The CardTitle "Contact Me" will serve as the primary heading for this card. */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="max-w-2xl mx-auto shadow-xl">
            <CardHeader className="text-center">
              <CardTitle className="font-headline text-4xl md:text-5xl font-bold mb-4">Contact Me</CardTitle>
              <CardDescription className="text-lg">
                Feel free to reach out to me through any of the channels below. I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of something amazing.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-8 mt-6">
                <motion.div 
                  className="flex items-start space-x-4 group"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <Mail className="h-7 w-7 text-primary mt-1 flex-shrink-0 group-hover:animate-pulse" />
                  <div>
                    <h4 className="font-headline text-xl font-semibold text-foreground">Email</h4>
                    <a 
                      href="mailto:saikrishnamukka942@gmail.com" 
                      className="text-muted-foreground hover:text-primary transition-colors duration-300 text-base"
                      aria-label="Email Sai Krishna Mukka"
                    >
                      saikrishnamukka942@gmail.com
                    </a>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex items-start space-x-4 group"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <Phone className="h-7 w-7 text-primary mt-1 flex-shrink-0 group-hover:animate-pulse" />
                  <div>
                    <h4 className="font-headline text-xl font-semibold text-foreground">Phone</h4>
                    <p className="text-muted-foreground text-base" aria-label="Phone number">
                      (+91) 83286-87217
                    </p>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex items-start space-x-4 group"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <MapPin className="h-7 w-7 text-primary mt-1 flex-shrink-0 group-hover:animate-pulse" />
                  <div>
                    <h4 className="font-headline text-xl font-semibold text-foreground">Address</h4>
                    <p className="text-muted-foreground text-base" aria-label="Address">
                      1-63/3/5/2/A/1, Brundavan Colony, <br />
                      Huzurnagar 508204, Telangana, <br />
                      India
                    </p>
                  </div>
                </motion.div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
