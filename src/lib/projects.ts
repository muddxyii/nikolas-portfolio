import { type CollectionEntry, getCollection, render } from "astro:content";
import type { AstroComponentFactory } from "astro/runtime/server/index.js";

export interface TocEntry {
  id: string;
  text: string;
  level: number;
}

export type ProjectEntry = CollectionEntry<"projects">;

export interface ProjectMeta {
  title: string;
  date: string;
  updated?: string;
  description: string;
  thumbnail: string;
  tags: string[];
  slug: string;
}

export interface RenderedProject {
  meta: ProjectMeta;
  content: AstroComponentFactory;
  toc: TocEntry[];
}

interface RenderedHeading {
  slug: string;
  text: string;
  depth: number;
}

function slugFromEntryId(id: string): string {
  return id.replace(/\/index(?:\.md)?$/, "").replace(/\.md$/, "");
}

function toProjectMeta(entry: ProjectEntry): ProjectMeta {
  return {
    ...entry.data,
    tags: entry.data.tags || [],
    slug: slugFromEntryId(entry.id),
  };
}

export async function getProjects(): Promise<ProjectMeta[]> {
  const projects = (await getCollection("projects")) as ProjectEntry[];

  return projects
    .map(toProjectMeta)
    .sort(
      (a: ProjectMeta, b: ProjectMeta) => new Date(`${b.date}T00:00`).getTime() - new Date(`${a.date}T00:00`).getTime(),
    );
}

export async function getProject(slug: string): Promise<RenderedProject | null> {
  const projects = (await getCollection("projects")) as ProjectEntry[];
  const entry = projects.find((project: ProjectEntry) => slugFromEntryId(project.id) === slug);

  if (!entry) {
    return null;
  }

  const { Content, headings } = (await render(entry)) as {
    Content: AstroComponentFactory;
    headings: RenderedHeading[];
  };

  return {
    meta: toProjectMeta(entry),
    content: Content,
    toc: headings
      .filter((heading: RenderedHeading) => heading.depth === 2 || heading.depth === 3)
      .map((heading: RenderedHeading) => ({
        id: heading.slug,
        text: heading.text,
        level: heading.depth,
      })),
  };
}
