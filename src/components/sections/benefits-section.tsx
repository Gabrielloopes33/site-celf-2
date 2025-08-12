"use client";

import { Container } from "@/components/ui/container";
import { Typography } from "@/components/ui/typography";
import { Card } from "@/components/ui/card";
import { useState, useEffect } from "react";
import { ShieldCheck, Users, Cloud, Sparkles } from "lucide-react";


const benefits = [
  {
    title: "Projetado com uma abordagem centrada no ser humano.",
    description: "Nossa profunda compreensão das necessidades dos moradores e do trabalho das pessoas na administração significa que sempre entregamos uma experiência de usuário de primeira linha.",
    icon: <Users className="w-8 h-8 text-white" />, color: "from-blue-900 to-blue-500"
  },
  {
    title: "O primeiro sistema de IA composível, construído para mudanças rápidas de políticas.",
    description: "Construído especificamente para administração predial e outras organizações governamentais.",
    icon: <Sparkles className="w-8 h-8 text-white" />, color: "from-blue-900 to-blue-500"
  },
  {
    title: "Privacidade no centro.",
    description: "Construído sobre uma base de padrões e protocolos inflexíveis, garantindo proteção robusta para dados sensíveis.",
    icon: <ShieldCheck className="w-8 h-8 text-white" />, color: "from-blue-900 to-blue-500"
  },
  {
    title: "Sucesso em escala.",
    description: "Nossa plataforma nativa em nuvem garante conformidade e manutenção sem esforço, para que você possa se concentrar na entrega de benefícios.",
    icon: <Cloud className="w-8 h-8 text-white" />, color: "from-blue-900 to-blue-500"
  },
];

export function BenefitsSection() {
  const [visible, setVisible] = useState<number[]>([]);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisible((prev) => (prev.includes(index) ? prev : [...prev, index]));
          }
        });
      },
      { threshold: 0.2 }
    );
    const cardEls = document.querySelectorAll('.benefit-card');
    cardEls.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-24 bg-gradient-to-br from-white via-blue-50 to-green-50">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Benefícios de uma plataforma feita para pessoas
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              data-index={index}
              className={`benefit-card group relative bg-gradient-to-br ${benefit.color} rounded-2xl p-8 flex flex-col items-start shadow-lg border border-purple-200 transition-all duration-700 transform ${
                visible.includes(index)
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 120}ms` }}
            >
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-white/20 mb-6">
                {benefit.icon}
              </div>
              <h3 className="text-3xl font-black text-white mb-3">
                {benefit.title}
              </h3>
              <p className="text-white text-lg">
                {benefit.description}
              </p>
              

              <span className="absolute top-4 right-6 w-3 h-3 rounded-full bg-fuchsia-200"></span>
            </div>
          ))}
        </div>

        {/* Espaço para fotos ou galeria - agora maior, cobrindo toda a largura */}
        <div className="w-full flex flex-col items-center">
          <div className="w-full aspect-[4/1] bg-gradient-to-br from-purple-100 via-fuchsia-100 to-pink-100 rounded-2xl flex items-center justify-center mb-4">
            <span className="text-purple-700 font-semibold text-2xl text-center">Espaço reservado para fotos ou galeria</span>
          </div>
          {/* Adicione aqui sua galeria de imagens ou componentes de foto */}
        </div>
      </Container>
    </section>
  );
}
