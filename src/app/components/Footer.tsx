import { siteConfig } from "../../data/siteConfig";
import { getEnabledPages } from "../../data/pagesConfig";

export default function Footer() {
  const enabledSocialMedia = siteConfig.socialMedia.filter(
    (social) => social.enabled
  );
  const enabledPages = getEnabledPages().filter((page) => page.key !== "home");

  // Filter quick links to only include enabled pages
  const enabledQuickLinks = siteConfig.footer.quickLinks.links.filter(
    (link) => {
      const pageKey = link.url.replace("/", "") || "home";
      return (
        link.enabled &&
        enabledPages.some(
          (page) => page.key === pageKey || page.path === link.url
        )
      );
    }
  );

  const quickLinksEnabled =
    siteConfig.footer.quickLinks.enabled && enabledQuickLinks.length > 0;
  const connectEnabled =
    siteConfig.footer.connect.enabled &&
    ((siteConfig.footer.connect.useFromSocialMedia &&
      enabledSocialMedia.length > 0) ||
      siteConfig.footer.connect.additionalLinks.length > 0);

  const gridCols = [
    true, // Site info always shown
    quickLinksEnabled,
    connectEnabled,
    true, // Contact always shown
  ].filter(Boolean).length;

  const gridClass = `md:grid-cols-${gridCols}`;

  return (
    <footer className="bg-gradient-to-br from-dark-gray via-dark-gray to-maroon-dark text-white py-16 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-maroon rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-maroon-light rounded-full blur-3xl animate-float animate-delay-300"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid ${gridClass} gap-12`}>
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-maroon to-maroon-light rounded-xl flex items-center justify-center">
                <span className="text-xl font-bold">VC</span>
              </div>
              <h3 className="text-2xl font-bold">{siteConfig.siteName}</h3>
            </div>
            <p className="text-white/80 leading-relaxed max-w-sm">
              Building the next generation of programmers and innovators through
              collaboration, learning, and innovation.
            </p>
            <div className="flex space-x-4">
              {enabledSocialMedia.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-maroon hover:scale-110 transition-all duration-300 group"
                >
                  <span className="text-sm font-semibold group-hover:text-white">
                    {social.displayText || social.name.charAt(0)}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {quickLinksEnabled && (
            <div>
              <h4 className="font-bold text-lg mb-6 text-white">
                {siteConfig.footer.quickLinks.title}
              </h4>
              <ul className="space-y-3">
                {enabledQuickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.url}
                      className="text-white/70 hover:text-white hover:translate-x-1 transition-all duration-300 inline-flex items-center group"
                    >
                      <span className="w-1 h-1 bg-maroon rounded-full mr-3 group-hover:w-2 transition-all duration-300"></span>
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {connectEnabled && (
            <div>
              <h4 className="font-bold text-lg mb-6 text-white">
                {siteConfig.footer.connect.title}
              </h4>
              <ul className="space-y-3">
                {siteConfig.footer.connect.useFromSocialMedia &&
                  enabledSocialMedia.map((social, index) => (
                    <li key={index}>
                      <a
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/70 hover:text-white hover:translate-x-1 transition-all duration-300 inline-flex items-center group"
                      >
                        <span className="w-1 h-1 bg-maroon rounded-full mr-3 group-hover:w-2 transition-all duration-300"></span>
                        {social.name}
                      </a>
                    </li>
                  ))}
                {siteConfig.footer.connect.additionalLinks.map(
                  (link, index) => (
                    <li key={`additional-${index}`}>
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/70 hover:text-white hover:translate-x-1 transition-all duration-300 inline-flex items-center group"
                      >
                        <span className="w-1 h-1 bg-maroon rounded-full mr-3 group-hover:w-2 transition-all duration-300"></span>
                        {link.text}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>
          )}

          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Contact</h4>
            <div className="space-y-3 text-white/80">
              <div className="flex items-center space-x-3">
                <svg
                  className="w-5 h-5 text-maroon"
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
                <span>{siteConfig.contact.meetingTime}</span>
              </div>
              <div className="flex items-center space-x-3">
                <svg
                  className="w-5 h-5 text-maroon"
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
                <span>{siteConfig.contact.location}</span>
              </div>
              <div className="flex items-center space-x-3">
                <svg
                  className="w-5 h-5 text-maroon"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="hover:text-white transition-colors duration-300 hover:underline"
                >
                  {siteConfig.contact.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 text-center">
          <p className="text-white/60">
            &copy; 2024 {siteConfig.siteName} Computer Science Club. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
