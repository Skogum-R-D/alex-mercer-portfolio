"use client";
import { motion } from "framer-motion";
import { Button } from "./ui/button";

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative flex flex-col items-center justify-center min-h-screen text-center px-4"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20" />
      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-5xl md:text-7xl font-bold gradient-text mb-6"
        >
          Alex Mercer
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto"
        >
          Senior Software Engineer | Cloud-Native Systems | Open Source Contributor
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <Button variant="outline" size="lg">
            <a href="#contact">Get in Touch</a>
          </Button>
        </motion.div>
      </div>
    </motion.section>
  );
}