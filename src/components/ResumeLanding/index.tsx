'use client';

import React from 'react';
import {Download, Mail} from 'lucide-react';
import {Github, Linkedin} from "@/components/Icons";

const ResumeLanding = () => {
    const personalInfo = {
        name: "Nikolas Padilla",
        title: "Software Engineer",
        about: "Passionate developer focused on creating clean, maintainable solutions with modern technologies.",
        skills: ["C#", "Flutter", "React", "Next.js", "TypeScript"],
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="bg-white shadow-sm">
                <nav className="max-w-5xl mx-auto px-4 py-4 flex justify-between items-center">
                    <h1 className="text-xl font-bold text-gray-900">{personalInfo.name}</h1>
                    <div className="flex gap-4">
                        {['about', 'skills', 'contact'].map((section) => (
                            <button
                                key={section}
                                onClick={() => {
                                    document.getElementById(section)?.scrollIntoView({behavior: 'smooth'});
                                }}
                                className="text-gray-600 hover:text-gray-900 capitalize"
                            >
                                {section}
                            </button>
                        ))}
                    </div>
                </nav>
            </header>

            {/* Hero Section */}
            <section id="about" className="max-w-5xl mx-auto px-4 py-16">
                <div className="text-center">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">{personalInfo.title}</h2>
                    <p className="text-xl text-gray-600 mb-8">{personalInfo.about}</p>
                    <div className="flex justify-center gap-4">
                        <button
                            onClick={async () => {
                                const response = await fetch('/nikolaspadilla_resume.pdf')
                                const blob = await response.blob()
                                const url = window.URL.createObjectURL(blob)
                                const link = document.createElement('a')
                                link.href = url
                                link.download = "nikolas-cv.pdf"
                                document.body.appendChild(link)
                                link.click()
                                link.remove()
                                window.URL.revokeObjectURL(url)
                            }}
                            className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                            <Download size={20}/>
                            Download CV
                        </button>
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section id="skills" className="bg-white py-16">
                <div className="max-w-5xl mx-auto px-4">
                    <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Skills</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {personalInfo.skills.map((skill) => (
                            <div key={skill} className="bg-gray-50 p-4 rounded text-center">
                                <span className="text-gray-800">{skill}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="max-w-5xl mx-auto px-4 py-16">
                <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Get in Touch</h3>
                <div className="flex justify-center gap-6">
                    <a
                        href="https://github.com/muddxyii"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub Profile"
                        className="text-gray-600 hover:text-gray-900"
                    >
                        <Github size={24}/>
                    </a>
                    <a
                        href="https://linkedin.com/in/nikolaspadilla"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn Profile"
                        className="text-gray-600 hover:text-gray-900"
                    >
                        <Linkedin size={24}/>
                    </a>
                    <a
                        href="mailto:contact@nikolaspadilla.com"
                        aria-label="Email Contact"
                        className="text-gray-600 hover:text-gray-900"
                    >
                        <Mail size={24}/>
                    </a>
                </div>
            </section>
        </div>
    );
};

export default ResumeLanding;