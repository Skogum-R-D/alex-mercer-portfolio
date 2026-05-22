"use client";
import { motion } from "framer-motion";

export default function Bio() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.5 }}
      className="max-w-3xl mx-auto text-center py-12"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="text-3xl font-bold gradient-text mb-6"
      >
        About Me
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="text-lg text-muted-foreground leading-relaxed"
      >
        I'm a Senior Software Engineer with over 8 years of experience building scalable, cloud-native systems. My expertise spans TypeScript, Python, Kubernetes, and Rust, with a focus on delivering high-performance, maintainable solutions. I'm passionate about open-source software and have contributed to several widely-used projects. When I'm not coding, you can find me hiking, reading sci-fi novels, or experimenting with new technologies.
      </motion.p>
    </motion.section>
  );
}