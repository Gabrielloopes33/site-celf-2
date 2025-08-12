"use client";

import * as Form from '@radix-ui/react-form';
import { Send, Mail, Phone, MapPin, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';

export function ContactSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Entre em Contato
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Estamos prontos para atender você. Escolha a forma de contato mais conveniente.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-primary mb-6">
                Informações de Contato
              </h3>
              <div className="space-y-6">
                {[
                  {
                    icon: Phone,
                    title: "Telefone",
                    content: "(11) 99999-9999",
                    link: "tel:+5511999999999",
                    color: "from-blue-500 to-blue-600"
                  },
                  {
                    icon: Mail,
                    title: "E-mail",
                    content: "contato@celf2.com.br",
                    link: "mailto:contato@celf2.com.br",
                    color: "from-green-500 to-green-600"
                  },
                  {
                    icon: MapPin,
                    title: "Endereço",
                    content: "São Paulo, SP - Brasil",
                    link: "#",
                    color: "from-orange-500 to-orange-600"
                  },
                  {
                    icon: Clock,
                    title: "Horário de Atendimento",
                    content: "24 horas por dia, 7 dias por semana",
                    link: "#",
                    color: "from-purple-500 to-purple-600"
                  }
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <Card key={index} variant="elevated" className="group">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-4">
                          <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${item.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                            {item.link !== "#" ? (
                              <a 
                                href={item.link}
                                className="text-gray-600 hover:text-primary transition-colors"
                              >
                                {item.content}
                              </a>
                            ) : (
                              <p className="text-gray-600">{item.content}</p>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* Quick Contact Buttons */}
            <Card variant="elevated">
              <CardHeader>
                <CardTitle>Contato Rápido</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <a 
                    href="https://wa.me/5511999999999"
                    className="flex items-center justify-center gap-3 bg-green-500 text-white font-semibold py-3 px-4 rounded-lg hover:bg-green-600 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                    </svg>
                    WhatsApp
                  </a>
                  <a 
                    href="tel:+5511999999999"
                    className="flex items-center justify-center gap-3 bg-primary text-white font-semibold py-3 px-4 rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    Ligar
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card variant="elevated" size="lg">
            <CardHeader>
              <CardTitle className="text-2xl">Envie uma Mensagem</CardTitle>
            </CardHeader>
            <CardContent>
              <Form.Root className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Form.Field name="name">
                    <Form.Label className="block text-sm font-semibold text-gray-700 mb-2">
                      Nome Completo
                    </Form.Label>
                    <Form.Control asChild>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                        placeholder="Seu nome completo"
                      />
                    </Form.Control>
                    <Form.Message className="text-sm text-red-500 mt-1" match="valueMissing">
                      Por favor, insira seu nome completo
                    </Form.Message>
                  </Form.Field>

                  <Form.Field name="email">
                    <Form.Label className="block text-sm font-semibold text-gray-700 mb-2">
                      E-mail
                    </Form.Label>
                    <Form.Control asChild>
                      <input
                        type="email"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                        placeholder="seu@email.com"
                      />
                    </Form.Control>
                    <Form.Message className="text-sm text-red-500 mt-1" match="valueMissing">
                      Por favor, insira um e-mail válido
                    </Form.Message>
                    <Form.Message className="text-sm text-red-500 mt-1" match="typeMismatch">
                      Por favor, insira um e-mail válido
                    </Form.Message>
                  </Form.Field>
                </div>

                <Form.Field name="phone">
                  <Form.Label className="block text-sm font-semibold text-gray-700 mb-2">
                    Telefone
                  </Form.Label>
                  <Form.Control asChild>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                      placeholder="(11) 99999-9999"
                    />
                  </Form.Control>
                </Form.Field>

                <Form.Field name="service">
                  <Form.Label className="block text-sm font-semibold text-gray-700 mb-2">
                    Serviço de Interesse
                  </Form.Label>
                  <Form.Control asChild>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors">
                      <option value="">Selecione um serviço</option>
                      <option value="conservacao-condominial">Conservação Condominial</option>
                      <option value="conservacao-comercial">Conservação Comercial</option>
                      <option value="implantacao-industrial">Implantação Industrial</option>
                      <option value="obras-reformas">Obras e Reformas</option>
                      <option value="outros">Outros Serviços</option>
                    </select>
                  </Form.Control>
                </Form.Field>

                <Form.Field name="message">
                  <Form.Label className="block text-sm font-semibold text-gray-700 mb-2">
                    Mensagem
                  </Form.Label>
                  <Form.Control asChild>
                    <textarea
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors resize-vertical"
                      placeholder="Descreva suas necessidades ou tire suas dúvidas..."
                    />
                  </Form.Control>
                  <Form.Message className="text-sm text-red-500 mt-1" match="valueMissing">
                    Por favor, descreva sua necessidade
                  </Form.Message>
                </Form.Field>

                <Form.Submit asChild>
                  <button className="w-full bg-primary text-white font-semibold py-4 px-6 rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center gap-3 group">
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    Enviar Mensagem
                  </button>
                </Form.Submit>
              </Form.Root>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
