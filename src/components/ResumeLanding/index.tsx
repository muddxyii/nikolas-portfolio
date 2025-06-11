"use client";

import React from "react";
import { Download, Mail, Sparkles, Code2, Zap } from "lucide-react";
import { Github, Linkedin } from "@/components/Icons";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ResumeLanding = () => {
  const personalInfo = {
    name: "Nikolas Padilla",
    title: "Software Engineer",
    about:
      "Passionate developer focused on creating clean, maintainable solutions with modern technologies. I love building beautiful, functional applications that make a difference.",
    skills: [
      { name: "C#", icon: "💻", level: "Advanced" },
      { name: "Flutter", icon: "📱", level: "Advanced" },
      { name: "React", icon: "⚛️", level: "Expert" },
      { name: "Next.js", icon: "🚀", level: "Expert" },
      { name: "TypeScript", icon: "🔷", level: "Advanced" },
      { name: "Supabase", icon: "🗃️", level: "Intermediate" },
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 font-sans text-foreground relative">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-blue-600/20 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute top-1/2 -left-40 w-60 h-60 bg-gradient-to-br from-emerald-400/20 to-cyan-600/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-0 right-1/3 w-72 h-72 bg-gradient-to-br from-amber-400/20 to-orange-600/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      {/* Header */}
      <header className="glass-morphism sticky top-0 z-50 border-b border-white/20">
        <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 gradient-primary rounded-full flex items-center justify-center">
              <Code2 className="w-4 h-4 text-white" />
            </div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              {personalInfo.name}
            </h1>
          </div>
          <div className="flex gap-2">
            {["about", "skills", "contact"].map((section) => (
              <Button
                key={section}
                variant="ghost"
                onClick={() => {
                  document
                    .getElementById(section)
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="capitalize hover:bg-white/50 transition-all duration-300"
              >
                {section === "about" && <Sparkles className="w-4 h-4 mr-1" />}
                {section === "skills" && <Zap className="w-4 h-4 mr-1" />}
                {section === "contact" && <Mail className="w-4 h-4 mr-1" />}
                {section}
              </Button>
            ))}
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="about" className="relative max-w-6xl mx-auto px-6 py-32">
        <div className="text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-blue-100 px-4 py-2 rounded-full text-sm font-medium text-purple-700 mb-8">
            <Sparkles className="w-4 h-4" />
            Available for new opportunities
          </div>
          <h2 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-gray-900 via-purple-900 to-blue-900 bg-clip-text text-transparent">
              {personalInfo.title.split(" ")[0]}
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent animate-gradient">
              {personalInfo.title.split(" ")[1]}
            </span>
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            {personalInfo.about}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="gradient-primary text-white hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl rounded-xl"
            >
              <a href="/nikolaspadilla_resume.pdf" download="nikolas-cv.pdf">
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-2 hover:bg-white hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl rounded-xl"
            >
              <a href="mailto:contact@nikolaspadilla.com">
                <Mail className="mr-2 h-5 w-5" />
                Let&apos;s Connect
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="relative py-32 bg-gradient-to-br from-gray-50 to-purple-50"
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-purple-900 bg-clip-text text-transparent mb-4">
              Skills & Technologies
            </h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              I work with modern technologies to build scalable and efficient
              solutions
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {personalInfo.skills.map((skill, index) => (
              <Card
                key={skill.name}
                className="group hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border-0 shadow-lg bg-white/80 backdrop-blur-sm"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8 text-center">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {skill.icon}
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">
                    {skill.name}
                  </h4>
                  <Badge
                    variant="secondary"
                    className="bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 border-0 font-medium"
                  >
                    {skill.level}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="relative py-32 bg-gradient-to-br from-white to-gray-50"
      >
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="mb-16">
            <h3 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-purple-900 bg-clip-text text-transparent mb-4">
              Let&apos;s Build Something Amazing
            </h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Ready to bring your ideas to life? Let&apos;s connect and discuss
              how we can work together.
            </p>
          </div>

          <div className="flex justify-center gap-6 mb-12">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="group h-16 w-16 rounded-2xl border-2 hover:shadow-lg hover:scale-110 transition-all duration-300 bg-white/80 backdrop-blur-sm"
            >
              <a
                href="https://github.com/muddxyii"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
              >
                <Github
                  size={24}
                  className="group-hover:text-purple-600 transition-colors"
                />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="group h-16 w-16 rounded-2xl border-2 hover:shadow-lg hover:scale-110 transition-all duration-300 bg-white/80 backdrop-blur-sm"
            >
              <a
                href="https://linkedin.com/in/nikolaspadilla"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
              >
                <Linkedin
                  size={24}
                  className="group-hover:text-blue-600 transition-colors"
                />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="group h-16 w-16 rounded-2xl border-2 hover:shadow-lg hover:scale-110 transition-all duration-300 bg-white/80 backdrop-blur-sm"
            >
              <a
                href="mailto:contact@nikolaspadilla.com"
                aria-label="Email Contact"
              >
                <Mail
                  size={24}
                  className="group-hover:text-emerald-600 transition-colors"
                />
              </a>
            </Button>
          </div>

          <div className="text-gray-500 text-sm">
            © 2025 Nikolas Padilla. Built with Next.js & Tailwind CSS.
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResumeLanding;
