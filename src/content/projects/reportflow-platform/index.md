---
title: 'ReportFlow Platform: Connecting the Field to the Office'
date: '2026-02-09'
updated: '2026-04-07'
description: 'Designing a full-stack platform to digitalize the backflow testing workflow, from field inspections to invoicing.'
thumbnail: 'thumbnail.svg'
tags: ['SvelteKit', 'Hono', 'PostgreSQL', 'Bun', 'TypeScript']
---

ReportFlow Platform is a multi-tenant workflow management system that connects field inspections to office operations for backflow testing companies. It takes submissions directly from the field and handles the downstream process: routing, review, approval, and export for billing, eliminating the manual handoff that currently lives on someone's desk.

[ReportFlow](/projects/reportflow) solved the field side of the workflow by giving technicians a way to capture test data and generate reports from their phone. But once those reports land in the office, the work is still entirely manual. Staff spend hours sorting through submissions, identifying which devices passed and which failed, chasing down data entry errors, and figuring out what needs to go to billing. Jobs slip through the cracks. Revenue gets left on the table. ReportFlow Platform is what closes that gap.

## The Road to the Current Stack

This is not the first version of the platform, and it is not even the second.

The earliest prototype was a Next.js app, mostly UI with no real backend story, just enough to validate the review workflow with the office. It was enough to prove the idea but not enough to build on. I scrapped it and started over.

The second attempt was called FlowSentry. I built it on Vue 3 and Supabase, and it was where I first tried to take the product seriously. The multi-tenant architecture was there, the entity model was there, and for a while it felt like it was working. Then I hit the submission review workflow with its multiple states, locking, and audit logging, and the development cycle became unsustainable. Every schema change required tearing down all my data and manually clicking through the UI to verify the state machine. I had almost no control over how the backend behaved, and I spent more time fighting the platform than building on it. FlowSentry was ultimately a failure, but it taught me two things I did not fully understand before: how much I needed to own my own API and database layer, and how much I needed to be able to test my work properly.

The current platform is the third attempt, designed specifically around the lessons of the first two. I chose Bun and Hono for the API because they get out of the way. I chose Drizzle because it gives me type-safe queries without the unpredictability of a heavier ORM. I built the test suite from the start, with 25+ API integration suites running against a real database, so I can write a migration, run the tests, and know immediately whether something broke. Every architectural decision in the current stack traces back to a specific failure in a previous one.

## The Vision

The core idea behind the platform is fairly straightforward. When a tech finishes an inspection and submits their results, the system should already know what to do with them. If everything on the job passed, it gets routed toward billing. If something failed, it gets flagged for follow-up. The office still reviews and approves everything, but the system handles the routing and state management rather than relying on someone to manually sort through submissions. The long-term goal is to eliminate the gap between field work and office work entirely, creating one connected system where data flows from the test instrument all the way to the invoice without anyone having to re-key numbers into a spreadsheet.

## Architecture Decisions

The guiding philosophy behind the architecture is that the API and database are the product, and everything else is a thin GUI wrapper on top of them. The monorepo is organized into four packages. The first is the API, built on Bun and Hono with PostgreSQL through Drizzle ORM, and this is where all of the actual business logic lives, including the submission review workflows, state machine transitions with pessimistic locking to prevent conflicts, and organization-scoped queries for multi-tenancy. The second package is the web portal, built with SvelteKit, which is intentionally kept thin and contains no business logic of its own. It simply calls the API and renders the result. The third is a shared package containing TypeScript types, Zod validators, and RFJSON mappers that both the API and web packages consume, ensuring that the contracts between field submissions and the database schema always stay in sync. The fourth is a mobile package, currently a placeholder for an eventual Capacitor-based rewrite of the Flutter app so the entire system lives in one monorepo.

One of the key insights I gained from building ReportFlow is that the mobile app's job data format, which I call RFJSON, is essentially the common language of the entire system. The shared package includes bidirectional mappers between RFJSON and the database schema so that field submissions translate cleanly into structured data that the platform can work with.

I chose each piece of the tech stack deliberately. Bun gives me a fast runtime with a built-in test runner and native TypeScript support. Hono is a lightweight API framework that does not get in the way. Drizzle ORM provides type-safe queries without the overhead of a heavier ORM. PostgreSQL 18 with UUIDv7 for all primary keys keeps the data layer solid and modern. Better Auth with the organization plugin handles multi-tenant authentication. SvelteKit powers the office portal because it is server-rendered, fast, and something I know well. Turborepo orchestrates the entire build process with cached linting, type-checking, and test runs across all packages so that unchanged code does not waste time being re-evaluated.

Testing is something I take seriously on this project, partly because FlowSentry taught me what it costs not to. The API has 25+ integration test suites running against a real database using Bun's built-in test runner, covering the full submission workflow, state machine transitions, RFJSON roundtrip, authorization, and every route. These own correctness. The web package has a Playwright end-to-end suite as a thin smoke layer on top, covering login, navigation, and the core submission workflow, but the real confidence comes from the API tests.

## The Submission Workflow

The core of the platform is a state machine that manages the lifecycle of every submission from the moment a tech submits their inspection data to the moment it reaches billing. Submissions move through a defined sequence of states, pending through initial review through manager review to approved, with pessimistic locking at each stage to prevent conflicts when multiple staff are working through the queue at the same time.

The review itself happens at the device level. Each device in a submission must be individually triaged, approved or flagged, before the reviewer can advance to the next stage. Managers can flag devices for a second opinion, which routes the submission through a resolution loop before it comes back for final approval. Every edit, flag, and resolution is recorded in a full audit trail with attribution, because in this industry you need to be able to trace exactly who changed what and when. Once a submission is fully approved, the reviewed data is written back to the master records atomically in a single transaction, and the job moves to the export queue for billing and city submission.

## The Review Interface

The submission review interface went through two complete rewrites before it became what it is now, and each one came from a specific realization about how office staff actually do this work.

The first version used a section-based model. Reviewers would work through named sections of a submission, customer information, device details, test results, and approve or flag each one as a unit. It was logical on paper. In practice it did not match how anyone actually reads a backflow test report. The sections were arbitrary divisions. Reviewers kept wanting to look at specific fields, not approve chunks.

The first redesign replaced sections entirely with field-level change tracking. Reviewers could now click any individual field, see its full history, make corrections with a reason, and the system would track every change with attribution. That was the right idea, but the UI still felt like a database form. It worked but it did not feel like reviewing a test report.

The insight that fixed it was looking at the actual paper form. Office staff had been reading physical backflow test reports for years. They knew exactly where every field was, what it meant, and how to read it at a glance. So rather than designing a new interface, I built a pixel-faithful replica of the physical form directly in the browser, using the paper document as a reference. Clicking any field opens a change thread in a side gutter showing the technician's original submission, every reviewer edit, and who made each change. The form itself is the interface. Nothing had to be learned.

The second redesign added device-level triage on top of that. Rather than approving a submission as a whole, reviewers now approve or flag each device individually before they can advance. This matched how managers actually think about the work: per job, per device, not per submission as a whole. Both redesigns happened within 24 hours of each other in early March 2026, driven by watching the first version get used and immediately seeing where it broke down.

## Multi-Tenancy

I designed the platform for multi-tenancy from day one. Every query is scoped to an organization, team members are assigned roles, and all data is fully isolated between tenants. The goal is to eventually license this platform to other backflow testing companies, so the multi-tenant architecture needed to be baked into the foundation rather than bolted on later.

## Current Status

Alpha 1.0 shipped in late March 2026, marking the platform as feature-complete for the core backflow testing workflow. The office staff at AnyBackFlow have been using it in production since then, and real-world usage has driven almost daily improvements: a phone intake wizard for handling calls, a redesigned submission queue, an inbox bell for assigned work, photo labeling and folder assignment for the review panel, and a stream of fixes as the app encounters edge cases that no prototype ever surfaces.

The current focus is stability and polish before opening the platform to other companies. The remaining roadmap items are QuickBooks integration for invoicing and a Capacitor-based rewrite of the mobile app so the entire system lives in one monorepo and shares types and validators end to end.

The progression from a Next.js prototype to a Vue app to the current platform took about a year and a half. Each version failed at a specific thing and taught me exactly what the next one needed to be. The current stack feels right in a way the previous ones never did, not because it is more impressive technology, but because every piece of it exists for a concrete reason.
