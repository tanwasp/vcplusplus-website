"use client";

import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import SectionGuard from "../components/SectionGuard";
import ScrollAnimation from "../components/ScrollAnimation";
import ParticleBackground from "../components/ParticleBackground";
import FloatingActionButton from "../components/FloatingActionButton";
import CountdownTimer from "../components/CountdownTimer";
import RegistrationStats from "../components/RegistrationStats";
import { hackathonData } from "../../data/hackathonData";
import { useState } from "react";

export default function HackathonPage() {
  const [activeTab, setActiveTab] = useState("schedule");

  return (
    <div className="min-h-screen bg-background">
      <Navigation currentPage="hackathon" />

      <SectionGuard pageKey="hackathon" sectionKey="hero">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
          {/* Animated background */}
          <div className="absolute inset-0 bg-gradient-to-br from-maroon via-maroon-light to-maroon-dark animate-gradient"></div>

          {/* Particle background */}
          <ParticleBackground
            particleCount={60}
            colors={[
              "rgba(255, 255, 255, 0.1)",
              "rgba(255, 255, 255, 0.05)",
              "rgba(166, 30, 77, 0.2)",
            ]}
          />

          {/* Glass morphism overlay */}
          <div className="absolute inset-0 bg-black/10"></div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <div className="space-y-8">
              {/* Event badge */}
              <ScrollAnimation animation="fade-up">
                <div className="inline-flex items-center px-6 py-3 bg-white/20 rounded-full text-sm font-semibold backdrop-blur-sm border border-white/30">
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
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  {hackathonData.date} • {hackathonData.time}
                </div>
              </ScrollAnimation>

              {/* Main title */}
              <ScrollAnimation animation="fade-up" delay={200}>
                <h1 className="text-5xl md:text-7xl font-bold mb-6">
                  {hackathonData.title}
                </h1>
              </ScrollAnimation>

              {/* Subtitle */}
              <ScrollAnimation animation="fade-up" delay={300}>
                <p className="text-3xl md:text-4xl font-light mb-8 gradient-text">
                  {hackathonData.subtitle}
                </p>
              </ScrollAnimation>

              {/* Description */}
              <ScrollAnimation animation="fade-up" delay={400}>
                <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed">
                  {hackathonData.description}
                </p>
              </ScrollAnimation>

              {/* Countdown Timer */}
              <ScrollAnimation animation="fade-up" delay={500}>
                <div className="mb-16">
                  <CountdownTimer />
                </div>
              </ScrollAnimation>

              {/* Registration Stats */}
              <ScrollAnimation animation="fade-up" delay={600}>
                <div className="mb-12 max-w-md mx-auto">
                  <RegistrationStats />
                </div>
              </ScrollAnimation>

              {/* CTA Buttons */}
              <ScrollAnimation animation="fade-up" delay={700}>
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                  <a
                    href={hackathonData.registrationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-modern bg-white text-maroon px-10 py-4 rounded-full font-bold text-xl hover:bg-white/90 hover:scale-105 transition-all duration-300 shadow-2xl animate-pulse-glow"
                  >
                    Register Now - FREE!
                  </a>
                  <button
                    onClick={() =>
                      document
                        .getElementById("about")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                    className="btn-modern glass border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 hover:scale-105 transition-all duration-300"
                  >
                    Learn More
                  </button>
                </div>
              </ScrollAnimation>

              {/* Key highlights */}
              <ScrollAnimation animation="fade-up" delay={800}>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-4xl mx-auto">
                  <div className="glass rounded-2xl p-6 text-center">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
                        />
                      </svg>
                    </div>
                    <h3 className="font-semibold mb-2">All Skill Levels</h3>
                    <p className="text-white/80 text-sm">
                      No experience required!
                    </p>
                  </div>

                  <div className="glass rounded-2xl p-6 text-center">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                        />
                      </svg>
                    </div>
                    <h3 className="font-semibold mb-2">Amazing Prizes</h3>
                    <p className="text-white/80 text-sm">
                      Gemini backpacks & more!
                    </p>
                  </div>

                  <div className="glass rounded-2xl p-6 text-center">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0h10m-10 0a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2"
                        />
                      </svg>
                    </div>
                    <h3 className="font-semibold mb-2">Free Everything</h3>
                    <p className="text-white/80 text-sm">
                      Food, drinks & workspace!
                    </p>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>
      </SectionGuard>

      <SectionGuard pageKey="hackathon" sectionKey="about">
        {/* About Section */}
        <section
          id="about"
          className="py-32 bg-gradient-to-b from-light-gray to-white relative overflow-hidden"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollAnimation animation="fade-up">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-content-primary mb-6">
                  Why Join Our <span className="gradient-text">Hackathon?</span>
                </h2>
                <p className="text-xl text-content-secondary max-w-3xl mx-auto">
                  More than just a coding competition - it&apos;s a celebration
                  of creativity, learning, and community.
                </p>
              </div>
            </ScrollAnimation>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {hackathonData.highlights.map((highlight, index) => (
                <ScrollAnimation
                  key={index}
                  animation="fade-up"
                  delay={index * 100}
                >
                  <div className="bg-white p-8 rounded-2xl shadow-lg card-hover border border-gray-100 text-center h-full">
                    <div className="w-16 h-16 bg-gradient-to-br from-maroon to-maroon-light rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <svg
                        className="w-8 h-8 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <p className="text-content-primary font-semibold text-lg">
                      {highlight}
                    </p>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </section>
      </SectionGuard>

      <SectionGuard pageKey="hackathon" sectionKey="schedule">
        {/* Schedule & Info Tabs */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollAnimation animation="fade-up">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-content-primary mb-6">
                  Event <span className="gradient-text">Details</span>
                </h2>
              </div>
            </ScrollAnimation>

            {/* Tab Navigation */}
            <ScrollAnimation animation="fade-up" delay={200}>
              <div className="flex flex-wrap justify-center mb-12 bg-gray-100 rounded-2xl p-2 max-w-2xl mx-auto">
                {[
                  { key: "schedule", label: "Schedule", icon: "clock" },
                  { key: "categories", label: "Categories", icon: "tag" },
                  { key: "prizes", label: "Prizes", icon: "trophy" },
                ].map((tab) => (
                  <button
                    key={tab.key}
                    onClick={() => setActiveTab(tab.key)}
                    className={`flex-1 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                      activeTab === tab.key
                        ? "bg-maroon text-white shadow-lg"
                        : "text-content-secondary hover:text-content-primary"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </ScrollAnimation>

            {/* Tab Content */}
            <div className="max-w-4xl mx-auto">
              {activeTab === "schedule" && (
                <ScrollAnimation animation="fade-up">
                  <div className="space-y-6">
                    {hackathonData.schedule.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-start space-x-6 p-6 bg-gradient-to-r from-gray-50 to-white rounded-2xl border border-gray-100 card-hover"
                      >
                        <div className="bg-maroon text-white px-4 py-2 rounded-xl font-bold text-sm whitespace-nowrap">
                          {item.time}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-content-primary mb-2">
                            {item.title}
                          </h3>
                          <p className="text-content-secondary">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </ScrollAnimation>
              )}

              {activeTab === "categories" && (
                <ScrollAnimation animation="fade-up">
                  <div className="grid md:grid-cols-2 gap-6">
                    {hackathonData.categories.map((category, index) => (
                      <div
                        key={index}
                        className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl border border-gray-100 card-hover"
                      >
                        <div className="flex items-center mb-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-maroon to-maroon-light rounded-xl flex items-center justify-center mr-4">
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
                                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                              />
                            </svg>
                          </div>
                          <h3 className="text-xl font-bold text-content-primary">
                            {category.title}
                          </h3>
                        </div>
                        <p className="text-content-secondary">
                          {category.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </ScrollAnimation>
              )}

              {activeTab === "prizes" && (
                <ScrollAnimation animation="fade-up">
                  <div className="space-y-6">
                    {hackathonData.prizes.map((prize, index) => (
                      <div
                        key={index}
                        className={`p-8 rounded-2xl border-2 card-hover ${
                          index === 0
                            ? "bg-gradient-to-r from-yellow-50 to-orange-50 border-yellow-300"
                            : "bg-gradient-to-r from-gray-50 to-white border-gray-200"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="text-2xl font-bold text-content-primary mb-2">
                              {prize.place}
                            </h3>
                            <p className="text-lg font-semibold text-maroon mb-1">
                              {prize.prize}
                            </p>
                            <p className="text-content-secondary">
                              {prize.description}
                            </p>
                          </div>
                          <div
                            className={`w-16 h-16 rounded-full flex items-center justify-center ${
                              index === 0 ? "bg-yellow-400" : "bg-gray-300"
                            }`}
                          >
                            <svg
                              className="w-8 h-8 text-white"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </ScrollAnimation>
              )}
            </div>
          </div>
        </section>
      </SectionGuard>

      <SectionGuard pageKey="hackathon" sectionKey="sponsors">
        {/* Sponsors & Partners */}
        <section className="py-24 bg-gradient-to-b from-light-gray to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollAnimation animation="fade-up">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-content-primary mb-6">
                  Our <span className="gradient-text">Sponsors</span>
                </h2>
                <p className="text-xl text-content-secondary">
                  Made possible by our amazing sponsors
                </p>
              </div>
            </ScrollAnimation>

            {/* Sponsors */}
            <ScrollAnimation animation="fade-up" delay={200}>
              <div className="max-w-md mx-auto">
                {hackathonData.sponsors.map((sponsor, index) => (
                  <div
                    key={index}
                    className="bg-white p-12 rounded-3xl shadow-xl text-center card-hover"
                  >
                    <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <span className="text-white font-bold text-2xl">MLH</span>
                    </div>
                    <h4 className="text-xl font-bold text-content-primary mb-2">
                      {sponsor.name}
                    </h4>
                    <p className="text-sm text-maroon font-semibold mb-3">
                      {sponsor.type}
                    </p>
                    <p className="text-content-secondary">
                      {sponsor.description}
                    </p>
                  </div>
                ))}
              </div>
            </ScrollAnimation>
          </div>
        </section>
      </SectionGuard>

      <SectionGuard pageKey="hackathon" sectionKey="faq">
        {/* FAQ Section */}
        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollAnimation animation="fade-up">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-content-primary mb-6">
                  Frequently Asked{" "}
                  <span className="gradient-text">Questions</span>
                </h2>
              </div>
            </ScrollAnimation>

            <div className="space-y-6">
              {hackathonData.faq.map((item, index) => (
                <ScrollAnimation
                  key={index}
                  animation="fade-up"
                  delay={index * 100}
                >
                  <div className="bg-gradient-to-r from-gray-50 to-white p-8 rounded-2xl border border-gray-100 card-hover">
                    <h3 className="text-xl font-bold text-content-primary mb-4">
                      {item.question}
                    </h3>
                    <p className="text-content-secondary leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </ScrollAnimation>
              ))}
            </div>

            {/* Final CTA */}
            <ScrollAnimation animation="fade-up" delay={600}>
              <div className="text-center mt-16 p-12 bg-gradient-to-r from-maroon to-maroon-light rounded-3xl text-white">
                <h3 className="text-3xl font-bold mb-4">
                  Ready to Build Something Amazing?
                </h3>
                <p className="text-xl mb-8 text-white/90">
                  Join us for an unforgettable day of coding, creativity, and
                  community!
                </p>
                <a
                  href={hackathonData.registrationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-modern bg-white text-maroon px-10 py-4 rounded-full font-bold text-xl hover:bg-white/90 hover:scale-105 transition-all duration-300 shadow-2xl"
                >
                  Register Now - It&apos;s Free!
                </a>
              </div>
            </ScrollAnimation>
          </div>
        </section>
      </SectionGuard>

      <Footer />
      <FloatingActionButton />
    </div>
  );
}
