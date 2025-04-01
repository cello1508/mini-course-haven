
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 bg-hero-pattern text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Pronto para Transformar Seus Resultados?
        </h2>
        <p className="text-xl opacity-90 max-w-3xl mx-auto mb-10">
          Não perca a oportunidade de participar do nosso mini curso gratuito e garantir sua vaga no treinamento completo com condições especiais.
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Button className="bg-white text-purple-700 hover:bg-gray-100 px-8 py-6 text-lg font-semibold">
            Acessar Mini Curso Grátis
          </Button>
          <Button variant="outline" className="border-white border-2 text-white hover:bg-white/10 px-8 py-6 text-lg font-semibold">
            Garantir Vaga na Pré-Venda <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
        <p className="mt-8 text-sm opacity-80">
          Vagas limitadas. Não garantimos que esta oferta estará disponível novamente.
        </p>
      </div>
    </section>
  );
};

export default CTASection;
