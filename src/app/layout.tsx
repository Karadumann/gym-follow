import { Inter } from "next/font/google";
import "./globals.css";
import { metadata } from "./metadata";
import dynamic from "next/dynamic";

const ServiceWorkerRegistration = dynamic(() => import("../components/ServiceWorkerRegistration"), { ssr: false });

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export { metadata };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/icon-192x192.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="mobile-web-app-capable" content="yes" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <ServiceWorkerRegistration />
        {children}
      </body>
    </html>
  );
}
