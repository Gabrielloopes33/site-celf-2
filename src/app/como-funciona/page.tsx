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

      </div>
    </div>
  );
}
