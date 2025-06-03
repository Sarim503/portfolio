import { Mail, Phone, MapPin, Github, Linkedin, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import Image from "next/image";
import Link from "next/link";

import { FaWhatsapp } from "react-icons/fa";

export default function ResumePage() {
  const projects = [
    {
      title: "E-commerce Platform",
      description:
        "A full-stack e-commerce solution with payment processing, inventory management, and analytics.",
      techStack: ["React", "Node.js", "MongoDB", "Stripe"],
      link: "#",
    },
    {
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates and team collaboration features.",
      techStack: ["Next.js", "TypeScript", "Firebase", "Tailwind CSS"],
      link: "#",
    },
    {
      title: "Health Tracking Dashboard",
      description:
        "A data visualization dashboard for health metrics with customizable charts and reports.",
      techStack: ["React", "D3.js", "Express", "PostgreSQL"],
      link: "#",
    },
    {
      title: "AI Content Generator",
      description:
        "A tool that leverages AI to generate marketing content, blog posts, and social media updates.",
      techStack: ["Python", "Flask", "OpenAI API", "Vue.js"],
      link: "#",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="flex flex-col md:flex-row gap-6 items-center md:items-start mb-8">
        <div className="w-40 h-40 relative rounded-full overflow-hidden border-4 border-gray-100 shadow-lg">
          <Image
            src="/sss.png"
            alt="Profile Photo"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl font-bold mb-2">Muhammad Sarim Khan</h1>
          <h2 className="text-2xl text-muted-foreground mb-4">
            junior Frontend Developer
          </h2>
          <div className="flex flex-wrap gap-3 justify-center md:justify-start mb-4">
            <Badge
              variant="outline"
              className="px-3 py-1 text-sm flex items-center gap-1"
            >
              <Mail className="h-3.5 w-3.5" />
              <span>sarim.khan50503@gmailcom</span>
            </Badge>
            <Badge
              variant="outline"
              className="px-3 py-1 text-sm flex items-center gap-1"
            >
              <Phone className="h-3.5 w-3.5" />
              <span>+92 3355080503</span>
            </Badge>
            <Badge
              variant="outline"
              className="px-3 py-1 text-sm flex items-center gap-1"
            >
              <MapPin className="h-3.5 w-3.5" />
              <span>Bahria Town,Islamabd</span>
            </Badge>
            <Badge
              variant="outline"
              className="px-3 py-1 text-sm flex items-center gap-1"
              asChild
            >
              <a
                href="https://github.com/Sarim503"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-3.5 w-3.5" />
                <span>github.com/Sarim503</span>
              </a>
            </Badge>
            <Badge
              variant="outline"
              className="px-3 py-1 text-sm flex items-center gap-1"
            >
              <Linkedin className="h-3.5 w-3.5" />
              <span>linkedin.com/in/johndoe</span>
            </Badge>
          </div>
          <div className="flex justify-center md:justify-start">
            <Button className="flex items-center gap-2">
              <a
                href="/resume.pdf"
                download
                className="flex items-center gap-2 btn-class"
              >
                <Download className="h-4 w-4" />
                Download Resume
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Professional Summary */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold border-b pb-2 mb-4">
          Professional Summary
        </h2>
        <p className="text-muted-foreground">
          I am a passionate and results-driven web developer with strong
          expertise in Next.js and React.js. With a solid foundation in
          front-end development, I focus on building scalable, high-performance
          web applications. I am experienced in creating intuitive user
          interfaces and solving complex problems through clean and efficient
          code. Always eager to learn and grow, I aim to contribute to impactful
          projects and deliver exceptional user experiences
        </p>
      </section>

      {/* Work Experience */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold border-b pb-2 mb-6">
          Work Experience
        </h2>

        <div className="space-y-8">
          <div className="relative pl-8 border-l-2 border-muted pb-2">
            <div className="absolute w-4 h-4 bg-background border-2 border-primary rounded-full -left-[9px] top-1"></div>
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-1 mb-2">
              <h3 className="text-xl font-semibold">Junior Developer</h3>
              <div className="text-sm text-muted-foreground">
                <span className="font-medium">
                  Silver Sparrow Studios, Islamabad
                </span>{" "}
                | January 2025-Present
              </div>
            </div>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>
                Developed and maintained front-end applications using React and
                Redux
              </li>
              <li>
                Optimized application performance, reducing load time by 35%
              </li>
              <li>
                Integrated third-party APIs and services to enhance application
                functionality
              </li>
              <li>
                Participated in agile development processes, including daily
                stand-ups and sprint planning
              </li>
              <li>
                Built responsive designs that adapt seamlessly to various
                devices and screen sizes, improving accessibility and user
                engagement.
              </li>
            </ul>
          </div>

          <div className="relative pl-8 border-l-2 border-muted">
            <div className="absolute w-4 h-4 bg-background border-2 border-primary rounded-full -left-[9px] top-1"></div>
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-1 mb-2">
              <h3 className="text-xl font-semibold">Intern</h3>
              <div className="text-sm text-muted-foreground">
                <span className="font-medium">Nextpak </span> | Jan 2024 - Dec
                2024
              </div>
            </div>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>
                Learned and applied modern frontend technologies including
                Next.js and React.js
              </li>
              <li>Built responsive web pages using HTML5 and Tailwind CSS</li>
              <li>
                Integrated Firebase for authentication and database handling
              </li>
              <li>
                Collaborated with mentors to understand component-based
                architecture and best practices
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold border-b pb-2 mb-6">Education</h2>

        <div className="space-y-6">
          <div className="flex flex-col md:flex-row justify-between">
            <div>
              <h3 className="text-xl font-semibold">
                Bachelor of Science in Computer Science
              </h3>
              <p className="text-muted-foreground">
                Arid Agricultural University,Rawalpindi
              </p>
            </div>
            <p className="text-sm text-muted-foreground">2019-2023</p>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold border-b pb-2 mb-6">Skills</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Technical Skills */}
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-lg font-semibold mb-4">Technical Skills</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">React / Next.js</span>
                    <span className="text-sm text-muted-foreground">95%</span>
                  </div>
                  <Progress value={95} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">
                      JavaScript / TypeScript
                    </span>
                    <span className="text-sm text-muted-foreground">60%</span>
                  </div>
                  <Progress value={90} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">
                      HTML / CSS / Tailwind CSS
                    </span>
                    <span className="text-sm text-muted-foreground">90%</span>
                  </div>
                  <Progress value={90} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">
                      Firebase (Auth, Firestore)
                    </span>
                    <span className="text-sm text-muted-foreground">80%</span>
                  </div>
                  <Progress value={85} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Git / GitHub</span>
                    <span className="text-sm text-muted-foreground">80%</span>
                  </div>
                  <Progress value={80} className="h-2" />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Professional Skills */}
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-lg font-semibold mb-4">
                Professional Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                <Badge className="px-3 py-1">Responsive Design</Badge>
                <Badge className="px-3 py-1">UI/UX Collaboration</Badge>
                <Badge className="px-3 py-1">
                  Component-Based Architecture
                </Badge>
                <Badge className="px-3 py-1">Performance Optimization</Badge>
                <Badge className="px-3 py-1">Cross-Browser Compatibility</Badge>
                <Badge className="px-3 py-1">Clean Code Practices</Badge>
                <Badge className="px-3 py-1">Version Control</Badge>
                <Badge className="px-3 py-1">Firebase Integration</Badge>
                <Badge className="px-3 py-1">Mobile-First Design</Badge>
                <Badge className="px-3 py-1">Debugging & Testing</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Projects */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold border-b pb-2 mb-6">
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card key={index}>
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.techStack.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="secondary"
                      className="px-2 py-0.5 text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                <Link
                  href={project.link}
                  className="text-sm text-primary hover:underline"
                >
                  View Project →
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section>
        <h2 className="text-2xl font-bold border-b pb-2 mb-6">Contact Me</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <p className="text-muted-foreground">
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision.
            </p>
            <div className="flex items-center gap-2">
              <Mail className="h-5 w-5 text-muted-foreground" />
              <span>sarim.khan50503@gmailcom</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-5 w-5 text-muted-foreground" />
              <span>+92 3355080503</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-muted-foreground" />
              <span>Bahria Town,Islamabd</span>
            </div>
            <div className="flex items-center gap-2">
              <Link
                href="https://github.com/Sarim503"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary"
              >
                <Github className="h-3.5 w-3.5" />
                <span>github.com/Sarim503</span>
              </Link>
              <Link href="#" className="hover:text-primary">
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          <div>
            <Link
              href="https://wa.me/923355080503?text=Hi%20there!%20I%20saw%20your%20portfolio."
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="w-full flex items-center gap-2 bg-green-700">
                <FaWhatsapp size={16} className="text-green-500" />
                Send Message
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
