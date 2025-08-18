import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import SectionGuard from "./components/SectionGuard";
import PageOverflow from "./components/PageOverflow";
import { siteConfig } from "../data/siteConfig";
import { upcomingEvents } from "../data/events";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <PageOverflow topColor="#8A0933" bottomColor="#333333" />
      <Navigation currentPage="home" />

      <SectionGuard pageKey="home" sectionKey="hero">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-maroon to-maroon/80 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              {siteConfig.siteName}
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              {siteConfig.tagline}
            </p>
            <p className="text-lg md:text-xl text-white/90 mb-12 max-w-4xl mx-auto">
              {siteConfig.description}
            </p>
          </div>
        </div>
        </section>
      </SectionGuard>

      <SectionGuard pageKey="home" sectionKey="features">
        {/* Features Section */}
      <section className="py-20 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What We Offer
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore opportunities to grow your programming skills and connect
              with fellow developers
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
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
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
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
                  className="bg-white p-8 rounded-lg shadow-md text-center"
                >
                  <div className="w-16 h-16 bg-maroon rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      {icons[offering.icon as keyof typeof icons]}
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {offering.title}
                  </h3>
                  <p className="text-gray-600">{offering.description}</p>
                </div>
              );
            })}
          </div>
        </div>
        </section>
      </SectionGuard>

      <SectionGuard pageKey="home" sectionKey="upcoming-events">
        {/* Upcoming Events */}
      <section className="py-20 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Upcoming Events
            </h2>
            <p className="text-xl text-white">
              Don&apos;t miss out on our latest activities
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {upcomingEvents.slice(0, 2).map((event) => (
              <div
                key={event.id}
                className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm"
              >
                <div className="flex items-start">
                  <div className="bg-maroon text-white p-3 rounded-lg mr-4">
                    <span className="text-sm font-semibold">
                      {new Date(event.date)
                        .toLocaleDateString("en", { month: "short" })
                        .toUpperCase()}
                    </span>
                    <div className="text-xl font-bold">
                      {new Date(event.date).getDate()}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {event.title}
                    </h3>
                    <p className="text-gray-600 mb-2">{event.description}</p>
                    <p className="text-sm text-gray-600">
                      {event.time} - {event.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
        </section>
      </SectionGuard>

      <Footer />
    </div>
  );
}
