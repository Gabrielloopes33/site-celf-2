import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Typography } from "@/components/ui/typography";
import { ArrowRight } from "lucide-react";

export function UpgradeSection() {
  return (
    <section className="py-24 bg-gray-50">
      <Container>
        <div className="text-center max-w-4xl mx-auto space-y-8">
          <Typography variant="h2" className="text-3xl lg:text-5xl font-bold text-gray-900">
            Migre para um sistema econômico que entrega ROI mensurável.
          </Typography>
          
          <Typography variant="large" className="text-xl text-gray-600 leading-relaxed">
            Reduza a carga administrativa, otimize fluxos de trabalho e aprimore a prestação de serviços, 
            tudo isso reduzindo custos.
          </Typography>

          <div className="pt-8">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 h-auto text-lg">
              <Link href="/contato">
                Agendar Demonstração
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
