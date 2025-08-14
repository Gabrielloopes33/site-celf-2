import { Container } from "@/components/ui/container";
import { Typography } from "@/components/ui/typography";
import { Card } from "@/components/ui/card";
import { Star, ThumbsUp } from "lucide-react";

const testimonials = [
  {
    name: "Maria Silva",
    role: "Síndica do Residencial Solar",
    rating: 5,
    comment: "Excelente atendimento! A equipe é muito profissional e sempre resolve nossos problemas rapidamente. Recomendo muito o trabalho deles."
  },
  {
    name: "João Santos",
    role: "Administrador Predial",
    rating: 5,
    comment: "Trabalho impecável. A gestão financeira melhorou muito desde que contratamos os serviços. Transparência total nos relatórios."
  },
  {
    name: "Ana Costa",
    role: "Moradora do Condomínio Verde",
    rating: 5,
    comment: "Muito satisfeita com a limpeza e manutenção. O condomínio nunca esteve tão bem cuidado. Equipe muito educada e eficiente."
  },
  {
    name: "Pedro Oliveira",
    role: "Síndico do Edifício Central",
    rating: 5,
    comment: "A portaria está funcionando perfeitamente. Sistema de segurança moderno e funcionários bem treinados. Parabéns pelo serviço!"
  },
  {
    name: "Carla Ferreira",
    role: "Administradora",
    rating: 5,
    comment: "Relatórios sempre em dia e muito detalhados. A gestão de inadimplência melhorou significativamente. Excelente parceria!"
  },
  {
    name: "Roberto Lima",
    role: "Síndico do Residencial Atlântida",
    rating: 5,
    comment: "Manutenção preventiva excelente! Evitamos vários problemas graças ao trabalho preventivo da equipe. Muito profissionais."
  }
];

export function AttributionsSection() {
  return (
    <section className="py-24 bg-gray-50">
      <Container>
        {/* Header */}
        <div className="text-center mb-12">
            <h3 className="text-5xl font-bold text-gray-900 mb-4">
              O que Nossos Clientes Dizem
            </h3>
            <p className="text-gray-600">
              Histórias reais de transformação e crescimento
            </p>
          </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 space-y-4">
              <div className="flex items-center gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <Typography variant="p" className="text-gray-700 leading-relaxed">
                &quot;{testimonial.comment}&quot;
              </Typography>
              
              <div className="pt-4 border-t">
                <Typography variant="large" className="font-semibold text-gray-900">
                  {testimonial.name}
                </Typography>
                <Typography variant="small" className="text-gray-600">
                  {testimonial.role}
                </Typography>
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-16">
          <Typography variant="h3" className="text-2xl font-bold text-gray-900 mb-4">
            Suas palavras falam por nós.
          </Typography>
          <Typography variant="p" className="text-gray-600 max-w-2xl mx-auto">
            Nossos clientes são nossa melhor referência. Veja o que eles dizem sobre nossos serviços 
            e como transformamos a gestão dos seus condomínios.
          </Typography>
        </div>
      </Container>
    </section>
  );
}
