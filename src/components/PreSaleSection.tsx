
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import CountdownTimer from "./CountdownTimer";
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
      icon: <BookOpen className="h-6 w-6 text-white" />,
      title: "Material Completo",
      description: "Mais de 50 horas de conteúdo em vídeo, apostilas e exercícios práticos."
    },
    {
      icon: <Users className="h-6 w-6 text-white" />,
      title: "Comunidade Exclusiva",
      description: "Acesso a um grupo privado para networking e troca de experiências."
    },
    {
      icon: <MessageCircle className="h-6 w-6 text-white" />,
      title: "Mentorias em Grupo",
      description: "Sessões quinzenais com nossos especialistas para tirar dúvidas."
    },
    {
      icon: <BarChart className="h-6 w-6 text-white" />,
      title: "Projetos Práticos",
      description: "Desenvolva projetos reais para aplicar seus conhecimentos."
    }
  ];

  const bonuses = [
    {
      id: 1,
      title: "Aula fechada de Posicionamento com Theo",
      description: "Aprenda com quem já faturou milhões a se posicionar corretamente no mercado."
    },
    {
      id: 2,
      title: "Call com gestor de tráfego experiente",
      description: "Sessão com profissional que já gerou milhões em vendas e está migrando para o mundo dos Agentes."
    },
    {
      id: 3,
      title: "Acesso à comunidade dos mentorados",
      description: "Grupo exclusivo onde compartilhamos vagas e oportunidades (valor imensurável)."
    },
    {
      id: 4,
      title: "Imersão on-line de micro SaaS com IA",
      description: "Para os 10 primeiros: aprenda a montar seu próprio SaaS utilizando Inteligência Artificial."
    },
    {
      id: 5,
      title: "67% de desconto",
      description: "Economia substancial no investimento, com opção de parcelamento no cartão."
    }
  ];

  // Set the end date to April 4th, 2024 at 23:59:59
  const endDate = new Date(2024, 3, 4, 23, 59, 59);

  return (
    <section id="presale" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Pré-Venda: Treinamento Completo</h2>
          <p className="section-subtitle">
            Prepare-se para o próximo nível com nosso treinamento completo. Oferta especial por tempo limitado!
          </p>
          
          {/* Countdown Timer */}
          <div className="max-w-3xl mx-auto mt-8">
            <CountdownTimer endDate={endDate} />
          </div>
        </div>

        <div className="bg-gradient-to-r from-[#0a0a0a] to-[#181818] rounded-sm shadow-xl overflow-hidden mb-16 border border-[#333333]">
          <div className="p-8 md:p-12">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-2/3 text-white mb-8 md:mb-0 md:pr-12">
                <h3 className="text-3xl md:text-4xl font-bold mb-6">
                  Transforme Sua Carreira com Nosso Treinamento Completo
                </h3>
                <p className="text-lg text-[#b0b0b0] mb-6">
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
              
              <div className="md:w-1/3 bg-[#0a0a0a] rounded-sm p-6 flex flex-col border border-[#333333]">
                <div className="mb-6 text-center">
                  <span className="inline-block px-3 py-1 bg-[#2a2a2a] text-white rounded-full text-sm font-medium mb-2">Oferta de Pré-Venda</span>
                  <div className="text-white">
                    <span className="text-sm line-through text-[#808080]">R$ 1.997,00</span>
                    <div className="text-3xl font-bold">R$ 997,00</div>
                    <p className="text-[#b0b0b0] text-sm mt-1">ou 12x de R$ 97,00</p>
                  </div>
                  <div className="flex items-center justify-center mt-2 text-sm">
                    <Gift className="h-4 w-4 text-white mr-1" />
                    <span className="text-white font-medium">+ 5 bônus exclusivos</span>
                  </div>
                </div>
                
                <Button className="btn-primary py-6 text-lg font-semibold mb-4">
                  Garantir Vaga na Pré-Venda
                </Button>
                
                <p className="text-xs text-center text-[#808080] mb-4">
                  Oferta válida até 10/08 ou até acabarem as vagas
                </p>
                
                <div className="flex items-center justify-center text-sm text-[#b0b0b0]">
                  <CheckCircle className="h-4 w-4 text-white mr-2" />
                  <span>Pagamento 100% seguro</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center text-white">
            <Gift className="inline-block mr-2 mb-1" /> Bônus Especiais da Pré-Venda
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {bonuses.map((bonus) => (
              <Card key={bonus.id} className="sophisticated-card border-t-2 border-t-white">
                <CardContent className="p-6">
                  <div className="flex items-start mb-4">
                    <div className="mr-4 bg-[#2a2a2a] rounded-full p-2 text-white">
                      <Gift className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2 text-white">BÔNUS {bonus.id}: {bonus.title}</h4>
                      <p className="text-[#b0b0b0]">{bonus.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-t-2 border-t-white sophisticated-card">
              <CardContent className="pt-6">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
                <p className="text-[#b0b0b0]">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PreSaleSection;
