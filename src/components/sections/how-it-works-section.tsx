"use client";

import { useState, useEffect } from "react";
import { ArrowRight, Zap, Users, TrendingUp } from "lucide-react";
import Image from "next/image";

const cards = [
  {
    title: "Implementação mais rápida que qualquer outra plataforma.",
    description: "Aumento de 10x na velocidade de entrega de serviços.",
    icon: <Zap className="w-6 h-6" />,
    gradient: "from-blue-600 to-blue-800",
  },
  {
    title: "Entregue a melhor experiência para moradores e funcionários.",
    description: "Mais de 5000+ pessoas usando nossa plataforma.",
    icon: <Users className="w-6 h-6" />,
    gradient: "from-green-600 to-green-800",
  },
  {
    title: "Implementações com ROI positivo que crescem com você.",
    description: "Milhões em economia de custos para nossos parceiros.",
    icon: <TrendingUp className="w-6 h-6" />,
    gradient: "from-purple-600 to-purple-800",
  },
];

export function HowItWorksSection() {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleCards((prev) => (prev.includes(index) ? prev : [...prev, index]));
          }
        });
      },
      { threshold: 0.2 }
    );
    const cardEls = document.querySelectorAll('.howit-card');
    cardEls.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Confiados por condomínios para entregar resultados reais.
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Oferecemos uma experiência perfeita tanto para administradores quanto para moradores, garantindo operações mais suaves, maior engajamento e melhores resultados.
          </p>
        </div>

        {/* Cards com estilo Gravity */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {cards.map((card, index) => (
            <div
              key={index}
              data-index={index}
              className={`howit-card group relative transition-all duration-700 transform ${
                visibleCards.includes(index)
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 120}ms` }}
            >
              {/* Card principal */}
              <div className="relative bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2">
                {/* Ícone com gradiente */}
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r ${card.gradient} text-white mb-6 shadow-lg`}>
                  {card.icon}
                </div>

                {/* Conteúdo */}
                <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight">
                  {card.title}
                </h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  {card.description}
                </p>

                {/* Seta decorativa */}
                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowRight className="w-5 h-5 text-gray-400" />
                </div>

                {/* Borda animada no hover */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${card.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none`}></div>
              </div>

              {/* Elemento de sombra/profundidade */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${card.gradient} opacity-20 blur-xl -z-10 group-hover:opacity-30 transition-opacity duration-300`}></div>
            </div>
          ))}
        </div>

        {/* Espaço para fotos ou galeria */}
        <div className="w-full flex flex-col items-center">
          <div className="w-full max-w-4xl aspect-[4/2] bg-gradient-to-br from-blue-200 to-purple-200 rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/images/IMG_0030.jpg"
              alt="Exemplo de condomínio usando nossa plataforma"
              width={1200}
              height={600}
              className="w-full h-full object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
