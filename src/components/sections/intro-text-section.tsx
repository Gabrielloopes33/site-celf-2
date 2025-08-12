import { Container } from "@/components/ui/container";
import { Typography } from "@/components/ui/typography";


const challenges = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Chamados dispersos",
    description: " Pedidos por múltiplos canais, sem rastreio nem prioridade — retrabalho e atrasos."
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "Falta de visão única",
    description: "Histórico por unidade, contratos e manutenções espalhados; decisões no “achismo”."
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Custos emergenciais altos",
    description: "Sem preventiva, o corretivo domina. A prestação de contas atrasa e o orçamento estoura."
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Comunicação ineficaz",
    description: " Avisos não chegam a todos, assembleias improdutivas e satisfação dos moradores em queda."
  }
];

export function IntroTextSection() {
  return (
    <section className="min-h-screen w-full bg-white relative text-gray-800 py-32">
      {/* Circuit Board - Light Pattern */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `
            repeating-linear-gradient(0deg, transparent, transparent 30px, rgba(75, 85, 99, 0.08) 19px, rgba(75, 85, 99, 0.08) 20px, transparent 20px, transparent 39px, rgba(75, 85, 99, 0.08) 39px, rgba(75, 85, 99, 0.08) 40px),
            repeating-linear-gradient(90deg, transparent, transparent 30px, rgba(75, 85, 99, 0.08) 19px, rgba(75, 85, 99, 0.08) 20px, transparent 20px, transparent 39px, rgba(75, 85, 99, 0.08) 39px, rgba(75, 85, 99, 0.08) 40px),
            radial-gradient(circle at 20px 20px, rgba(55, 65, 81, 0.12) 2px, transparent 2px),
            radial-gradient(circle at 40px 40px, rgba(55, 65, 81, 0.12) 2px, transparent 2px)
          `,
          backgroundSize: '60px 60px, 60px 60px, 60px 60px, 60px 60px',
        }}
      />
      <Container>
        <div className="relative z-10">
          <h2 className="text-center text-7xl md:text-5xl font-bold text-blue-950 mb-8">
            Gestão condominial com
            <span className="block bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              atendimento inteligente.
            </span>
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Resolva pelo WhatsApp, acompanhe pelo portal e receba prestação de contas com conciliação automática.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed">
              Essa fragmentação não só consome horas de trabalho, mas também cria ruídos que afastam potenciais clientes no momento decisivo. A chave para reconquistar esse tempo e atenção está em uma narrativa clara, focada em benefícios tangíveis.
            </p>
          </div>
        </div>

        <div className="mb-20 py-32">
          <h3 className="text-3xl font-bold text-blue-900 text-center mb-12">
            Desafios que Você Enfrenta
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {challenges.map((challenge, index) => (
              <div
                key={index}
                className="bg-red-900/20 border border-red-500/30 rounded-xl p-6 backdrop-blur-sm hover:bg-red-900/30 transition-all duration-300"
              >
                <div className="text-red-400 mb-4">
                  {challenge.icon}
                </div>
                <h4 className="text-blue-950 font-semibold mb-3">
                  {challenge.title}
                </h4>
                <p className="text-gray-600 text-sm">
                  {challenge.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
  </section>
  );
}
