import { siteConfig } from '../../data/siteConfig';
import { getEnabledPages } from '../../data/pagesConfig';

export default function Footer() {
  const enabledSocialMedia = siteConfig.socialMedia.filter(social => social.enabled);
  const enabledPages = getEnabledPages().filter(page => page.key !== 'home');
  
  // Filter quick links to only include enabled pages
  const enabledQuickLinks = siteConfig.footer.quickLinks.links.filter(link => {
    const pageKey = link.url.replace('/', '') || 'home';
    return link.enabled && enabledPages.some(page => page.key === pageKey || page.path === link.url);
  });
  
  const quickLinksEnabled = siteConfig.footer.quickLinks.enabled && enabledQuickLinks.length > 0;
  const connectEnabled = siteConfig.footer.connect.enabled && (
    (siteConfig.footer.connect.useFromSocialMedia && enabledSocialMedia.length > 0) ||
    siteConfig.footer.connect.additionalLinks.length > 0
  );

  const gridCols = [
    true, // Site info always shown
    quickLinksEnabled,
    connectEnabled,
    true // Contact always shown
  ].filter(Boolean).length;

  const gridClass = `md:grid-cols-${gridCols}`;

  return (
    <footer className="bg-dark-gray text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid ${gridClass} gap-8`}>
          <div>
            <h3 className="text-xl font-bold mb-4">{siteConfig.siteName}</h3>
            <p className="text-white/80">
              Building the next generation of programmers and innovators
            </p>
          </div>
          
          {quickLinksEnabled && (
            <div>
              <h4 className="font-semibold mb-4">{siteConfig.footer.quickLinks.title}</h4>
              <ul className="space-y-2 text-white/70">
                {enabledQuickLinks.map((link, index) => (
                  <li key={index}>
                    <a href={link.url} className="hover:text-white transition-colors">
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          {connectEnabled && (
            <div>
              <h4 className="font-semibold mb-4">{siteConfig.footer.connect.title}</h4>
              <ul className="space-y-2 text-white/70">
                {siteConfig.footer.connect.useFromSocialMedia && 
                  enabledSocialMedia.map((social, index) => (
                    <li key={index}>
                      <a 
                        href={social.url} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="hover:text-white transition-colors"
                      >
                        {social.name}
                      </a>
                    </li>
                  ))
                }
                {siteConfig.footer.connect.additionalLinks.map((link, index) => (
                  <li key={`additional-${index}`}>
                    <a 
                      href={link.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="hover:text-white transition-colors"
                    >
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
          
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