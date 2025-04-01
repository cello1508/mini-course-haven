
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="bg-hero-pattern text-white">
      <div className="container mx-auto px-4 pt-28 pb-20 md:py-32">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Domine suas habilidades com nosso Mini Curso Gratuito
            </h1>
            <p className="text-lg md:text-xl mb-8 opacity-90 max-w-2xl">
              Desbloqueie seu potencial e prepare-se para o nosso treinamento completo com este mini curso exclusivo. Acesso limitado!
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start">
              <Button className="bg-white text-purple-700 hover:bg-gray-100 font-semibold text-lg px-8 py-6">
                Acessar Mini Curso Grátis
              </Button>
              <Button variant="outline" className="border-white border-2 text-white hover:bg-white/10 font-semibold text-lg px-8 py-6">
                Sobre o Treinamento <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center animate-float">
            <img 
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
              alt="Pessoa usando laptop" 
              className="max-w-full h-auto rounded-lg shadow-2xl transform rotate-1"
              style={{ maxWidth: "500px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
