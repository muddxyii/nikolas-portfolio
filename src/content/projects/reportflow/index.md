---
title: 'ReportFlow: Building a Better Tool for Backflow Testers'
date: '2026-02-08'
updated: '2026-04-04'
description: 'How I went from hitting walls with .NET MAUI to shipping a production Flutter app for the backflow testing industry.'
thumbnail: 'thumbnail.svg'
tags: ['Flutter', 'Dart', 'Riverpod', 'Android']
---

ReportFlow is a production Flutter app (v3.3.11) used daily by field technicians to replace paper-based backflow inspection reports. It handles job creation, real-time test validation, GPS capture, and professional PDF generation, all from an Android device. It currently processes 1,000+ inspection reports per month, saving technicians an estimated 75% of the time previously spent on paperwork.

For those who may not be familiar, backflow prevention devices are installed on commercial and residential properties to keep contaminated water from flowing backwards into the public water supply. These devices need to be tested annually by certified technicians, and that testing process generates a significant amount of paperwork. Every device a tech inspects requires a detailed report documenting test readings, pass or fail results, and any repairs that were made. ReportFlow is a mobile app I built to replace that entire paper process, allowing techs to create jobs, input their test results, get real-time validation on their readings, and generate PDF reports all from their phone.

## Starting with MAUI

When I first set out to build ReportFlow, I chose to build it with .NET MAUI and C#. I was already comfortable with C#, and MAUI promised that I could write a single codebase and deploy it across platforms, which sounded like exactly what I needed. However, I very quickly ran into limitations that made it clear MAUI was not ready for what I was trying to do. The UI rendering was inconsistent across devices, platform-specific quirks would eat up hours of development time, and the ecosystem around MAUI was still very immature. Community libraries were sparse, the documentation had gaps in critical areas, and debugging platform issues often meant diving into native code regardless of the cross-platform promise. For a project that needed to feel polished and reliable in the hands of field technicians who just want their tools to work, the friction was simply too high, and I knew I needed to move on to something that could actually deliver on what I was trying to build.

## The Move to Flutter

I ultimately decided to rebuild the project in Flutter, and the difference was immediately apparent. Hot reload alone made iteration dramatically faster, but the real advantage was the maturity of the ecosystem as a whole. The widget system gave me precise control over the UI, Riverpod provided a clean and testable approach to state management, and the plugin ecosystem had solid, well-maintained solutions for everything I needed, from file access and geolocation to maps and sharing functionality. Rather than trying to port the MAUI version over, I took the lessons I had learned from that first attempt and redesigned the entire architecture from scratch, organizing the codebase by feature with proper state management and a clear separation between business logic and the UI layer.

## What ReportFlow Does

The app handles the full lifecycle of a backflow test job. A tech can create a new job with all the customer and facility information, capture their location via GPS, and then input test readings for all standard device types including DC, RP, PVB, and SVB assemblies. As they enter their readings, a validation engine evaluates the results against industry standards in real time and gives the tech immediate feedback on whether the device passes or fails. This validation engine is one of the parts of the project I am most proud of, as it loads its rules from a JSON configuration file based on the current edition of industry standards, supports priority-ordered validations, and provides clear pass, fail, or unknown statuses with actionable messages so that when a tech is standing in front of a device in the field, they know right away if something does not look right.

Once a job is complete, the tech can export it as a fillable PDF report. The PDF generation is handled through a native Kotlin bridge using Android's PDFBox library, which allows the app to populate a professional report template with all of the job's data. The app also includes map integration with ArcGIS tile layers so techs can view their job locations, and all job data is persisted locally with automatic cleanup of stale records.

## Architecture

I organized the codebase so that each feature owns its own presentation layer, providers, and widgets, which makes the project much easier to navigate and maintain as it grows. Riverpod handles all of the state management through notifiers for complex business logic and auto-dispose variants for memory efficiency. The data layer uses local file storage with an in-memory cache, and I built a centralized error handling system with categorized error types and severity levels so that the app can surface meaningful feedback to users instead of cryptic failure messages.

## Where It Stands

ReportFlow is currently at version 3.3.7 and is actively being used in the field. It has been through dozens of iterations over its lifetime, from migrating map providers and refining validation logic to improving backward compatibility with older job formats and tightening up the overall user experience. The app solved the problem it was built to solve, which was getting rid of paper in the field. But working on it also revealed a much bigger problem that I had not originally set out to address, which is what happens to all of those reports after the tech submits them. That question is what led me to start building [ReportFlow Platform](/projects/reportflow-platform).
