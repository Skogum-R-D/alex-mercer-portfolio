"use client";
import { motion } from "framer-motion";
import { Button } from "./ui/button";

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen flex flex-col justify-center items-center text-center px-4"
    >
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="mb-4"
      >
        <h1 className="text-5xl md:text-7xl font-bold gradient-text mb-2">
          Alex Mercer
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground">
          Senior Software Engineer
        </p>
      </motion.div>
      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="max-w-2xl text-lg text-muted-foreground mb-8"
      >
        Building scalable systems with TypeScript, Python, and cloud-native technologies.
      </motion.p>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        <Button variant="outline" size="lg">
          View My Work
        </Button>
      </motion.div>
    </motion.section>
  );
}