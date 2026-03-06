import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export function getContent(collection: string, slug: string) {
  const filePath = path.join(process.cwd(), 'content', collection, `${slug}.md`);
  const fileContent = fs.readFileSync(filePath, 'utf8');
  const { data } = matter(fileContent);
  return data;
}

export function getAllContent(collection: string) {
  const dir = path.join(process.cwd(), 'content', collection);
  if (!fs.existsSync(dir)) return [];
  const files = fs.readdirSync(dir).filter((f) => f.endsWith('.md'));
  return files.map((file) => {
    const fileContent = fs.readFileSync(path.join(dir, file), 'utf8');
    const { data } = matter(fileContent);
    return { ...data, slug: file.replace(/\.md$/, '') } as Record<string, unknown> & { slug: string };
  });
}
