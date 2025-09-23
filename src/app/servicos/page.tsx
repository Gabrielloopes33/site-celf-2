'use client';

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Building2, Wrench, ClipboardCheck, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";

// Componente Meteors com posições fixas para evitar hidratação
const Meteors = ({ number = 20 }: { number?: number }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // Não renderiza no servidor
  }

  // Posições fixas para evitar erro de hidratação
  const fixedPositions = [
    { left: '10%', top: '20%', delay: '0s' },
    { left: '25%', top: '10%', delay: '1s' },
    { left: '40%', top: '30%', delay: '2s' },
    { left: '60%', top: '15%', delay: '0.5s' },
    { left: '75%', top: '25%', delay: '1.5s' },
    { left: '90%', top: '5%', delay: '2.5s' },
    { left: '15%', top: '60%', delay: '3s' },
    { left: '30%', top: '70%', delay: '0.2s' },
    { left: '50%', top: '80%', delay: '1.2s' },
    { left: '70%', top: '65%', delay: '2.2s' },
    { left: '85%', top: '75%', delay: '3.2s' },
    { left: '5%', top: '45%', delay: '0.8s' },
    { left: '35%', top: '50%', delay: '1.8s' },
    { left: '55%', top: '40%', delay: '2.8s' },
    { left: '80%', top: '35%', delay: '0.3s' },
    { left: '20%', top: '85%', delay: '1.3s' },
    { left: '45%', top: '95%', delay: '2.3s' },
    { left: '65%', top: '90%', delay: '3.3s' },
    { left: '95%', top: '55%', delay: '0.7s' },
    { left: '12%', top: '75%', delay: '1.7s' },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {fixedPositions.slice(0, number).map((meteor, i) => (
        <div key={i}>
          {/* Meteoro principal */}
          <div
            className="absolute w-1 h-1 bg-blue-400 rounded-full animate-meteor opacity-80"
            style={{
              left: meteor.left,
              top: meteor.top,
              animationDelay: meteor.delay,
              animationDuration: '4s',
            }}
          />
          {/* Trail do meteoro */}
          <div
            className="absolute w-8 h-0.5 bg-gradient-to-r from-blue-400 to-transparent rounded-full animate-meteor opacity-60"
            style={{
              left: meteor.left,
              top: meteor.top,
              animationDelay: meteor.delay,
              animationDuration: '4s',
            }}
          />
          {/* Meteoro brilhante ocasional */}
          {i % 3 === 0 && (
            <div
              className="absolute w-2 h-2 bg-white rounded-full animate-meteor opacity-90 shadow-lg shadow-blue-400/50"
              style={{
                left: meteor.left,
                top: meteor.top,
                animationDelay: meteor.delay,
                animationDuration: '4s',
              }}
            />
          )}
        </div>
      ))}
    </div>
  );
};

// Definição dos grupos de serviços
const servicesGroups = {
  construccao: {
    title: "Construção e Reformas",
    subtitle: "Soluções completas para seus projetos de construção",
    services: [
      {
        title: "Construção Civil",
        description: "Projetos completos de construção residencial e comercial com qualidade e pontualidade.",
        details: "Oferecemos serviços completos de construção, desde o planejamento até a entrega final. Nossa equipe experiente garante qualidade em cada etapa do processo.",
        icon: <Building2 className="w-8 h-8" />
      },
      {
        title: "Reformas e Renovações",
        description: "Transformação de espaços existentes com design moderno e funcionalidade aprimorada.",
        details: "Especializados em reformas que valorizam seu imóvel, desde pequenas modificações até grandes renovações.",
        icon: <Wrench className="w-8 h-8" />
      }
    ]
  },
  manutencao: {
    title: "Manutenção e Reparos",
    subtitle: "Manutenção preventiva e corretiva para seu patrimônio",
    services: [
      {
        title: "Manutenção Predial",
        description: "Serviços especializados de manutenção para condomínios e edifícios comerciais.",
        details: "Manutenção completa incluindo sistemas elétricos, hidráulicos, pintura e reparos gerais.",
        icon: <ClipboardCheck className="w-8 h-8" />
      },
      {
        title: "Reparos Residenciais",
        description: "Soluções rápidas e eficientes para reparos domésticos de qualquer complexidade.",
        details: "Atendimento ágil para reparos emergenciais e manutenção residencial.",
        icon: <Wrench className="w-8 h-8" />
      }
    ]
  }
};

export default function ServicosPage() {
  const [expandedService, setExpandedService] = useState<string | null>(null);

  return (
    <div className="min-h-screen w-full bg-[#0f172a] relative overflow-hidden">
      {/* Meteors Background */}
      <Meteors number={20} />
      
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
              <div className="flex justify-center">
                <Button
                  asChild
                  variant="secondary"
                  size="lg"
                  className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 text-lg font-semibold shadow-lg"
                >
                  <Link href="/como-funciona">
                    Quero saber como funciona
                  </Link>
                </Button>
              </div>
              {/* Ícone para descer */}
              <div className="flex justify-center mt-8 animate-bounce py-15">
                <ChevronDown className="w-10 h-10 md:w-12 md:h-12 text-white/80" />
              </div>
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
                    className={`bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/10 transition-all hover:shadow-xl hover:bg-white/20 cursor-pointer ${
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
                      <div className="mt-8">
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
                            className="text-white border-gray-400 hover:bg-gray-100 hover:text-gray-900"
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
                          className="inline-flex items-center gap-2 text-blue-400 font-medium hover:text-blue-300 transition-colors"
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