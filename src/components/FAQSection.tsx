
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "Como funciona o acesso ao mini curso?",
      answer: "Após a inscrição, você receberá um e-mail com as instruções de acesso à nossa plataforma exclusiva. Todo o conteúdo estará disponível imediatamente para que você possa estudar no seu próprio ritmo."
    },
    {
      question: "Por quanto tempo terei acesso ao mini curso?",
      answer: "Você terá acesso ao mini curso por 30 dias a partir da data de inscrição, tempo suficiente para absorver todo o conteúdo e praticar os conceitos aprendidos."
    },
    {
      question: "O que está incluído no treinamento completo?",
      answer: "O treinamento completo inclui mais de 50 horas de conteúdo em vídeo, apostilas digitais, exercícios práticos, projetos reais, mentoria em grupo, comunidade exclusiva para alunos e certificado de conclusão. Além disso, você terá acesso vitalício ao material."
    },
    {
      question: "Quando começa o treinamento completo?",
      answer: "A próxima turma do treinamento completo tem início previsto para 15 de agosto. As vagas são limitadas para garantir a qualidade da experiência de aprendizado."
    },
    {
      question: "Existe garantia para o treinamento completo?",
      answer: "Sim, oferecemos garantia incondicional de 30 dias. Se você não ficar satisfeito por qualquer motivo, basta solicitar o reembolso dentro desse período e devolveremos 100% do seu investimento, sem questionamentos."
    },
    {
      question: "Preciso ter conhecimento prévio para participar?",
      answer: "Não é necessário conhecimento prévio. Nosso método foi desenvolvido para atender tanto iniciantes quanto pessoas com alguma experiência. O conteúdo é estruturado de forma progressiva para facilitar o aprendizado."
    },
    {
      question: "Como funciona o pagamento do treinamento?",
      answer: "Aceitamos cartão de crédito (em até 12x), PIX e boleto bancário. Todas as transações são processadas em ambiente seguro, garantindo a proteção dos seus dados."
    }
  ];

  return (
    <section id="faq" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Perguntas Frequentes</h2>
          <p className="section-subtitle">
            Tire suas dúvidas sobre o mini curso e o treinamento completo.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6 shadow-sm">
                <AccordionTrigger className="text-left font-medium text-lg py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-4 pt-1">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
