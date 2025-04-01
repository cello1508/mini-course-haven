
import { Mail, Phone, MapPin, Facebook, Instagram, Youtube, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-white text-lg font-bold mb-4">MiniCourse</h3>
            <p className="mb-4">
              Transformamos conhecimento em resultados concretos através de cursos e treinamentos de alta qualidade.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#minicourse" className="hover:text-white transition-colors">Mini Curso</a>
              </li>
              <li>
                <a href="#presale" className="hover:text-white transition-colors">Treinamento</a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-white transition-colors">Depoimentos</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Contato</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                <a href="mailto:contato@minicourse.com" className="hover:text-white transition-colors">
                  contato@minicourse.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                <a href="tel:+5511999999999" className="hover:text-white transition-colors">
                  (11) 9999-9999
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-1" />
                <span>São Paulo, SP<br />Brasil</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Newsletter</h3>
            <p className="mb-4">
              Inscreva-se para receber dicas exclusivas e novidades sobre nossos cursos.
            </p>
            <form>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Seu e-mail"
                  className="py-2 px-4 rounded-l-md w-full text-gray-900"
                />
                <button
                  type="submit"
                  className="bg-purple-700 hover:bg-purple-800 py-2 px-4 rounded-r-md text-white"
                >
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </div>
        
        <hr className="border-gray-800 mb-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p>&copy; 2023 MiniCourse. Todos os direitos reservados.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
