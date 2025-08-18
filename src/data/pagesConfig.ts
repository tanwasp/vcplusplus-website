/**
 * Configuration file for enabling/disabling website pages and their sections
 * Set any page to false to hide it from navigation and disable routing
 * Set any section to false to hide it from the page
 */

export interface SectionConfig {
  key: string;
  title: string;
  enabled: boolean;
  description?: string;
}

export interface PageConfig {
  key: string;
  title: string;
  path: string;
  enabled: boolean;
  description?: string;
  sections?: SectionConfig[];
}

export const pagesConfig: PageConfig[] = [
  {
    key: "home",
    title: "Home",
    path: "/",
    enabled: true,
    description: "Homepage with hero section and overview",
    sections: [
      {
        key: "hero",
        title: "Hero Section",
        enabled: true,
        description: "Main banner with club name and tagline",
      },
      {
        key: "features",
        title: "What We Offer",
        enabled: true,
        description: "Features/offerings section",
      },
      {
        key: "upcoming-events",
        title: "Upcoming Events Preview",
        enabled: false,
        description: "Preview of upcoming events",
      },
    ],
  },
  {
    key: "about",
    title: "About",
    path: "/about",
    enabled: true,
    description: "About us, mission, and leadership team",
    sections: [
      {
        key: "hero",
        title: "Hero Section",
        enabled: true,
        description: "About page header",
      },
      {
        key: "mission",
        title: "Our Mission",
        enabled: false,
        description: "Mission statement and values",
      },
      {
        key: "leadership",
        title: "Leadership Team",
        enabled: true,
        description: "Team member profiles",
      },
      {
        key: "join-cta",
        title: "Join Us CTA",
        enabled: false,
        description: "Call-to-action to join the club",
      },
    ],
  },
  {
    key: "events",
    title: "Events",
    path: "/events",
    enabled: false,
    description: "Upcoming and past events, workshops, hackathons",
    sections: [
      {
        key: "hero",
        title: "Hero Section",
        enabled: true,
        description: "Events page header",
      },
      {
        key: "upcoming-events",
        title: "Upcoming Events",
        enabled: true,
        description: "List of upcoming events",
      },
      {
        key: "event-calendar",
        title: "Event Calendar",
        enabled: true,
        description: "Interactive calendar (coming soon)",
      },
      {
        key: "past-events",
        title: "Past Events",
        enabled: true,
        description: "Archive of past events",
      },
      {
        key: "newsletter-cta",
        title: "Newsletter Signup",
        enabled: true,
        description: "Email subscription CTA",
      },
    ],
  },
  {
    key: "projects",
    title: "Projects",
    path: "/projects",
    enabled: false,
    description: "Member projects and collaborative work",
    sections: [
      {
        key: "hero",
        title: "Hero Section",
        enabled: true,
        description: "Projects page header",
      },
      {
        key: "featured-projects",
        title: "Featured Projects",
        enabled: true,
        description: "Highlighted member projects",
      },
      {
        key: "all-projects",
        title: "All Projects",
        enabled: true,
        description: "Complete project portfolio with filters",
      },
      {
        key: "project-cta",
        title: "Start Your Project CTA",
        enabled: true,
        description: "Encourage new project proposals",
      },
    ],
  },
  {
    key: "resources",
    title: "Resources",
    path: "/resources",
    enabled: false,
    description: "Learning resources, tutorials, and tools",
    sections: [
      {
        key: "hero",
        title: "Hero Section",
        enabled: true,
        description: "Resources page header",
      },
      {
        key: "search-filters",
        title: "Search & Filters",
        enabled: true,
        description: "Resource search and filtering tools",
      },
      {
        key: "resources-grid",
        title: "Resources Grid",
        enabled: true,
        description: "Main resources display",
      },
      {
        key: "contribute-cta",
        title: "Contribute Resources CTA",
        enabled: true,
        description: "Encourage resource contributions",
      },
    ],
  },
  {
    key: "contact",
    title: "Contact",
    path: "/contact",
    enabled: true,
    description: "Contact information and contact form",
    sections: [
      {
        key: "hero",
        title: "Hero Section",
        enabled: true,
        description: "Contact page header",
      },
      {
        key: "contact-info",
        title: "Contact Information",
        enabled: true,
        description: "Meeting times, location, email",
      },
      {
        key: "contact-form",
        title: "Contact Form",
        enabled: true,
        description: "Message submission form",
      },
      {
        key: "leadership-contact",
        title: "Leadership Contact",
        enabled: false,
        description: "Direct contact info for team members",
      },
      {
        key: "faq",
        title: "FAQ Section",
        enabled: true,
        description: "Frequently asked questions",
      },
    ],
  },
];

/**
 * Get all enabled pages
 */
export const getEnabledPages = (): PageConfig[] => {
  return pagesConfig.filter((page) => page.enabled);
};

/**
 * Check if a specific page is enabled
 */
export const isPageEnabled = (pageKey: string): boolean => {
  const page = pagesConfig.find((p) => p.key === pageKey);
  return page ? page.enabled : false;
};

/**
 * Get navigation items (excludes home page)
 */
export const getNavigationItems = (): PageConfig[] => {
  return getEnabledPages().filter((page) => page.key !== "home");
};

/**
 * Get page configuration by key
 */
export const getPageConfig = (pageKey: string): PageConfig | undefined => {
  return pagesConfig.find((p) => p.key === pageKey);
};

/**
 * Check if a specific section is enabled for a page
 */
export const isSectionEnabled = (
  pageKey: string,
  sectionKey: string
): boolean => {
  const page = getPageConfig(pageKey);
  if (!page || !page.enabled || !page.sections) {
    return false;
  }

  const section = page.sections.find((s) => s.key === sectionKey);
  return section ? section.enabled : false;
};

/**
 * Get all enabled sections for a page
 */
export const getEnabledSections = (pageKey: string): SectionConfig[] => {
  const page = getPageConfig(pageKey);
  if (!page || !page.enabled || !page.sections) {
    return [];
  }

  return page.sections.filter((section) => section.enabled);
};

/**
 * Get section configuration for a specific page and section
 */
export const getSectionConfig = (
  pageKey: string,
  sectionKey: string
): SectionConfig | undefined => {
  const page = getPageConfig(pageKey);
  if (!page || !page.sections) {
    return undefined;
  }

  return page.sections.find((s) => s.key === sectionKey);
};
