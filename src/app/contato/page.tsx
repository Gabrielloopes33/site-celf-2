import * as Form from "@radix-ui/react-form";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone, Clock } from "lucide-react";

export const metadata = {
  title: "Contato | CELF",
  description: "Entre em contato conosco para solicitar uma proposta ou obter mais informações",
};

export default function ContatoPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-white via-gray-50 to-purple-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white py-20 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-extrabold mb-4 drop-shadow-lg">
              Solicite Uma Proposta
            </h1>
            <p className="text-2xl mb-2 font-medium opacity-90">
              Entre em contato conosco para obter uma avaliação personalizada e uma proposta que atenda às suas necessidades.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            {/* Formulário */}
            <div>
              <h2 className="text-3xl font-bold text-blue-900 mb-4">Entre em Contato</h2>
              <p className="text-gray-800 mb-8 text-lg">
                Preencha o formulário abaixo e nossa equipe entrará em contato com você em até <span className="font-semibold text-purple-700">24 horas úteis</span>.
              </p>

              <Form.Root className="space-y-7">
                <Form.Field name="name">
                  <div className="flex items-baseline justify-between mb-2">
                    <Form.Label className="font-semibold text-gray-900">Nome Completo</Form.Label>
                    <Form.Message className="text-sm text-red-500" match="valueMissing">
                      Por favor, informe seu nome
                    </Form.Message>
                  </div>
                  <Form.Control asChild>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent bg-white text-gray-900"
                      placeholder="Seu nome completo"
                    />
                  </Form.Control>
                </Form.Field>

                <Form.Field name="email">
                  <div className="flex items-baseline justify-between mb-2">
                    <Form.Label className="font-semibold text-gray-900">E-mail</Form.Label>
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent bg-white text-gray-900"
                      placeholder="seu.email@exemplo.com"
                    />
                  </Form.Control>
                </Form.Field>

                <Form.Field name="phone">
                  <div className="flex items-baseline justify-between mb-2">
                    <Form.Label className="font-semibold text-gray-900">Telefone</Form.Label>
                    <Form.Message className="text-sm text-red-500" match="valueMissing">
                      Por favor, informe seu telefone
                    </Form.Message>
                  </div>
                  <Form.Control asChild>
                    <input
                      type="tel"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent bg-white text-gray-900"
                      placeholder="(00) 00000-0000"
                    />
                  </Form.Control>
                </Form.Field>

                <Form.Field name="company">
                  <div className="flex items-baseline justify-between mb-2">
                    <Form.Label className="font-semibold text-gray-900">Empresa/Condomínio</Form.Label>
                  </div>
                  <Form.Control asChild>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent bg-white text-gray-900"
                      placeholder="Nome da sua empresa ou condomínio"
                    />
                  </Form.Control>
                </Form.Field>

                <Form.Field name="service">
                  <div className="flex items-baseline justify-between mb-2">
                    <Form.Label className="font-semibold text-gray-900">Serviço de Interesse</Form.Label>
                  </div>
                  <Form.Control asChild>
                    <select
                      defaultValue=""
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent bg-white text-gray-900"
                    >
                      <option value="" disabled>Selecione uma opção</option>
                      <option value="conservacao-condominial">Conservação Condominial</option>
                      <option value="conservacao-comercial">Conservação Comercial</option>
                      <option value="implantacao-industrial">Implantação Industrial</option>
                      <option value="obras">Obras</option>
                      <option value="outros">Outros</option>
                    </select>
                  </Form.Control>
                </Form.Field>

                <Form.Field name="message">
                  <div className="flex items-baseline justify-between mb-2">
                    <Form.Label className="font-semibold text-gray-900">Mensagem</Form.Label>
                    <Form.Message className="text-sm text-red-500" match="valueMissing">
                      Por favor, informe sua mensagem
                    </Form.Message>
                  </div>
                  <Form.Control asChild>
                    <textarea
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent bg-white text-gray-900"
                      placeholder="Descreva sua necessidade ou dúvida..."
                    />
                  </Form.Control>
                </Form.Field>

                <Form.Submit asChild>
                  <Button type="submit" className="w-full text-lg py-4 bg-gradient-to-r from-purple-700 to-blue-700 hover:from-purple-800 hover:to-blue-800 transition-colors">
                    Enviar Mensagem
                  </Button>
                </Form.Submit>
              </Form.Root>
            </div>

            {/* Informações de Contato */}
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-2xl shadow-2xl border border-gray-100">
                <h3 className="text-2xl font-bold text-blue-900 mb-6">Informações de Contato</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-purple-100 p-3 rounded-full mr-4">
                      <MapPin className="text-purple-700 h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1 text-gray-900">Endereço</h4>
                      <p className="text-gray-800">Rua Marilia de Dirceu, 212 - Bom Retiro</p>
                      <p className="text-gray-800"> Ipatinga - MG, CEP35.160-233</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-purple-100 p-3 rounded-full mr-4">
                      <Phone className="text-purple-700 h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1 text-gray-900">Telefone</h4>
                      <a href="tel:+5511999999999" className="block text-gray-800 hover:text-purple-700 transition-colors font-medium">(11) 99999-9999</a>
                      <a href="tel:+551188888888" className="block text-gray-800 hover:text-purple-700 transition-colors font-medium">(11) 88888-8888</a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-purple-100 p-3 rounded-full mr-4">
                      <Mail className="text-purple-700 h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1 text-gray-900">E-mail</h4>
                      <a href="mailto:contato@celf.com.br" className="block text-gray-800 hover:text-purple-700 transition-colors font-medium">contato@celf.com.br</a>
                      <a href="mailto:comercial@celf.com.br" className="block text-gray-800 hover:text-purple-700 transition-colors font-medium">comercial@celf.com.br</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-2xl border border-gray-100">
                <h3 className="text-2xl font-bold text-blue-900 mb-4">Horário de Atendimento</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-900">Segunda - Sexta</span>
                    <span className="text-gray-800">08:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-900">Sábado</span>
                    <span className="text-purple-700 font-bold">Plantão</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-900">Domingo e Feriados</span>
                    <span className="text-gray-800">Fechado</span>
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
