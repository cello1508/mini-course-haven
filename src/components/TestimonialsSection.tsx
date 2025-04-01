
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Ricardo Silva",
      role: "Profissional de Marketing",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      content: "Este mini curso superou todas as minhas expectativas. O conteúdo é extremamente prático e me ajudou a implementar novas estratégias imediatamente. Mal posso esperar pelo treinamento completo!",
      stars: 5
    },
    {
      id: 2,
      name: "Ana Oliveira",
      role: "Empreendedora",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      content: "A metodologia é incrível! Em apenas alguns dias de mini curso, consegui identificar pontos cruciais que estavam impedindo meu crescimento. Já me inscrevi para o treinamento completo.",
      stars: 5
    },
    {
      id: 3,
      name: "Carlos Mendes",
      role: "Estudante",
      image: "https://randomuser.me/api/portraits/men/62.jpg",
      content: "Como estudante, estava procurando conteúdo de qualidade para complementar minha formação. Este mini curso foi perfeito e me deu uma vantagem competitiva. Recomendo muito!",
      stars: 4
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">O Que Nossos Alunos Dizem</h2>
          <p className="section-subtitle">
            Veja o que os participantes do nosso mini curso e treinamento têm a dizer sobre a experiência.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="bg-white shadow-lg border-0 hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < testimonial.stars ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg font-medium text-gray-700 mb-4">
            Junte-se a mais de 500 alunos satisfeitos e transforme sua carreira
          </p>
          <div className="flex justify-center">
            <div className="flex -space-x-4">
              {[...Array(5)].map((_, i) => (
                <img
                  key={i}
                  className="w-12 h-12 rounded-full border-2 border-white object-cover"
                  src={`https://randomuser.me/api/portraits/${i % 2 === 0 ? 'men' : 'women'}/${20 + i}.jpg`}
                  alt="Usuário"
                />
              ))}
              <div className="flex items-center justify-center w-12 h-12 text-xs font-medium text-white bg-purple-700 rounded-full border-2 border-white">
                +495
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
