import { Container } from "@/components/ui/container";
import { Typography } from "@/components/ui/typography";

export function ResponsibilitiesSection() {
  return (
    <section className="py-12 bg-gray-50">
      <Container>
        <div className="text-center">
          <Typography variant="lead" className="text-gray-700 leading-relaxed max-w-2xl mx-auto">
            Nossas responsabilidades e competências para garantir a gestão completa e eficiente do seu 
            empreendimento.
          </Typography>
        </div>
      </Container>
    </section>
  );
}
