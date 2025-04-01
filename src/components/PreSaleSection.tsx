
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  CheckCircle,
  Clock,
  Calendar,
  Users,
  BookOpen,
  MessageCircle,
  BarChart,
  Gift
} from "lucide-react";

const PreSaleSection = () => {
  const features = [
    {
      icon: <BookOpen className="h-6 w-6 text-purple-700" />,
      title: "Material Completo",
      description: "Mais de 50 horas de conteúdo em vídeo, apostilas e exercícios práticos."
    },
    {
      icon: <Users className="h-6 w-6 text-purple-700" />,
      title: "Comunidade Exclusiva",
      description: "Acesso a um grupo privado para networking e troca de experiências."
    },
    {
      icon: <MessageCircle className="h-6 w-6 text-purple-700" />,
      title: "Mentorias em Grupo",
      description: "Sessões quinzenais com nossos especialistas para tirar dúvidas."
    },
    {
      icon: <BarChart className="h-6 w-6 text-purple-700" />,
      title: "Projetos Práticos",
      description: "Desenvolva projetos reais para aplicar seus conhecimentos."
    }
  ];

  return (
    <section id="presale" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Pré-Venda: Treinamento Completo</h2>
          <p className="section-subtitle">
            Prepare-se para o próximo nível com nosso treinamento completo. Oferta especial por tempo limitado!
          </p>
        </div>

        <div className="bg-gradient-to-r from-purple-700 to-indigo-600 rounded-2xl shadow-xl overflow-hidden mb-16">
          <div className="p-8 md:p-12">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-2/3 text-white mb-8 md:mb-0 md:pr-12">
                <h3 className="text-3xl md:text-4xl font-bold mb-6">
                  Transforme Sua Carreira com Nosso Treinamento Completo
                </h3>
                <p className="text-lg opacity-90 mb-6">
                  Nosso programa abrangente foi desenvolvido para levar suas habilidades ao próximo nível. 
                  Com mais de 100 alunos formados e uma metodologia exclusiva, garantimos sua evolução.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-2 flex-shrink-0" />
                    <span>Metodologia passo a passo</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-2 flex-shrink-0" />
                    <span>Certificado reconhecido</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-2 flex-shrink-0" />
                    <span>Acesso vitalício</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-2 flex-shrink-0" />
                    <span>Garantia de 30 dias</span>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 text-sm mb-6">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>12 semanas</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>Início: 15 de Agosto</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-1" />
                    <span>Vagas limitadas</span>
                  </div>
                </div>
              </div>
              
              <div className="md:w-1/3 bg-white rounded-xl p-6 flex flex-col">
                <div className="mb-6 text-center">
                  <span className="inline-block px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-medium mb-2">Oferta de Pré-Venda</span>
                  <div className="text-gray-900">
                    <span className="text-sm line-through">R$ 1.997,00</span>
                    <div className="text-3xl font-bold">R$ 997,00</div>
                    <p className="text-gray-600 text-sm mt-1">ou 12x de R$ 97,00</p>
                  </div>
                  <div className="flex items-center justify-center mt-2 text-sm">
                    <Gift className="h-4 w-4 text-purple-700 mr-1" />
                    <span className="text-purple-700 font-medium">+ 3 bônus exclusivos</span>
                  </div>
                </div>
                
                <Button className="btn-primary py-6 text-lg font-semibold mb-4">
                  Garantir Vaga na Pré-Venda
                </Button>
                
                <p className="text-xs text-center text-gray-500 mb-4">
                  Oferta válida até 10/08 ou até acabarem as vagas
                </p>
                
                <div className="flex items-center justify-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span>Pagamento 100% seguro</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-t-4 border-t-purple-600">
              <CardContent className="pt-6">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PreSaleSection;
