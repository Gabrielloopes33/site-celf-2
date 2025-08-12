import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { BlurWords, BlurText } from "@/components/ui/blur-text";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden flex items-center justify-center pt-16 md:pt-20">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/video-background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/50"></div>
      </div>

      {/* Content */}
      <Container className="relative z-20 h-full flex items-center justify-center">
        <div className="w-full flex items-center justify-center min-h-[calc(100vh-4rem)] md:min-h-[calc(100vh-5rem)]">
          <div className="text-center space-y-11 md:space-y-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
            <div className="space-y-2 md:space-y-3">
              <BlurWords
                text="Soluções que entregam resultados para condomínios."
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-white mx-auto drop-shadow-2xl"
                duration={0.8}
                delay={0.2}
              />
              <BlurText
                text="Gestão moderna e eficiente para seu empreendimento"
                className="text-base sm:text-lg md:text-xl text-white/90 mx-auto leading-relaxed drop-shadow-lg max-w-3xl font-normal"
                duration={1}
                delay={1.5}
              />
            </div>
            <div className="pt-3 flex flex-col sm:flex-row gap-2 justify-center items-center">
              <Button 
                asChild 
                size="icon" 
                className="bg-blue-950 hover:bg-blue-700 text-white px-2 py-0.5 text-[10px] font-semibold rounded-full shadow-md hover:shadow-lg transition-all w-auto min-w-[60px] h-7"
              >
                <Link href="/contato" className="flex items-center !text-[10px] !leading-none">
                  <span className="inline-block !text-[15px] !font-semibold !leading-none">
                    Agendar Demonstração
                  </span>
                  <ArrowRight className="w-3 h-3 ml-1" />
                </Link>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="icon" 
                className="border border-white text-white hover:bg-white hover:text-gray-900 px-2 py-0.5 text-[10px] font-semibold rounded-full shadow-md transition-all w-auto min-w-[60px] h-7"
              >
                <Link href="/servicos" className="!text-[10px] !leading-none">
                  <span className="inline-block !text-[15px] !font-semibold !leading-none">
                    Nossos Serviços
                  </span>
                </Link>
              </Button>
            </div>
            {/* Stats */}
            {/* Adicione aqui os blocos de estatísticas, se necessário */}
          </div>
        </div>
      </Container>
    </section>
  );
}
