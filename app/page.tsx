"use client";
import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Code, Clock, Database, Server, GitBranch } from "lucide-react";

const skills = [
  { name: "TypeScript", icon: <Code className="h-6 w-6" /> },
  { name: "Python", icon: <Code className="h-6 w-6" /> },
  { name: "Kubernetes", icon: <Server className="h-6 w-6" /> },
  { name: "Rust", icon: <Code className="h-6 w-6" /> },
  { name: "PostgreSQL", icon: <Database className="h-6 w-6" /> },
];

const projects = [
  {
    title: "Distributed Task Scheduler",
    description: "Scalable job queue built with Rust and Redis, handling 10K+ tasks/sec.",
    year: "2023",
  },
  {
    title: "AI Model Serving Platform",
    description: "Kubernetes-native platform for deploying and scaling ML models in production.",
    year: "2022",
  },
  {
    title: "Real-time Analytics Dashboard",
    description: "Web-based dashboard with WebSocket updates and PostgreSQL time-series data.",
    year: "2021",
  },
];

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-16 sm:py-24">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-24"
      >
        <h1 className="text-5xl sm:text-6xl font-bold gradient-text mb-4">Alex Mercer</h1>
        <p className="text-xl sm:text-2xl text-muted-foreground mb-8">Senior Software Engineer</p>
        <div className="flex justify-center gap-4">
          <Button asChild>
            <a href="mailto:alex@example.com">Contact Me</a>
          </Button>
        </div>
      </motion.section>

      {/* Bio Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="max-w-3xl mx-auto text-center mb-24"
      >
        <p className="text-lg text-muted-foreground leading-relaxed">
          I build scalable systems and elegant interfaces. With over 8 years of experience in full-stack development, I specialize in TypeScript, Python, and cloud-native architectures. Currently focused on distributed systems and real-time data pipelines.
        </p>
      </motion.section>

      {/* Skills Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-24"
      >
        <h2 className="text-3xl font-bold gradient-text text-center mb-12">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 max-w-4xl mx-auto">
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              whileHover={{ y: -4 }}
              className="glassmorphism rounded-lg p-6 text-center cursor-pointer"
            >
              <div className="flex justify-center mb-3">{skill.icon}</div>
              <span className="font-medium">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mb-24"
      >
        <h2 className="text-3xl font-bold gradient-text text-center mb-12">Projects</h2>
        <div className="space-y-8 max-w-3xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
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
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="text-center"
      >
        <h2 className="text-3xl font-bold gradient-text mb-6">Get In Touch</h2>
        <p className="text-lg text-muted-foreground mb-8">Interested in collaborating or have a question?</p>
        <Button asChild size="lg">
          <a href="mailto:alex@example.com" className="inline-flex items-center gap-2">
            <Mail className="h-4 w-4" />
            Email Me
          </a>
        </Button>
      </motion.section>
    </main>
  );
}