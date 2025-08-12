import { Container } from "@/components/ui/container";
import { Typography } from "@/components/ui/typography";
import { Card } from "@/components/ui/card";

export function BenefitsSection() {
  return (
    <section className="py-24 bg-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Typography variant="h2" className="text-3xl lg:text-4xl font-bold text-gray-900">
                Projetado com uma abordagem centrada no ser humano.
              </Typography>
            </div>
            
            <Typography variant="large" className="text-xl text-gray-600 leading-relaxed">
              Nossa profunda compreensão das necessidades dos moradores e do trabalho das pessoas 
              na administração significa que sempre entregamos uma experiência de usuário de primeira linha.
            </Typography>
          </div>

          {/* Right Content - Image placeholder */}
          <div className="relative">
            <Card className="p-8 bg-gradient-to-br from-green-50 to-blue-50 border-none">
              <div className="aspect-[4/3] bg-gradient-to-br from-green-200 to-blue-200 rounded-lg flex items-center justify-center">
                <Typography variant="large" className="text-green-800 font-semibold text-center">
                  Imagem de pessoas <br />
                  usando nossa plataforma
                </Typography>
              </div>
            </Card>
          </div>
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mt-24">
          {/* Left Content - Image placeholder */}
          <div className="relative order-2 lg:order-1">
            <Card className="p-8 bg-gradient-to-br from-purple-50 to-indigo-50 border-none">
              <div className="aspect-[4/3] bg-gradient-to-br from-purple-200 to-indigo-200 rounded-lg flex items-center justify-center">
                <Typography variant="large" className="text-purple-800 font-semibold text-center">
                  Tecnologia <br />
                  e inovação
                </Typography>
              </div>
            </Card>
          </div>

          {/* Right Content */}
          <div className="space-y-8 order-1 lg:order-2">
            <div className="space-y-4">
              <Typography variant="h2" className="text-3xl lg:text-4xl font-bold text-gray-900">
                O primeiro sistema de IA composível, construído para mudanças rápidas de políticas.
              </Typography>
            </div>
            
            <Typography variant="large" className="text-xl text-gray-600 leading-relaxed">
              Construído especificamente para administração predial e outras organizações governamentais.
            </Typography>

            <div className="space-y-6">
              <div>
                <Typography variant="h4" className="text-lg font-semibold text-gray-900 mb-2">
                  Privacidade no centro.
                </Typography>
                <Typography variant="p" className="text-gray-600">
                  Construído sobre uma base de padrões e protocolos inflexíveis, 
                  garantindo proteção robusta para dados sensíveis.
                </Typography>
              </div>

              <div>
                <Typography variant="h4" className="text-lg font-semibold text-gray-900 mb-2">
                  Sucesso em escala.
                </Typography>
                <Typography variant="p" className="text-gray-600">
                  Nossa plataforma nativa em nuvem garante conformidade e manutenção sem esforço, 
                  para que você possa se concentrar na entrega de benefícios.
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
