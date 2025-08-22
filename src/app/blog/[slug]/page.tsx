import { getAllPosts, getPostData } from '@/lib/posts';
import { notFound } from 'next/navigation';
import { type Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Container } from '@/components/ui/container';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft } from 'lucide-react';

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await getPostData(params.slug);
  if (!post) {
    return { title: 'Post Não Encontrado' };
  }
  return {
    title: `${post.title} | CELF`,
    description: post.excerpt,
  };
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  if (!posts || posts.length === 0) return [];
  return posts.map(post => ({ slug: post.slug }));
}

export default async function PostPage({ params }: { params: { slug: string } }) {
  const post = await getPostData(params.slug);

  if (!post) {
    notFound();
  }

  const formattedDate = new Date(post.date).toLocaleDateString('pt-BR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  });

  return (
    <Container className="py-12 sm:py-40">
      <div className="max-w-3xl mx-auto">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 transition-colors mb-8"
        >
          <ArrowLeft size={16} />
          Voltar para o blog
        </Link>

        <article>
          <header className="mb-8">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              {post.tags?.map(tag => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-gray-900 dark:text-gray-100">
              {post.title}
            </h1>
            <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
              <p>
                Por <span className="font-semibold">{post.author}</span>
              </p>
              <span className="text-gray-300 dark:text-gray-600">•</span>
              <time dateTime={post.date}>{formattedDate}</time>
            </div>
          </header>

          {post.image && (
            <div className="relative w-full aspect-video rounded-lg overflow-hidden mb-8 border dark:border-gray-800">
              <Image
                src={post.image}
                alt={`Imagem de destaque do post: ${post.title}`}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}

          <div
            className="prose prose-lg lg:prose-xl dark:prose-invert max-w-none
              prose-headings:font-bold prose-headings:text-gray-900 dark:prose-headings:text-gray-100
              prose-a:text-blue-600 hover:prose-a:text-blue-500 dark:prose-a:text-blue-400 dark:hover:prose-a:text-blue-300
              prose-strong:text-gray-800 dark:prose-strong:text-gray-200
              prose-blockquote:border-l-4 prose-blockquote:border-gray-300 prose-blockquote:pl-4 prose-blockquote:italic
              dark:prose-blockquote:border-gray-600"
            dangerouslySetInnerHTML={{ __html: post.contentHtml }}
          />
        </article>
      </div>
    </Container>
  );
}
