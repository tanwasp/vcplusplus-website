'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { isPageEnabled } from '../../data/pagesConfig';

interface PageGuardProps {
  pageKey: string;
  children: React.ReactNode;
}

/**
 * PageGuard component that redirects to home if the page is disabled
 * Wrap any page component with this to enable/disable it via configuration
 */
export default function PageGuard({ pageKey, children }: PageGuardProps) {
  const router = useRouter();

  useEffect(() => {
    if (!isPageEnabled(pageKey)) {
      // Redirect to home page if this page is disabled
      router.replace('/');
    }
  }, [pageKey, router]);

  // Don't render the page if it's disabled
  if (!isPageEnabled(pageKey)) {
    return null;
  }

  return <>{children}</>;
}