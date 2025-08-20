import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Typography } from "@/components/ui/typography";
import { ArrowRight } from "lucide-react";

const solutions = [
  { name: "Administração Predial", href: "/servicos/administracao" },
  { name: "Manutenção Preventiva", href: "/servicos/manutencao" },
  { name: "Limpeza & Conservação", href: "/servicos/limpeza" },
  { name: "Gestão Financeira", href: "/servicos/financeiro" },
  { name: "Consultoria Técnica", href: "/servicos/consultoria" }
];

export function CTASection() {
  return (
    <section className="py-24 bg-gray-900 text-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Content */}
          <div className="space-y-8">
            <Typography variant="h2" className="text-3xl lg:text-4xl font-bold text-white">
              Saiba mais sobre nossa solução.
            </Typography>
            
            <div>
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 h-auto text-lg">
                <Link href="/contato">
                  Agendar Demonstração
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>

            {/* Solutions Grid */}
            <div className="grid grid-cols-2 gap-4 pt-8">
              {solutions.map((solution, index) => (
                <Link 
                  key={index}
                  href={solution.href}
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <Typography variant="p" className="text-inherit">
                    {solution.name}
                  </Typography>
                </Link>
              ))}
            </div>
          </div>

          {/* Right Content - Logos/Partners */}
          <div className="space-y-8">
            <div className="grid grid-cols-2 gap-8 items-center">
              {/* Logo placeholders */}
              <div className="aspect-[3/2] bg-gray-800 rounded-lg flex items-center justify-center">
                <Typography variant="p" className="text-gray-400 text-center">
                  Logo Cliente 1
                </Typography>
              </div>
              <div className="aspect-[3/2] bg-gray-800 rounded-lg flex items-center justify-center">
                <Typography variant="p" className="text-gray-400 text-center">
                  Logo Cliente 2
                </Typography>
              </div>
              <div className="aspect-[3/2] bg-gray-800 rounded-lg flex items-center justify-center">
                <Typography variant="p" className="text-gray-400 text-center">
                  Logo Cliente 3
                </Typography>
              </div>
              <div className="aspect-[3/2] bg-gray-800 rounded-lg flex items-center justify-center">
                <Typography variant="p" className="text-gray-400 text-center">
                  Logo Cliente 4
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
