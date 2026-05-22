"use client";
import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";

const skills = [
  { name: "TypeScript", icon: "🌟" },
  { name: "Python", icon: "🐍" },
  { name: "Kubernetes", icon: "⚓" },
  { name: "Rust", icon: "🦀" },
  { name: "PostgreSQL", icon: "🐘" },
];

export default function Skills() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.5 }}
      className="py-12"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="text-3xl font-bold gradient-text text-center mb-12"
      >
        Skills
      </motion.h2>
      <motion.div
        initial="hidden"
        animate="show"
        variants={
          {
            hidden: {},
            show: { transition: { staggerChildren: 0.1 } },
          }
        }
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
      >
        {skills.map((skill) => (
          <motion.div key={skill.name} variants={
            {
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }
          }>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <span>{skill.icon}</span>
                  <span>{skill.name}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Expert-level proficiency</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}