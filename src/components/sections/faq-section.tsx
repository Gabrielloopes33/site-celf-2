"use client";
import { useState } from "react";

const faqs = [
  {
    question: "Como funciona a contratação dos serviços da CELF?",
    answer: "Nosso processo é simples e transparente. Primeiro, realizamos uma análise gratuita das suas necessidades. Em seguida, apresentamos uma proposta personalizada com valores e prazos. Após aprovação, iniciamos os serviços com nossa equipe especializada."
  },
  {
    question: "Quais são os diferenciais da CELF em relação à concorrência?",
    answer: "Oferecemos atendimento 24/7, equipe própria treinada, uso de tecnologia de ponta, gestão transparente com relatórios mensais, e mais de 15 anos de experiência no mercado. Além disso, temos certificações ISO e seguimos rigorosamente todas as normas de segurança."
  },
  {
    question: "A CELF-2 trabalha com que tipos de clientes?",
    answer: "Atendemos desde condomínios residenciais pequenos até grandes complexos comerciais e industriais. Nossos clientes incluem administradoras, síndicos, empresas privadas, indústrias e estabelecimentos comerciais de todos os portes."
  },
  {
    question: "Como é feito o controle de qualidade dos serviços?",
    answer: "Utilizamos um sistema de gestão digital que permite monitoramento em tempo real. Realizamos inspeções regulares, pesquisas de satisfação mensais, e temos uma central de atendimento exclusiva para feedback. Todos os serviços passam por checklist de qualidade."
  },
  {
    question: "Como abro um chamado?",
    answer: "Pelo WhatsApp ou pelo Portal do Morador. A solicitação vira um chamado com categoria, prioridade, responsável e prazo (SLA). Você recebe notificações de andamento até a conclusão."
  },
  {
    question: "Posso acompanhar o status dos chamados?",
    answer: "Sim. No Portal do Morador/Síndico do sistema da CELF você acompanha status, prazos, evidências (foto/vídeo) e o histórico por unidade/área comum."
  },
  {
    question: "Como funcionam os prazos (SLA)?",
    answer: "Estabelecemos SLAs por tipo de ocorrência (ex.: hidráulica, elétrica, limpeza). O painel do síndico mostra o cumprimento dos prazos e as pendências."
  },
  {
    question: "Como funciona a aprovação de despesas?",
    answer: "Toda despesa pode seguir um fluxo de aprovação definido pelo condomínio (síndico/conselho). Fica registrado quem aprovou, quando e com qual documento (trilha de auditoria)."
  },
  {
    question: "Atraso na taxa de condomínio: qual multa e juros?",
    answer: "Pela regra do Código Civil, a multa por atraso nas cotas condominiais é limitada a 2%, além de correção e juros previstos na convenção. Verifique sempre a sua convenção/regimento para as condições exatas."
  },
  {
    question: "Assembleias: qual é o quórum e quem precisa ser convocado?",
    answer: "Todos os condôminos devem ser formalmente convocados. Em segunda convocação, as deliberações valem por maioria dos presentes, salvo temas que exigem quórum especial (como obras específicas/alterações de convenção). Consulte a pauta e a convenção. "
  },
  {
    question: "Posso solicitar tudo pelo WhatsApp?",
    answer: "Sim. Abertura de chamados, envio de evidências e atualização de status podem ser iniciados pelo WhatsApp. Para documentos e relatórios, o Portal é o canal oficial."
  },

];


export default function FAQSection() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-5xl font-bold text-gray-900 mb-6">
            Perguntas
            <span className="block bg-gradient-to-r from-purple-600 to-blue-900 bg-clip-text text-transparent">
              Frequentes
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Tudo que você precisa saber sobre nossa plataforma. Não encontrou sua resposta? Fale conosco!
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg"
            >
              <button
                className="w-full px-6 py-6 text-left flex items-center justify-between bg-white hover:bg-gray-50 transition-colors duration-200"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </span>
                <div className={`flex-shrink-0 transition-transform duration-300 ${
                  openFAQ === index ? 'rotate-180' : 'rotate-0'
                }`}>
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              
              <div className={`overflow-hidden transition-all duration-300 ${
                openFAQ === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ainda tem dúvidas?
            </h3>
            <p className="text-gray-600 mb-6">
              Nossa equipe de especialistas está pronta para te ajudar com qualquer pergunta.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => window.open('https://api.whatsapp.com/send?phone=5531997153646&text=Vim%20do%20site%20de%20voc%C3%AAs%20e%20queria%20conversar%20mais!%20', '_blank')}
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium rounded-full hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105"
              >
                <svg className="mr-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                Falar via WhatsApp
              </button>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
