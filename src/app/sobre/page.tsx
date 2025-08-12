import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Award, Clock, Heart, Users } from "lucide-react";

export const metadata = {
  title: "Sobre Nós | CELF",
  description: "Conheça nossa história, valores e equipe",
};

export default function SobrePage() {
  return (
    <div className="min-h-screen w-full relative bg-white">
      {/* Purple Glow Left */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(600px 400px at 0% 0%, rgba(173,109,244,0.18) 0%, transparent 80%)`,
        }}
      />
      <div className="relative z-10 flex flex-col min-h-screen">
  {/* Hero Section */}
  <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-center text-9xl md:text-5xl font-bold text-blue-950 mb-8 py-60">
            Sobre a
            <span className="block bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              CELF
            </span>
          </h2>
          </div>
        </div>
      </section>

  {/* Our Story Section */}
  <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-center text-9xl md:text-6xl font-bold text-blue-950 mb-8 py-10">Nossa História</h2>
              <p className="text-gray-600 mb-4">
                A CELF carrega uma experiência de mais de 10 anos em administração condominial, com a missão de transformar o mercado de conservação e manutenção, oferecendo serviços de alta qualidade e estabelecendo novos padrões no setor.
              </p>
              
              <p className="text-gray-600 mb-4">
                Hoje, atendemos uma ampla carteira de clientes em diversos segmentos, desde condomínios residenciais até grandes instalações industriais, sempre com o mesmo nível de dedicação e profissionalismo.
              </p>
              <p className="text-gray-600">
                Nossa trajetória é marcada por crescimento sustentável, inovação constante e parcerias duradouras, refletindo nossos valores e compromisso com o sucesso dos nossos clientes.
              </p>
            </div>
            <div className="bg-gray-100 h-[400px] rounded-lg flex items-center justify-center shadow-inner">
              <p className="text-gray-400 text-lg">Imagem da Empresa</p>
            </div>
          </div>
        </div>
      </section>

  {/* Values Section */}
  <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-center text-9xl md:text-6xl font-bold text-blue-950 mb-8 py-10">Nossos Valores</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Nossos valores fundamentam todas as nossas decisões e ações, guiando nosso trabalho diário.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow text-center hover:shadow-lg transition-shadow">
              <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <Award size={32} className="text-[#1e2746]" />
              </div>
              <h3 className="text-xl font-bold mb-3">
                <span className="text-[#1e2746]">Excelência</span>
              </h3>
              <p className="text-gray-600">
                Buscamos a excelência em tudo o que fazemos, superando expectativas e estabelecendo novos padrões de qualidade.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow text-center hover:shadow-lg transition-shadow">
              <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <Users size={32} className="text-[#1e2746]" />
              </div>
              <h3 className="text-xl font-bold mb-3">
                <span className="text-[#1e2746]">Respeito</span>
              </h3>
              <p className="text-gray-600">
                Valorizamos cada pessoa, tratando clientes, colaboradores e parceiros com dignidade, ética e consideração.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow text-center hover:shadow-lg transition-shadow">
              <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <Heart size={32} className="text-[#1e2746]" />
              </div>
              <h3 className="text-xl font-bold mb-3">
                <span className="text-[#1e2746]">Comprometimento</span>
              </h3>
              <p className="text-gray-600">
                Assumimos responsabilidade pelo nosso trabalho e honramos nossos compromissos com dedicação e seriedade.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow text-center hover:shadow-lg transition-shadow">
              <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <Clock size={32} className="text-[#1e2746]" />
              </div>
              <h3 className="text-xl font-bold mb-3">
                <span className="text-[#1e2746]">Inovação</span>
              </h3>
              <p className="text-gray-600">
                Buscamos constantemente novas soluções e tecnologias para melhorar nossos serviços e processos.
              </p>
            </div>
          </div>
        </div>
      </section>

  {/* Team Section */}
  <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-center text-9xl md:text-6xl font-bold text-blue-950 mb-8 py-10">Nossa Equipe</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Contamos com profissionais qualificados e dedicados, comprometidos com a qualidade e a excelência.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team member cards would go here - placeholder for now */}
            <div className="bg-gray-50 rounded-lg overflow-hidden text-center shadow hover:shadow-lg transition-shadow">
              <div className="bg-gray-200 h-64 flex items-center justify-center">
                <p className="text-gray-400">Foto</p>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1 text-primary">Nome Completo</h3>
                <p className="text-secondary mb-3">Cargo / Função</p>
                <p className="text-gray-600">
                  Breve descrição sobre a experiência e especialização do profissional.
                </p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg overflow-hidden text-center">
              <div className="bg-gray-200 h-64 flex items-center justify-center">
                <p className="text-gray-500">Foto</p>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">Nome Completo</h3>
                <p className="text-secondary mb-3">Cargo / Função</p>
                <p className="text-gray-600">
                  Breve descrição sobre a experiência e especialização do profissional.
                </p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg overflow-hidden text-center">
              <div className="bg-gray-200 h-64 flex items-center justify-center">
                <p className="text-gray-500">Foto</p>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">Nome Completo</h3>
                <p className="text-secondary mb-3">Cargo / Função</p>
                <p className="text-gray-600">
                  Breve descrição sobre a experiência e especialização do profissional.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

  {/* CTA Section */}
  <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-center text-9xl md:text-6xl font-bold text-blue-950 mb-8 py-10">Junte-se à CELF</h2>
          <p className="text-lg max-w-2xl mx-auto mb-8 text-gray-600">
            Transforme seu espaço com soluções de qualidade que fazem a diferença. Entre em contato conosco hoje mesmo.
          </p>
          <Button asChild variant="secondary" size="lg" className="bg-blue-900 hover:bg-blue-600 text-white">
            <Link href="/contato">Solicitar Proposta</Link>
          </Button>
        </div>
      </section>
      </div>
    </div>
  );
}
