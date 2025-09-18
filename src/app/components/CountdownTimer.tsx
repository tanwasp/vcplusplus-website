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
      <h3 className="text-2xl font-bold text-white mb-6">Event Starts In:</h3>
      <div className="grid grid-cols-4 gap-4 max-w-lg mx-auto">
        {timeUnits.map((unit, index) => (
          <div
            key={unit.label}
            className="glass rounded-2xl p-4 backdrop-blur-sm"
          >
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">
              {unit.value.toString().padStart(2, "0")}
            </div>
            <div className="text-white/80 text-sm font-semibold uppercase tracking-wide">
              {unit.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
