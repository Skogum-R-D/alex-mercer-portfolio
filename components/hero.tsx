"use client";
import { motion } from "framer-motion";
import { Button } from "./ui/button";

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex flex-col justify-center items-center text-center px-4"
    >
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-5xl md:text-7xl font-bold gradient-text mb-6">
          Alex Mercer
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8">
          Senior Software Engineer
        </p>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
          Building scalable systems and elegant solutions with code.
        </p>
        <Button variant="outline" size="lg">
          Get in Touch
        </Button>
      </motion.div>
    </motion.section>
  );
}
