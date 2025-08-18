'use client';

import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import PageGuard from '../components/PageGuard';
import SectionGuard from '../components/SectionGuard';
import FAQCard from '../components/FAQCard';
import ContactInfoItem from '../components/ContactInfoItem';
import SocialMediaLink from '../components/SocialMediaLink';
import { siteConfig } from '../../data/siteConfig';
import { leadership } from '../../data/leadership';
import { faqItems } from '../../data/faq';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    interest: 'general'
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We&apos;ll get back to you soon.');
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
      interest: 'general'
    });
  };

  return (
    <PageGuard pageKey="contact">
      <div className="min-h-screen bg-background">
      <Navigation currentPage="contact" />

      <SectionGuard pageKey="contact" sectionKey="hero">
        {/* Hero Section */}
        <section className="bg-maroon text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Have questions about VC++? Want to join us? We&apos;d love to hear from you!
            </p>
          </div>
        </div>
        </section>
      </SectionGuard>

      <SectionGuard pageKey="contact" sectionKey="contact-info">
        {/* Contact Info & Form */}
        <section className="py-20 bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Contact Information</h2>
              
              <div className="space-y-6">
                <ContactInfoItem
                  icon={
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  }
                  title="Meeting Location"
                  content={siteConfig.contact.location}
                />

                <ContactInfoItem
                  icon={
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  }
                  title="Meeting Time"
                  content={siteConfig.contact.meetingTime}
                />

                <ContactInfoItem
                  icon={
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  }
                  title="Email"
                  content={
                    <a href={`mailto:${siteConfig.contact.email}`} className="text-maroon hover:text-maroon/80">
                      {siteConfig.contact.email}
                    </a>
                  }
                />
              </div>

              {/* Social Media */}
              {/* Social Media */}
              {siteConfig.socialMedia.filter(social => social.enabled).length > 0 && (
                <div className="mt-12">
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">Connect With Us</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {siteConfig.socialMedia
                      .filter(social => social.enabled)
                      .map((social) => (
                        <SocialMediaLink
                          key={social.name}
                          name={social.name}
                          url={social.url}
                          icon={social.icon}
                          bgColor={social.bgColor}
                          displayText={social.displayText}
                        />
                      ))}
                  </div>
                </div>
              )}
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Send us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-900 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-maroon text-gray-900 placeholder:text-gray-500"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-maroon text-gray-900 placeholder:text-gray-500"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="interest" className="block text-sm font-medium text-gray-900 mb-2">
                    What are you interested in?
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    value={formData.interest}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-maroon text-gray-900 placeholder:text-gray-500"
                  >
                    <option value="general">General Inquiry</option>
                    <option value="joining">Joining the Club</option>
                    <option value="events">Event Information</option>
                    <option value="projects">Project Collaboration</option>
                    <option value="speaking">Speaking Opportunity</option>
                    <option value="sponsorship">Sponsorship</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-900 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-maroon text-gray-900 placeholder:text-gray-500"
                    placeholder="Brief subject of your message"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-900 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-maroon text-gray-900 placeholder:text-gray-500"
                    placeholder="Tell us more about your inquiry..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-maroon text-white py-3 px-6 rounded-lg font-semibold hover:bg-maroon/90 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        </section>
      </SectionGuard>

      <SectionGuard pageKey="contact" sectionKey="leadership-contact">
        {/* Leadership Contact */}
      <section className="py-20 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Contact Leadership</h2>
            <p className="text-xl text-gray-600">Reach out directly to our team members</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {leadership.map((member) => (
              <div key={member.id} className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="w-16 h-16 bg-maroon rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-xl font-bold text-white">{member.initials}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-maroon font-medium mb-3">{member.position}</p>
                
                <div className="space-y-2">
                  {member.email && (
                    <a
                      href={`mailto:${member.email}`}
                      className="block text-sm text-gray-600 hover:text-maroon"
                    >
                      Email
                    </a>
                  )}
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-sm text-gray-600 hover:text-maroon"
                    >
                      LinkedIn
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        </section>
      </SectionGuard>

      <SectionGuard pageKey="contact" sectionKey="faq">
        {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-6">
            {faqItems.map((faq) => (
              <FAQCard 
                key={faq.id}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </div>
        </div>
        </section>
      </SectionGuard>

      <Footer />
      </div>
    </PageGuard>
  );
}