import { Container } from "@/components/ui/container";
import { Typography } from "@/components/ui/typography";
import { Card } from "@/components/ui/card";
import { Star, ThumbsUp } from "lucide-react";

const testimonials = [
  {
    name: "Maria Silva",
    role: "Síndica do Residencial Solar",
    rating: 5,
  comment: "Excelente atendimento! A equipe &eacute; muito profissional e sempre resolve nossos problemas rapidamente. Recomendo muito o trabalho deles."
  },
  {
    name: "João Santos",
    role: "Administrador Predial",
    rating: 5,
  comment: "Trabalho impec&aacute;vel. A gest&atilde;o financeira melhorou muito desde que contratamos os servi&ccedil;os. Transpar&ecirc;ncia total nos relat&oacute;rios."
  },
  {
    name: "Ana Costa",
    role: "Moradora do Condomínio Verde",
    rating: 5,
  comment: "Muito satisfeita com a limpeza e manuten&ccedil;&atilde;o. O condom&iacute;nio nunca esteve t&atilde;o bem cuidado. Equipe muito educada e eficiente."
  },
  {
    name: "Pedro Oliveira",
    role: "Síndico do Edifício Central",
    rating: 5,
  comment: "A portaria est&aacute; funcionando perfeitamente. Sistema de seguran&ccedil;a moderno e funcion&aacute;rios bem treinados. Parab&eacute;ns pelo servi&ccedil;o!"
  },
  {
    name: "Carla Ferreira",
    role: "Administradora",
    rating: 5,
  comment: "Relat&oacute;rios sempre em dia e muito detalhados. A gest&atilde;o de inadimpl&ecirc;ncia melhorou significativamente. Excelente parceria!"
  },
  {
    name: "Roberto Lima",
    role: "Síndico do Residencial Atlântida",
    rating: 5,
  comment: "Manuten&ccedil;&atilde;o preventiva excelente! Evitamos v&aacute;rios problemas gra&ccedil;as ao trabalho preventivo da equipe. Muito profissionais."
  }
];

export function AttributionsSection() {
  return (
    <section className="py-24 bg-gray-50">
      <Container>
        {/* Header */}
        <div className="text-center mb-16 space-y-8">
          <div className="flex items-center justify-center gap-4">
            <ThumbsUp className="w-12 h-12 text-blue-600" />
            <div className="text-left">
              <Typography variant="large" className="font-semibold text-gray-900">
                220k+ avaliações na app store
              </Typography>
              <Typography variant="p" className="text-gray-600">
                50% dos condomínios no estado utilizam nossos serviços
              </Typography>
            </div>
          </div>

          <div className="flex items-center justify-center gap-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-8 h-8 text-yellow-400 fill-current" />
            ))}
            <Typography variant="large" className="ml-4 font-semibold text-gray-900">
              4.9/5 estrelas
            </Typography>
          </div>

              <Typography variant="h2" className="text-3xl lg:text-4xl font-bold text-gray-900">
                As pessoas nos amam e isso &eacute; vis&iacute;vel.
              </Typography>
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
