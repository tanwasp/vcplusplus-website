"use client";

interface SponsorLogoProps {
  sponsor: "mlh" | "gemini";
  className?: string;
}

export default function SponsorLogo({
  sponsor,
  className = "",
}: SponsorLogoProps) {
  if (sponsor === "mlh") {
    return (
      <div
        className={`bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center ${className}`}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full p-4 text-white">
          <text
            x="50"
            y="35"
            textAnchor="middle"
            className="text-2xl font-bold fill-current"
          >
            MLH
          </text>
          <text
            x="50"
            y="65"
            textAnchor="middle"
            className="text-xs fill-current"
          >
            HACKATHON
          </text>
        </svg>
      </div>
    );
  }

  if (sponsor === "gemini") {
    return (
      <div
        className={`bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center ${className}`}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full p-4 text-white">
          <circle cx="35" cy="35" r="8" className="fill-current" />
          <circle cx="65" cy="35" r="8" className="fill-current" />
          <path
            d="M35 50 Q50 35 65 50"
            stroke="currentColor"
            strokeWidth="3"
            fill="none"
          />
          <text
            x="50"
            y="75"
            textAnchor="middle"
            className="text-sm font-bold fill-current"
          >
            Gemini
          </text>
        </svg>
      </div>
    );
  }

  return null;
}
