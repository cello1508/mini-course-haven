
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 bg-[#0a0a0a] text-white">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto bg-[#181818] p-8 md:p-12 border border-[#333333] rounded-sm">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pronto para Transformar Seus Resultados?
          </h2>
          <p className="text-xl text-[#b0b0b0] max-w-3xl mx-auto mb-10">
            Não perca a oportunidade de participar do nosso mini curso gratuito e garantir sua vaga no treinamento completo com condições especiais.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a href="#minicourse">
              <Button className="sophisticated-button px-8 py-6 text-lg font-semibold w-full sm:w-auto">
                Acessar Mini Curso Grátis
              </Button>
            </a>
            <a href="#presale">
              <Button variant="outline" className="sophisticated-button-outline px-8 py-6 text-lg font-semibold w-full sm:w-auto">
                Garantir Vaga na Pré-Venda <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
          </div>
          <p className="mt-8 text-sm text-[#808080]">
            <span className="text-[#ff5757]">Oferta por tempo limitado:</span> Vagas limitadas. Não garantimos que esta oferta estará disponível novamente.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
