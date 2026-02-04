
import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
  color?: string; // Color del rostro del cordero
  flameColor?: string; // Color de la llama
}

export const Logo: React.FC<LogoProps> = ({ 
  className = "", 
  size = 40, 
  color = "currentColor", 
  flameColor = "#C05A3F" 
}) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Rostro del Cordero (Estilo Vectorial Minimalista) */}
      <g>
        {/* Oreja Izquierda */}
        <path 
          d="M25 45C15 45 12 55 18 62C24 69 32 60 32 60" 
          stroke={color} 
          strokeWidth="4" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
        {/* Oreja Derecha */}
        <path 
          d="M75 45C85 45 88 55 82 62C76 69 68 60 68 60" 
          stroke={color} 
          strokeWidth="4" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
        
        {/* Contorno de la Cabeza */}
        <path 
          d="M32 60C32 75 40 85 50 85C60 85 68 75 68 60C68 45 58 38 50 38C42 38 32 45 32 60Z" 
          fill={color} 
          fillOpacity="0.1"
          stroke={color} 
          strokeWidth="4" 
          strokeLinejoin="round"
        />

        {/* Detalles del Rostro: Ojos */}
        <circle cx="42" cy="58" r="2.5" fill={color} />
        <circle cx="58" cy="58" r="2.5" fill={color} />
        
        {/* Nariz y Boca */}
        <path 
          d="M47 70L50 73L53 70" 
          stroke={color} 
          strokeWidth="2.5" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
        <path 
          d="M50 73V76" 
          stroke={color} 
          strokeWidth="2.5" 
          strokeLinecap="round"
        />
      </g>

      {/* La Llama (Espíritu Santo) sobre la frente */}
      <path 
        d="M50 8C50 8 62 22 62 30C62 36.6274 56.6274 42 50 42C43.3726 42 38 36.6274 38 30C38 22 50 8 50 8Z" 
        fill={flameColor} 
      />
      {/* Brillo interno de la llama */}
      <path 
        d="M50 18C50 18 56 26 56 30C56 33.3137 53.3137 36 50 36C46.6863 36 44 33.3137 44 30C44 26 50 18 50 18Z" 
        fill="white" 
        fillOpacity="0.3"
      />
    </svg>
  );
};
