"use client";
import { motion } from "framer-motion";
import { Button } from "./ui/button";

export default function Contact() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.5 }}
      className="text-center py-12"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="text-3xl font-bold gradient-text mb-6"
      >
        Get In Touch
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto"
      >
        I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        <Button size="lg">
          <a href="mailto:alex.mercer@example.com">Email Me</a>
        </Button>
      </motion.div>
    </motion.section>
  );
}