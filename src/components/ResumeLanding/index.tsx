'use client';

import React from 'react';
import Image from 'next/image';
import { Download, Mail, Sparkles, Code2, Zap } from 'lucide-react';
import { Github, Linkedin } from '@/components/Icons';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const ResumeLanding = () => {
  const personalInfo = {
    name: 'Nikolas Padilla',
    title: 'Software Engineer',
    about:
      'Passionate developer focused on creating clean, maintainable solutions with modern technologies. I love building beautiful, functional applications that make a difference.',
    skills: [
      { name: '.NET / C#', icon: '/brands/dotnet.svg' },
      { name: 'Flutter', icon: '/brands/flutter.svg' },
      { name: 'React', icon: '/brands/react.svg' },
      { name: 'Next.js', icon: '/brands/nextjs.svg' },
      { name: 'TypeScript', icon: '/brands/typescript.svg' },
      { name: 'Supabase', icon: '/brands/supabase.svg' },
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 font-sans text-foreground relative">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 md:-top-40 md:-right-40 w-40 h-40 md:w-80 md:h-80 bg-gradient-to-br from-purple-400/20 to-blue-600/20 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute top-1/2 -left-20 md:-left-40 w-32 h-32 md:w-60 md:h-60 bg-gradient-to-br from-emerald-400/20 to-cyan-600/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: '2s' }}
        ></div>
        <div
          className="absolute bottom-0 right-1/3 w-36 h-36 md:w-72 md:h-72 bg-gradient-to-br from-amber-400/20 to-orange-600/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: '4s' }}
        ></div>
      </div>

      {/* Header */}
      <header className="glass-morphism sticky top-0 z-50 border-b border-white/20">
        <nav className="max-w-6xl mx-auto px-4 md:px-6 py-3 md:py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 md:w-8 md:h-8 gradient-primary rounded-full flex items-center justify-center">
              <Code2 className="w-3 h-3 md:w-4 md:h-4 text-white" />
            </div>
            <h1 className="text-lg md:text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              {personalInfo.name}
            </h1>
          </div>
          <div className="hidden md:flex gap-2">
            {['about', 'skills', 'contact'].map(section => (
              <Button
                key={section}
                variant="ghost"
                onClick={() => {
                  document
                    .getElementById(section)
                    ?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="capitalize hover:bg-white/50 transition-all duration-300"
              >
                {section === 'about' && <Sparkles className="w-4 h-4 mr-1" />}
                {section === 'skills' && <Zap className="w-4 h-4 mr-1" />}
                {section === 'contact' && <Mail className="w-4 h-4 mr-1" />}
                {section}
              </Button>
            ))}
          </div>
          <div className="md:hidden flex gap-1">
            {['about', 'skills', 'contact'].map(section => (
              <Button
                key={section}
                variant="ghost"
                size="sm"
                onClick={() => {
                  document
                    .getElementById(section)
                    ?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="p-2 hover:bg-white/50 transition-all duration-300"
              >
                {section === 'about' && <Sparkles className="w-4 h-4" />}
                {section === 'skills' && <Zap className="w-4 h-4" />}
                {section === 'contact' && <Mail className="w-4 h-4" />}
              </Button>
            ))}
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section
        id="about"
        className="relative max-w-6xl mx-auto px-4 md:px-6 py-16 md:py-32"
      >
        <div className="text-center relative z-10">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 leading-tight">
            <span className="bg-gradient-to-r from-gray-900 via-purple-900 to-blue-900 bg-clip-text text-transparent">
              {personalInfo.title.split(' ')[0]}
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent animate-gradient">
              {personalInfo.title.split(' ')[1]}
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed px-2">
            {personalInfo.about}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4 px-2">
            <Button
              asChild
              size="lg"
              className="gradient-primary text-white hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl rounded-xl w-full sm:w-auto"
            >
              <a href="/nikolaspadilla_resume.pdf" download="nikolas-cv.pdf">
                <Download className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                Download Resume
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-2 hover:bg-white hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl rounded-xl w-full sm:w-auto"
            >
              <a href="mailto:contact@nikolaspadilla.com">
                <Mail className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                Let&apos;s Connect
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="relative py-16 md:py-32 bg-gradient-to-br from-gray-50 to-purple-50"
      >
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12 md:mb-16">
            <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-900 to-purple-900 bg-clip-text text-transparent mb-4">
              Skills & Technologies
            </h3>
            <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto px-2">
              I work with modern technologies to build scalable and efficient
              solutions
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {personalInfo.skills.map((skill, index) => (
              <Card
                key={skill.name}
                className="group hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border-0 shadow-lg bg-white/80 backdrop-blur-sm"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 md:p-8 text-center">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {skill.icon.startsWith('/') ? (
                      <Image
                        src={skill.icon}
                        alt={`${skill.name} icon`}
                        width={48}
                        height={48}
                        className="w-10 h-10 md:w-12 md:h-12 mx-auto"
                      />
                    ) : (
                      skill.icon
                    )}
                  </div>
                  <h4 className="text-lg md:text-xl font-bold text-gray-900">
                    {skill.name}
                  </h4>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="relative py-16 md:py-32 bg-gradient-to-br from-white to-gray-50"
      >
        <div className="max-w-6xl mx-auto px-4 md:px-6 text-center">
          <div className="mb-12 md:mb-16">
            <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-900 to-purple-900 bg-clip-text text-transparent mb-4">
              Let&apos;s Build Something Amazing
            </h3>
            <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto px-2">
              Ready to bring your ideas to life? Let&apos;s connect and discuss
              how we can work together.
            </p>
          </div>

          <div className="flex justify-center gap-4 md:gap-6 mb-8 md:mb-12">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="group h-12 w-12 md:h-16 md:w-16 rounded-xl md:rounded-2xl border-2 hover:shadow-lg hover:scale-110 transition-all duration-300 bg-white/80 backdrop-blur-sm"
            >
              <a
                href="https://github.com/muddxyii"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
              >
                <Github
                  size={20}
                  className="md:w-6 md:h-6 group-hover:text-purple-600 transition-colors"
                />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="group h-12 w-12 md:h-16 md:w-16 rounded-xl md:rounded-2xl border-2 hover:shadow-lg hover:scale-110 transition-all duration-300 bg-white/80 backdrop-blur-sm"
            >
              <a
                href="https://linkedin.com/in/nikolaspadilla"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
              >
                <Linkedin
                  size={20}
                  className="md:w-6 md:h-6 group-hover:text-blue-600 transition-colors"
                />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="group h-12 w-12 md:h-16 md:w-16 rounded-xl md:rounded-2xl border-2 hover:shadow-lg hover:scale-110 transition-all duration-300 bg-white/80 backdrop-blur-sm"
            >
              <a
                href="mailto:contact@nikolaspadilla.com"
                aria-label="Email Contact"
              >
                <Mail
                  size={20}
                  className="md:w-6 md:h-6 group-hover:text-emerald-600 transition-colors"
                />
              </a>
            </Button>
          </div>

          <div className="text-gray-500 text-xs md:text-sm">
            © 2025 Nikolas Padilla. Built with Next.js & Tailwind CSS.
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResumeLanding;
