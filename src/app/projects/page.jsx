

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
import { ExternalLink, Github, Search, Filter, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";



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

  const { scrollYProgress } = useScroll();
  const headerY = useTransform(scrollYProgress, [0, 0.5], [0, -50]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted/20">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Header */}
      <motion.section
        className="relative border-b bg-gradient-to-b from-muted/40 via-muted/20 to-transparent backdrop-blur-sm overflow-hidden"
        style={{ y: headerY, opacity: headerOpacity }}
      >
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-10 left-10 w-2 h-2 bg-primary rounded-full"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: 0,
            }}
          />
          <motion.div
            className="absolute top-20 right-20 w-3 h-3 bg-blue-500 rounded-full"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: 0.5,
            }}
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-primary/10 border border-primary/20"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Featured Work</span>
            </motion.div>
            
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight bg-gradient-to-r from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              My Projects
            </motion.h1>
            
            <motion.p
              className="mx-auto mt-4 sm:mt-6 max-w-2xl text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              A collection of my work showcasing various technologies and
              solutions I've built
            </motion.p>
          </motion.div>
        </div>
      </motion.section>

      {/* Filters */}
      <motion.section
        className="sticky top-16 z-40 border-b bg-background/80 backdrop-blur-md shadow-sm"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          <div className="flex flex-col gap-4 sm:gap-6 md:flex-row md:items-center md:justify-between">
            {/* Search */}
            <motion.div
              className="relative flex-1 max-w-md w-full"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ amount: 0.3 }}
              transition={{ duration: 0.5 }}
            >
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 h-11 transition-all duration-300 focus:ring-2 focus:ring-primary/20"
              />
            </motion.div>

            {/* Category Filter */}
            <motion.div
              className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-2"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ amount: 0.3 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm font-medium text-muted-foreground hidden sm:inline">Filter:</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map((category, index) => (
                  <motion.div
                    key={category}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ amount: 0.3 }}
                    transition={{ delay: index * 0.1, type: "spring", stiffness: 200 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      variant={
                        selectedCategory === category ? "default" : "outline"
                      }
                      size="sm"
                      onClick={() => setSelectedCategory(category)}
                      className="transition-all duration-300 shadow-sm hover:shadow-md"
                    >
                      {category}
                    </Button>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Projects Grid */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
        {otherProjects.length > 0 && (
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3"
              initial="hidden"
              animate="visible"
            >
              {otherProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  variants={{
                    hidden: { opacity: 0, y: 50, scale: 0.9 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      scale: 1,
                      transition: {
                        duration: 0.5,
                        delay: index * 0.1,
                        type: "spring",
                        stiffness: 100,
                      },
                    },
                  }}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  className="h-full"
                >
                  <Card className="group h-full overflow-hidden border-2 transition-all duration-300 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 bg-card/50 backdrop-blur-sm">
                    {/* Image Container with Overlay */}
                    <div className="aspect-video relative overflow-hidden bg-muted">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                        className="h-full w-full"
                      >
                        <Image
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </motion.div>
                      
                      {/* Gradient Overlay on Hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      {/* Category Badge on Image */}
                      <motion.div
                        className="absolute top-3 right-3"
                        initial={{ opacity: 0, scale: 0 }}
                        whileHover={{ opacity: 1, scale: 1 }}
                        transition={{ type: "spring", stiffness: 200 }}
                      >
                        <Badge variant="secondary" className="text-xs font-semibold backdrop-blur-sm bg-background/80">
                          {project.category}
                        </Badge>
                      </motion.div>

                      {/* Quick Actions on Hover */}
                      <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {project.liveUrl && (
                          <motion.div
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <Button
                              asChild
                              size="lg"
                              className="rounded-full shadow-lg backdrop-blur-sm"
                            >
                              <Link
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <ExternalLink className="h-5 w-5 mr-2" />
                                View Live
                              </Link>
                            </Button>
                          </motion.div>
                        )}
                      </div>
                    </div>

                    <CardHeader className="pb-3 space-y-3">
                      <div className="flex items-start justify-between gap-2">
                        <CardTitle className="text-lg sm:text-xl font-bold group-hover:text-primary transition-colors duration-300">
                          {project.title}
                        </CardTitle>
                      </div>
                      
                      <div className="relative group/desc">
                        <CardDescription className="text-sm sm:text-base line-clamp-2 leading-relaxed">
                          {project.description}
                        </CardDescription>
                        {project.description?.length > 100 && (
                          <div className="absolute left-0 top-full mt-2 w-full sm:w-max sm:max-w-xs rounded-lg bg-popover border border-border p-3 text-xs sm:text-sm shadow-xl opacity-0 group-hover/desc:opacity-100 transition-opacity duration-300 pointer-events-none z-20">
                            {project.description}
                          </div>
                        )}
                      </div>
                    </CardHeader>

                    <CardContent className="pt-0 space-y-4">
                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {project.tags.slice(0, 3).map((tag, tagIndex) => (
                          <motion.div
                            key={tag}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ amount: 0.3 }}
                            transition={{
                              delay: index * 0.1 + tagIndex * 0.05,
                              type: "spring",
                              stiffness: 200,
                            }}
                            whileHover={{ scale: 1.1 }}
                          >
                            <Badge
                              variant="outline"
                              className="text-xs font-medium transition-colors hover:bg-primary/10 hover:border-primary/50 cursor-default"
                            >
                              {tag}
                            </Badge>
                          </motion.div>
                        ))}
                        {project.tags.length > 3 && (
                          <Badge
                            variant="outline"
                            className="text-xs font-medium"
                          >
                            +{project.tags.length - 3}
                          </Badge>
                        )}
                      </div>

                      {/* Action Buttons */}
                      <div className="flex flex-col sm:flex-row gap-2 pt-2">
                        {project.liveUrl && (
                          <motion.div
                            className="flex-1"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <Button
                              asChild
                              size="sm"
                              className="w-full group/btn transition-all duration-300"
                            >
                              <Link
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <ExternalLink className="mr-2 h-4 w-4 group-hover/btn:rotate-12 transition-transform" />
                                <span className="hidden sm:inline">Live Demo</span>
                                <span className="sm:hidden">Demo</span>
                              </Link>
                            </Button>
                          </motion.div>
                        )}
                        <motion.div
                          className="flex-1"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <Button
                            asChild
                            variant="outline"
                            size="sm"
                            className="w-full group/btn transition-all duration-300"
                          >
                            <Link
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Github className="mr-2 h-4 w-4 group-hover/btn:rotate-12 transition-transform" />
                              <span className="hidden sm:inline">View Code</span>
                              <span className="sm:hidden">Code</span>
                            </Link>
                          </Button>
                        </motion.div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>
        )}

        {/* No Results */}
        {filteredProjects.length === 0 && (
          <motion.div
            className="text-center py-16 sm:py-20 md:py-24"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, type: "spring" }}
          >
            <motion.div
              className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-muted mb-6"
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              <Search className="w-10 h-10 text-muted-foreground" />
            </motion.div>
            
            <h3 className="text-2xl sm:text-3xl font-bold mb-3">
              No projects found
            </h3>
            <p className="text-muted-foreground mb-6 text-base sm:text-lg max-w-md mx-auto">
              Try adjusting your search terms or filters
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("All");
                }}
                size="lg"
                className="shadow-lg"
              >
                Clear Filters
              </Button>
            </motion.div>
          </motion.div>
        )}
      </div>

      {/* Call to Action */}
      <motion.section
        className="relative border-t bg-gradient-to-b from-muted/40 via-muted/20 to-background overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        {/* Decorative Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-blue-500 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-24 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.3 }}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              Interested in working together?
            </motion.h2>
            
            <motion.p
              className="text-muted-foreground mb-8 sm:mb-10 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.3 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              I'm always open to discussing new opportunities and interesting
              projects. Let's connect and see how we can collaborate.
            </motion.p>
            
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.3 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto"
              >
                <Link
                  href="https://wa.me/923355080503?text=Hi%20there!%20I%20saw%20your%20portfolio."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button
                    size="lg"
                    className="w-full sm:w-auto flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <FaWhatsapp size={18} />
                    <span>Send Message</span>
                  </Button>
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto"
              >
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <Link href="/resume">View Resume</Link>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
