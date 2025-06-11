'use client';

import React from 'react';
import {Download, Mail} from 'lucide-react';
import {Github, Linkedin} from "@/components/Icons";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ResumeLanding = () => {
    const personalInfo = {
        name: "Nikolas Padilla",
        title: "Software Engineer",
        about: "Passionate developer focused on creating clean, maintainable solutions with modern technologies.",
        skills: ["C#", "Flutter", "React", "Next.js", "TypeScript", "Supabase"],
    };

    return (
        <div className="min-h-screen bg-background font-sans text-foreground">
            {/* Header */}
            <header className="bg-card shadow-sm sticky top-0 z-10 border-b">
                <nav className="max-w-5xl mx-auto px-4 py-6 flex justify-between items-center">
                    <h1 className="text-2xl font-bold text-primary">{personalInfo.name}</h1>
                    <div className="flex gap-4">
                        {['about', 'skills', 'contact'].map((section) => (
                            <Button
                                key={section}
                                variant="ghost"
                                onClick={() => {
                                    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
                                }}
                                className="capitalize"
                            >
                                {section}
                            </Button>
                        ))}
                    </div>
                </nav>
            </header>

            {/* Hero Section */}
            <section id="about" className="max-w-5xl mx-auto px-4 py-24">
                <div className="text-center">
                    <h2 className="text-5xl font-bold text-foreground mb-6">{personalInfo.title}</h2>
                    <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">{personalInfo.about}</p>
                    <div className="flex justify-center gap-4">
                        <Button asChild size="lg" className="rounded-full">
                            <a
                                href="/nikolaspadilla_resume.pdf"
                                download="nikolas-cv.pdf"
                            >
                                <Download className="mr-2 h-4 w-4" />
                                Download CV
                            </a>
                        </Button>
                        <Button asChild variant="outline" size="lg" className="rounded-full">
                            <a href="mailto:contact@nikolaspadilla.com">
                                <Mail className="mr-2 h-4 w-4" />
                                Contact Me
                            </a>
                        </Button>
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section id="skills" className="bg-muted/30 py-24">
                <div className="max-w-5xl mx-auto px-4">
                    <h3 className="text-3xl font-bold text-foreground mb-12 text-center">Skills</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {personalInfo.skills.map((skill) => (
                            <Card key={skill} className="hover:shadow-lg transition-shadow duration-200">
                                <CardContent className="p-6">
                                    <Badge variant="secondary" className="text-base font-medium px-4 py-2">
                                        {skill}
                                    </Badge>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="max-w-5xl mx-auto px-4 py-24">
                <h3 className="text-3xl font-bold text-foreground mb-12 text-center">Get in Touch</h3>
                <div className="flex justify-center gap-8">
                    <Button
                        asChild
                        variant="outline"
                        size="icon"
                        className="h-12 w-12 rounded-full"
                    >
                        <a
                            href="https://github.com/muddxyii"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub Profile"
                        >
                            <Github size={20} />
                        </a>
                    </Button>
                    <Button
                        asChild
                        variant="outline"
                        size="icon"
                        className="h-12 w-12 rounded-full"
                    >
                        <a
                            href="https://linkedin.com/in/nikolaspadilla"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn Profile"
                        >
                            <Linkedin size={20} />
                        </a>
                    </Button>
                    <Button
                        asChild
                        variant="outline"
                        size="icon"
                        className="h-12 w-12 rounded-full"
                    >
                        <a
                            href="mailto:contact@nikolaspadilla.com"
                            aria-label="Email Contact"
                        >
                            <Mail size={20} />
                        </a>
                    </Button>
                </div>
            </section>
        </div>
    );
};

export default ResumeLanding;