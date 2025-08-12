"use client";

import { 
  FileText, 
  Calculator, 
  Users, 
  Wrench, 
  Shield, 
  Building, 
  ClipboardList,
  TrendingUp,
  Phone,
  Award
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { Typography } from "@/components/ui/typography";
import { Badge } from "@/components/ui/badge";
import { Grid } from "@/components/ui/grid";

const services = [
  {
    icon: FileText,
    title: "Gestão Administrativa",
    description: "Controle completo de documentos, atas, contratos e correspondências."
  },
  {
    icon: Calculator,
    title: "Gestão Financeira",
    description: "Administração de receitas, despesas, inadimplência e prestação de contas."
  },
  {
    icon: Users,
    title: "Recursos Humanos",
    description: "Contratação, folha de pagamento e gestão completa de funcionários."
  },
  {
    icon: Wrench,
    title: "Manutenção Predial",
    description: "Manutenção preventiva e corretiva de todas as instalações."
  },
  {
    icon: Shield,
    title: "Segurança e Portaria",
    description: "Gestão de sistemas de segurança e controle de acesso."
  },
  {
    icon: Building,
    title: "Conservação e Limpeza",
    description: "Limpeza profissional e conservação das áreas comuns."
  },
  {
    icon: ClipboardList,
    title: "Compliance Legal",
    description: "Conformidade com normas, leis trabalhistas e tributárias."
  },
  {
    icon: TrendingUp,
    title: "Relatórios Gerenciais",
    description: "Relatórios detalhados sobre desempenho e indicadores."
  },
  {
    icon: Phone,
    title: "Atendimento ao Cliente",
    description: "Suporte dedicado para síndicos e moradores."
  },
  {
    icon: Award,
    title: "Qualidade e Certificação",
    description: "Processos certificados e garantia de qualidade."
  }
];

interface ServiceCardProps {
  service: typeof services[0];
  index: number;
}

function ServiceCard({ service, index }: ServiceCardProps) {
  const Icon = service.icon;
  
  return (
    <div className="flex flex-col items-center text-center space-y-4 p-6 rounded-lg transition-all hover:bg-gray-50 group">
      <div className="relative">
        <div className="w-20 h-20 bg-blue-50 rounded-2xl flex items-center justify-center transition-all group-hover:bg-blue-100 group-hover:scale-105">
          <Icon className="w-10 h-10 text-blue-600" />
        </div>
        <Badge className="absolute -top-2 -right-2 bg-blue-600 text-white">
          {(index + 1).toString().padStart(2, '0')}
        </Badge>
      </div>
      
      <div className="space-y-2">
        <Typography variant="h4" className="text-lg font-semibold text-blue-700 leading-tight">
          {service.title}
        </Typography>
        <Typography variant="muted" className="text-sm text-gray-600 leading-relaxed">
          {service.description}
        </Typography>
      </div>
    </div>
  );
}

export function ServicesGrid() {
  return (
    <section className="py-16 bg-white">
      <Container>
        {/* Primeira linha de 5 itens */}
        <Grid cols={5} gap="xl" className="mb-16">
          {services.slice(0, 5).map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </Grid>
        
        {/* Segunda linha de 5 itens */}
        <Grid cols={5} gap="xl" className="mb-20">
          {services.slice(5, 10).map((service, index) => (
            <ServiceCard key={index + 5} service={service} index={index + 5} />
          ))}
        </Grid>

        {/* Texto central com destaque */}
        <div className="text-center mb-20">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-50 to-orange-50 rounded-2xl p-8">
            <Typography variant="lead" className="text-gray-700 leading-relaxed">
              Nossa equipe especializada garante que todas essas atribuições sejam executadas com excelência, 
              proporcionando tranquilidade e resultados superiores.
            </Typography>
          </div>
        </div>

        {/* Terceira linha repetindo os primeiros 5 itens */}
        <Grid cols={5} gap="xl" className="mb-16">
          {services.slice(0, 5).map((service, index) => (
            <ServiceCard key={`repeat1-${index}`} service={service} index={index} />
          ))}
        </Grid>
        
        {/* Quarta linha repetindo os últimos 5 itens */}
        <Grid cols={5} gap="xl">
          {services.slice(5, 10).map((service, index) => (
            <ServiceCard key={`repeat2-${index + 5}`} service={service} index={index + 5} />
          ))}
        </Grid>
      </Container>
    </section>
  );
}
