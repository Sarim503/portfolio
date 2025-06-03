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

const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    description:
      "A modern, responsive portfolio website built with Next.js and Tailwind CSS.",
    image: "/portfolio.png",
    tags: ["Next.js", "Tailwind CSS", "shadcn/ui"],
    category: "Frontend",
    liveUrl: "https://example.com",
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
];

const categories = ["All", "Frontend", "Mobile"];

export default function Component() {
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
      <section className="border-b bg-muted/30">
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            My Projects
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            A collection of my work showcasing various technologies and
            solutions I've built
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="border-b">
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
      </section>

      <div className="container mx-auto px-4 py-12">
    

        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <section>
       
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {otherProjects.map((project) => (
                <Card key={project.id} className="overflow-hidden">
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
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
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
              ))}
            </div>
          </section>
        )}

        {/* No Results */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
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
          </div>
        )}
      </div>

      {/* Call to Action */}
      <section className="border-t bg-muted/30">
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
                <FaWhatsapp size={16}  />
                Send Message
              </Button>
            </Link>
           
            <Button asChild variant="outline" size="lg">
              <Link href="/resume">View Resume</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
