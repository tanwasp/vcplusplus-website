"use client";

import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import SectionGuard from "./components/SectionGuard";
import PageOverflow from "./components/PageOverflow";
import ScrollAnimation from "./components/ScrollAnimation";
import ParticleBackground from "./components/ParticleBackground";
import FloatingActionButton from "./components/FloatingActionButton";
import TypingAnimation from "./components/TypingAnimation";
import CountdownTimer from "./components/CountdownTimer";
import { siteConfig } from "../data/siteConfig";
import { upcomingEvents } from "../data/events";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [titleValue, setTitleValue] = useState(siteConfig.siteName);
  const [isFocused, setIsFocused] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const router = useRouter();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleTitleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const command = titleValue.toLowerCase().trim();
      if (command === "cd challenge" || command === "cd /challenge") {
        router.push("/challenge");
      }
    }
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitleValue(e.target.value);
  };
  return (
    <div className="min-h-screen bg-background">
      <PageOverflow topColor="#8A0933" bottomColor="#333333" />
      <Navigation currentPage="home" />

      <SectionGuard pageKey="home" sectionKey="hero">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Animated background */}
          <div className="absolute inset-0 bg-gradient-to-br from-maroon via-maroon-light to-maroon-dark animate-gradient"></div>

          {/* Particle background */}
          <ParticleBackground
            particleCount={80}
            colors={[
              "rgba(255, 255, 255, 0.1)",
              "rgba(255, 255, 255, 0.05)",
              "rgba(166, 30, 77, 0.2)",
            ]}
          />

          {/* Floating particles with mouse interaction */}
          <div className="absolute inset-0">
            <div
              className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/20 rounded-full animate-float transition-transform duration-1000"
              style={{
                transform: `translate(${mousePosition.x * 0.01}px, ${
                  mousePosition.y * 0.01
                }px)`,
              }}
            ></div>
            <div
              className="absolute top-1/3 right-1/4 w-3 h-3 bg-white/10 rounded-full animate-float animate-delay-200 transition-transform duration-1000"
              style={{
                transform: `translate(${mousePosition.x * -0.015}px, ${
                  mousePosition.y * 0.015
                }px)`,
              }}
            ></div>
            <div
              className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-white/30 rounded-full animate-float animate-delay-400 transition-transform duration-1000"
              style={{
                transform: `translate(${mousePosition.x * 0.008}px, ${
                  mousePosition.y * -0.008
                }px)`,
              }}
            ></div>
            <div
              className="absolute top-1/2 right-1/3 w-2 h-2 bg-white/15 rounded-full animate-float animate-delay-300 transition-transform duration-1000"
              style={{
                transform: `translate(${mousePosition.x * -0.012}px, ${
                  mousePosition.y * 0.012
                }px)`,
              }}
            ></div>
          </div>

          {/* Glass morphism overlay */}
          <div className="absolute inset-0 bg-black/10"></div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <div className="space-y-8">
              {/* Animated title input */}
              <div className="opacity-0 animate-fade-in-up">
                <input
                  type="text"
                  value={titleValue}
                  onChange={handleTitleChange}
                  onKeyPress={handleTitleKeyPress}
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
                  placeholder="try cd challenge"
                  className={`text-5xl md:text-8xl font-bold bg-transparent border-none outline-none text-white text-center w-full placeholder-gray-400/50 selection:bg-white/20 transition-all duration-300 ${
                    isFocused
                      ? "caret-white animate-pulse scale-105"
                      : "caret-transparent"
                  }`}
                  style={{
                    fontFamily: "inherit",
                    textShadow: "0 4px 20px rgba(0,0,0,0.3)",
                  }}
                />
              </div>

              {/* Animated tagline */}
              <div className="opacity-0 animate-fade-in-up animate-delay-200">
                <p className="text-2xl md:text-3xl mb-8 max-w-3xl mx-auto font-light tracking-wide">
                  <TypingAnimation
                    texts={[
                      siteConfig.tagline,
                      "Building Tomorrow's Developers",
                      "Code. Learn. Innovate.",
                      "Join the Future of Tech",
                    ]}
                    speed={80}
                    deleteSpeed={40}
                    pauseTime={3000}
                  />
                </p>
              </div>

              {/* Animated description */}
              <div className="opacity-0 animate-fade-in-up animate-delay-300">
                <p className="text-lg md:text-xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed">
                  {siteConfig.description}
                </p>
              </div>

              {/* Animated CTA buttons */}
              <div className="opacity-0 animate-fade-in-up animate-delay-400">
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <button className="btn-modern bg-white text-maroon px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/90 hover:scale-105 transition-all duration-300 shadow-lg">
                    Join Our Community
                  </button>
                  <a
                    href="/hackathon"
                    className="btn-modern glass border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 hover:scale-105 transition-all duration-300"
                  >
                    Join Our Hackathon
                  </a>
                </div>
              </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 animate-fade-in-up animate-delay-500">
              <div className="animate-bounce">
                <svg
                  className="w-6 h-6 text-white/70"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </div>
            </div>
          </div>
        </section>
      </SectionGuard>

      <SectionGuard pageKey="home" sectionKey="features">
        {/* Features Section */}
        <section className="py-24 bg-gradient-to-b from-light-gray to-white relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 left-0 w-full h-full opacity-5">
            <div className="absolute top-20 left-10 w-32 h-32 bg-maroon rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-40 h-40 bg-maroon-light rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <ScrollAnimation animation="fade-up">
                <h2 className="text-4xl md:text-5xl font-bold text-content-primary mb-6">
                  What We <span className="gradient-text">Offer</span>
                </h2>
              </ScrollAnimation>
              <ScrollAnimation animation="fade-up" delay={200}>
                <p className="text-xl text-content-secondary max-w-3xl mx-auto leading-relaxed">
                  Explore opportunities to grow your programming skills and
                  connect with fellow developers in our vibrant community
                </p>
              </ScrollAnimation>
            </div>

            <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
              {siteConfig.offerings.map((offering, index) => {
                const icons = {
                  code: (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                    />
                  ),
                  users: (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 515.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  ),
                  presentation: (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                    />
                  ),
                };

                return (
                  <div
                    key={index}
                    className={`opacity-0 animate-fade-in-up animate-delay-${
                      (index + 1) * 100
                    } group`}
                  >
                    <div className="bg-white p-8 rounded-2xl shadow-lg card-hover text-center h-full border border-gray-100 relative overflow-hidden">
                      {/* Card background gradient */}
                      <div className="absolute inset-0 bg-gradient-to-br from-maroon/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                      <div className="relative z-10">
                        {/* Animated icon */}
                        <div className="w-20 h-20 bg-gradient-to-br from-maroon to-maroon-light rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 animate-pulse-glow">
                          <svg
                            className="w-10 h-10 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            {icons[offering.icon as keyof typeof icons]}
                          </svg>
                        </div>

                        <h3 className="text-2xl font-bold text-content-primary mb-4 group-hover:text-maroon transition-colors duration-300">
                          {offering.title}
                        </h3>

                        <p className="text-content-secondary leading-relaxed">
                          {offering.description}
                        </p>

                        {/* Hover arrow */}
                        <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="inline-flex items-center text-maroon font-semibold">
                            Learn More
                            <svg
                              className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5l7 7-7 7"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </SectionGuard>

      <SectionGuard pageKey="home" sectionKey="hackathon-cta">
        {/* Hackathon CTA Section */}
        <section className="py-24 bg-gradient-to-br from-maroon via-maroon-light to-maroon-dark relative overflow-hidden">
          {/* Background effects */}
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-white/5 rounded-full blur-3xl animate-float animate-delay-300"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <ScrollAnimation animation="fade-up">
              <div className="inline-flex items-center px-6 py-3 bg-white/20 rounded-full text-sm font-semibold backdrop-blur-sm border border-white/30 mb-8">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
                Special Event Alert
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="fade-up" delay={200}>
              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                VC++ Fall <span className="text-yellow-300">Hackathon</span>
              </h2>
            </ScrollAnimation>

            <ScrollAnimation animation="fade-up" delay={300}>
              <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
                Join us for an epic day of coding, creativity, and
                collaboration!
                <br />
                <span className="font-semibold">
                  October 4th • Rocky Hall 200/300
                </span>
              </p>
            </ScrollAnimation>

            <ScrollAnimation animation="fade-up" delay={400}>
              <CountdownTimer className="mb-12" />
            </ScrollAnimation>

            <ScrollAnimation animation="fade-up" delay={500}>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
                <a
                  href="https://events.mlh.io/events/12923-hack-nights-vassar?_gl=1*7phsw5*_ga*NjI2MjgzMzEzLjE3NTI1NDg1NTQ.*_ga_E5KT6TC4TK*czE3NTc2NDc2MDIkbzEwJGcxJHQxNzU3NjQ3NzAzJGoyMiRsMCRoMAalso"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-modern bg-white text-maroon px-10 py-4 rounded-full font-bold text-xl hover:bg-white/90 hover:scale-105 transition-all duration-300 shadow-2xl animate-pulse-glow"
                >
                  Register Now - FREE!
                </a>
                <a
                  href="/hackathon"
                  className="btn-modern glass border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 hover:scale-105 transition-all duration-300"
                >
                  Learn More
                </a>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="fade-up" delay={600}>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                <div className="glass rounded-2xl p-6 text-center">
                  <div className="text-2xl font-bold mb-2">FREE</div>
                  <p className="text-white/80 text-sm">Entry & Food</p>
                </div>
                <div className="glass rounded-2xl p-6 text-center">
                  <div className="text-2xl font-bold mb-2">50</div>
                  <p className="text-white/80 text-sm">Max Participants</p>
                </div>
                <div className="glass rounded-2xl p-6 text-center">
                  <div className="text-2xl font-bold mb-2">8hrs</div>
                  <p className="text-white/80 text-sm">Of Coding Fun</p>
                </div>
                <div className="glass rounded-2xl p-6 text-center">
                  <div className="text-2xl font-bold mb-2">$$$</div>
                  <p className="text-white/80 text-sm">Amazing Prizes</p>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </section>
      </SectionGuard>

      <SectionGuard pageKey="home" sectionKey="upcoming-events">
        {/* Upcoming Events */}
        <section className="py-24 bg-gradient-to-br from-dark-gray via-dark-gray to-maroon-dark relative overflow-hidden">
          {/* Background effects */}
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-maroon/20 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-maroon-light/20 rounded-full blur-3xl animate-float animate-delay-300"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <div className="opacity-0 animate-fade-in-up">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Upcoming <span className="gradient-text">Events</span>
                </h2>
              </div>
              <div className="opacity-0 animate-fade-in-up animate-delay-200">
                <p className="text-xl text-white/80 max-w-2xl mx-auto">
                  Don&apos;t miss out on our latest activities and networking
                  opportunities
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              {upcomingEvents.slice(0, 2).map((event, index) => (
                <div
                  key={event.id}
                  className={`opacity-0 animate-fade-in-up animate-delay-${
                    (index + 3) * 100
                  } group`}
                >
                  <div className="glass-dark rounded-2xl p-8 card-hover border border-white/10 relative overflow-hidden">
                    {/* Gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-maroon/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    <div className="relative z-10 flex items-start space-x-6">
                      {/* Animated date badge */}
                      <div className="bg-gradient-to-br from-maroon to-maroon-light text-white p-4 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                        <div className="text-center">
                          <span className="text-sm font-semibold block">
                            {new Date(event.date)
                              .toLocaleDateString("en", { month: "short" })
                              .toUpperCase()}
                          </span>
                          <div className="text-2xl font-bold">
                            {new Date(event.date).getDate()}
                          </div>
                        </div>
                      </div>

                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-maroon-light transition-colors duration-300">
                          {event.title}
                        </h3>
                        <p className="text-white/80 mb-4 leading-relaxed">
                          {event.description}
                        </p>
                        <div className="flex items-center text-white/60 text-sm space-x-4">
                          <div className="flex items-center">
                            <svg
                              className="w-4 h-4 mr-2"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                            {event.time}
                          </div>
                          <div className="flex items-center">
                            <svg
                              className="w-4 h-4 mr-2"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                              />
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                              />
                            </svg>
                            {event.location}
                          </div>
                        </div>

                        {/* RSVP button */}
                        <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <button className="btn-modern bg-maroon text-white px-6 py-2 rounded-full font-semibold hover:bg-maroon-light transition-colors duration-300">
                            RSVP Now
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* View all events button */}
            <div className="text-center mt-16 opacity-0 animate-fade-in-up animate-delay-500">
              <button className="btn-modern glass border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 hover:scale-105 transition-all duration-300">
                View All Events
              </button>
            </div>
          </div>
        </section>
      </SectionGuard>

      <Footer />
      <FloatingActionButton />
    </div>
  );
}
