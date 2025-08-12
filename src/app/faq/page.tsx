import * as Accordion from "@radix-ui/react-accordion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

export const metadata = {
  title: "Perguntas Frequentes | CELF",
  description: "Encontre respostas para as perguntas mais frequentes sobre nossos serviços",
};

export default function FAQPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary text-white py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Perguntas Frequentes
            </h1>
            <p className="text-lg sm:text-xl mb-8">
              Encontre respostas para as dúvidas mais comuns sobre nossos serviços e processos.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Accordion.Root type="single" collapsible className="space-y-4">
              <Accordion.Item value="item-1" className="bg-gray-50 rounded-lg overflow-hidden">
                <Accordion.Header>
                  <Accordion.Trigger className="flex justify-between items-center w-full p-6 text-left font-medium text-gray-900 hover:bg-gray-100">
                    Quais serviços a CELF oferece?
                    <ChevronDown className="h-5 w-5 transition-transform duration-200 ease-in-out data-[state=open]:rotate-180" />
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="p-6 pt-0 text-gray-600 data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp">
                  <div className="pt-4 border-t border-gray-200">
                    <p>
                      A CELF oferece uma ampla gama de serviços de conservação e manutenção, incluindo:
                    </p>
                    <ul className="list-disc list-inside mt-2 space-y-1">
                      <li>Conservação Condominial (limpeza, jardinagem, manutenção preventiva)</li>
                      <li>Conservação Comercial (limpeza de escritórios, gestão de resíduos)</li>
                      <li>Implantação Industrial (instalação e manutenção de equipamentos)</li>
                      <li>Obras (reformas, adequações de layout, revitalizações)</li>
                    </ul>
                    <p className="mt-2">
                      Para conhecer mais detalhes sobre cada serviço, visite nossa{" "}
                      <Link href="/servicos" className="text-primary hover:underline">
                        página de serviços
                      </Link>
                      .
                    </p>
                  </div>
                </Accordion.Content>
              </Accordion.Item>

              <Accordion.Item value="item-2" className="bg-gray-50 rounded-lg overflow-hidden">
                <Accordion.Header>
                  <Accordion.Trigger className="flex justify-between items-center w-full p-6 text-left font-medium text-gray-900 hover:bg-gray-100">
                    Como funciona o processo de contratação?
                    <ChevronDown className="h-5 w-5 transition-transform duration-200 ease-in-out data-[state=open]:rotate-180" />
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="p-6 pt-0 text-gray-600 data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp">
                  <div className="pt-4 border-t border-gray-200">
                    <p>
                      O processo de contratação da CELF segue estas etapas:
                    </p>
                    <ol className="list-decimal list-inside mt-2 space-y-1">
                      <li>Contato inicial através do formulário, telefone ou e-mail</li>
                      <li>Agendamento de visita técnica para avaliação das necessidades</li>
                      <li>Elaboração de proposta personalizada</li>
                      <li>Aprovação da proposta e assinatura do contrato</li>
                      <li>Início dos serviços conforme cronograma acordado</li>
                    </ol>
                    <p className="mt-2">
                      Todo o processo é transparente e adaptado às necessidades específicas de cada cliente.
                    </p>
                  </div>
                </Accordion.Content>
              </Accordion.Item>

              <Accordion.Item value="item-3" className="bg-gray-50 rounded-lg overflow-hidden">
                <Accordion.Header>
                  <Accordion.Trigger className="flex justify-between items-center w-full p-6 text-left font-medium text-gray-900 hover:bg-gray-100">
                    A CELF atende apenas em São Paulo?
                    <ChevronDown className="h-5 w-5 transition-transform duration-200 ease-in-out data-[state=open]:rotate-180" />
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="p-6 pt-0 text-gray-600 data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp">
                  <div className="pt-4 border-t border-gray-200">
                    <p>
                      Atualmente, a CELF atende primariamente na região metropolitana de São Paulo. 
                      Para projetos em outras localidades, avaliamos caso a caso a viabilidade de 
                      atendimento, considerando a natureza e o escopo do serviço.
                    </p>
                    <p className="mt-2">
                      Entre em contato conosco para verificar a disponibilidade para sua região específica.
                    </p>
                  </div>
                </Accordion.Content>
              </Accordion.Item>

              <Accordion.Item value="item-4" className="bg-gray-50 rounded-lg overflow-hidden">
                <Accordion.Header>
                  <Accordion.Trigger className="flex justify-between items-center w-full p-6 text-left font-medium text-gray-900 hover:bg-gray-100">
                    Quais são os diferenciais da CELF?
                    <ChevronDown className="h-5 w-5 transition-transform duration-200 ease-in-out data-[state=open]:rotate-180" />
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="p-6 pt-0 text-gray-600 data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp">
                  <div className="pt-4 border-t border-gray-200">
                    <p>
                      A CELF se destaca no mercado pelos seguintes diferenciais:
                    </p>
                    <ul className="list-disc list-inside mt-2 space-y-1">
                      <li>Equipe especializada e constantemente treinada</li>
                      <li>Atendimento personalizado e focado nas necessidades do cliente</li>
                      <li>Transparência financeira e prestação de contas detalhada</li>
                      <li>Utilização de tecnologias avançadas para otimização de processos</li>
                      <li>Comprometimento com prazos e resultados</li>
                      <li>Responsabilidade socioambiental em todas as operações</li>
                    </ul>
                  </div>
                </Accordion.Content>
              </Accordion.Item>

              <Accordion.Item value="item-5" className="bg-gray-50 rounded-lg overflow-hidden">
                <Accordion.Header>
                  <Accordion.Trigger className="flex justify-between items-center w-full p-6 text-left font-medium text-gray-900 hover:bg-gray-100">
                    Como funciona o acompanhamento dos serviços?
                    <ChevronDown className="h-5 w-5 transition-transform duration-200 ease-in-out data-[state=open]:rotate-180" />
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="p-6 pt-0 text-gray-600 data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp">
                  <div className="pt-4 border-t border-gray-200">
                    <p>
                      O acompanhamento dos serviços na CELF é realizado de forma sistemática e transparente:
                    </p>
                    <ul className="list-disc list-inside mt-2 space-y-1">
                      <li>Supervisão constante das atividades por profissionais qualificados</li>
                      <li>Relatórios periódicos de desempenho e atividades realizadas</li>
                      <li>Reuniões de alinhamento com o cliente</li>
                      <li>Portal do cliente para acompanhamento em tempo real (para clientes contratantes)</li>
                      <li>Canais de comunicação direta para solicitações e ajustes</li>
                    </ul>
                    <p className="mt-2">
                      Essa abordagem garante que o cliente esteja sempre informado sobre o andamento dos serviços 
                      e que possíveis ajustes sejam realizados de forma ágil.
                    </p>
                  </div>
                </Accordion.Content>
              </Accordion.Item>

              <Accordion.Item value="item-6" className="bg-gray-50 rounded-lg overflow-hidden">
                <Accordion.Header>
                  <Accordion.Trigger className="flex justify-between items-center w-full p-6 text-left font-medium text-gray-900 hover:bg-gray-100">
                    Vocês fornecem os equipamentos e materiais?
                    <ChevronDown className="h-5 w-5 transition-transform duration-200 ease-in-out data-[state=open]:rotate-180" />
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="p-6 pt-0 text-gray-600 data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp">
                  <div className="pt-4 border-t border-gray-200">
                    <p>
                      Sim, a CELF fornece todos os equipamentos, ferramentas e materiais necessários para a execução 
                      dos serviços contratados. Trabalhamos apenas com produtos de alta qualidade e que atendem às 
                      normas técnicas e de segurança.
                    </p>
                    <p className="mt-2">
                      No caso de projetos específicos que demandem materiais especiais, estes são detalhados na proposta 
                      comercial para aprovação prévia do cliente.
                    </p>
                  </div>
                </Accordion.Content>
              </Accordion.Item>

              <Accordion.Item value="item-7" className="bg-gray-50 rounded-lg overflow-hidden">
                <Accordion.Header>
                  <Accordion.Trigger className="flex justify-between items-center w-full p-6 text-left font-medium text-gray-900 hover:bg-gray-100">
                    Como solicitar uma proposta de serviços?
                    <ChevronDown className="h-5 w-5 transition-transform duration-200 ease-in-out data-[state=open]:rotate-180" />
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="p-6 pt-0 text-gray-600 data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp">
                  <div className="pt-4 border-t border-gray-200">
                    <p>
                      Solicitar uma proposta de serviços é simples e rápido:
                    </p>
                    <ul className="list-disc list-inside mt-2 space-y-1">
                      <li>Preencha o formulário na nossa página de contato</li>
                      <li>Entre em contato pelo telefone (11) 9999-9999</li>
                      <li>Envie um e-mail para comercial@celf.com.br</li>
                    </ul>
                    <p className="mt-2">
                      Em até 24 horas úteis, nossa equipe entrará em contato para agendar uma visita técnica 
                      e entender melhor suas necessidades.
                    </p>
                    <div className="mt-4">
                      <Button asChild variant="secondary">
                        <Link href="/contato">Solicitar Proposta</Link>
                      </Button>
                    </div>
                  </div>
                </Accordion.Content>
              </Accordion.Item>
            </Accordion.Root>

            <div className="mt-12 text-center">
              <h3 className="text-xl font-bold mb-4">Não encontrou o que procurava?</h3>
              <p className="text-gray-600 mb-6">
                Entre em contato conosco diretamente e teremos prazer em responder suas dúvidas.
              </p>
              <Button asChild>
                <Link href="/contato">Fale Conosco</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
