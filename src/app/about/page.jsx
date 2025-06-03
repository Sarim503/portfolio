import { Button } from "@/components/ui/button";
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
    "Fire Base",
    "Git",
    "Electron js",
  ];

  const experiences = [
  
    {
      title: "Junior Developer",
      company: "silversparrowstudios",
      period: "2025 jan - current",
     description:
  "Worked on building production-ready frontend websites and a full-featured admin panel. Developed a cross-platform desktop app using Electron. Gained hands-on experience with modern web technologies, agile development, and MVP delivery."

    },
{
  title: "Internship",
  company: "Nextpak Agile",
  period: "2024 july - 2024 Dev",
  description:
    "Contributed to MVP development and learned modern web technologies in an agile environment.",
}

  ];

  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-12">
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-4">My Story</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                I started my journey in web development during college, where I
                discovered my passion for creating digital solutions. What began
                as curiosity about how websites work has evolved into a career
                dedicated to crafting exceptional user experiences.
              </p>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Over the years, I've had the privilege of working with startups,
                agencies, and established companies, helping them bring their
                digital visions to life. I believe in writing clean,
                maintainable code and staying up-to-date with the latest
                technologies and best practices.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                When I'm not coding, you can find me exploring new technologies,
                contributing to open-source projects, or enjoying outdoor
                activities like hiking and photography.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">What I Do</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-medium">Frontend Development</h4>
                    <p className="text-sm text-muted-foreground">
                      Creating responsive, interactive user interfaces with
                      React, Next.js, and modern CSS
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-medium">UI/UX Design</h4>
                    <p className="text-sm text-muted-foreground">
                      Designing user-centered interfaces with attention to
                      usability and aesthetics
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Skills Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Skills & Technologies
          </h2>
          <Card>
            <CardContent className="p-8">
              <div className="flex flex-wrap gap-3 justify-center">
                {skills.map((skill, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="text-sm py-2 px-4"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>
        {/* Experience Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Experience</h2>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold">{exp.title}</h3>
                      <p className="text-primary font-medium">{exp.company}</p>
                    </div>
                    <Badge variant="outline" className="w-fit mt-2 md:mt-0">
                      {exp.period}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {exp.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
        {/* Contact Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Let's Connect</h2>
          <Card>
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Get In Touch</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    I'm always interested in new opportunities and exciting
                    projects. Whether you have a question or just want to say
                    hi, feel free to reach out!
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-primary" />
                      <span>sarim.khan50503@email.com</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-primary" />
                      <span>+923355080503</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="h-5 w-5 text-primary" />
                      <span>Bahria Town,islambad</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Follow Me</h3>
                  <p className="text-muted-foreground mb-6">
                    Connect with me on social media and check out my latest
                    work.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
}
