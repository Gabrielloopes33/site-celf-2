import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Typography } from "@/components/ui/typography";
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

export function HowItWorksSection() {
  return (
    <section className="py-32 bg-gray-50">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <Typography variant="h2" className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Confiados por condomínios para entregar resultados reais.
              </Typography>
            </div>
            
            <Typography variant="large" className="text-lg md:text-xl text-gray-600 leading-relaxed">
              Oferecemos uma experiência perfeita tanto para administradores quanto para moradores, 
              garantindo operações mais suaves, maior engajamento e melhores resultados.
            </Typography>

            <div className="space-y-8 pt-4">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <ArrowRight className="w-8 h-8 text-white" />
                </div>
                <div>
                  <Typography variant="h4" className="text-xl font-semibold text-gray-900 mb-3">
                    Implementação mais rápida que qualquer outra plataforma.
                  </Typography>
                  <Typography variant="p" className="text-gray-600 text-lg">
                    Aumento de 10x na velocidade de entrega de serviços.
                  </Typography>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-green-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <ArrowRight className="w-8 h-8 text-white" />
                </div>
                <div>
                  <Typography variant="h4" className="text-xl font-semibold text-gray-900 mb-3">
                    Entregue a melhor experiência para moradores e funcionários.
                  </Typography>
                  <Typography variant="p" className="text-gray-600 text-lg">
                    Mais de 5000+ pessoas usando nossa plataforma.
                  </Typography>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <ArrowRight className="w-8 h-8 text-white" />
                </div>
                <div>
                  <Typography variant="h4" className="text-xl font-semibold text-gray-900 mb-3">
                    Implementações de longo prazo, com ROI positivo que crescem com você.
                  </Typography>
                  <Typography variant="p" className="text-gray-600 text-lg">
                    Milhões em economia de custos para nossos parceiros.
                  </Typography>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 h-auto text-lg">
                <Link href="/sobre">
                  Saiba Mais Sobre Nosso Impacto
                  <ArrowRight className="w-5 h-5 ml-3" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Right Content - Image placeholder */}
          <div className="relative">
            <Card className="p-12 bg-gradient-to-br from-blue-50 to-purple-50 border-none shadow-lg rounded-2xl">
              <div className="aspect-[4/3] bg-gradient-to-br from-blue-200 to-purple-200 rounded-xl flex items-center justify-center">
                <Typography variant="large" className="text-blue-800 font-semibold text-center">
                  Imagem do nosso impacto
                </Typography>
              </div>
            </Card>
          </div>
        </div>
      </Container>
    </section>
  );
}
