"use client";

interface LogoProps {
  className?: string;
  color?: string;
  size?: number;
}

/**
 * Vectorized sailboat-in-circle icon matching Rift Valley Traders brand.
 * Solid shapes: circular frame, two triangular sails (main + jib), hull, two water lines.
 */
export default function Logo({ className = "", color = "currentColor", size = 40 }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      {/* Circular frame */}
      <circle
        cx="50"
        cy="50"
        r="46"
        stroke={color}
        strokeWidth="2.5"
        fill="none"
      />
      {/* Water lines (two wavy horizontals) */}
      <path
        d="M22 82 Q30 80 38 82 Q46 84 50 83 Q54 84 62 82 Q70 80 78 82"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M20 88 Q32 86 40 88 Q48 90 50 89 Q52 90 60 88 Q68 86 80 88"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      {/* Hull — elongated, tapering toward bow (left) */}
      <path
        d="M78 74 L52 76 L26 74 L22 72 L78 74 Z"
        fill={color}
      />
      {/* Main sail — large triangle, pointing up and right */}
      <path
        d="M50 76 L50 28 L76 52 Z"
        fill={color}
      />
      {/* Jib — smaller triangle, forward of main, pointing top-left */}
      <path
        d="M50 76 L50 38 L26 52 Z"
        fill={color}
      />
    </svg>
  );
}

/** Full logo: icon + “Rift Valley Traders” and taglines with refined serif typography */
export function LogoWithText({
  className = "",
  color = "currentColor",
  size = 40,
  variant = "full",
  accentColor,
}: LogoProps & { variant?: "full" | "compact"; accentColor?: string }) {
  return (
    <div
      className={`flex items-center gap-4 ${className}`}
      style={{ color }}
    >
      <Logo color={color} size={size} />
      <div className="flex flex-col justify-center">
        <span className="font-display text-xl md:text-2xl font-normal tracking-tight leading-tight">
          Rift Valley Traders
        </span>
        {variant === "full" && (
          <>
            <span className="font-display text-[11px] md:text-xs font-normal tracking-wide text-[0.9em] opacity-90 mt-0.5">
              — and Associates, Inc. —
            </span>
            <span className="font-display text-[10px] md:text-[11px] font-normal tracking-wide opacity-75 mt-0.5">
              a Sarnian Group partner
            </span>
          </>
        )}
      </div>
    </div>
  );
}
