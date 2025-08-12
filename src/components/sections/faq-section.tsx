"use client";

const faqs = [
  {
    question: "Como funciona a contratação dos serviços da CELF-2?",
    answer: "Nosso processo é simples e transparente. Primeiro, realizamos uma análise gratuita das suas necessidades. Em seguida, apresentamos uma proposta personalizada com valores e prazos. Após aprovação, iniciamos os serviços com nossa equipe especializada."
  },
  {
    question: "Quais são os diferenciais da CELF-2 em relação à concorrência?",
    answer: "Oferecemos atendimento 24/7, equipe própria treinada, uso de tecnologia de ponta, gestão transparente com relatórios mensais, e mais de 15 anos de experiência no mercado. Além disso, temos certificações ISO e seguimos rigorosamente todas as normas de segurança."
  },
  {
    question: "A CELF-2 trabalha com que tipos de clientes?",
    answer: "Atendemos desde condomínios residenciais pequenos até grandes complexos comerciais e industriais. Nossos clientes incluem administradoras, síndicos, empresas privadas, indústrias e estabelecimentos comerciais de todos os portes."
  },
  {
    question: "Como é feito o controle de qualidade dos serviços?",
    answer: "Utilizamos um sistema de gestão digital que permite monitoramento em tempo real. Realizamos inspeções regulares, pesquisas de satisfação mensais, e temos uma central de atendimento exclusiva para feedback. Todos os serviços passam por checklist de qualidade rigoroso."
  },
  {
    question: "Quais são as formas de pagamento aceitas?",
    answer: "Aceitamos diversas formas de pagamento: boleto bancário, transferência PIX, débito automático, cartão de crédito (parcelado), e para empresas oferecemos condições especiais de prazo. Todos os pagamentos são processados com segurança total."
  },
  {
    question: "A empresa oferece garantia nos serviços prestados?",
    answer: "Sim, todos os nossos serviços possuem garantia. Para manutenção e reformas oferecemos garantia de 12 meses. Serviços de conservação têm acompanhamento contínuo com retrabalho gratuito se necessário. Também possuímos seguro responsabilidade civil."
  },
  {
    question: "Como funciona o atendimento de emergência?",
    answer: "Mantemos plantão 24 horas para emergências. Nossa equipe especializada pode ser acionada por telefone, WhatsApp ou aplicativo. Garantimos tempo de resposta de até 2 horas para emergências críticas e até 4 horas para situações padrão."
  },
  {
    question: "É possível personalizar os serviços conforme necessidades específicas?",
    answer: "Absolutamente! Cada cliente tem necessidades únicas, por isso desenvolvemos planos totalmente personalizados. Nossa equipe técnica faz um diagnóstico completo e propõe soluções sob medida, sempre respeitando o orçamento disponível."
  }
];

export function FAQSection() {
  return (
    <section className="py-16 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Encontre respostas para as dúvidas mais comuns sobre nossos serviços e processos.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.slice(0, 4).map((faq, index) => (
              <div key={index} className="border-b border-gray-200 pb-4">
                <div className="font-semibold text-gray-900 mb-2">
                  {faq.question}
                </div>
                <div className="text-gray-600 text-sm">
                  {faq.answer.substring(0, 120)}...
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-8">
          <a 
            href="/faq"
            className="text-primary font-medium hover:underline"
          >
            Ver todas as perguntas frequentes
          </a>
        </div>
      </div>
    </section>
  );
}
