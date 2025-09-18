"use client";

interface RegistrationStatsProps {
  className?: string;
}

export default function RegistrationStats({
  className = "",
}: RegistrationStatsProps) {
  return (
    <div
      className={`bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 ${className}`}
    >
      <div className="text-center">
        <div className="flex items-center justify-center space-x-2 mb-4">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 515.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          <h3 className="text-lg font-semibold text-white">Registration</h3>
        </div>

        <div className="mb-4">
          <div className="text-2xl font-bold text-white mb-2">
            Limited Spots!
          </div>
          <p className="text-white/80 text-sm mb-4">Maximum 50 participants</p>
        </div>

        <div className="bg-yellow-500/20 border border-yellow-400/30 rounded-lg p-4">
          <p className="text-yellow-200 text-sm font-semibold">
            ⚡ Spots are limited! Sign up soon!
          </p>
        </div>
      </div>
    </div>
  );
}
