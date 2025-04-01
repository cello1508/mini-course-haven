
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import CountdownTimer from "./CountdownTimer";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Set the end date to April 4th, 2024 at 23:59:59
  const endDate = new Date(2024, 3, 4, 23, 59, 59);

  return (
    <div>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a] shadow-sm border-b border-[#333333]">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <a href="#" className="text-2xl font-bold text-white">
              MiniCourse
            </a>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#minicourse" className="text-gray-300 hover:text-white font-medium">
              Mini Curso
            </a>
            <a href="#presale" className="text-gray-300 hover:text-white font-medium">
              Treinamento
            </a>
            <a href="#testimonials" className="text-gray-300 hover:text-white font-medium">
              Depoimentos
            </a>
            <a href="#faq" className="text-gray-300 hover:text-white font-medium">
              FAQ
            </a>
            <Button className="bg-white text-black hover:bg-gray-200">Inscrever-se</Button>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-[#0a0a0a] py-4 px-4 shadow-lg border-t border-[#333333]">
            <div className="flex flex-col space-y-4">
              <a 
                href="#minicourse" 
                className="text-gray-300 hover:text-white font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Mini Curso
              </a>
              <a 
                href="#presale" 
                className="text-gray-300 hover:text-white font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Treinamento
              </a>
              <a 
                href="#testimonials" 
                className="text-gray-300 hover:text-white font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Depoimentos
              </a>
              <a 
                href="#faq" 
                className="text-gray-300 hover:text-white font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                FAQ
              </a>
              <Button className="bg-white text-black hover:bg-gray-200 w-full">Inscrever-se</Button>
            </div>
          </div>
        )}
      </nav>
      
      {/* Countdown Timer below the navbar */}
      <div className="pt-20 bg-[#0a0a0a]">
        <div className="container mx-auto px-4">
          <CountdownTimer endDate={endDate} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
