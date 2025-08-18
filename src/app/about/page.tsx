import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import PageGuard from "../components/PageGuard";
import SectionGuard from "../components/SectionGuard";
import { siteConfig } from "../../data/siteConfig";
import { leadership } from "../../data/leadership";

export default function About() {
  return (
    <PageGuard pageKey="about">
      <div className="min-h-screen bg-background">
        <Navigation currentPage="about" />

        <SectionGuard pageKey="about" sectionKey="hero">
          {/* Hero Section */}
          <section className="bg-maroon text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                About {siteConfig.siteName}
              </h1>
              <p className="text-xl max-w-3xl mx-auto">
                Building a community of passionate programmers and innovators
              </p>
            </div>
          </div>
          </section>
        </SectionGuard>

        <SectionGuard pageKey="about" sectionKey="mission">
          {/* Mission Section */}
        <section className="py-20 bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">
                  Our Mission
                </h2>
                <p className="text-lg text-white mb-6">
                  VC++ Computer Science Club is dedicated to fostering a
                  collaborative learning environment where students can enhance
                  their programming skills, explore new technologies, and build
                  meaningful connections within the tech community.
                </p>
                <p className="text-lg text-white mb-6">
                  We believe that learning programming is best done through
                  hands-on experience, peer collaboration, and real-world
                  projects. Our club provides the platform for students to grow
                  from beginners to confident developers.
                </p>
                <div className="flex flex-wrap gap-4">
                  <span className="bg-white text-maroon px-4 py-2 rounded-full font-medium">
                    Learning
                  </span>
                  <span className="bg-white text-maroon px-4 py-2 rounded-full font-medium">
                    Innovation
                  </span>
                  <span className="bg-white text-maroon px-4 py-2 rounded-full font-medium">
                    Community
                  </span>
                  <span className="bg-white text-maroon px-4 py-2 rounded-full font-medium">
                    Growth
                  </span>
                </div>
              </div>
              <div className="bg-light-gray p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  What We Do
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-maroon rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-600">
                      Weekly coding workshops and tutorials
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-maroon rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-600">
                      Competitive programming events
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-maroon rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-600">
                      Industry guest speakers and tech talks
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-maroon rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-600">
                      Collaborative project development
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-maroon rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-600">
                      Career guidance and networking
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          </section>
        </SectionGuard>

        <SectionGuard pageKey="about" sectionKey="leadership">
          {/* Leadership Team */}
        <section className="py-20 bg-light-gray">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Leadership Team
              </h2>
              <p className="text-xl text-gray-600">
                Meet the people leading VC++
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {leadership.slice(0, 3).map((member) => (
                <div
                  key={member.id}
                  className="bg-white p-6 rounded-lg shadow-sm text-center"
                >
                  <div className="w-24 h-24 bg-maroon rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">
                      {member.initials}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-maroon font-medium mb-2">
                    {member.position}
                  </p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
          </section>
        </SectionGuard>

        <SectionGuard pageKey="about" sectionKey="join-cta">
          {/* Join Us Section */}
        <section className="py-20 bg-white border-b border-gray-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Join?
            </h2>
            <p className="text-xl text-white mb-8">
              Whether you&apos;re a beginner or an experienced programmer, VC++
              welcomes all skill levels. Join us and be part of a community
              that&apos;s shaping the future of technology.
            </p>
            <div className="text-center">
              <button className="border-2 border-maroon text-maroon px-8 py-3 rounded-lg font-semibold hover:bg-maroon hover:text-white transition-colors">
                Contact Us
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
