import { getAllPosts } from "@/lib/posts";
import Link from "next/link";
import Image from "next/image";
import { Calendar, User } from "lucide-react";

export const metadata = {
  title: "Blog | CELF",
  description: "Conteúdo, dicas e novidades sobre conservação, manutenção e gestão de espaços.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-900 to-blue-800 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 py-40">
          <h1 className="text-5xl font-extrabold text-white mb-4">Blog CELF</h1>
          <p className="text-lg text-gray-400">
            Conteúdo, dicas e novidades sobre conservação, manutenção e gestão de espaços.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {posts.map((post) => (
            <Link
              href={`/blog/${post.slug}`}
              key={post.slug}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow border border-gray-100 flex flex-col overflow-hidden"
            >
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <div className="flex-1 flex flex-col p-6">
                <div className="flex flex-wrap gap-2 mb-2">
                  {post.tags.map(tag => (
                    <span key={tag} className="text-xs bg-blue-100 text-blue-700 rounded px-2 py-0.5 font-semibold">{tag}</span>
                  ))}
                </div>
                <h2 className="text-2xl font-bold text-blue-900 mb-2 group-hover:text-blue-700 transition-colors">{post.title}</h2>
                <p className="text-gray-600 mb-4 flex-1">{post.excerpt}</p>
                <div className="flex items-center text-gray-400 text-sm gap-4 mt-auto">
                  <span className="flex items-center gap-1">
                    <Calendar size={16} /> {new Date(post.date).toLocaleDateString("pt-BR", { timeZone: 'UTC' })}
                  </span>
                  <span className="flex items-center gap-1">
                    <User size={16} /> {post.author}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}