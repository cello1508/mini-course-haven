
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Play, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const lessons = [
  {
    id: 1,
    title: "Introdução ao Mini Curso",
    description: "Apresentação dos conceitos fundamentais e do que você vai aprender.",
    videoUrl: "https://www.youtube.com/embed/VjVEuM4bMRY",
    duration: "12:45"
  },
  {
    id: 2,
    title: "Instalando n8n",
    description: "Aprenda a configurar a ferramenta n8n, essencial para nossos fluxos automatizados.",
    videoUrl: "https://www.youtube.com/embed/lv8IdXVB5cY",
    duration: "15:27"
  },
  {
    id: 3,
    title: "Fazendo o Agente de IA do zero",
    description: "Construa seu próprio agente de inteligência artificial passo a passo.",
    videoUrl: "https://www.youtube.com/embed/KmOSxER584c",
    duration: "24:18"
  },
  {
    id: 4,
    title: "Colocando a IA no WhatsApp",
    description: "Integre seu agente de IA ao WhatsApp para atendimento automatizado.",
    videoUrl: "https://www.youtube.com/embed/f-Z8peU4_P8",
    duration: "18:33"
  },
  {
    id: 5,
    title: "Finalização: Seu Inimigo Diário",
    description: "Conclusão do mini curso e próximos passos para evoluir seus conhecimentos.",
    videoUrl: "https://www.youtube.com/embed/_A4DA7Y0r7g",
    duration: "10:51"
  }
];

const MiniCourseSection = () => {
  const [activeLesson, setActiveLesson] = useState<number | null>(null);

  const openLesson = (lessonId: number) => {
    setActiveLesson(lessonId);
  };

  const closeLesson = () => {
    setActiveLesson(null);
  };

  return (
    <section id="minicourse" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">Mini Curso Gratuito</h2>
          <p className="section-subtitle">
            Acesse as aulas do nosso mini curso e comece a transformar seus resultados hoje mesmo.
          </p>
        </div>

        {activeLesson ? (
          <div className="mb-12 relative">
            <Button 
              onClick={closeLesson} 
              variant="ghost" 
              className="absolute -top-4 -right-4 z-10 bg-black/80 p-2 rounded-full"
              size="icon"
            >
              <X className="h-6 w-6" />
            </Button>
            <div className="video-container">
              <iframe 
                src={lessons.find(lesson => lesson.id === activeLesson)?.videoUrl} 
                title={lessons.find(lesson => lesson.id === activeLesson)?.title}
                allowFullScreen
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              ></iframe>
            </div>
            <h3 className="text-xl font-medium mt-4 mb-2">
              {lessons.find(lesson => lesson.id === activeLesson)?.title}
            </h3>
            <p className="text-gray-400">
              {lessons.find(lesson => lesson.id === activeLesson)?.description}
            </p>
          </div>
        ) : null}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {lessons.map((lesson) => (
            <Card 
              key={lesson.id} 
              className={`sophisticated-card overflow-hidden transition-all duration-300 hover:transform hover:scale-105 ${activeLesson === lesson.id ? 'ring-2 ring-white' : ''}`}
            >
              <CardHeader className="p-4 bg-muted">
                <CardTitle className="text-xl">{lesson.title}</CardTitle>
                <CardDescription className="text-gray-400">{lesson.duration}</CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-gray-400 mb-6">{lesson.description}</p>
                <Button 
                  className="sophisticated-button w-full flex items-center justify-center"
                  onClick={() => openLesson(lesson.id)}
                >
                  <Play className="mr-2 h-4 w-4" /> Assistir Aula
                </Button>
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
