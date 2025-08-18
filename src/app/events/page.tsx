import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import PageGuard from "../components/PageGuard";
import SectionGuard from "../components/SectionGuard";
import { upcomingEvents, pastEvents } from "../../data/events";
import { getEventTypeColor } from "../../utils/colors";

export default function Events() {
  return (
    <PageGuard pageKey="events">
      <div className="min-h-screen bg-background">
      <Navigation currentPage="events" />

      <SectionGuard pageKey="events" sectionKey="hero">
        {/* Hero Section */}
        <section className="bg-maroon text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Events</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Join us for workshops, hackathons, and tech talks designed to
              enhance your programming skills
            </p>
          </div>
        </div>
        </section>
      </SectionGuard>

      <SectionGuard pageKey="events" sectionKey="upcoming-events">
        {/* Upcoming Events */}
      <section className="py-20 bg-maroon">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Upcoming Events
            </h2>
            <p className="text-xl text-white">
              Don&apos;t miss out on these exciting opportunities
            </p>
          </div>

          <div className="grid gap-8">
            {upcomingEvents.map((event) => (
              <div
                key={event.id}
                className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="flex-1">
                    <div className="flex items-start mb-4">
                      <div className="bg-maroon text-white p-3 rounded-lg mr-4 flex-shrink-0">
                        <div className="text-center">
                          <div className="text-sm font-semibold">
                            {new Date(event.date)
                              .toLocaleDateString("en", { month: "short" })
                              .toUpperCase()}
                          </div>
                          <div className="text-xl font-bold">
                            {new Date(event.date).getDate()}
                          </div>
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="text-xl font-semibold text-gray-900">
                            {event.title}
                          </h3>
                          <span
                            className={`px-2 py-1 rounded-full text-xs font-medium ${getEventTypeColor(
                              event.type
                            )}`}
                          >
                            {event.type}
                          </span>
                        </div>
                        <p className="text-gray-600 mb-2">
                          {event.description}
                        </p>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-gray-600">
                          <span>🕕 {event.time}</span>
                          <span>📍 {event.location}</span>
                          {event.spots && (
                            <span>👥 {event.spots} spots available</span>
                          )}
                        </div>
                        {event.prerequisites &&
                          event.prerequisites.length > 0 && (
                            <div className="mt-2">
                              <span className="text-sm font-medium text-gray-900">
                                Prerequisites:{" "}
                              </span>
                              <span className="text-sm text-gray-600">
                                {event.prerequisites.join(", ")}
                              </span>
                            </div>
                          )}
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 md:mt-0 md:ml-6">
                    {event.registrationLink && event.isRegistrationOpen ? (
                      <a
                        href={event.registrationLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-maroon text-white px-6 py-2 rounded-lg font-medium hover:bg-maroon/90 transition-colors w-full md:w-auto inline-block text-center"
                      >
                        Register Now
                      </a>
                    ) : (
                      <span className="bg-gray-200 text-gray-600 px-6 py-2 rounded-lg font-medium w-full md:w-auto inline-block text-center">
                        Registration Closed
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        </section>
      </SectionGuard>

      <SectionGuard pageKey="events" sectionKey="event-calendar">
        {/* Event Calendar */}
      <section className="py-20 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Event Calendar
            </h2>
            <p className="text-xl text-gray-600">
              View our full schedule of activities
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-maroon/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-maroon"
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
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Interactive Calendar Coming Soon
              </h3>
              <p className="text-gray-600">
                We&apos;re working on an interactive calendar to help you stay
                updated with all our events.
              </p>
            </div>
          </div>
        </div>
        </section>
      </SectionGuard>

      <SectionGuard pageKey="events" sectionKey="past-events">
        {/* Past Events */}
      <section className="py-20 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Past Events
            </h2>
            <p className="text-xl text-gray-600">
              Check out what we&apos;ve been up to
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {pastEvents.map((event) => (
              <div
                key={event.id}
                className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm"
              >
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {event.title}
                  </h3>
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${getEventTypeColor(
                      event.type
                    )}`}
                  >
                    {event.type}
                  </span>
                </div>
                <p className="text-gray-600 mb-2">{event.description}</p>
                <p className="text-sm text-gray-600">
                  {new Date(event.date).toLocaleDateString("en", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
              </div>
            ))}
          </div>
        </div>
        </section>
      </SectionGuard>

      <SectionGuard pageKey="events" sectionKey="newsletter-cta">
        {/* CTA Section */}
      <section className="py-20 bg-maroon text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Stay Updated</h2>
          <p className="text-xl mb-8">
            Join our mailing list to receive notifications about upcoming events
            and workshops
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-maroon px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
        </section>
      </SectionGuard>

      <Footer />
      </div>
    </PageGuard>
  );
}
