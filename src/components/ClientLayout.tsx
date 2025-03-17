'use client';

import dynamic from 'next/dynamic';

const ServiceWorkerRegistration = dynamic(() => import('./ServiceWorkerRegistration'), { ssr: false });

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ServiceWorkerRegistration />
      {children}
    </>
  );
} 