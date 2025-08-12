import * as Form from "@radix-ui/react-form";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone } from "lucide-react";

export const metadata = {
  title: "Contato | CELF",
  description: "Entre em contato conosco para solicitar uma proposta ou obter mais informações",
};

export default function ContatoPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary text-white py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Solicite Uma Proposta
            </h1>
            <p className="text-lg sm:text-xl mb-8">
              Entre em contato conosco para obter uma avaliação personalizada e uma proposta que atenda às suas necessidades.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">Entre em Contato</h2>
              <p className="text-gray-600 mb-8">
                Preencha o formulário abaixo e nossa equipe entrará em contato com você em até 24 horas úteis.
                Estamos prontos para ajudar com soluções personalizadas para o seu espaço.
              </p>

              <Form.Root className="space-y-4">
                <Form.Field name="name" className="mb-4">
                  <div className="flex items-baseline justify-between mb-2">
                    <Form.Label className="font-medium">Nome Completo</Form.Label>
                    <Form.Message className="text-sm text-red-500" match="valueMissing">
                      Por favor, informe seu nome
                    </Form.Message>
                  </div>
                  <Form.Control asChild>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Seu nome completo"
                    />
                  </Form.Control>
                </Form.Field>

                <Form.Field name="email" className="mb-4">
                  <div className="flex items-baseline justify-between mb-2">
                    <Form.Label className="font-medium">E-mail</Form.Label>
                    <Form.Message className="text-sm text-red-500" match="valueMissing">
                      Por favor, informe seu e-mail
                    </Form.Message>
                    <Form.Message className="text-sm text-red-500" match="typeMismatch">
                      Por favor, informe um e-mail válido
                    </Form.Message>
                  </div>
                  <Form.Control asChild>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="seu.email@exemplo.com"
                    />
                  </Form.Control>
                </Form.Field>

                <Form.Field name="phone" className="mb-4">
                  <div className="flex items-baseline justify-between mb-2">
                    <Form.Label className="font-medium">Telefone</Form.Label>
                    <Form.Message className="text-sm text-red-500" match="valueMissing">
                      Por favor, informe seu telefone
                    </Form.Message>
                  </div>
                  <Form.Control asChild>
                    <input
                      type="tel"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="(00) 00000-0000"
                    />
                  </Form.Control>
                </Form.Field>

                <Form.Field name="company" className="mb-4">
                  <div className="flex items-baseline justify-between mb-2">
                    <Form.Label className="font-medium">Empresa/Condomínio</Form.Label>
                  </div>
                  <Form.Control asChild>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Nome da sua empresa ou condomínio"
                    />
                  </Form.Control>
                </Form.Field>

                <Form.Field name="service" className="mb-4">
                  <div className="flex items-baseline justify-between mb-2">
                    <Form.Label className="font-medium">Serviço de Interesse</Form.Label>
                  </div>
                  <Form.Control asChild>
                    <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent">
                      <option value="" disabled selected>Selecione uma opção</option>
                      <option value="conservacao-condominial">Conservação Condominial</option>
                      <option value="conservacao-comercial">Conservação Comercial</option>
                      <option value="implantacao-industrial">Implantação Industrial</option>
                      <option value="obras">Obras</option>
                      <option value="outros">Outros</option>
                    </select>
                  </Form.Control>
                </Form.Field>

                <Form.Field name="message" className="mb-4">
                  <div className="flex items-baseline justify-between mb-2">
                    <Form.Label className="font-medium">Mensagem</Form.Label>
                    <Form.Message className="text-sm text-red-500" match="valueMissing">
                      Por favor, informe sua mensagem
                    </Form.Message>
                  </div>
                  <Form.Control asChild>
                    <textarea
                      required
                      rows={5}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Descreva sua necessidade ou dúvida..."
                    />
                  </Form.Control>
                </Form.Field>

                <Form.Submit asChild>
                  <Button type="submit" className="w-full">
                    Enviar Mensagem
                  </Button>
                </Form.Submit>
              </Form.Root>
            </div>

            <div>
              <div className="bg-gray-50 p-8 rounded-lg mb-8">
                <h3 className="text-xl font-bold text-primary mb-6">Informações de Contato</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-2 rounded-full mr-4">
                      <MapPin className="text-primary h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Endereço</h4>
                      <p className="text-gray-600">Av. Principal, 1234</p>
                      <p className="text-gray-600">São Paulo - SP, 00000-000</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-primary/10 p-2 rounded-full mr-4">
                      <Phone className="text-primary h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Telefone</h4>
                      <p className="text-gray-600">(11) 9999-9999</p>
                      <p className="text-gray-600">(11) 8888-8888</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-primary/10 p-2 rounded-full mr-4">
                      <Mail className="text-primary h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">E-mail</h4>
                      <p className="text-gray-600">contato@celf.com.br</p>
                      <p className="text-gray-600">comercial@celf.com.br</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl font-bold text-primary mb-4">Horário de Atendimento</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">Segunda - Sexta</span>
                    <span className="text-gray-600">08:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Sábado</span>
                    <span className="text-gray-600">08:00 - 12:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Domingo e Feriados</span>
                    <span className="text-gray-600">Fechado</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
