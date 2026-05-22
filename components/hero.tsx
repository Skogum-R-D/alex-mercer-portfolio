"use client";
import { motion } from "framer-motion";
import { Button } from "./ui/button";

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex flex-col justify-center items-center text-center px-4"
    >
      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
      >
        <h1 className="text-5xl md:text-7xl font-bold gradient-text mb-4">
          Alex Mercer
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8">
          Senior Software Engineer
        </p>
        <Button variant="default" size="lg">
          <a href="#contact">Get in Touch</a>
        </Button>
      </motion.div>
    </motion.section>
  );
}
