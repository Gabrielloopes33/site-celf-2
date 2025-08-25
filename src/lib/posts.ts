import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

// Atualiza o caminho para apontar para a pasta posts na raiz
const postsDirectory = path.join(process.cwd(), 'posts');

// Tipo para os dados retornados por getAllPosts
export type PostSummary = {
  slug: string;
  title: string;
  date: string;
  author?: string;
  image?: string;
  excerpt?: string;
};

// Tipo para os dados retornados por getPostData
export type BlogPostData = {
  slug: string;
  title: string;
  date: string;
  author?: string;
  excerpt?: string;
  image?: string;
  content: string; // HTML content
};

export function getAllPosts(): PostSummary[] {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map(fileName => {
    const slug = fileName.replace(/\.md$/, '');
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    // Garantir que as propriedades esperadas estejam presentes
    const data = matterResult.data;
    
    return {
      slug,
      title: (data.title as string) || '',
      date: (data.date as string) || '',
      author: data.author as string | undefined,
      image: data.image as string | undefined,
      excerpt: data.excerpt as string | undefined,
    };
  });

  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export async function getPostData(slug: string) {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    
    if (!fs.existsSync(fullPath)) {
      console.error(`File not found: ${fullPath}`);
      return null;
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
    
    // Convert markdown to HTML
    const htmlContent = marked(content);

    // Garantir que as propriedades esperadas estejam presentes
    return {
      slug,
      title: (data.title as string) || '',
      date: (data.date as string) || '',
      author: data.author as string | undefined,
      excerpt: data.excerpt as string | undefined,
      image: data.image as string | undefined,
      content: htmlContent || '',
    };
  } catch (error) {
    console.error(`Error loading post ${slug}:`, error);
    return null;
  }
}
