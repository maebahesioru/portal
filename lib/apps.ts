import fs from "fs";
import path from "path";
import matter from "gray-matter";

const appsDir = path.join(process.cwd(), "apps");

export interface AppMeta {
  slug: string;
  name: string;
  fqdn: string;
  shortDescription: string;
  longDescription: string;
  tags: string[];
  launchedAt?: string;
}

export function getAllAppMetas(): AppMeta[] {
  const files = fs.readdirSync(appsDir).filter((f) => f.endsWith(".md"));
  return files.map((file) => {
    const slug = file.replace(/\.md$/, "");
    const raw = fs.readFileSync(path.join(appsDir, file), "utf8");
    const { data, content } = matter(raw);
    return {
      slug: data.slug ?? slug,
      name: data.name ?? slug,
      fqdn: data.fqdn ?? "",
      shortDescription: data.shortDescription ?? "",
      longDescription: content.trim(),
      tags: data.tags ?? [],
      launchedAt: data.launchedAt ?? undefined,
    };
  });
}

export function getAppMeta(slug: string): AppMeta | undefined {
  return getAllAppMetas().find((a) => a.slug === slug);
}

export function getAppMetaByName(name: string): AppMeta | undefined {
  return getAllAppMetas().find((a) => a.name === name);
}

export function getDescriptions(): Record<string, string> {
  const m: Record<string, string> = {};
  for (const a of getAllAppMetas()) m[a.name] = a.shortDescription;
  return m;
}
