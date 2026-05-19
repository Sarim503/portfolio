
"use client";

import { motion } from "framer-motion";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Mail, Phone } from "lucide-react";

export default function AboutPage() {
  const skills = [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "PHP",
    "Laravel",
    "HTML/CSS",
    "Tailwind CSS",
    "Firebase",
    "Git",
    "Electron.js",
    "React Native",
  ];

  const experiences = [
    {
      title: "Full Stack Developer",
      company: "Silversparrow Studios",
      period: "14 Jan 2025 - Present",
      description:
        "Deliver full-stack features using Next.js and React interfaces, React Native apps, Laravel and PHP APIs, and NestJS backends. Ship and run workloads with Docker; maintain production-ready web apps and admin tooling while collaborating in agile delivery cycles.",
    },
    {
      title: "Frontend Intern",
      company: "Nextpak Agile",
      period: "Jul 2024 - Dec 2024",
      description:
        "Contributed to MVP development while gaining hands-on experience with React, Tailwind CSS, and Git workflows in a fast-paced agile environment.",
    },
  ];

  const whatIDo = [
    {
      title: "Frontend Development",
      description:
        "Building fast, responsive UIs using React, Next.js, Tailwind CSS, and modern component systems.",
    },
    {
      title: "Mobile Development",
      description:
        "Building cross-platform mobile apps using React Native and Expo.",
    },
    {
      title: "Backend Development",
      description:
        "Developing scalable APIs using Laravel, PHP, NestJS, Prisma, PostgreSQL, and REST architecture.",
    },
    {
      title: "DevOps & Deployment",
      description:
        "Dockerizing applications, deploying projects on Google Cloud Platform, managing environments, and setting up CI/CD pipelines.",
    },
    {
      title: "Full-Stack Product Development",
      description:
        "Building complete products from frontend and backend to database, authentication, deployment, and production workflows.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted/20">
      <main className="container mx-auto px-4 py-16 space-y-24">
        {/* About Section */}
        <motion.section
          className="text-center space-y-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.3 }} 
          transition={{ duration: 0.6 }}
        >
          <motion.h2 className="text-4xl font-bold mb-8">
            About Me
          </motion.h2>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-10 text-left">
            <motion.div
              className="space-y-4 text-muted-foreground leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
               viewport={{ amount: 0.3 }} 
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="text-xl font-semibold text-foreground">My Story</h3>
              <p>
               My journey into web development began during university, where I developed a student enrollment advisor project using front-end technologies along with a SQL database. That project helped me understand how design and data come together to solve real-world problems.
              </p>
              <p>
              Since then, I’ve continued building my skills through personal projects and continuous practice, focusing on creating user-friendly, scalable, and visually appealing digital products. I enjoy writing clean code, improving application structure, and exploring modern tools that make development more efficient.
              </p>
              <p>
              Along with frontend development, I have also expanded into backend and DevOps. I work with Laravel/PHP and NestJS to build APIs, manage databases, and structure backend systems. I also have hands-on experience with Docker, Google Cloud Platform deployment, and CI/CD pipelines, which helps me understand how applications move from development to production.
              </p>
              Outside of coding, I enjoy exploring new technologies, reading self-improvement books, and spending time outdoors to refresh my mind and gather new ideas.
              <p>

              </p>
            </motion.div>
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="text-xl font-semibold text-foreground">What I Do</h3>
              <div className="flex flex-col gap-4">
                {whatIDo.map((item) => (
                  <div
                    key={item.title}
                    className="flex gap-4 items-start min-w-0"
                  >
                    <div
                      className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary"
                      aria-hidden
                    />
                    <div className="min-w-0 space-y-1">
                      <h4 className="font-medium text-foreground">
                        {item.title}
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Skills */}
        <motion.section
          className="text-center space-y-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
           viewport={{ amount: 0.2 }} 
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold">Skills & Technologies</h2>
          <Card className="shadow-md border border-muted">
            <CardContent className="p-6 flex flex-wrap justify-center gap-3">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ amount: 0.3 }} 
                  transition={{ delay: index * 0.05 }}
                >
                  <Badge className="text-sm px-4 py-2 shadow-sm">{skill}</Badge>
                </motion.div>
              ))}
            </CardContent>
          </Card>
        </motion.section>

        {/* Experience */}
        <motion.section
          className="text-center space-y-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold">Experience</h2>
          <div className="space-y-6 max-w-3xl mx-auto">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
               viewport={{ amount: 0.3 }} 
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Card className="text-left shadow-md border border-muted">
                  <CardContent className="p-6 space-y-2">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div>
                        <h3 className="text-xl font-semibold">{exp.title}</h3>
                        <p className="text-primary font-medium">{exp.company}</p>
                      </div>
                      <Badge variant="outline" className="mt-2 md:mt-0">
                        {exp.period}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground">{exp.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Contact */}
        <motion.section
          className="text-center space-y-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
           viewport={{ amount: 0.3 }} 
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold">Let's Connect</h2>
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.3 }} 
            transition={{ duration: 0.6 }}
          >
            <Card className="shadow-md border border-muted w-full max-w-4xl">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8 text-left">
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-foreground">
                      Get In Touch
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Interested in collaborating or have a project in mind?
                      Feel free to reach out!
                    </p>
                    <div className="space-y-3 text-center">
                      <div className="flex items-center gap-3">
                        <Mail className="w-5 h-5 text-primary" />
                        <span>sarim.khan50503@email.com</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Phone className="w-5 h-5 text-primary" />
                        <span>+92 335 5080503</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <MapPin className="w-5 h-5 text-primary" />
                        <span>Bahria Town, Islamabad</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.section>
      </main>
    </div>
  );
}
