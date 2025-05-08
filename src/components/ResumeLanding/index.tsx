'use client';

import React from 'react';
import {Download, Mail} from 'lucide-react';
import {Github, Linkedin} from "@/components/Icons";

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
            <header className="bg-white shadow-md sticky top-0 z-10">
                <nav className="max-w-5xl mx-auto px-4 py-6 flex justify-between items-center">
                    <h1 className="text-2xl font-bold text-primary">{personalInfo.name}</h1>
                    <div className="flex gap-6">
                        {['about', 'skills', 'contact'].map((section) => (
                            <button
                                key={section}
                                onClick={() => {
                                    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
                                }}
                                className="text-secondary hover:text-primary transition-colors duration-200 capitalize"
                            >
                                {section}
                            </button>
                        ))}
                    </div>
                </nav>
            </header>

            {/* Hero Section */}
            <section id="about" className="max-w-5xl mx-auto px-4 py-24">
                <div className="text-center">
                    <h2 className="text-5xl font-bold text-primary mb-6">{personalInfo.title}</h2>
                    <p className="text-2xl text-muted mb-12">{personalInfo.about}</p>
                    <div className="flex justify-center gap-8">
                        <a
                            href="/nikolaspadilla_resume.pdf"
                            download="nikolas-cv.pdf"
                            className="flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full hover:bg-primary-700 transition-colors duration-200">
                            <Download size={20} />
                            Download CV
                        </a>
                        <a
                            href="mailto:contact@nikolaspadilla.com"
                            className="flex items-center gap-2 text-secondary hover:text-primary transition-colors duration-200"
                        >
                            <Mail size={20} />
                            Contact Me
                        </a>
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section id="skills" className="bg-white py-24">
                <div className="max-w-5xl mx-auto px-4">
                    <h3 className="text-3xl font-bold text-primary mb-12 text-center">Skills</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {personalInfo.skills.map((skill) => (
                            <div key={skill} className="bg-background p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
                                <span className="text-xl font-medium text-muted">{skill}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="max-w-5xl mx-auto px-4 py-24">
                <h3 className="text-3xl font-bold text-primary mb-12 text-center">Get in Touch</h3>
                <div className="flex justify-center gap-12">
                    <a
                        href="https://github.com/muddxyii"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub Profile"
                        className="text-secondary hover:text-primary transition-colors duration-200"
                    >
                        <Github size={32} />
                    </a>
                    <a
                        href="https://linkedin.com/in/nikolaspadilla"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn Profile"
                        className="text-secondary hover:text-primary transition-colors duration-200"
                    >
                        <Linkedin size={32} />
                    </a>
                    <a
                        href="mailto:contact@nikolaspadilla.com"
                        aria-label="Email Contact"
                        className="text-secondary hover:text-primary transition-colors duration-200"
                    >
                        <Mail size={32} />
                    </a>
                </div>
            </section>
        </div>
    );
};

export default ResumeLanding;