'use client';

import { isSectionEnabled } from '../../data/pagesConfig';

interface SectionGuardProps {
  pageKey: string;
  sectionKey: string;
  children: React.ReactNode;
}

/**
 * SectionGuard component that conditionally renders sections based on configuration
 * Wrap any section with this component to enable/disable it via pagesConfig
 */
export default function SectionGuard({ pageKey, sectionKey, children }: SectionGuardProps) {
  // Don't render the section if it's disabled
  if (!isSectionEnabled(pageKey, sectionKey)) {
    return null;
  }

  return <>{children}</>;
}