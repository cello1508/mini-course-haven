
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Play, Award, Clock } from "lucide-react";

const MiniCourseSection = () => {
  const courseModules = [
    {
      id: 1,
      title: "Módulo 1: Fundamentos Essenciais",
      description: "Aprenda os conceitos básicos necessários para começar sua jornada.",
      duration: "45 minutos",
      lessons: 5
    },
    {
      id: 2,
      title: "Módulo 2: Técnicas Intermediárias",
      description: "Desenvolva habilidades práticas que farão diferença no seu dia a dia.",
      duration: "60 minutos",
      lessons: 4
    },
    {
      id: 3,
      title: "Módulo 3: Aplicação Prática",
      description: "Coloque em prática tudo o que aprendeu com exercícios guiados.",
      duration: "50 minutos",
      lessons: 3
    }
  ];

  const benefits = [
    "Acesso imediato a todo o conteúdo do mini curso",
    "Material complementar para download",
    "Suporte por e-mail durante o período do curso",
    "Certificado de conclusão digital",
    "Desconto exclusivo no treinamento completo"
  ];

  return (
    <section id="minicourse" className="py-20 bg-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Mini Curso Gratuito</h2>
          <p className="section-subtitle">
            Inicie sua jornada com nosso mini curso exclusivo e descubra por que nossos alunos estão transformando suas carreiras.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-gray-900">
              O que você vai aprender
            </h3>
            <div className="space-y-6">
              {courseModules.map((module) => (
                <Card key={module.id} className="overflow-hidden border-l-4 border-l-purple-600">
                  <CardContent className="p-6">
                    <h4 className="font-bold text-lg mb-2">{module.title}</h4>
                    <p className="text-gray-600 mb-4">{module.description}</p>
                    <div className="flex items-center text-sm text-gray-500 space-x-4">
                      <span className="flex items-center">
                        <Clock className="h-4 w-4 mr-1 text-purple-600" />
                        {module.duration}
                      </span>
                      <span className="flex items-center">
                        <Play className="h-4 w-4 mr-1 text-purple-600" />
                        {module.lessons} aulas
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          <div className="bg-white rounded-lg p-8 shadow-lg border border-purple-100">
            <div className="flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-6 mx-auto">
              <Award className="h-8 w-8 text-purple-700" />
            </div>
            <h3 className="text-2xl font-bold mb-6 text-center text-gray-900">
              Benefícios do Mini Curso
            </h3>
            <ul className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <Check className="h-5 w-5 text-purple-700 mt-1 mr-3 flex-shrink-0" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
            <Button className="btn-primary w-full text-lg py-6">
              Quero Participar Agora
            </Button>
            <p className="text-sm text-center mt-4 text-gray-500">
              Vagas limitadas - Turma com início imediato
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MiniCourseSection;
