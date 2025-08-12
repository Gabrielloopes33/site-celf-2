
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Typography } from "@/components/ui/typography";
import { ArrowRight } from "lucide-react";


const results = [
  {
    value: '30%',
    label: ' Custos emergenciais',
    desc: 'Mais preventiva, menos “corre-corre” e quebra inesperada.',
  },
  {
    value: '2×',
    label: ' Atendimento mais rápido',
    desc: ' Triagem automática e despacho reduzem o Tempo de Atendimento.',
  },
  {
    value: '99%',
    label: ' Prestação de contas em dia',
    desc: ' Conciliação com o banco e relatórios prontos para assembleia.',
  },
  {
    value: '7 dias',
    label: ' Go-live da operação',
    desc: ' Implantação guiada e equipe treinada em até uma semana.',
  },
];

export function UpgradeSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-white via-fuchsia-50 to-purple-50">
      <Container>
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
            Resultados que <span className="text-blue-900">Falam pelo seu Condomínio</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600">
            Não é mais papel e planilhas. É gestão conectada que reduz custos, acelera atendimentos e entrega transparência em cada etapa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {results.map((item, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-white shadow-md p-8 flex flex-col items-center text-center border border-fuchsia-100 hover:shadow-lg transition-all"
            >
              <span className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-2">{item.value}</span>
              <span className="block text-lg font-bold text-gray-900 mb-1">{item.label}</span>
              <span className="text-gray-600 text-base">{item.desc}</span>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg" className="bg-blue-900  hover:bg-blue-700 text-white px-8 py-4 h-auto text-lg font-bold">
            <Link href="/contato">
              Agendar Demonstração
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}
