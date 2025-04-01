
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const lessons = [
  {
    id: 1,
    title: "Introdução ao Mini Curso",
    description: "Apresentação dos conceitos fundamentais e do que você vai aprender.",
    videoUrl: "https://www.youtube.com/watch?v=VjVEuM4bMRY",
    duration: "12:45"
  },
  {
    id: 2,
    title: "Instalando n8n",
    description: "Aprenda a configurar a ferramenta n8n, essencial para nossos fluxos automatizados.",
    videoUrl: "https://www.youtube.com/watch?v=lv8IdXVB5cY",
    duration: "15:27"
  },
  {
    id: 3,
    title: "Fazendo o Agente de IA do zero",
    description: "Construa seu próprio agente de inteligência artificial passo a passo.",
    videoUrl: "https://www.youtube.com/watch?v=KmOSxER584c",
    duration: "24:18"
  },
  {
    id: 4,
    title: "Colocando a IA no WhatsApp",
    description: "Integre seu agente de IA ao WhatsApp para atendimento automatizado.",
    videoUrl: "https://www.youtube.com/watch?v=f-Z8peU4_P8",
    duration: "18:33"
  },
  {
    id: 5,
    title: "Finalização: Seu Inimigo Diário",
    description: "Conclusão do mini curso e próximos passos para evoluir seus conhecimentos.",
    videoUrl: "https://www.youtube.com/watch?v=_A4DA7Y0r7g",
    duration: "10:51"
  }
];

const MiniCourseSection = () => {
  return (
    <section id="minicourse" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">Mini Curso Gratuito</h2>
          <p className="section-subtitle">
            Acesse as aulas do nosso mini curso e comece a transformar seus resultados hoje mesmo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {lessons.map((lesson) => (
            <Card key={lesson.id} className="sophisticated-card overflow-hidden transition-all duration-300 hover:transform hover:scale-105">
              <CardHeader className="p-4 bg-muted">
                <CardTitle className="text-xl">{lesson.title}</CardTitle>
                <CardDescription className="text-gray-400">{lesson.duration}</CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-gray-400 mb-6">{lesson.description}</p>
                <a href={lesson.videoUrl} target="_blank" rel="noopener noreferrer">
                  <Button className="sophisticated-button w-full flex items-center justify-center">
                    <Play className="mr-2 h-4 w-4" /> Assistir Aula
                  </Button>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-white mb-6">
            Gostou do conteúdo e quer aprender mais? Nosso treinamento completo está em pré-venda com condições especiais!
          </p>
          <a href="#presale">
            <Button className="sophisticated-button">
              Saiba Mais Sobre o Treinamento
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default MiniCourseSection;
