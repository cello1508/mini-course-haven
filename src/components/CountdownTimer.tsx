
import React, { useState, useEffect } from 'react';
import { Clock, AlertTriangle } from 'lucide-react';

interface CountdownTimerProps {
  endDate: Date;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ endDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +endDate - +new Date();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [endDate]);

  return (
    <div className="w-full">
      <div className="flex flex-col items-center mb-4">
        <div className="flex items-center justify-center mb-2">
          <Clock className="w-6 h-6 text-[#ff5757] mr-2" />
          <h3 className="text-xl font-bold text-white">A PRÉ-VENDA TERMINA EM:</h3>
        </div>
        
        <div className="flex justify-center space-x-4 mb-4">
          <div className="flex flex-col items-center">
            <div className="bg-[#2a2a2a] text-white text-3xl md:text-4xl font-bold px-4 py-3 rounded-sm w-16 md:w-20 text-center">
              {timeLeft.days.toString().padStart(2, '0')}
            </div>
            <span className="text-[#b0b0b0] text-sm mt-1">Dias</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-[#2a2a2a] text-white text-3xl md:text-4xl font-bold px-4 py-3 rounded-sm w-16 md:w-20 text-center">
              {timeLeft.hours.toString().padStart(2, '0')}
            </div>
            <span className="text-[#b0b0b0] text-sm mt-1">Horas</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-[#2a2a2a] text-white text-3xl md:text-4xl font-bold px-4 py-3 rounded-sm w-16 md:w-20 text-center">
              {timeLeft.minutes.toString().padStart(2, '0')}
            </div>
            <span className="text-[#b0b0b0] text-sm mt-1">Minutos</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-[#2a2a2a] text-white text-3xl md:text-4xl font-bold px-4 py-3 rounded-sm w-16 md:w-20 text-center">
              {timeLeft.seconds.toString().padStart(2, '0')}
            </div>
            <span className="text-[#b0b0b0] text-sm mt-1">Segundos</span>
          </div>
        </div>
      </div>
      
      <div className="bg-[#181818] border border-[#ff5757] p-4 rounded-sm mb-8">
        <div className="flex items-start">
          <AlertTriangle className="w-5 h-5 text-[#ff5757] mt-1 mr-3 flex-shrink-0" />
          <p className="text-[#b0b0b0]">
            <span className="text-[#ff5757] font-semibold">ATENÇÃO:</span> Após o dia 04/04/2024, os bônus não estarão mais disponíveis e o treinamento será oferecido pelo valor integral de R$ 1.997,00. Aproveite esta oportunidade por tempo limitado!
          </p>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
