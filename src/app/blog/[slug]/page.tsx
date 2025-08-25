import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Calendar, User, ArrowLeft } from 'lucide-react';
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
    <article className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Botão de voltar */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors duration-200 mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          <span className="font-medium">Voltar para o Blog</span>
        </Link>

        {/* Cabeçalho do post */}
        <header className="bg-white rounded-2xl shadow-lg p-6 md:p-8 mb-8 border border-gray-100">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div className="flex items-center text-gray-600 text-sm gap-4">
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <time dateTime={post.date}>{formattedDate}</time>
              </span>
              {post.author && (
                <span className="flex items-center gap-1">
                  <User className="w-4 h-4" />
                  <span>{post.author}</span>
                </span>
              )}
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            {post.title}
          </h1>

          {/* Imagem em destaque (se disponível) */}
          {post.image && (
            <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden mb-6">
              <Image
                src={post.image}
                alt={`Imagem de destaque para ${post.title}`}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}

          {/* Excerpt (se disponível) */}
          {post.excerpt && (
            <p className="text-xl text-gray-700 italic border-l-4 border-blue-500 pl-4 py-2 bg-blue-50 rounded-r">
              {post.excerpt}
            </p>
          )}
        </header>

        {/* Conteúdo do post */}
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 border border-gray-100">
          <div
            className="prose prose-lg max-w-none
              prose-headings:text-gray-900 
              prose-headings:font-bold
              prose-h1:text-4xl
              prose-h1:mb-6
              prose-h2:text-3xl
              prose-h2:mt-8
              prose-h2:mb-4
              prose-h3:text-2xl
              prose-h3:mt-6
              prose-h3:mb-3
              prose-p:text-gray-700 
              prose-p:leading-relaxed
              prose-p:mb-4
              prose-a:text-blue-600 
              prose-a:no-underline 
              hover:prose-a:underline
              prose-a:font-medium
              prose-strong:text-gray-900
              prose-strong:font-semibold
              prose-ul:list-disc 
              prose-ul:ml-6
              prose-ul:mb-4
              prose-ol:list-decimal
              prose-ol:ml-6
              prose-ol:mb-4
              prose-li:text-gray-700
              prose-li:mb-1
              prose-blockquote:text-gray-700
              prose-blockquote:border-l-4
              prose-blockquote:border-blue-500
              prose-blockquote:pl-4
              prose-blockquote:italic
              prose-blockquote:mb-6
              prose-code:before:content-none
              prose-code:after:content-none
              prose-code:bg-gray-100
              prose-code:px-1.5
              prose-code:py-0.5
              prose-code:rounded
              prose-pre:bg-gray-800
              prose-pre:text-gray-100
              prose-pre:p-4
              prose-pre:rounded-lg
              prose-pre:mb-6
              prose-img:rounded-lg
              prose-img:shadow-md
              prose-img:mb-6"
            dangerouslySetInnerHTML={{
              __html: post.content || '<p>Conteúdo não disponível</p>',
            }}
          />
        </div>

        {/* Rodapé do post */}
        <footer className="mt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors duration-200"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="font-medium">Mais artigos</span>
          </Link>
          
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <span>Compartilhar:</span>
            <button className="text-blue-500 hover:text-blue-700 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
              </svg>
            </button>
            <button className="text-blue-400 hover:text-blue-600 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </button>
            <button className="text-red-500 hover:text-red-700 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </footer>
      </div>
    </article>
  );
}
