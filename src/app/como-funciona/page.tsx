import Link from "next/link";
import { Button } from "@/components/ui/button";
import * as Tabs from "@radix-ui/react-tabs";
import { ClipboardCheck, Cog, FileSearch, HeartHandshake, MessageSquare, Users, ChevronDown } from "lucide-react";


export const metadata = {
  title: "Como Funciona | CELF",
  description: "Conheça nosso processo de trabalho e como podemos ajudar a transformar seu espaço",
};



export default function ComoFuncionaPage() {
  return (
    <div className="min-h-screen w-full bg-[#0f172a] relative flex flex-col">
      {/* Blue Radial Glow Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `radial-gradient(circle 800px at 50% 50%, rgba(59,130,246,0.15), transparent)`,
        }}
      />
      {/* Background image com opacidade */}
      <div className="absolute inset-0 z-0">
        <img
          src="/bg-como-funciona.jpg"
          alt="Background"
          className="w-full  object-cover"
          style={{ opacity: 0.2 }}
        />
      </div>
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Hero Section */}
        <section className="text-white py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center py-60">
              <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                Como Funciona
              </h1>
              <p className="text-lg sm:text-xl mb-8 text-gray-300">
                Nosso processo é transparente e eficiente, garantindo a melhor experiência e resultados para nossos clientes.
              </p>
              <div className="flex justify-center">
                <Button
                  asChild
                  variant="secondary"
                  size="lg"
                  className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 text-lg font-semibold shadow-lg"
                >
                  <Link href="/sobre">
                    Quero saber mais sobre a CELF
                  </Link>
                </Button>
              </div>
              {/* Ícone para descer */}
              <div className="flex justify-center mt-8 animate-bounce py-40">
                <ChevronDown className="w-10 h-10 md:w-12 md:h-12 text-white/80" />
              </div>
            </div>
          </div>
        </section>



        {/* Process Section */}
        <section className="py-30 md:py-5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 ">
              <h2 className="text-3xl font-bold text-white mb-4">Nosso Fluxo Operacional</h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Trabalhamos de forma estruturada e transparente para garantir a qualidade em cada etapa do processo.
              </p>
            </div>

            <div className="relative">
              {/* Timeline line - Modificado para aparecer em mobile */}
              <div className="absolute left-5 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-blue-900/40"></div>

              {/* Timeline items */}
              <div className="space-y-12 relative">
                {/* Ajuste nos items para alinhar corretamente em mobile */}
                {/* Item 1 */}
                <div className="flex flex-col md:flex-row items-start md:items-center pl-12 md:pl-0">
                  <div className="md:w-1/2 md:pr-12 md:text-right mb-6 md:mb-0">
                    <div className="bg-blue-500/20 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4 md:ml-auto">
                      <MessageSquare size={24} className="text-blue-400" />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-white">Contato Inicial</h3>
                    <p className="text-gray-300">
                      Você entra em contato conosco através do formulário, telefone ou e-mail. Nossa equipe agenda uma visita técnica para avaliar suas necessidades.
                    </p>
                  </div>
                  <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 z-10 flex items-center justify-center w-10 h-10 bg-primary rounded-full">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <div className="md:w-1/2 md:pl-12 hidden md:block"></div>
                </div>

                {/* Item 2 */}
                <div className="flex flex-col md:flex-row items-start md:items-center pl-12 md:pl-0">
                  <div className="md:w-1/2 md:pr-12 hidden md:block"></div>
                  <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 z-10 flex items-center justify-center w-10 h-10 bg-primary rounded-full">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <div className="md:w-1/2 md:pl-12 mb-6 md:mb-0">
                    <div className="bg-blue-500/20 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                      <FileSearch size={24} className="text-blue-400" />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-white">Diagnóstico e Análise</h3>
                    <p className="text-gray-300">
                      Nossa equipe técnica realiza uma avaliação detalhada do espaço, identificando necessidades específicas e oportunidades de melhoria.
                    </p>
                  </div>
                </div>

                {/* Item 3 */}
                <div className="flex flex-col md:flex-row items-start md:items-center pl-12 md:pl-0">
                  <div className="md:w-1/2 md:pr-12 md:text-right mb-6 md:mb-0">
                    <div className="bg-blue-500/20 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4 md:ml-auto">
                      <ClipboardCheck size={24} className="text-blue-400" />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-white">Proposta Personalizada</h3>
                    <p className="text-gray-300">
                      Desenvolvemos uma proposta técnica e comercial detalhada, com escopo do serviço, cronograma e investimento, adaptada à sua realidade.
                    </p>
                  </div>
                  <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 z-10 flex items-center justify-center w-10 h-10 bg-primary rounded-full">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <div className="md:w-1/2 md:pl-12 hidden md:block"></div>
                </div>

                {/* Item 4 */}
                <div className="flex flex-col md:flex-row items-start md:items-center pl-12 md:pl-0">
                  <div className="md:w-1/2 md:pr-12 hidden md:block"></div>
                  <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 z-10 flex items-center justify-center w-10 h-10 bg-primary rounded-full">
                    <span className="text-white font-bold">4</span>
                  </div>
                  <div className="md:w-1/2 md:pl-12 mb-6 md:mb-0">
                    <div className="bg-blue-500/20 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                      <HeartHandshake size={24} className="text-blue-400" />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-white">Contratação</h3>
                    <p className="text-gray-300">
                      Após a aprovação da proposta, firmamos o contrato com todas as condições acordadas e planejamos o início das atividades.
                    </p>
                  </div>
                </div>

                {/* Item 5 */}
                <div className="flex flex-col md:flex-row items-start md:items-center pl-12 md:pl-0">
                  <div className="md:w-1/2 md:pr-12 md:text-right mb-6 md:mb-0">
                    <div className="bg-blue-500/20 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4 md:ml-auto">
                      <Cog size={24} className="text-blue-400" />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-white">Execução</h3>
                    <p className="text-gray-300">
                      Nossa equipe especializada executa as atividades conforme planejado, seguindo padrões de qualidade e cumprindo prazos.
                    </p>
                  </div>
                  <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 z-10 flex items-center justify-center w-10 h-10 bg-primary rounded-full">
                    <span className="text-white font-bold">5</span>
                  </div>
                  <div className="md:w-1/2 md:pl-12 hidden md:block"></div>
                </div>

                {/* Item 6 */}
                <div className="flex flex-col md:flex-row items-start md:items-center pl-12 md:pl-0">
                  <div className="md:w-1/2 md:pr-12 hidden md:block"></div>
                  <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 z-10 flex items-center justify-center w-10 h-10 bg-secondary rounded-full">
                    <span className="text-white font-bold">6</span>
                  </div>
                  <div className="md:w-1/2 md:pl-12 mb-6 md:mb-0">
                    <div className="bg-blue-900/20 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                      <Users size={24} className="text-blue-900" />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-white">Acompanhamento Contínuo</h3>
                    <p className="text-gray-300">
                      Realizamos acompanhamento constante dos serviços, com relatórios periódicos e canais diretos para atendimento às necessidades.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Roles Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-4">Papéis e Responsabilidades</h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Contamos com uma equipe especializada para garantir a execução perfeita de cada projeto.
              </p>
            </div>

            <Tabs.Root defaultValue="tab1" className="w-full">
              <Tabs.List className="flex flex-wrap gap-2 border-b border-blue-900/40 mb-8">
                <Tabs.Trigger 
                  value="tab1" 
                  className="px-4 py-2 font-medium text-gray-300 hover:text-primary transition-colors
                  data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:text-primary
                  whitespace-nowrap text-sm md:text-base"
                >
                  Gerente de Operações
                </Tabs.Trigger>
                <Tabs.Trigger 
                  value="tab2" 
                  className="px-4 py-2 font-medium text-gray-300 hover:text-primary transition-colors
                  data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:text-primary
                  whitespace-nowrap text-sm md:text-base"
                >
                  Supervisor Técnico
                </Tabs.Trigger>
                <Tabs.Trigger 
                  value="tab3" 
                  className="px-4 py-2 font-medium text-gray-300 hover:text-primary transition-colors
                  data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:text-primary
                  whitespace-nowrap text-sm md:text-base"
                >
                  Equipe Técnica
                </Tabs.Trigger>
                <Tabs.Trigger 
                  value="tab4" 
                  className="px-4 py-2 font-medium text-gray-300 hover:text-primary transition-colors
                  data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:text-primary
                  whitespace-nowrap text-sm md:text-base"
                >
                  Suporte ao Cliente
                </Tabs.Trigger>
              </Tabs.List>

              <Tabs.Content value="tab1" className="p-6 bg-blue-900/20 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-white">Gerente de Operações</h3>
                <p className="text-gray-300 mb-4">
                  Responsável pela coordenação geral dos projetos, garantindo o cumprimento dos prazos,
                  qualidade dos serviços e satisfação do cliente.
                </p>
                <ul className="space-y-3 mb-4">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-secondary rounded-full mr-2 mt-2"></span>
                    <span>Planejamento estratégico dos projetos</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-secondary rounded-full mr-2 mt-2"></span>
                    <span>Gestão de recursos e equipes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-secondary rounded-full mr-2 mt-2"></span>
                    <span>Acompanhamento de indicadores de desempenho</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-secondary rounded-full mr-2 mt-2"></span>
                    <span>Relacionamento direto com clientes estratégicos</span>
                  </li>
                </ul>
              </Tabs.Content>

              <Tabs.Content value="tab2" className="p-6 bg-blue-900/20 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-white">Supervisor Técnico</h3>
                <p className="text-gray-300 mb-4">
                  Atua na supervisão direta das atividades em campo, garantindo a correta execução conforme
                  padrões técnicos e de segurança.
                </p>
                <ul className="space-y-3 mb-4">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-secondary rounded-full mr-2 mt-2"></span>
                    <span>Acompanhamento diário das equipes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-secondary rounded-full mr-2 mt-2"></span>
                    <span>Verificação da qualidade dos serviços</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-secondary rounded-full mr-2 mt-2"></span>
                    <span>Treinamento e capacitação das equipes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-secondary rounded-full mr-2 mt-2"></span>
                    <span>Elaboração de relatórios técnicos</span>
                  </li>
                </ul>
              </Tabs.Content>

              <Tabs.Content value="tab3" className="p-6 bg-blue-900/20 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-white">Equipe Técnica</h3>
                <p className="text-gray-300 mb-4">
                  Profissionais especializados que executam as atividades em campo, seguindo os procedimentos
                  e especificações técnicas estabelecidos.
                </p>
                <ul className="space-y-3 mb-4">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-secondary rounded-full mr-2 mt-2"></span>
                    <span>Execução das atividades conforme planejamento</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-secondary rounded-full mr-2 mt-2"></span>
                    <span>Utilização de equipamentos e materiais adequados</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-secondary rounded-full mr-2 mt-2"></span>
                    <span>Cumprimento das normas de segurança</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-secondary rounded-full mr-2 mt-2"></span>
                    <span>Registro de informações relevantes durante a execução</span>
                  </li>
                </ul>
              </Tabs.Content>

              <Tabs.Content value="tab4" className="p-6 bg-blue-900/20 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-white">Suporte ao Cliente</h3>
                <p className="text-gray-300 mb-4">
                  Equipe dedicada ao atendimento e suporte contínuo aos clientes, garantindo a resolução
                  rápida de dúvidas e solicitações.
                </p>
                <ul className="space-y-3 mb-4">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-secondary rounded-full mr-2 mt-2"></span>
                    <span>Atendimento a demandas e solicitações</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-secondary rounded-full mr-2 mt-2"></span>
                    <span>Gestão de ocorrências e não-conformidades</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-secondary rounded-full mr-2 mt-2"></span>
                    <span>Agendamento de visitas técnicas</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-secondary rounded-full mr-2 mt-2"></span>
                    <span>Pesquisas de satisfação e feedback</span>
                  </li>
                </ul>
              </Tabs.Content>
            </Tabs.Root>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Pronto para começar?</h2>
            <p className="text-lg max-w-2xl mx-auto mb-8">
              Entre em contato conosco para uma avaliação detalhada e uma proposta que atenda às suas necessidades.
            </p>
            <Button asChild variant="secondary" size="lg" className="bg-blue-500 hover:bg-blue-600 text-white">
              <Link href="/contato">Solicitar Proposta</Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
