
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <a href="#" className="text-2xl font-bold text-purple-700">
            MiniCourse
          </a>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#minicourse" className="text-gray-700 hover:text-purple-700 font-medium">
            Mini Curso
          </a>
          <a href="#presale" className="text-gray-700 hover:text-purple-700 font-medium">
            Treinamento
          </a>
          <a href="#testimonials" className="text-gray-700 hover:text-purple-700 font-medium">
            Depoimentos
          </a>
          <a href="#faq" className="text-gray-700 hover:text-purple-700 font-medium">
            FAQ
          </a>
          <Button className="btn-primary">Inscrever-se</Button>
        </div>
        
        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-700 focus:outline-none"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 shadow-lg">
          <div className="flex flex-col space-y-4">
            <a 
              href="#minicourse" 
              className="text-gray-700 hover:text-purple-700 font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Mini Curso
            </a>
            <a 
              href="#presale" 
              className="text-gray-700 hover:text-purple-700 font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Treinamento
            </a>
            <a 
              href="#testimonials" 
              className="text-gray-700 hover:text-purple-700 font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Depoimentos
            </a>
            <a 
              href="#faq" 
              className="text-gray-700 hover:text-purple-700 font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </a>
            <Button className="btn-primary w-full">Inscrever-se</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
