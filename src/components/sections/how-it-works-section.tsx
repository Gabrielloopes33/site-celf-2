

"use client";


import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";

const cards = [
  {
    title: "Implementação mais rápida que qualquer outra plataforma.",
    description: "Aumento de 10x na velocidade de entrega de serviços.",
    color: "bg-blue-600",
  },
  {
    title: "Entregue a melhor experiência para moradores e funcionários.",
    description: "Mais de 5000+ pessoas usando nossa plataforma.",
    color: "bg-green-600",
  },
  {
    title: "Implementações de longo prazo, com ROI positivo que crescem com você.",
    description: "Milhões em economia de custos para nossos parceiros.",
    color: "bg-purple-600",
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

        {/* Cards animados com texto do modelo antigo */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {cards.map((card, index) => (
            <div
              key={index}
              data-index={index}
              className={`howit-card group relative ${card.color} rounded-2xl p-8 flex flex-col items-start shadow-lg transition-all duration-700 transform ${
                visibleCards.includes(index)
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 120}ms` }}
            >
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-white/20 mb-6">
                <ArrowRight className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                {card.title}
              </h3>
              <p className="text-white/90 text-lg">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        {/* Espaço para fotos ou galeria */}
        <div className="w-full flex flex-col items-center">
          <div className="w-full max-w-4xl aspect-[4/2] bg-gradient-to-br from-blue-200 to-purple-200 rounded-2xl flex items-center justify-center mb-4">
            <span className="text-blue-800 font-semibold text-xl text-center">Espaço reservado para fotos ou galeria</span>
          </div>
          {/* Adicione aqui sua galeria de imagens ou componentes de foto */}
        </div>
      </div>
    </section>
  );
}
