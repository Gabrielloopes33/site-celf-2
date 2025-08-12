'use client';

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Building2, Wrench, ClipboardCheck } from "lucide-react";
import { useState } from "react";

const servicesGroups = {
  manutencao: {
    title: "Conservação e Manutenção",
    subtitle: "Soluções completas para conservação de ambientes corporativos e residenciais",
    services: [
      {
        icon: <Building2 size={24} className="text-primary" />,
        title: "Conservação Condominial",
        description: "Oferecemos serviços completos para manutenção e conservação de condomínios residenciais, incluindo limpeza, jardinagem, manutenção preventiva de equipamentos e áreas comuns.",
        details: (
          <>
            <p className="mb-4">Nossa equipe especializada realiza a gestão completa da conservação condominial, garantindo ambientes limpos, seguros e bem cuidados. Utilizamos técnicas modernas e produtos certificados para proporcionar o melhor resultado aos moradores.</p>
            <ul className="list-disc pl-5 mb-4 text-gray-300">
              <li>Limpeza e higienização de áreas comuns com cronograma personalizado</li>
              <li>Jardinagem, paisagismo e manutenção de áreas verdes</li>
              <li>Manutenção preventiva e corretiva de equipamentos</li>
              <li>Pintura, pequenos reparos e conservação de fachadas</li>
              <li>Relatórios periódicos de execução e acompanhamento</li>
            </ul>
            <p className="mb-2 font-semibold text-white">Diferenciais:</p>
            <ul className="list-disc pl-5 text-gray-300">
              <li>Equipe treinada e uniformizada</li>
              <li>Atendimento emergencial 24h</li>
              <li>Gestão de resíduos e sustentabilidade</li>
            </ul>
          </>
        ),
        link: "/contato"
      },
      {
        icon: <Building2 size={24} className="text-primary" />,
        title: "Conservação Comercial",
        description: "Serviços especializados para espaços comerciais e empresariais, garantindo ambientes limpos, organizados e bem mantidos para colaboradores e clientes.",
        details: (
          <>
            <p className="mb-4">Atendemos empresas de todos os portes com soluções sob medida para conservação de ambientes corporativos. Nosso foco é proporcionar conforto, segurança e boa impressão para clientes e colaboradores.</p>
            <ul className="list-disc pl-5 mb-4 text-gray-300">
              <li>Limpeza profissional de escritórios e áreas administrativas</li>
              <li>Higienização de áreas de grande circulação e sanitários</li>
              <li>Manutenção de sistemas de ar-condicionado e ventilação</li>
              <li>Gestão de resíduos e coleta seletiva</li>
              <li>Controle de pragas e sanitização</li>
            </ul>
            <p className="mb-2 font-semibold text-white">Diferenciais:</p>
            <ul className="list-disc pl-5 text-gray-300">
              <li>Flexibilidade de horários para não impactar a operação</li>
              <li>Produtos certificados e ecológicos</li>
              <li>Relatórios de execução e acompanhamento digital</li>
            </ul>
          </>
        ),
        link: "/contato"
      }
    ]
  },
  industrial: {
    title: "Soluções Industriais",
    subtitle: "Implementação e manutenção especializada para ambientes industriais",
    services: [
      {
        icon: <Wrench size={24} className="text-primary" />,
        title: "Implantação Industrial",
        description: "Soluções técnicas completas para implementação e manutenção de espaços industriais, garantindo segurança, eficiência e conformidade com normas técnicas.",
        details: (
          <>
            <p className="mb-4">Oferecemos suporte técnico desde a implantação até a manutenção de ambientes industriais, sempre em conformidade com as normas vigentes e priorizando a segurança operacional.</p>
            <ul className="list-disc pl-5 mb-4 text-gray-300">
              <li>Instalação e manutenção de equipamentos industriais</li>
              <li>Manutenção preventiva e corretiva de sistemas elétricos e hidráulicos</li>
              <li>Adequação de layout e infraestrutura</li>
              <li>Gestão de documentação técnica e laudos</li>
              <li>Treinamento de equipes para operação segura</li>
            </ul>
            <p className="mb-2 font-semibold text-white">Diferenciais:</p>
            <ul className="list-disc pl-5 text-gray-300">
              <li>Equipe técnica certificada</li>
              <li>Atendimento emergencial e contratos flexíveis</li>
              <li>Monitoramento remoto de equipamentos</li>
            </ul>
          </>
        ),
        link: "/contato"
      },
      {
        icon: <ClipboardCheck size={24} className="text-primary" />,
        title: "Gestão de Obras",
        description: "Execução de reformas e obras com equipe especializada e materiais de qualidade, entregando projetos no prazo e com excelência.",
        details: (
          <>
            <p className="mb-4">Realizamos obras e reformas em ambientes residenciais, comerciais e industriais, com acompanhamento técnico e garantia de qualidade em todas as etapas.</p>
            <ul className="list-disc pl-5 mb-4 text-gray-300">
              <li>Reformas de espaços comerciais e adequações de layout</li>
              <li>Construção de áreas específicas e revitalização de ambientes</li>
              <li>Gestão de obras com cronograma e orçamento detalhado</li>
              <li>Equipe própria e fornecedores homologados</li>
              <li>Entrega com garantia e pós-obra</li>
            </ul>
            <p className="mb-2 font-semibold text-white">Diferenciais:</p>
            <ul className="list-disc pl-5 text-gray-300">
              <li>Planejamento detalhado e acompanhamento em tempo real</li>
              <li>Materiais de alta qualidade</li>
              <li>Atendimento personalizado e flexível</li>
            </ul>
          </>
        ),
        link: "/contato"
      }
    ]
  }
};

export default function ServicosPage() {
  const [expandedService, setExpandedService] = useState<string | null>(null);

  return (
    <div className="min-h-screen w-full bg-[#0f172a] relative">
      {/* Blue Radial Glow Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `radial-gradient(circle 800px at 50% 50%, rgba(59,130,246,0.15), transparent)`,
        }}
      />
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="text-white py-20 md:py-28">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center py-20">
              <h1 className="text-5xl sm:text-6xl font-bold mb-8 py-10">
                Soluções Completas em Serviços
              </h1>
              <p className="text-xl sm:text-2xl mb-8 text-gray-300">
                Atendimento personalizado e expertise técnica para cada necessidade do seu negócio
              </p>
            </div>
          </div>
        </section>

        {/* Services Groups Section */}
        {Object.entries(servicesGroups).map(([groupKey, group]) => (
          <section key={groupKey} className="py-16 md:py-24">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto mb-16 text-center">
                <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">{group.title}</h2>
                <p className="text-xl text-gray-400">{group.subtitle}</p>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {group.services.map((service) => (
                  <div
                    key={service.title}
                    className={`bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/10 transition-all hover:shadow-xl hover:bg-white/20 ${
                      expandedService === service.title ? 'ring-2 ring-blue-400' : ''
                    }`}
                    onClick={(e) => {
                      e.preventDefault();
                      setExpandedService(expandedService === service.title ? null : service.title);
                    }}
                  >
                    <div className="flex items-start gap-6">
                      <div className="p-4 rounded-xl flex items-center justify-center bg-blue-500/20">
                        <div className="text-blue-400">
                          {service.icon}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-3 text-white">{service.title}</h3>
                        <p className="text-gray-300 leading-relaxed">{service.description}</p>
                      </div>
                    </div>
                    {expandedService === service.title && (
                      <div className="mt-8 animate-in fade-in slide-in-from-top-4">
                        <div className="text-gray-200">
                          {service.details}
                        </div>
                        <div className="flex gap-4 mt-8">
                          <Button asChild size="lg">
                            <Link href="/contato">Solicitar Serviço</Link>
                          </Button>
                          <Button 
                            variant="outline" 
                            size="lg"
                            className="text-gray-800 hover:text-gray-900 border-gray-400 hover:bg-gray-100"
                            onClick={(e) => {
                              e.preventDefault();
                              setExpandedService(null);
                            }}
                          >
                            Fechar
                          </Button>
                        </div>
                      </div>
                    )}
                    {expandedService !== service.title && (
                      <div className="mt-6">
                        <button 
                          className="inline-flex items-center gap-2 text-blue-600 font-medium hover:text-blue-700 transition-colors"
                          onClick={(e) => {
                            e.preventDefault();
                            setExpandedService(service.title);
                          }}
                        >
                          Saiba mais 
                          <span className="text-lg">→</span>
                        </button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* CTA Section */}
        <section className="py-20 text-white relative">
          <div className="absolute inset-0 bg-blue-600/10 backdrop-blur-sm"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl sm:text-5xl font-bold mb-8">Precisa de uma solução personalizada?</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-12">
                Nossa equipe está pronta para desenvolver uma proposta sob medida para suas necessidades específicas.
              </p>
              <Button 
                asChild 
                variant="secondary" 
                size="lg" 
                className="px-8 py-6 text-lg bg-blue-500 hover:bg-blue-600 text-white"
              >
                <Link href="/contato">Solicitar Proposta Personalizada</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
