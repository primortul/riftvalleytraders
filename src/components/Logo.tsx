"use client";

interface LogoProps {
  className?: string;
  color?: string;
  size?: number;
}

export default function Logo({ className = "", color = "currentColor", size = 40 }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Minimalist Arabic Dhow - elegant triangular sail with curved hull */}
      
      {/* Main sail - tall elegant triangle */}
      <path
        d="M50 8 L50 72 L78 68"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      
      {/* Sail fill - subtle */}
      <path
        d="M50 12 L50 70 L75 66 Z"
        fill={color}
        fillOpacity="0.08"
      />
      
      {/* Mast */}
      <line
        x1="50"
        y1="8"
        x2="50"
        y2="78"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
      
      {/* Hull - elegant curved dhow shape */}
      <path
        d="M18 78 Q35 82 50 80 Q65 78 82 74 Q88 73 90 70"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
      
      {/* Hull accent line */}
      <path
        d="M22 82 Q40 86 55 84 Q70 82 85 78"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
        opacity="0.5"
      />
      
      {/* Bow detail - pointed front */}
      <path
        d="M90 70 L94 68"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
      
      {/* Small flag/pennant at top */}
      <path
        d="M50 8 L42 12 L50 14"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill={color}
        fillOpacity="0.15"
      />
    </svg>
  );
}

// Horizontal logo with text
export function LogoWithText({ 
  className = "", 
  color = "currentColor",
  accentColor = "#c4664a",
  size = 36 
}: LogoProps & { accentColor?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <Logo color={color} size={size} />
      <span className="font-display text-xl md:text-2xl font-light tracking-tight" style={{ color }}>
        Rift Valley <span className="italic" style={{ color: accentColor }}>Traders</span>
      </span>
    </div>
  );
}

