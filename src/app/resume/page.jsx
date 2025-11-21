

"use client";

import { Mail, Phone, MapPin, Github, Linkedin, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

export default function ResumePage() {
  const technicalSkills = [
    { name: "React / Next.js", value: 95 },
    { name: "Expo (Mobile Development)", value: 70 },
    { name: "JavaScript / TypeScript", value: 90 },
    { name: "HTML / CSS / Tailwind CSS", value: 90 },
    { name: "Firebase (Auth, Firestore)", value: 85 },
    { name: "Git / GitHub", value: 80 },
  ];

  const professionalSkills = [
    "Responsive Design",
    "UI/UX Collaboration",
    "Component-Based Architecture",
    "Performance Optimization",
    "Cross-Browser Compatibility",
    "Clean Code Practices",
    "Version Control",
    "Firebase Integration",
    "Mobile-First Design",
    "Debugging & Testing",
  ];

  const workExperience = [
    {
      title: "Junior Developer",
      company: "Silver Sparrow Studios, Islamabad",
      period: "January 2025-Present",
      points: [
        "Developed and maintained front-end applications using React and Redux",
        "Optimized application performance, reducing load time by 35%",
        "Integrated third-party APIs and services to enhance application functionality",
        "Participated in agile development processes, including daily stand-ups and sprint planning",
        "Built responsive designs that adapt seamlessly to various devices and screen sizes, improving accessibility and user engagement.",
      ],
    },
    {
      title: "Intern",
      company: "Nextpak, Rawalpindi",
      period: "Jun 2024 - Dec 2024",
      points: [
        "Learned and applied modern frontend technologies including Next.js and React.js",
        "Built responsive web pages using HTML5 and Tailwind CSS",
        "Integrated Firebase for authentication and database handling",
        "Collaborated with mentors to understand component-based architecture and best practices",
      ],
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl space-y-16">

      {/* Header */}
      <motion.div
        className="flex flex-col md:flex-row gap-6 items-center md:items-start mb-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <div className="w-40 h-40 relative rounded-full overflow-hidden border-4 border-gray-100 shadow-lg">
          <Image
            src="/sss.png"
            alt="Profile Photo"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="flex-1 text-center md:text-left space-y-4">
          <h1 className="text-4xl font-bold">Muhammad Sarim Khan</h1>
          <h2 className="text-2xl text-muted-foreground">Junior Frontend Developer</h2>

          <div className="flex flex-wrap gap-3 justify-center md:justify-start">
            <Badge variant="outline" className="px-3 py-1 text-sm flex items-center gap-1">
              <Mail className="h-3.5 w-3.5" />
              <span>sarim.khan50503@gmail.com</span>
            </Badge>
            <Badge variant="outline" className="px-3 py-1 text-sm flex items-center gap-1">
              <Phone className="h-3.5 w-3.5" />
              <span>+92 3355080503</span>
            </Badge>
            <Badge variant="outline" className="px-3 py-1 text-sm flex items-center gap-1">
              <MapPin className="h-3.5 w-3.5" />
              <span>Bahria Town, Islamabad</span>
            </Badge>
            <Badge variant="outline" className="px-3 py-1 text-sm flex items-center gap-1" asChild>
              <a href="https://github.com/Sarim503" target="_blank" rel="noopener noreferrer">
                <Github className="h-3.5 w-3.5" />
                <span>github.com/Sarim503</span>
              </a>
            </Badge>
            <Badge variant="outline" className="px-3 py-1 text-sm flex items-center gap-2" asChild>
              <a href="https://www.linkedin.com/in/sarimkhan-webdev/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-3.5 w-3.5" />
                <span>sarimkhan-webdev</span>
              </a>
            </Badge>
          </div>

          <div className="flex justify-center md:justify-start">
            <Button className="flex items-center gap-2">
              <a href="/Sarim Khan CV.pdf" download className="flex items-center gap-2 btn-class">
                <Download className="h-4 w-4" />
                Download Resume
              </a>
            </Button>
          </div>
        </div>
      </motion.div>

      {/* Professional Summary */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl font-bold border-b pb-2 mb-4">Professional Summary</h2>
        <p className="text-muted-foreground">
          I am a passionate and results-driven web developer with strong expertise in Next.js and React.js. With a solid foundation in front-end development, I focus on building scalable, high-performance web applications. I am experienced in creating intuitive user interfaces and solving complex problems through clean and efficient code. Always eager to learn and grow, I aim to contribute to impactful projects and deliver exceptional user experiences.
        </p>
      </motion.section>

      {/* Work Experience */}
      <section>
        <h2 className="text-2xl font-bold border-b pb-2 mb-6">Work Experience</h2>
        <div className="space-y-6">
          {workExperience.map((exp, index) => (
            <motion.div
              key={index}
              className="relative pl-8 border-l-2 border-muted pb-4"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="absolute w-4 h-4 bg-background border-2 border-primary rounded-full -left-[9px] top-1"></div>
              <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-1 mb-2">
                <h3 className="text-xl font-semibold">{exp.title}</h3>
                <div className="text-sm text-muted-foreground">
                  <span className="font-medium">{exp.company}</span> | {exp.period}
                </div>
              </div>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                {exp.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Education */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl font-bold border-b pb-2 mb-6">Education</h2>
        <div className="space-y-6">
          <div className="flex flex-col md:flex-row justify-between">
            <div>
              <h3 className="text-xl font-semibold">Bachelor of Science in Computer Science</h3>
              <p className="text-muted-foreground">Arid Agricultural University, Rawalpindi</p>
            </div>
            <p className="text-sm text-muted-foreground">2019-2023</p>
          </div>
        </div>
      </motion.section>

      {/* Skills */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold border-b pb-2 mb-6">Skills</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Technical Skills */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold mb-4">Technical Skills</h3>
                <div className="space-y-4">
                  {technicalSkills.map((skill, i) => (
                    <div key={i}>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.value}%</span>
                      </div>
                      <Progress value={skill.value} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Professional Skills */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold mb-4">Professional Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {professionalSkills.map((skill, i) => (
                    <Badge key={i} className="px-3 py-1">{skill}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Contact */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl font-bold border-b pb-2 mb-6">Contact Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <p className="text-muted-foreground">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            <div className="flex items-center gap-2"><Mail className="h-5 w-5 text-muted-foreground" /><span>sarim.khan50503@gmail.com</span></div>
            <div className="flex items-center gap-2"><Phone className="h-5 w-5 text-muted-foreground" /><span>+92 3355080503</span></div>
            <div className="flex items-center gap-2"><MapPin className="h-5 w-5 text-muted-foreground" /><span>Bahria Town, Islamabad</span></div>
            <div className="flex items-center gap-2">
              <Link href="https://github.com/Sarim503" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary">
                <Github className="h-3.5 w-3.5" /> <span>github.com/Sarim503</span>
              </Link>
            </div>
            <div className="flex items-center gap-2">
              <Link href="https://www.linkedin.com/in/sarimkhan-webdev/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary">
                <Linkedin className="h-3.5 w-3.5" /> <span>sarimkhan-webdev</span>
              </Link>
            </div>
          </div>

          <div>
            <Link href="https://wa.me/923355080503?text=Hi%20there!%20I%20saw%20your%20portfolio." target="_blank" rel="noopener noreferrer">
              <Button className="w-full flex items-center gap-2 bg-green-700">
                <FaWhatsapp size={16} className="text-green-500" />
                Send Message
              </Button>
            </Link>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
