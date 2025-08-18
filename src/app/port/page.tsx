"use client";

import Link from "next/link";
import { ChevronLeft, ChevronRight, Wrench, Hammer, Leaf } from "lucide-react";
import { useState } from "react";

const portfolio = [
	{
		name: "Residencial Solar",
		type: "Conservação",
		icon: <Leaf className="text-green-600 w-6 h-6" />,
		images: [
			"/portfolio/RESIDENCIAL 1.jpg",
			"/portfolio/RSIDENCIAL 2.jpeg",
			
		],
	},
	{
		name: "Edifício Judith de Melo",
		type: "Obra",
		icon: <Hammer className="text-yellow-600 w-6 h-6" />,
		images: [
			"/portfolio/judith 1.jpeg",
			"/portfolio/judith 2.jpeg",
			"/portfolio/judith 3.jpeg",
			"/portfolio/judith 4.jpeg",
		],
	},
	{
		name: "Obra COMERC",
		type: "Manutenção",
		icon: <Wrench className="text-blue-600 w-6 h-6" />,
		images: [
			"/portfolio/COMERC 1.jpeg",
			"/portfolio/COMERC 2.jpg",
		],
	},

	{
		name: "Clínica Odontológica Odontocenter",
		type: "Conservação",
		icon: <Leaf className="text-green-600 w-6 h-6" />,
		images: [
			"/portfolio/CLINICA 1.jpg",
			"/portfolio/CLINICA 2.jpg",
			
		],
	},
	{
		name: "Igreja Presbteriana do Bom Retiro",
		type: "Obra",
		icon: <Hammer className="text-yellow-600 w-6 h-6" />,
		images: [
			"/portfolio/igreja 1.jpeg",
			"/portfolio/igreja 2.jpeg",
			"/portfolio/igreja 3.jpeg",
			"/portfolio/igreja 4.jpeg",
		],
	},
	{
		name: "Usina Elétrica CAMPO BELO",
		type: "Manutenção",
		icon: <Wrench className="text-blue-600 w-6 h-6" />,
		images: [
			"/portfolio/campo belo 1.jpg",
			"/portfolio/campo belo 2.jpg",
			
		],
	},
];

function MiniCarousel({ images }: { images: string[] }) {
	const [idx, setIdx] = useState(0);

	const prev = (e: React.MouseEvent) => {
		e.stopPropagation();
		setIdx((i) => (i === 0 ? images.length - 1 : i - 1));
	};
	const next = (e: React.MouseEvent) => {
		e.stopPropagation();
		setIdx((i) => (i === images.length - 1 ? 0 : i + 1));
	};

	return (
		<div className="relative group w-full h-48 rounded-xl overflow-hidden bg-gray-100 flex items-center justify-center">
			<img
				src={images[idx]}
				alt={`Foto ${idx + 1}`}
				className="object-cover w-full h-full transition-all duration-300"
			/>
			{images.length > 1 && (
				<>
					<button
						onClick={prev}
						className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-blue-900 rounded-full p-1 shadow transition z-10"
						aria-label="Anterior"
					>
						<ChevronLeft className="w-5 h-5" />
					</button>
					<button
						onClick={next}
						className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-blue-900 rounded-full p-1 shadow transition z-10"
						aria-label="Próxima"
					>
						<ChevronRight className="w-5 h-5" />
					</button>
				</>
			)}
			<div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
				{images.map((_, i) => (
					<span
						key={i}
						className={`block w-2 h-2 rounded-full ${
							i === idx ? "bg-blue-600" : "bg-white/70"
						} border border-blue-600`}
					/>
				))}
			</div>
		</div>
	);
}

export default function PortfolioPage() {
	return (
		<div
			className="min-h-screen w-full relative flex flex-col"
			style={{
				background:
					"radial-gradient(circle 150px at 50% 50%, rgba(59,130,246,0.15), #0f172a)",
			}}
		>
			{/* Imagem de fundo com opacidade, acima do gradiente */}
			
			<div className="relative z-10 container mx-auto px-4">
				<div className="max-w-3xl mx-auto text-center mb-16 py-40">
					<h1 className="text-5xl font-extrabold text-white mb-4">
						Portfólio de Obras
					</h1>
					<p className="text-lg text-gray-300">
						Conheça algumas das obras, manutenções e projetos realizados pela
						CELF.
					</p>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
					{portfolio.map((obra, i) => (
						<div
							key={obra.name}
							className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow border border-gray-100 flex flex-col overflow-hidden group"
						>
							<MiniCarousel images={obra.images} />
							<div className="p-6 flex-1 flex flex-col">
								<div className="flex items-center gap-2 mb-2">
									{obra.icon}
									<span className="text-sm font-semibold text-blue-700 uppercase tracking-wide">
										{obra.type}
									</span>
								</div>
								<h2 className="text-2xl font-bold text-blue-900 mb-2">
									{obra.name}
								</h2>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}