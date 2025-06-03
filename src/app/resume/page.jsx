import { Mail, Phone, MapPin, Github, Linkedin, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import Image from "next/image"
import Link from "next/link"

export default function ResumePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      {/* Header / Personal Info */}
      <div className="flex flex-col md:flex-row gap-6 items-center md:items-start mb-8">
        <div className="w-40 h-40 relative rounded-full overflow-hidden border-4 border-gray-100 shadow-lg">
          <Image
            src="/placeholder.svg?height=400&width=400"
            alt="Profile Photo"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl font-bold mb-2">John Doe</h1>
          <h2 className="text-2xl text-muted-foreground mb-4">Senior Software Engineer</h2>
          <div className="flex flex-wrap gap-3 justify-center md:justify-start mb-4">
            <Badge variant="outline" className="px-3 py-1 text-sm flex items-center gap-1">
              <Mail className="h-3.5 w-3.5" />
              <span>john.doe@example.com</span>
            </Badge>
            <Badge variant="outline" className="px-3 py-1 text-sm flex items-center gap-1">
              <Phone className="h-3.5 w-3.5" />
              <span>(123) 456-7890</span>
            </Badge>
            <Badge variant="outline" className="px-3 py-1 text-sm flex items-center gap-1">
              <MapPin className="h-3.5 w-3.5" />
              <span>San Francisco, CA</span>
            </Badge>
            <Badge variant="outline" className="px-3 py-1 text-sm flex items-center gap-1">
              <Github className="h-3.5 w-3.5" />
              <span>github.com/johndoe</span>
            </Badge>
            <Badge variant="outline" className="px-3 py-1 text-sm flex items-center gap-1">
              <Linkedin className="h-3.5 w-3.5" />
              <span>linkedin.com/in/johndoe</span>
            </Badge>
          </div>
          <div className="flex justify-center md:justify-start">
            <Button className="flex items-center gap-2">
              <Download className="h-4 w-4" />
              Download Resume
            </Button>
          </div>
        </div>
      </div>

      {/* Professional Summary */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold border-b pb-2 mb-4">Professional Summary</h2>
        <p className="text-muted-foreground">
          Experienced software engineer with over 8 years of expertise in developing scalable web applications.
          Proficient in JavaScript, TypeScript, React, and Node.js. Passionate about creating intuitive user interfaces
          and optimizing application performance. Strong problem-solving abilities and experience leading development
          teams in agile environments.
        </p>
      </section>

      {/* Work Experience */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold border-b pb-2 mb-6">Work Experience</h2>

        <div className="space-y-8">
          <div className="relative pl-8 border-l-2 border-muted pb-2">
            <div className="absolute w-4 h-4 bg-background border-2 border-primary rounded-full -left-[9px] top-1"></div>
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-1 mb-2">
              <h3 className="text-xl font-semibold">Senior Software Engineer</h3>
              <div className="text-sm text-muted-foreground">
                <span className="font-medium">TechCorp Inc.</span> | Jan 2020 - Present
              </div>
            </div>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Led the development of a microservices architecture that improved system scalability by 40%</li>
              <li>Mentored junior developers and conducted code reviews to ensure code quality and best practices</li>
              <li>Implemented CI/CD pipelines that reduced deployment time by 60%</li>
              <li>Collaborated with product managers to define and prioritize feature development</li>
            </ul>
          </div>

          <div className="relative pl-8 border-l-2 border-muted pb-2">
            <div className="absolute w-4 h-4 bg-background border-2 border-primary rounded-full -left-[9px] top-1"></div>
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-1 mb-2">
              <h3 className="text-xl font-semibold">Software Engineer</h3>
              <div className="text-sm text-muted-foreground">
                <span className="font-medium">WebSolutions LLC</span> | Mar 2017 - Dec 2019
              </div>
            </div>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Developed and maintained front-end applications using React and Redux</li>
              <li>Optimized application performance, reducing load time by 35%</li>
              <li>Integrated third-party APIs and services to enhance application functionality</li>
              <li>Participated in agile development processes, including daily stand-ups and sprint planning</li>
            </ul>
          </div>

          <div className="relative pl-8 border-l-2 border-muted">
            <div className="absolute w-4 h-4 bg-background border-2 border-primary rounded-full -left-[9px] top-1"></div>
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-1 mb-2">
              <h3 className="text-xl font-semibold">Junior Developer</h3>
              <div className="text-sm text-muted-foreground">
                <span className="font-medium">StartUp Innovations</span> | Jun 2015 - Feb 2017
              </div>
            </div>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Built responsive web interfaces using HTML, CSS, and JavaScript</li>
              <li>Assisted in the development of RESTful APIs using Node.js and Express</li>
              <li>Fixed bugs and implemented new features in existing applications</li>
              <li>Collaborated with designers to implement UI/UX improvements</li>
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
              <h3 className="text-xl font-semibold">Master of Science in Computer Science</h3>
              <p className="text-muted-foreground">Stanford University</p>
            </div>
            <p className="text-sm text-muted-foreground">2013 - 2015</p>
          </div>

          <div className="flex flex-col md:flex-row justify-between">
            <div>
              <h3 className="text-xl font-semibold">Bachelor of Science in Computer Engineering</h3>
              <p className="text-muted-foreground">University of California, Berkeley</p>
            </div>
            <p className="text-sm text-muted-foreground">2009 - 2013</p>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold border-b pb-2 mb-6">Skills</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-lg font-semibold mb-4">Technical Skills</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">JavaScript/TypeScript</span>
                    <span className="text-sm text-muted-foreground">95%</span>
                  </div>
                  <Progress value={95} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">React/Next.js</span>
                    <span className="text-sm text-muted-foreground">90%</span>
                  </div>
                  <Progress value={90} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Node.js</span>
                    <span className="text-sm text-muted-foreground">85%</span>
                  </div>
                  <Progress value={85} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">HTML/CSS</span>
                    <span className="text-sm text-muted-foreground">90%</span>
                  </div>
                  <Progress value={90} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">SQL/NoSQL</span>
                    <span className="text-sm text-muted-foreground">80%</span>
                  </div>
                  <Progress value={80} className="h-2" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h3 className="text-lg font-semibold mb-4">Professional Skills</h3>
              <div className="flex flex-wrap gap-2">
                <Badge className="px-3 py-1">Team Leadership</Badge>
                <Badge className="px-3 py-1">Agile/Scrum</Badge>
                <Badge className="px-3 py-1">Problem Solving</Badge>
                <Badge className="px-3 py-1">Project Management</Badge>
                <Badge className="px-3 py-1">Code Review</Badge>
                <Badge className="px-3 py-1">Mentoring</Badge>
                <Badge className="px-3 py-1">Technical Writing</Badge>
                <Badge className="px-3 py-1">CI/CD</Badge>
                <Badge className="px-3 py-1">Test-Driven Development</Badge>
                <Badge className="px-3 py-1">System Architecture</Badge>
                <Badge className="px-3 py-1">Performance Optimization</Badge>
                <Badge className="px-3 py-1">UX/UI Design</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Projects */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold border-b pb-2 mb-6">Featured Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-lg font-semibold mb-2">E-commerce Platform</h3>
              <p className="text-sm text-muted-foreground mb-3">
                A full-stack e-commerce solution with payment processing, inventory management, and analytics.
              </p>
              <div className="flex flex-wrap gap-2 mb-3">
                <Badge variant="secondary" className="px-2 py-0.5 text-xs">
                  React
                </Badge>
                <Badge variant="secondary" className="px-2 py-0.5 text-xs">
                  Node.js
                </Badge>
                <Badge variant="secondary" className="px-2 py-0.5 text-xs">
                  MongoDB
                </Badge>
                <Badge variant="secondary" className="px-2 py-0.5 text-xs">
                  Stripe
                </Badge>
              </div>
              <Link href="#" className="text-sm text-primary hover:underline">
                View Project →
              </Link>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h3 className="text-lg font-semibold mb-2">Task Management App</h3>
              <p className="text-sm text-muted-foreground mb-3">
                A collaborative task management application with real-time updates and team collaboration features.
              </p>
              <div className="flex flex-wrap gap-2 mb-3">
                <Badge variant="secondary" className="px-2 py-0.5 text-xs">
                  Next.js
                </Badge>
                <Badge variant="secondary" className="px-2 py-0.5 text-xs">
                  TypeScript
                </Badge>
                <Badge variant="secondary" className="px-2 py-0.5 text-xs">
                  Firebase
                </Badge>
                <Badge variant="secondary" className="px-2 py-0.5 text-xs">
                  Tailwind CSS
                </Badge>
              </div>
              <Link href="#" className="text-sm text-primary hover:underline">
                View Project →
              </Link>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h3 className="text-lg font-semibold mb-2">Health Tracking Dashboard</h3>
              <p className="text-sm text-muted-foreground mb-3">
                A data visualization dashboard for health metrics with customizable charts and reports.
              </p>
              <div className="flex flex-wrap gap-2 mb-3">
                <Badge variant="secondary" className="px-2 py-0.5 text-xs">
                  React
                </Badge>
                <Badge variant="secondary" className="px-2 py-0.5 text-xs">
                  D3.js
                </Badge>
                <Badge variant="secondary" className="px-2 py-0.5 text-xs">
                  Express
                </Badge>
                <Badge variant="secondary" className="px-2 py-0.5 text-xs">
                  PostgreSQL
                </Badge>
              </div>
              <Link href="#" className="text-sm text-primary hover:underline">
                View Project →
              </Link>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h3 className="text-lg font-semibold mb-2">AI Content Generator</h3>
              <p className="text-sm text-muted-foreground mb-3">
                A tool that leverages AI to generate marketing content, blog posts, and social media updates.
              </p>
              <div className="flex flex-wrap gap-2 mb-3">
                <Badge variant="secondary" className="px-2 py-0.5 text-xs">
                  Python
                </Badge>
                <Badge variant="secondary" className="px-2 py-0.5 text-xs">
                  Flask
                </Badge>
                <Badge variant="secondary" className="px-2 py-0.5 text-xs">
                  OpenAI API
                </Badge>
                <Badge variant="secondary" className="px-2 py-0.5 text-xs">
                  Vue.js
                </Badge>
              </div>
              <Link href="#" className="text-sm text-primary hover:underline">
                View Project →
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Certifications */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold border-b pb-2 mb-6">Certifications</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold">AWS Certified Solutions Architect</h3>
            <p className="text-sm text-muted-foreground">Amazon Web Services • 2022</p>
          </div>
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold">Google Professional Cloud Developer</h3>
            <p className="text-sm text-muted-foreground">Google Cloud • 2021</p>
          </div>
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold">Certified Kubernetes Administrator</h3>
            <p className="text-sm text-muted-foreground">Cloud Native Computing Foundation • 2020</p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section>
        <h2 className="text-2xl font-bold border-b pb-2 mb-6">Contact Me</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <p className="text-muted-foreground">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            <div className="flex items-center gap-2">
              <Mail className="h-5 w-5 text-muted-foreground" />
              <span>john.doe@example.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-5 w-5 text-muted-foreground" />
              <span>(123) 456-7890</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-muted-foreground" />
              <span>San Francisco, CA</span>
            </div>
            <div className="flex gap-4 pt-2">
              <Link href="#" className="hover:text-primary">
                <Github className="h-6 w-6" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link href="#" className="hover:text-primary">
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          <div>
            <Button className="w-full">Send Message</Button>
          </div>
        </div>
      </section>
    </div>
  )
}
