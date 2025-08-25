import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getAllPosts, getPostData } from '@/lib/posts';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const post = await getPostData(resolvedParams.slug);
  if (!post) return { title: 'Post Não Encontrado | CELF' };

  return {
    title: `${post.title} | CELF`,
    description: post.excerpt || '',
  };
}

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: Props) {
  const resolvedParams = await params;
  const post = await getPostData(resolvedParams.slug);
  if (!post) return notFound();

  const formattedDate = new Date(post.date).toLocaleDateString('pt-BR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  });

  return (
    <article className="min-h-screen py-12 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <Link
          href="/blog"
          className="text-blue-600 hover:text-blue-800 transition-colors duration-200 inline-flex items-center gap-2 mb-8"
        >
          ← Voltar para o Blog
        </Link>

        <header className="mb-8 border-b pb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {post.title}
          </h1>

          <div className="flex items-center text-gray-600 text-sm">
            <time dateTime={post.date}>{formattedDate}</time>
            {post.author && (
              <>
                <span className="mx-2">•</span>
                <span>{post.author}</span>
              </>
            )}
          </div>
        </header>

        <div
          className="prose prose-lg max-w-none
            prose-headings:text-gray-900 
            prose-headings:font-bold 
            prose-h2:text-2xl 
            prose-h3:text-xl
            prose-p:text-gray-700 
            prose-a:text-blue-600 
            prose-a:no-underline hover:prose-a:underline
            prose-strong:text-gray-900
            prose-ul:list-disc 
            prose-ol:list-decimal
            prose-li:text-gray-700
            prose-blockquote:text-gray-700
            prose-blockquote:border-l-4
            prose-blockquote:border-gray-300
            prose-blockquote:pl-4
            prose-blockquote:italic"
          dangerouslySetInnerHTML={{
            __html: post.content || '<p>Conteúdo não disponível</p>',
          }}
        />
      </div>
    </article>
  );
}
