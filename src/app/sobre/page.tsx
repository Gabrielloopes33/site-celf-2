import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Award, Clock, Heart, Users, ChevronDown } from "lucide-react";
import Image from "next/image";

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
        <section className="relative min-h-[60vh] md:min-h-[75vh] flex items-center justify-center bg-blue-900 overflow-hidden">
          {/* Dois vídeos lado a lado no background */}
          <div className="absolute inset-0 w-full h-full flex flex-col md:flex-row z-0">
            <video
              className="w-full md:w-1/2 h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
              style={{ opacity: 0.2 }}
            >
              <source src="/video-sobre.mp4" type="video/mp4" />
              Seu navegador não suporta vídeo em HTML5.
            </video>
            <video
              className="w-full md:w-1/2 h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
              style={{ opacity: 0.2 }}
            >
              <source src="/video-sobre-2.mp4" type="video/mp4" />
              Seu navegador não suporta vídeo em HTML5.
            </video>
          </div>
          {/* Overlay para garantir contraste */}
          <div className="absolute inset-0 bg-white/10 z-10" />
          <div className="container mx-auto px-4 relative z-20 flex flex-col items-center justify-center">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-white text-center text-5xl md:text-7xl font-bold text-white-950 mb-8 pt-32 md:pt-40 pb-20 md:pb-32 drop-shadow-lg">
                Sobre a
                <span className="block bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  CELF
                </span>
              </h2>
            </div>
            {/* Ícone para descer */}
            <div className="flex justify-center mt-4 md:mt-8 animate-bounce">
              <ChevronDown className="w-10 h-10 md:w-12 md:h-12 text-white/80" />
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-center text-7xl md:text-6xl font-bold text-blue-950 mb-8 py-10">Nossa História</h2>
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
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/IMG_0035.jpg"
                  alt="Equipe CELF em ação"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-center text-6xl md:text-6xl font-bold text-blue-950 mb-8 py-10">Nossos Valores</h2>
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
              <h2 className="text-center text-6xl md:text-6xl font-bold text-blue-950 mb-8 py-10">Nossa Equipe</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Contamos com profissionais qualificados e dedicados, comprometidos com a qualidade e a excelência.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Team member cards */}
              <div className="bg-gray-50 rounded-lg overflow-hidden text-center shadow hover:shadow-lg transition-shadow">
                <div className="relative h-64 w-full">
                  <Image
                    src="/images/team/fabiano.PNG"
                    alt="Fabiano Lopes Vidal"
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1 text-primary">Fabiano Lopes Vidal</h3>
                  <p className="text-secondary mb-3">Comercial</p>
                  <p className="text-gray-600">
                    Especialista em estratégias comerciais, com sólida vivência em negociação e atendimento, sempre buscando soluções que agreguem valor aos clientes.
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg overflow-hidden text-center shadow hover:shadow-lg transition-shadow">
                <div className="relative h-64 w-full">
                  <Image
                    src="/images/team/ELIZA.png"
                    alt="Eliza Lopes Vidal"
                    fill 
                    className="object-cover object-left-top"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">Eliza Lopes Vidal</h3>
                  <p className="text-secondary mb-3">Financeiro /RH</p>
                  <p className="text-gray-600">
                    Especialista em processos financeiros e gestão de pessoas, contribuindo para a sustentabilidade e crescimento da empresa.
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg overflow-hidden text-center shadow hover:shadow-lg transition-shadow">
                <div className="relative h-64 w-full">
                  <Image
                    src="/images/team/CARLIN.png"
                    alt="Nome do Profissional 3"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">Carlos Lopes Vidal</h3>
                  <p className="text-secondary mb-3">Engenheiro Elétrico</p>
                  <p className="text-gray-600">
                    Atua no desenvolvimento de projetos elétricos, garantindo qualidade técnica, conformidade às normas e confiabilidade operacional.
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg overflow-hidden text-center shadow hover:shadow-lg transition-shadow">
                <div className="relative h-64 w-full">
                  <Image
                    src="/images/team/LIGIA.png"
                    alt="Nome do Profissional 3"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">Lígia Pereira Santos</h3>
                  <p className="text-secondary mb-3">Engenheira Civil</p>
                  <p className="text-gray-600">
                    Atua no desenvolvimento e acompanhamento de projetos civis, assegurando inovação, segurança e alto padrão construtivo.
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg overflow-hidden text-center shadow hover:shadow-lg transition-shadow">
                <div className="relative h-64 w-full">
                  <Image
                    src="/images/team/HEBER.png"
                    alt="Nome do Profissional 3"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">Heber Silva</h3>
                  <p className="text-secondary mb-3">Engenheiro Elétrico</p>
                  <p className="text-gray-600">
                    Especialista em engenharia elétrica, dedicado à criação de soluções que unem tecnologia, sustentabilidade e desempenho.
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg overflow-hidden text-center shadow hover:shadow-lg transition-shadow">
                <div className="relative h-64 w-full">
                  <Image
                    src="/images/team/HELIZANGELA.png"
                    alt="Nome do Profissional 3"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">Helizangela Moreira</h3>
                  <p className="text-secondary mb-3">RH / Gestão Condominial</p>
                  <p className="text-gray-600">
                    Atua no setor de Recursos Humanos e Gestão Condominial, com ênfase em relacionamento, organização e soluções administrativas.
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg overflow-hidden text-center shadow hover:shadow-lg transition-shadow">
                <div className="relative h-64 w-full">
                  <Image
                    src="/images/team/GABRIEL.png"
                    alt="Nome do Profissional 3"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">Gabriel Lopes Moraes</h3>
                  <p className="text-secondary mb-3">Tecnologia e Marketing</p>
                  <p className="text-gray-600">
                    Especialista em tecnologia e marketing, com foco em inovação, presença digital e crescimento estratégico da empresa.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-center text-6xl md:text-6xl font-bold text-blue-950 mb-8 py-10">Junte-se à CELF</h2>
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
