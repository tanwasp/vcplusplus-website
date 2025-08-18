import { siteConfig } from '../../data/siteConfig';

export default function Footer() {
  return (
    <footer className="bg-dark-gray text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">{siteConfig.siteName}</h3>
            <p className="text-white/80">
              Building the next generation of programmers and innovators
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-white/70">
              <li><a href="/about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="/events" className="hover:text-white transition-colors">Events</a></li>
              <li><a href="/projects" className="hover:text-white transition-colors">Projects</a></li>
              <li><a href="/resources" className="hover:text-white transition-colors">Resources</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <ul className="space-y-2 text-white/70">
              <li><a href={siteConfig.contact.discord} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Discord</a></li>
              <li><a href={siteConfig.contact.github} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a></li>
              <li><a href={siteConfig.contact.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a></li>
              <li><a href={siteConfig.contact.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Instagram</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <p className="text-white/80">
              Meeting: {siteConfig.contact.meetingTime}<br/>
              Location: {siteConfig.contact.location}<br/>
              Email: <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-white transition-colors">{siteConfig.contact.email}</a>
            </p>
          </div>
        </div>
        <div className="border-t border-gray-600 mt-8 pt-8 text-center text-white/60">
          <p>&copy; 2024 {siteConfig.siteName} Computer Science Club. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}