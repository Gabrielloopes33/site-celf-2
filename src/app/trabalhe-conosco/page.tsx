"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Briefcase, GraduationCap, Heart, Users, ChevronDown, Clock, MapPin, DollarSign, Building2, Upload, X, CheckCircle, AlertCircle } from "lucide-react";
import Image from "next/image";
import { useState } from "react";



export default function TrabalheConoscoPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    cargo: '',
    mensagem: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // Verificar se é PDF e tamanho máximo de 5MB
      if (file.type === 'application/pdf' && file.size <= 5 * 1024 * 1024) {
        setSelectedFile(file);
      } else {
        alert('Por favor, selecione um arquivo PDF de até 5MB.');
      }
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedFile) {
      alert('Por favor, anexe seu currículo em PDF.');
      return;
    }

    setIsSubmitting(true);
    
    try {
      const formDataToSend = new FormData();
      formDataToSend.append('nome', formData.nome);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('telefone', formData.telefone);
      formDataToSend.append('cargo', formData.cargo);
      formDataToSend.append('mensagem', formData.mensagem);
      formDataToSend.append('curriculo', selectedFile);

      // Aqui você faria a chamada para sua API
      const response = await fetch('/api/enviar-curriculo', {
         method: 'POST',
         body: formDataToSend,
       });

      // Simulação de envio
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setSubmitStatus('success');
      
      // Reset form após sucesso
      setTimeout(() => {
        setFormData({
          nome: '',
          email: '',
          telefone: '',
          cargo: '',
          mensagem: ''
        });
        setSelectedFile(null);
        setIsModalOpen(false);
        setSubmitStatus('idle');
      }, 2000);
      
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

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
          src="/bg-careers.jpg"
          alt="Background"
          className="w-full object-cover"
          style={{ opacity: 0.15 }}
        />
      </div>
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Hero Section */}
        <section className="text-white py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center py-32 md:py-40">
              <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                Trabalhe Conosco
              </h1>
              <p className="text-lg sm:text-xl mb-8 text-gray-300">
                Junte-se à nossa equipe e faça parte da revolução na gestão de condomínios. Construa uma carreira com propósito e impacto real.
              </p>
              <div className="flex justify-center">
                <Button
                  variant="secondary"
                  size="lg"
                  className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 text-lg font-semibold shadow-lg"
                  onClick={() => document.getElementById('processo')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Conheça nosso processo
                </Button>
              </div>
              {/* Ícone para descer */}
              <div className="flex justify-center mt-8 animate-bounce">
                <ChevronDown className="w-10 h-10 md:w-12 md:h-12 text-white/80" />
              </div>
            </div>
          </div>
        </section>

        {/* Nossa Cultura */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-4">Nossa Cultura</h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Acreditamos que grandes resultados começam com uma cultura forte e valores compartilhados.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {/* Card 1 */}
              <div className="group relative">
                <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20 hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2 h-full">
                  {/* Ícone */}
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r from-blue-600 to-blue-800 text-white mb-6 shadow-lg">
                    <Heart className="w-6 h-6" />
                  </div>
                  
                  {/* Conteúdo */}
                  <h3 className="text-xl font-bold text-white mb-4 leading-tight">
                    Propósito
                  </h3>
                  <p className="text-gray-300 text-base leading-relaxed">
                    Trabalhamos para transformar a experiência na reforma e conservação de empreendimentos, tornando tudo mais eficiente e humano.
                  </p>
                </div>

                {/* Elemento de sombra/profundidade */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-800 opacity-20 blur-xl -z-10 group-hover:opacity-30 transition-opacity duration-300"></div>
              </div>

              {/* Card 2 */}
              <div className="group relative">
                <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20 hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2 h-full">
                  {/* Ícone */}
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r from-green-600 to-green-800 text-white mb-6 shadow-lg">
                    <Users className="w-6 h-6" />
                  </div>
                  
                  {/* Conteúdo */}
                  <h3 className="text-xl font-bold text-white mb-4 leading-tight">
                    Colaboração
                  </h3>
                  <p className="text-gray-300 text-base leading-relaxed">
                    Valorizamos o trabalho em equipe e acreditamos que as melhores soluções surgem da diversidade de ideias.
                  </p>
                </div>

                {/* Elemento de sombra/profundidade */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-600 to-green-800 opacity-20 blur-xl -z-10 group-hover:opacity-30 transition-opacity duration-300"></div>
              </div>

              {/* Card 3 */}
              <div className="group relative">
                <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20 hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2 h-full">
                  {/* Ícone */}
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r from-purple-600 to-purple-800 text-white mb-6 shadow-lg">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  
                  {/* Conteúdo */}
                  <h3 className="text-xl font-bold text-white mb-4 leading-tight">
                    Desenvolvimento
                  </h3>
                  <p className="text-gray-300 text-base leading-relaxed">
                    Investimos no crescimento contínuo dos nossos colaboradores com programas de capacitação e planos de carreira.
                  </p>
                </div>

                {/* Elemento de sombra/profundidade */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-600 to-purple-800 opacity-20 blur-xl -z-10 group-hover:opacity-30 transition-opacity duration-300"></div>
              </div>

              {/* Card 4 */}
              <div className="group relative">
                <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20 hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2 h-full">
                  {/* Ícone */}
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-800 text-white mb-6 shadow-lg">
                    <Briefcase className="w-6 h-6" />
                  </div>
                  
                  {/* Conteúdo */}
                  <h3 className="text-xl font-bold text-white mb-4 leading-tight">
                    Inovação
                  </h3>
                  <p className="text-gray-300 text-base leading-relaxed">
                    Buscamos constantemente novas soluções e tecnologias para revolucionar o setor de gestão condominial e Reformas no geral.
                  </p>
                </div>

                {/* Elemento de sombra/profundidade */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-600 to-indigo-800 opacity-20 blur-xl -z-10 group-hover:opacity-30 transition-opacity duration-300"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefícios */}
        <section className="py-16 md:py-24 bg-[#0a1122]/80">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-4">Benefícios</h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Oferecemos um pacote completo de benefícios para garantir o bem-estar e a satisfação de nosso time.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Benefício 1 */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                <div className="text-blue-400 mb-4">
                  <DollarSign className="w-8 h-8" />
                </div>
                <h3 className="text-white text-lg font-semibold mb-2">Remuneração Competitiva</h3>
                <p className="text-gray-300">Salários alinhados ao mercado e programa de participação nos resultados.</p>
              </div>

              {/* Benefício 2 */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                <div className="text-green-400 mb-4">
                  <Building2 className="w-8 h-8" />
                </div>
                <h3 className="text-white text-lg font-semibold mb-2">Assistência Médica</h3>
                <p className="text-gray-300">Cobertura médica para você e seus dependentes.</p>
              </div>

              {/* Benefício 3 */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                <div className="text-purple-400 mb-4">
                  <Clock className="w-8 h-8" />
                </div>
                <h3 className="text-white text-lg font-semibold mb-2">Horário Flexível</h3>
                <p className="text-gray-300">Equilibre sua vida pessoal e profissional com nossa política de flexibilidade.</p>
              </div>

              {/* Benefício 4 */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                <div className="text-red-400 mb-4">
                  <GraduationCap className="w-8 h-8" />
                </div>
                <h3 className="text-white text-lg font-semibold mb-2">Desenvolvimento Profissional</h3>
                <p className="text-gray-300">Investimos em cursos, treinamentos e certificações para sua evolução.</p>
              </div>

              {/* Benefício 5 */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                <div className="text-yellow-400 mb-4">
                  <MapPin className="w-8 h-8" />
                </div>
                <h3 className="text-white text-lg font-semibold mb-2">Modelo Eficiente</h3>
                <p className="text-gray-300">Trabalhe de forma inteligente e otimize seu tempo.</p>
              </div>

              {/* Benefício 6 */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                <div className="text-indigo-400 mb-4">
                  <Heart className="w-8 h-8" />
                </div>
                <h3 className="text-white text-lg font-semibold mb-2">Ambiente Inclusivo</h3>
                <p className="text-gray-300">Valorizamos a diversidade e promovemos um ambiente de trabalho acolhedor.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Processo Seletivo */}
        <section id="processo" className="py-16 md:py-24 bg-[#0a1122]/80">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-4">Processo Seletivo</h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Conheça as etapas do nosso processo de seleção, transparente e focado em encontrar os melhores talentos.
              </p>
            </div>

            <div className="relative max-w-4xl mx-auto">
              {/* Timeline line */}
              <div className="absolute left-5 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-blue-600/40"></div>

              {/* Timeline items */}
              <div className="space-y-12 relative">
                {/* Etapa 1 */}
                <div className="flex flex-col md:flex-row items-start md:items-center pl-12 md:pl-0">
                  <div className="md:w-1/2 md:pr-12 md:text-right mb-6 md:mb-0">
                    <h3 className="text-xl font-bold mb-2 text-white">Inscrição</h3>
                    <p className="text-gray-300">
                      Cadastre seu currículo e responda algumas perguntas sobre sua experiência e expectativas.
                    </p>
                  </div>
                  <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 z-10 flex items-center justify-center w-10 h-10 bg-blue-600 rounded-full">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <div className="md:w-1/2 md:pl-12 hidden md:block"></div>
                </div>

                {/* Etapa 2 */}
                <div className="flex flex-col md:flex-row items-start md:items-center pl-12 md:pl-0">
                  <div className="md:w-1/2 md:pr-12 hidden md:block"></div>
                  <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 z-10 flex items-center justify-center w-10 h-10 bg-blue-600 rounded-full">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <div className="md:w-1/2 md:pl-12 mb-6 md:mb-0">
                    <h3 className="text-xl font-bold mb-2 text-white">Triagem</h3>
                    <p className="text-gray-300">
                      Nossa equipe de RH analisa seu perfil e verifica o alinhamento com os requisitos da vaga.
                    </p>
                  </div>
                </div>

                {/* Etapa 3 */}
                <div className="flex flex-col md:flex-row items-start md:items-center pl-12 md:pl-0">
                  <div className="md:w-1/2 md:pr-12 md:text-right mb-6 md:mb-0">
                    <h3 className="text-xl font-bold mb-2 text-white">Entrevista com RH</h3>
                    <p className="text-gray-300">
                      Uma conversa inicial para conhecermos melhor sua trajetória profissional e objetivos de carreira.
                    </p>
                  </div>
                  <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 z-10 flex items-center justify-center w-10 h-10 bg-blue-600 rounded-full">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <div className="md:w-1/2 md:pl-12 hidden md:block"></div>
                </div>

                {/* Etapa 4 */}
                <div className="flex flex-col md:flex-row items-start md:items-center pl-12 md:pl-0">
                  <div className="md:w-1/2 md:pr-12 hidden md:block"></div>
                  <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 z-10 flex items-center justify-center w-10 h-10 bg-blue-600 rounded-full">
                    <span className="text-white font-bold">4</span>
                  </div>
                  <div className="md:w-1/2 md:pl-12 mb-6 md:mb-0">
                    <h3 className="text-xl font-bold mb-2 text-white">Desafio Técnico</h3>
                    <p className="text-gray-300">
                      Dependendo da vaga, você será convidado a realizar um teste prático relacionado à função.
                    </p>
                  </div>
                </div>

                {/* Etapa 5 */}
                <div className="flex flex-col md:flex-row items-start md:items-center pl-12 md:pl-0">
                  <div className="md:w-1/2 md:pr-12 md:text-right mb-6 md:mb-0">
                    <h3 className="text-xl font-bold mb-2 text-white">Entrevista Final</h3>
                    <p className="text-gray-300">
                      Conversa com gestores e líderes da área para avaliar alinhamento cultural e competências técnicas.
                    </p>
                  </div>
                  <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 z-10 flex items-center justify-center w-10 h-10 bg-blue-600 rounded-full">
                    <span className="text-white font-bold">5</span>
                  </div>
                  <div className="md:w-1/2 md:pl-12 hidden md:block"></div>
                </div>

                {/* Etapa 6 */}
                <div className="flex flex-col md:flex-row items-start md:items-center pl-12 md:pl-0">
                  <div className="md:w-1/2 md:pr-12 hidden md:block"></div>
                  <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 z-10 flex items-center justify-center w-10 h-10 bg-green-600 rounded-full">
                    <span className="text-white font-bold">6</span>
                  </div>
                  <div className="md:w-1/2 md:pl-12 mb-6 md:mb-0">
                    <h3 className="text-xl font-bold mb-2 text-white">Proposta e Integração</h3>
                    <p className="text-gray-300">
                      Se aprovado, você receberá uma proposta formal e será integrado ao nosso time de talentos.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-blue-900/40 to-indigo-900/40 rounded-2xl p-8 md:p-12 border border-blue-500/20 shadow-lg max-w-4xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Pronto para fazer parte do nosso time?</h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Junte-se a nós e ajude a transformar a experiência na reforma e conservação de imóveis no Brasil. Estamos sempre em busca de talentos apaixonados e inovadores.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                  onClick={() => setIsModalOpen(true)}
                >
                  Enviar currículo
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Modal de Upload de Currículo */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            {/* Header do Modal */}
            <div className="flex justify-between items-center p-6 border-b">
              <h3 className="text-2xl font-bold text-gray-900">Enviar Currículo</h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Conteúdo do Modal */}
            <form onSubmit={handleSubmit} className="p-6 space-y-6">
              {/* Status de envio */}
              {submitStatus === 'success' && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-green-800">Currículo enviado com sucesso! Entraremos em contato em breve.</span>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-center gap-3">
                  <AlertCircle className="w-5 h-5 text-red-600" />
                  <span className="text-red-800">Erro ao enviar currículo. Tente novamente.</span>
                </div>
              )}

              {/* Campos do formulário */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nome completo *
                  </label>
                  <input
                    type="text"
                    name="nome"
                    value={formData.nome}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Seu nome completo"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    E-mail *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Telefone *
                  </label>
                  <input
                    type="tel"
                    name="telefone"
                    value={formData.telefone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="(11) 99999-9999"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Área de interesse
                  </label>
                  <select
                    name="cargo"
                    value={formData.cargo}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Selecione uma área</option>
                    <option value="marketing">Obras</option>
                    <option value="comercial">Comercial</option>
                    <option value="administracao">Administração</option>
                    <option value="financeiro">Financeiro</option>
                    <option value="rh">Recursos Humanos</option>
                    <option value="operacoes">Operações</option>
                    <option value="marketing">Limpeza</option>
                    <option value="outros">Outros</option>
                  </select>
                </div>
              </div>

              {/* Upload de arquivo */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Currículo (PDF) *
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-400 transition-colors">
                  <input
                    type="file"
                    accept=".pdf"
                    onChange={handleFileChange}
                    className="hidden"
                    id="curriculo-upload"
                    required
                  />
                  <label htmlFor="curriculo-upload" className="cursor-pointer">
                    <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    {selectedFile ? (
                      <div>
                        <p className="text-green-600 font-medium">{selectedFile.name}</p>
                        <p className="text-sm text-gray-500">
                          {(selectedFile.size / (1024 * 1024)).toFixed(2)} MB
                        </p>
                      </div>
                    ) : (
                      <div>
                        <p className="text-gray-600 font-medium">Clique para selecionar seu currículo</p>
                        <p className="text-sm text-gray-500">PDF até 5MB</p>
                      </div>
                    )}
                  </label>
                </div>
              </div>

              {/* Mensagem adicional */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Mensagem (opcional)
                </label>
                <textarea
                  name="mensagem"
                  value={formData.mensagem}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Conte-nos um pouco sobre você e por que quer trabalhar conosco..."
                />
              </div>

              {/* Botões */}
              <div className="flex gap-4 pt-4">
                <Button
                  type="button"
                  variant="outline"
                  className="flex-1"
                  onClick={() => setIsModalOpen(false)}
                  disabled={isSubmitting}
                >
                  Cancelar
                </Button>
                <Button
                  type="submit"
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Enviando...' : 'Enviar Currículo'}
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
