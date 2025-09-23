"use client";

import { Container } from "@/components/ui/container";
import { Typography } from "@/components/ui/typography";
import { Card } from "@/components/ui/card";
import { useState, useEffect } from "react";
import { ShieldCheck, Users, Cloud, Sparkles, ArrowRight } from "lucide-react";
import Image from "next/image";

const benefits = [
	{
		title: "Projetado com uma abordagem centrada no ser humano.",
		description:
			"Nossa profunda compreensão das necessidades dos moradores e do trabalho das pessoas na administração significa que sempre entregamos uma experiência de usuário de primeira linha.",
		icon: <Users className="w-6 h-6" />,
		gradient: "from-blue-600 to-blue-800",
	},
	{
		title: "O primeiro sistema de IA composável, construído para mudanças rápidas de políticas.",
		description:
			"Construído especificamente para administração predial e outras organizações governamentais.",
		icon: <Sparkles className="w-6 h-6" />,
		gradient: "from-purple-600 to-purple-800",
	},
	{
		title: "Privacidade no centro.",
		description:
			"Construído sobre uma base de padrões e protocolos inflexíveis, garantindo proteção robusta para dados sensíveis.",
		icon: <ShieldCheck className="w-6 h-6" />,
		gradient: "from-green-600 to-green-800",
	},
	{
		title: "Sucesso em escala.",
		description:
			"Nossa plataforma nativa em nuvem garante conformidade e manutenção sem esforço, para que você possa se concentrar na entrega de benefícios.",
		icon: <Cloud className="w-6 h-6" />,
		gradient: "from-indigo-600 to-indigo-800",
	},
];

export function BenefitsSection() {
	const [visible, setVisible] = useState<number[]>([]);

	useEffect(() => {
		const observer = new window.IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						const index = parseInt(
							entry.target.getAttribute("data-index") || "0"
						);
						setVisible((prev) =>
							prev.includes(index) ? prev : [...prev, index]
						);
					}
				});
			},
			{ threshold: 0.2 }
		);
		const cardEls = document.querySelectorAll(".benefit-card");
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
							className={`benefit-card group relative transition-all duration-700 transform ${
								visible.includes(index)
									? "translate-y-0 opacity-100"
									: "translate-y-8 opacity-0"
							}`}
							style={{ transitionDelay: `${index * 120}ms` }}
						>
							{/* Card principal */}
							<div className="relative bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2 h-full">
								{/* Ícone com gradiente */}
								<div
									className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r ${benefit.gradient} text-white mb-6 shadow-lg`}
								>
									{benefit.icon}
								</div>

								{/* Conteúdo */}
								<h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight">
									{benefit.title}
								</h3>
								<p className="text-gray-600 text-base leading-relaxed">
									{benefit.description}
								</p>

								{/* Seta decorativa */}
								<div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
									<ArrowRight className="w-5 h-5 text-gray-400" />
								</div>

								{/* Borda animada no hover */}
								<div
									className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${benefit.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none`}
								></div>
							</div>

							{/* Elemento de sombra/profundidade */}
							<div
								className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${benefit.gradient} opacity-20 blur-xl -z-10 group-hover:opacity-30 transition-opacity duration-300`}
							></div>
						</div>
					))}
				</div>

				{/* Galeria de imagens */}
				<div className="w-full flex flex-col items-center">
					
					{/* Grid principal da galeria */}
					<div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
						{/* Imagem destacada - maior */}
						<div className="lg:col-span-2 lg:row-span-2">
							<div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg group">
								<Image
									src="/images/IMG_0007.jpg"
									alt=""
									width={800}
									height={600}
									className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
									<div className="absolute bottom-4 left-4">
										
									</div>
								</div>
							</div>
						</div>

						{/* Imagens menores */}
						<div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg group">
							<Image
								src="/images/IMG_0002.jpg"
								alt=""
								width={400}
								height={300}
								className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
								<div className="absolute bottom-2 left-2">
									
								</div>
							</div>
						</div>

						<div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg group">
							<Image
								src="/images/IMG_0036.jpg"
								alt="Portaria Moderna"
								width={400}
								height={300}
								className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
								<div className="absolute bottom-2 left-2">
									
								</div>
							</div>
						</div>
					</div>
					<p className="text-gray-600 text-center mt-6 max-w-2xl">
						Mais de 50 condomínios já confiam em nossa plataforma para gerenciar
						suas operações diárias e proporcionar a melhor experiência para seus
						moradores.
					</p>
				</div>
			</Container>
		</section>
	);
}
