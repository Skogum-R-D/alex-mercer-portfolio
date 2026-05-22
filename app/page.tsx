"use client";
import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Code, Database, Cloud, Rocket, Calendar, Briefcase } from "lucide-react";

export default function Home() {
  const skills = [
    { name: "TypeScript", icon: <Code className="h-6 w-6 text-blue-400" /> },
    { name: "Python", icon: <Code className="h-6 w-6 text-green-400" /> },
    { name: "Kubernetes", icon: <Cloud className="h-6 w-6 text-purple-400" /> },
    { name: "Rust", icon: <Code className="h-6 w-6 text-orange-400" /> },
    { name: "PostgreSQL", icon: <Database className="h-6 w-6 text-blue-400" /> },
  ];

  const projects = [
    {
      title: "Quantum AI Platform",
      year: "2023",
      description: "Built a scalable AI platform using Kubernetes and TypeScript that reduced inference times by 40%.",
    },
    {
      title: "Blockchain Analytics",
      year: "2022",
      description: "Developed a Rust-based blockchain analytics engine processing 10,000+ transactions per second.",
    },
    {
      title: "HealthTech API",
      year: "2021",
      description: "Designed and implemented a HIPAA-compliant API using Python and PostgreSQL for a healthcare startup.",
    },
  ];

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1 } },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <main className="min-h-screen bg-background text-foreground container mx-auto px-4 py-16">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-24"
      >
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
          Senior Software Engineer & System Architect
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <Button size="lg" variant="outline">
            <Mail className="mr-2 h-4 w-4" />
            Contact Me
          </Button>
        </motion.div>
      </motion.section>

      {/* Bio Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto mb-24"
      >
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">About Me</CardTitle>
          </CardHeader>
          <CardContent>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-muted-foreground leading-relaxed"
            >
              I'm a Senior Software Engineer with over 8 years of experience building scalable systems and
              distributed applications. My expertise spans full-stack development, cloud architecture, and
              performance optimization. I specialize in TypeScript, Python, and Rust, with a strong focus on
              creating maintainable, high-performance codebases.
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-muted-foreground leading-relaxed mt-4"
            >
              When I'm not coding, you can find me contributing to open-source projects, mentoring junior
              developers, or exploring the latest advancements in AI and distributed systems.
            </motion.p>
          </CardContent>
        </Card>
      </motion.section>

      {/* Skills Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-24"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold gradient-text text-center mb-12"
        >
          Technical Skills
        </motion.h2>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto"
        >
          {skills.map((skill) => (
            <motion.div key={skill.name} variants={item} className="text-center">
              <Card className="h-full">
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <div className="mb-4">{skill.icon}</div>
                  <h3 className="font-semibold gradient-text">{skill.name}</h3>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Projects Timeline */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-24"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold gradient-text text-center mb-12"
        >
          Project Timeline
        </motion.h2>
        <div className="space-y-8 max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="relative pl-8"
            >
              <div className="absolute left-0 top-2 h-full w-1 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full" />
              <div className="absolute left-[-5px] top-2 w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle>{project.title}</CardTitle>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="mr-2 h-4 w-4" />
                    <span>{project.year}</span>
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
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold gradient-text mb-6"
        >
          Get In Touch
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-muted-foreground mb-8 max-w-md mx-auto"
        >
          I'm currently available for freelance projects and consulting work. Let's build something amazing together!
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <Button size="lg" asChild={false}>
            <a href="mailto:alex.mercer@example.com" className="flex items-center">
              <Mail className="mr-2 h-4 w-4" />
              Email Me
            </a>
          </Button>
        </motion.div>
      </motion.section>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center text-muted-foreground py-8 border-t border-border/20"
      >
        <p>© {new Date().getFullYear()} Alex Mercer. All rights reserved.</p>
      </motion.footer>
    </main>
  );
}
