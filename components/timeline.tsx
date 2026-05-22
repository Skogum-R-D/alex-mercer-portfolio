"use client";
import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";

const projects = [
  {
    title: "Quantum Core",
    year: "2022",
    description: "Led the development of a distributed quantum computing simulation platform using Rust and Kubernetes.",
  },
  {
    title: "Nebula API",
    year: "2021",
    description: "Designed and implemented a scalable GraphQL API for a SaaS product, serving over 10,000 requests per second.",
  },
  {
    title: "Stellar DB",
    year: "2020",
    description: "Optimized PostgreSQL queries and schema design for a financial analytics platform, reducing query times by 70%.",
  },
  {
    title: "Aurora UI",
    year: "2019",
    description: "Built a design system and component library in TypeScript and React, adopted across 5 internal products.",
  },
];

export default function Timeline() {
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
        Past Projects
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
        className="space-y-6 max-w-3xl mx-auto"
      >
        {projects.map((project) => (
          <motion.div
            key={project.title}
            variants={
              {
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }
            }
          >
            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle>{project.title}</CardTitle>
                  <span className="text-sm text-muted-foreground">{project.year}</span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{project.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}