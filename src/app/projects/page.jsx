


"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FaWhatsapp } from "react-icons/fa";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ExternalLink, Github, Search, Filter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";



const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    description:
      "A modern, responsive portfolio website built with Next.js and Tailwind CSS.",
    image: "/portfolio.png",
    tags: ["Next.js", "Tailwind CSS", "shadcn/ui"],
    category: "Frontend",
    liveUrl: "https://portfolio-gamma-ten-63.vercel.app",
    githubUrl: "https://github.com/Sarim503/portfolio",
    featured: false,
  },
  {
    id: 2,
    title: "Simple Todo App ",
    description:
      "A simple and clean todo list application with add, edit, and delete functionality, built using Next.js and Tailwind CSS.",
    image: "/todo.png",
    tags: ["Next.js", "Tailwind CSS", "React Toastify"],
    category: "Frontend",
    liveUrl: "https://simple-todo-app-nine-omega.vercel.app",
    githubUrl: "https://github.com/Sarim503/SimpleTodoApp",
    featured: false,
  },
  {
    id: 3,
    title: "Tealpot Landing Page",
    description:
      "A responsive and visually appealing landing page built using Next.js, Tailwind CSS, and a modern carousel component.",
    image: "/tealpot.png",
    tags: ["Next.js", "Tailwind CSS", "Carousel"],
    category: "Frontend",
    liveUrl: "https://teal-pot.vercel.app",
    githubUrl: "https://github.com/Sarim503/TealPot",
    featured: false,
  },
  {
    id: 4,
    title: "Restaurant Website",
    description:
      "A responsive and visually appealing landing page built using Next.js, Tailwind CSS, and a modern carousel component. Features include user login functionality, add to cart, and order management integrated with Google Sheets.",
    image: "/returant.png",
    tags: [
      "Next.js",
      "Tailwind CSS",
      "Carousel",
      "Firebase",
      "Google Sheets Integration",
    ],
    category: "Frontend",
    liveUrl: "https://the-antcient-sip.vercel.app",
    githubUrl: "https://github.com/Sarim503/TheAntcientSip",
    featured: false,
  },
  {
    id: 5,
    title: "sparrowquill",
    description:
      "A fast and engaging social app where users can share posts, follow friends, and join conversations in real time. Designed for smooth performance and an easy-to-use interface, it helps people stay connected, discover trends, and express themselves anytime, anywhere",
    image: "/sparrowquill.png",
    tags: ["Next.js", "Tailwind CSS", "Carousel", "JWT (JSON Web Token)"],
    category: "Frontend",
    liveUrl: "https://sparrowquill.com/",
    githubUrl: "/privateproject",
    featured: false,
  },
  {
    id: 6,
    title: "frameyourfortune",
    description:
      "A modern and intuitive online video editor that allows users to create, edit, and customize videos with ease. Featuring powerful tools, real-time preview, and a smooth interface, it’s designed to help creators produce professional-quality content quickly and effortlessly.",
    image: "/framermotion.png",
    tags: [
      "Next.js",
      "Tailwind CSS",
      "Carousel",
      "JWT (JSON Web Token)",
      "firebase",
      "framer Motion",
    ],
    category: "Frontend",
    liveUrl: "https://www.frameyourfortune.com/",
    githubUrl: "/privateproject",
    featured: false,
  },
  {
    id: 7,
    title: "silversparrowstudios",
    description:
      "A forward-thinking company dedicated to building innovative digital solutions. We focus on creating user-friendly, high-performance products that empower individuals and businesses to connect, create, and grow in the digital age.",
    image: "/company.png",
    tags: [
      "Next.js",
      "Tailwind CSS",
      "Carousel",
      "JWT (JSON Web Token)",
      "firebase",
      "framer Motion",
    ],
    category: "Frontend",
    liveUrl: "https://silversparrowstudios.com/",
    githubUrl: "/privateproject",
    featured: false,
  },
  {
    id: 8,
    title: "theclarity",
    description:
      "A platform dedicated to sharing Islamic knowledge, guidance, and inspiration. We aim to provide authentic content on faith, lifestyle, and spirituality, helping readers strengthen their connection with Islam and foster a mindful, purposeful life.",
    image: "/clearity.png",
    tags: ["Next.js", "Tailwind CSS", "Carousel", "framer Motion"],
    category: "Frontend",
    liveUrl: "https://www.theclarity.net/",
    githubUrl: "/privateproject",
    featured: false,
  },
  {
    id: 9,
    title: "Skilllob",
    description:
      "SkillLob is a dynamic platform connecting users and service providers. Users can easily discover and book a wide range of services, while providers can showcase their skills and offer services to a growing audience. Our mission is to make service discovery, booking, and delivery seamless, empowering both users and providers to collaborate and grow efficiently",
    image: "/skillob.png",
    tags: [
      "Next.js",
      "Tailwind CSS",
      "Carousel",
      "JWT (JSON Web Token)",

      "framer Motion",
    ],
    category: "Frontend",
    liveUrl: "https://www.skills-project.silversparrowstudios.com/signup",
    githubUrl: "/privateproject",
    featured: false,
  },
];
const categories = ["All", "Frontend", "Mobile"];

export default function ProjectsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      );

    const matchesCategory =
      selectedCategory === "All" || project.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const otherProjects = filteredProjects.filter((project) => !project.featured);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <motion.section
        className="border-b bg-muted/30"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            My Projects
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            A collection of my work showcasing various technologies and
            solutions I've built
          </p>
        </div>
      </motion.section>

      {/* Filters */}
      <motion.section
        className="border-b"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4 text-muted-foreground" />
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={
                      selectedCategory === category ? "default" : "outline"
                    }
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Projects Grid */}
      <div className="container mx-auto px-4 py-12">
        {otherProjects.length > 0 && (
          <section>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {otherProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ amount: 0.3 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="overflow-hidden">
                    <div className="aspect-video relative overflow-hidden">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform hover:scale-105"
                      />
                    </div>
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between">
                        <CardTitle className="text-lg">{project.title}</CardTitle>
                        <Badge variant="secondary" className="text-xs">
                          {project.category}
                        </Badge>
                      </div>
                      <div className="relative group">
                        <CardDescription className="text-sm line-clamp-2">
                          {project.description}
                        </CardDescription>
                        {project.description?.length > 200 && (
                          <div className="absolute left-0 top-full mt-1 w-max max-w-xs rounded bg-gray-800 p-2 text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                            {project.description}
                          </div>
                        )}
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="flex flex-wrap gap-1 mb-4">
                        {project.tags.slice(0, 3).map((tag) => (
                          <motion.div
                            key={tag}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ amount: 0.3 }}
                            transition={{ duration: 0.3 }}
                          >
                            <Badge variant="outline" className="text-xs">
                              {tag}
                            </Badge>
                          </motion.div>
                        ))}
                        {project.tags.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{project.tags.length - 3}
                          </Badge>
                        )}
                      </div>
                      <div className="flex gap-2">
                        {project.liveUrl && (
                          <Button asChild size="sm" className="flex-1">
                            <Link
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <ExternalLink className="mr-1 h-3 w-3" />
                              Demo
                            </Link>
                          </Button>
                        )}
                        <Button
                          asChild
                          variant="outline"
                          size="sm"
                          className="flex-1"
                        >
                          <Link
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Github className="mr-1 h-3 w-3" />
                            Code
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </section>
        )}

        {/* No Results */}
        {filteredProjects.length === 0 && (
          <motion.div
            className="text-center py-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold mb-2">No projects found</h3>
            <p className="text-muted-foreground mb-4">
              Try adjusting your search terms or filters
            </p>
            <Button
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("All");
              }}
            >
              Clear Filters
            </Button>
          </motion.div>
        )}
      </div>

      {/* Call to Action */}
      <motion.section
        className="border-t bg-muted/30"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-4 py-16 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Interested in working together?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities and interesting
            projects. Let's connect and see how we can collaborate.
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="https://wa.me/923355080503?text=Hi%20there!%20I%20saw%20your%20portfolio."
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="w-full flex items-center gap-2 bg-green-700 hover:bg-green-900">
                <FaWhatsapp size={16} />
                Send Message
              </Button>
            </Link>

            <Button asChild variant="outline" size="lg">
              <Link href="/resume">View Resume</Link>
            </Button>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
