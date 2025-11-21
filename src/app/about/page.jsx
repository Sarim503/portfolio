
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
    "HTML/CSS",
    "Tailwind CSS",
    "Firebase",
    "Git",
    "Electron.js",
    "React Native",
  ];

  const experiences = [
    {
      title: "Junior Developer",
      company: "Silversparrow Studios",
      period: "Jan 2025 - Present",
      description:
        "Built production-ready frontend websites and full-featured admin panels. Developed a cross-platform desktop app using Electron. Worked in agile sprints and delivered MVPs quickly.",
    },
    {
      title: "Frontend Intern",
      company: "Nextpak Agile",
      period: "Jul 2024 - Dec 2024",
      description:
        "Contributed to MVP development while gaining hands-on experience with React, Tailwind CSS, and Git workflows in a fast-paced agile environment.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f8fafc] to-[#e2e8f0]">
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
                My journey into web development began during university, where I
                developed a student enrollment advisor project using front-end
                technologies along with a SQL database. That project helped me
                understand how design and data come together to solve real-world
                problems.
              </p>
              <p>
                Since then, I’ve continued building my skills through personal
                projects and continuous practice, focusing on creating
                user-friendly and visually appealing web interfaces. I enjoy
                writing clean, scalable code and exploring new tools and best
                practices to improve my workflow.
              </p>
              <p>
                Outside of coding, I enjoy exploring new technologies, reading
                self-building books, and spending time outdoors to refresh my
                mind and gather new ideas.
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
              <div className="space-y-4">
                <div className="flex gap-4 items-start">
                  <div className="w-2 h-2 mt-2 bg-primary rounded-full"></div>
                  <div>
                    <h4 className="font-medium">Frontend Development</h4>
                    <p className="text-muted-foreground text-sm">
                      Building fast, responsive UIs using React, Next.js & Tailwind.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-2 h-2 mt-2 bg-primary rounded-full"></div>
                  <div>
                    <h4 className="font-medium">Mobile Development</h4>
                    <p className="text-muted-foreground text-sm">
                      Building cross-platform mobile apps using React Native and Expo.
                    </p>
                  </div>
                </div>
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
