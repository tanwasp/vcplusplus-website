"use client";

import { useState, useEffect } from "react";

interface CountdownTimerProps {
  className?: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function CountdownTimer({
  className = "",
}: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isExpired, setIsExpired] = useState(false);

  useEffect(() => {
    const calculateTimeLeft = () => {
      // Hardcode the hackathon date: October 4, 2025 at 9:30 AM EST
      // EST is UTC-4, so 9:30 AM EST = 1:30 PM UTC
      const targetTime = new Date("2025-10-04T13:30:00.000Z").getTime();
      const currentTime = Date.now();
      const difference = targetTime - currentTime;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
        setIsExpired(false);
      } else {
        setIsExpired(true);
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  if (isExpired) {
    return (
      <div className={`text-center ${className}`}>
        <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-2xl shadow-lg">
          <h3 className="text-2xl font-bold">Event is Live! 🎉</h3>
        </div>
      </div>
    );
  }

  const timeUnits = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <div className={`text-center ${className}`}>
      <div className="relative">
        <div className="bg-gradient-to-br from-white/15 via-maroon/30 to-white/15 backdrop-blur-sm rounded-3xl p-8 border border-white/30 shadow-xl">
          <div className="mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Event Starts In
            </h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {timeUnits.map((unit) => (
              <div key={unit.label} className="relative group">
                <div className="bg-gradient-to-br from-white/25 to-white/10 rounded-2xl p-4 md:p-6 border border-white/40 shadow-lg transform group-hover:scale-105 transition-all duration-300 backdrop-blur-sm">
                  <div className="text-3xl md:text-5xl font-bold text-white mb-2 font-mono">
                    {unit.value.toString().padStart(2, "0")}
                  </div>
                  <div className="text-white/90 text-sm font-semibold uppercase tracking-wide">
                    {unit.label}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Simple urgency message */}
          <div className="mt-8 p-4 bg-white/15 rounded-2xl border border-white/30">
            <p className="text-lg font-semibold text-white/95">
              Limited spots available - Register today!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
