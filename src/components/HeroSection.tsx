
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="bg-hero-pattern text-white">
      <div className="container mx-auto px-4 pt-28 pb-20 md:py-32">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Automação com IA para seu Negócio Digital
            </h1>
            <p className="text-lg md:text-xl mb-8 opacity-90 max-w-2xl text-gray-400">
              Aprenda a criar agentes de IA totalmente automatizados e integrados ao WhatsApp para transformar seu atendimento e escalar seu negócio.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start">
              <a href="#minicourse">
                <Button className="sophisticated-button font-semibold text-lg px-8 py-6 w-full sm:w-auto">
                  Acessar Mini Curso Grátis
                </Button>
              </a>
              <a href="#presale">
                <Button variant="outline" className="sophisticated-button-outline font-semibold text-lg px-8 py-6 w-full sm:w-auto">
                  Sobre o Treinamento <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center animate-float">
            <div className="relative w-full max-w-[500px] aspect-video bg-black rounded-sm border border-white/10 shadow-2xl overflow-hidden">
              <iframe 
                src="https://www.youtube.com/embed/VjVEuM4bMRY" 
                title="Introdução ao Mini Curso"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
