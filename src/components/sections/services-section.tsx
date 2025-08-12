'use client';

import { useState } from 'react';
import Link from 'next/link';

const servicesData = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Atendimento da demanda dos condôminos",
    description: "Abra e acompanhe chamados pelo WhatsApp/portal, com triagem automática, prioridade e prazos claros.",
    detailedDescription: "Centralizamos pedidos dos moradores em um único fluxo. Cada solicitação vira um chamado com categoria, prioridade, responsável e prazo (SLA). O morador acompanha o status e recebe atualizações até a resolução.",
    benefits: [
      "Abertura em 1 clique (WhatsApp/portal)",
      "Triagem automática e despacho ao setor correto",
      "Menos retrabalho e mais satisfação do morador",
      "SLAs monitorados e evidências (foto/vídeo)"
    ]
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Comunicação direta e eficaz",
    description: " Avisos e respostas rápidas em um único canal, com confirmação de leitura e segmentação por público.",
    detailedDescription: "Comunicados saem do “telefone sem fio”. Mensagens segmentadas por bloco/unidade/grupo chegam onde precisam, com confirmação de leitura e registro para auditoria. Agende envios e reduza ruído em grupos.",
    benefits: [
      "Segmentação por perfis e áreas",
      "Confirmação de leitura e registro de envio",
      "Agendamento de comunicados e lembretes",
      "Redução de dúvidas repetidas e ligações",
      "Histórico acessível para assembleias e auditorias"
    ]
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: "Assembleias de acordo com a necessidade",
    description: " Pautas guiadas por dados, materiais organizados e atas registradas com clareza.",
    detailedDescription: "Indicadores de chamados, custos e satisfação mostram os temas que realmente importam. Você organiza a pauta, envia materiais com antecedência e registra decisões/encaminhamentos para acompanhamento posterior.",
    benefits: [
      "Pautas orientadas por indicadores reais",
      "Materiais e relatórios em um só lugar",
      "Registro de decisões e responsáveis",
      "Acompanhamento de pendências pós-assembleia",
      "Mais objetividade e melhor participação"
    ]
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: "Contratos de manutenção de terceiros em atividade permanente",
    description: " Gestão de contratos, SLAs e performance de fornecedores com alertas e evidências.",
    detailedDescription: "Acompanhe fornecedores contínuos (segurança, elevadores, jardinagem). Cada contrato tem prazos, SLAs, ordens de serviço, checklists e evidências. Receba alertas de vencimento e compare performance por período.",
    benefits: [
      "Alertas de vencimento e reajuste",
      "Evidências de execução (foto/vídeo)",
      "Comparativos de performance e custo",
      "Menos risco de descontinuidade e multas"
    ]
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
      </svg>
    ),
    title: "Controle de consumo de água potável",
    description: " Registre leituras, monitore variações e detecte anomalias antes da catástrofe",
    detailedDescription: "Consolide leituras, visualize gráficos por período e receba alertas de consumo fora do padrão. Identifique vazamentos cedo, planeje intervenções e torne o rateio mais justo e previsível.",
    benefits: [
      "Registro e gráfico de consumo por períodos",
      "Alertas de anomalia e possíveis vazamentos",
      "Base para rateio e previsibilidade de despesas",
      "Histórico para auditoria e decisões técnicas",
      "Redução de desperdício e custos emergenciais"
    ]
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Gerenciamento financeiro do condomínio",
    description: " Prestação de contas com centros de custo e conciliação, tudo vinculado aos chamados.",
    detailedDescription: "Lançamentos, notas e contratos ficam vinculados às atividades reais. Conciliação com o extrato, centros de custo por obra/serviço e relatórios prontos para assembleia — sem planilhas paralelas.",
    benefits: [
      "Centros de custo por obra/serviço",
      "Conciliação e anexos fiscais organizados",
      "Relatórios mensais e comparativos por período",
      "Fluxo de aprovação de despesas e contratos",
      "Transparência e trilha de auditoria completa"
    ]
  }
];

export default function ServicesSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleCardClick = (index: number) => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    
    if (expandedCard === index) {
      setExpandedCard(null);
    } else {
      setExpandedCard(index);
    }
    
    setTimeout(() => setIsAnimating(false), 300);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const renderCardContent = (feature: any, index: number, isExpanded: boolean) => {
    if (!isExpanded) {
      return (
        <>
          {/* Icon */}
          <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl mb-6 transition-all duration-300 ${
            hoveredIndex === index 
              ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg' 
              : 'bg-gray-100 text-gray-600'
          }`}>
            {feature.icon}
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-purple-700 transition-colors duration-300">
            {feature.title}
          </h3>

          {/* Description */}
          <p className="text-gray-600 leading-relaxed mb-4">
            {feature.description}
          </p>

          {/* Hover Arrow */}
          <div className={`inline-flex items-center text-purple-600 font-medium transition-all duration-300 cursor-pointer ${
            hoveredIndex === index ? 'translate-x-2 opacity-100' : 'translate-x-0 opacity-0'
          }`}>
            Saiba mais
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </>
      );
    }

    return (
      <div className="space-y-6">
        {/* Back Button */}
        <button 
          onClick={(e) => {
            e.stopPropagation();
            handleCardClick(index);
          }}
          className="inline-flex items-center text-blue-900 font-medium hover:text-blue-900 transition-colors mb-4"
        >
          <svg className="mr-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Voltar
        </button>

        {/* CTA Link para serviços */}
        <Link
          href="/servicos"
          className="w-full block text-center bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium py-3 px-6 rounded-xl hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105 mb-4"
        >
          Quero Testar Esta Funcionalidade
        </Link>

        {/* Expanded Header */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-xl mb-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg">
            {feature.icon}
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">{feature.title}</h3>
          <p className="text-blue-900 font-medium">Detalhes completos da funcionalidade</p>
        </div>

        {/* Detailed Description */}
        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed">
            {feature.detailedDescription}
          </p>

          {/* Benefits List */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-3">Principais Benefícios:</h4>
            <ul className="space-y-2">
              {feature.benefits.map((benefit: string, benefitIndex: number) => (
                <li key={benefitIndex} className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA Button */}
          <div className="pt-4">
            <button 
              onClick={() => window.open('/serviços', '_blank')}
              className="w-full bg-gradient-to-r from-purple-600 to-blue-900 text-white font-medium py-3 px-6 rounded-xl hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105"
            >
              Quero agendar uma apresentação
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-6xl md:text-5xl font-bold text-gray-900 mb-6">
            Detalhes que Fazem a
            <span className="block bg-gradient-to-r from-purple-600 to-blue-900 bg-clip-text text-transparent">
              Diferença
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Realizamos diversas atividades de gestão dos condomínios, na busca de soluções adequadas de acordo com a legislação, gerando conforto, comodidade e segurança aos condôminos
          </p>
        </div>

        {/* services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((feature, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden bg-white rounded-2xl border border-gray-200 hover:border-purple-200 transition-all duration-500 hover:shadow-xl hover:shadow-purple-100/50 cursor-pointer ${
                expandedCard === index 
                  ? 'md:col-span-2 lg:col-span-3 border-purple-300 shadow-xl shadow-purple-100/50' 
                  : ''
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => handleCardClick(index)}
              style={{
                minHeight: expandedCard === index ? '600px' : '320px',
                transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl transition-opacity duration-300 ${
                expandedCard === index ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
              }`}></div>
              
              {/* Content */}
              <div className="relative z-10 p-8 h-full">
                {renderCardContent(feature, index, expandedCard === index)}
              </div>

              {/* Decorative Elements */}
              <div className={`absolute top-4 right-4 w-2 h-2 bg-purple-400 rounded-full transition-all duration-300 ${
                hoveredIndex === index || expandedCard === index ? 'scale-150 opacity-100' : 'scale-100 opacity-50'
              }`}></div>

              {/* Expansion Indicator */}
              {expandedCard !== index && (
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <div className="w-2 h-2 bg-purple-300 rounded-full"></div>
                    <div className="w-2 h-2 bg-purple-200 rounded-full"></div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>

      <div className="text-center py-10 max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-purple-600 to-blue-900 rounded-3xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Quer ver todos os nossos serviços?
            </h3>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
             Temos serviços para seu negócio, e para o seu lar.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => window.open('/servicos', '_blank')}
                className="px-8 py-4 bg-white text-purple-600 font-semibold rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                Ver serviços
              </button>
              
            </div>
          </div>
        </div>
    </section>
  );
}
