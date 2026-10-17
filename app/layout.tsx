import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "Motorcycle MOTs, Servicing & Repairs in Paignton | RN Motorcycles", description: "Motorcycle MOTs, servicing and repairs in Paignton, Torbay. Contact RN Motorcycles at Church Street Garage for an enquiry.", robots: {index: false, follow: false} };
const schema = {"@context": "https://schema.org", "@type": "MotorcycleRepair", "name": "RN Motorcycles LTD", "telephone": "+441803866064", "address": {"@type": "PostalAddress", "streetAddress": "Church Street Garage, Church Street", "addressLocality": "Paignton", "postalCode": "TQ3 3AF", "addressCountry": "GB"}, "areaServed": ["Paignton", "Torbay", "South Devon"]};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>) { return <html lang="en-GB"><body><script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(schema)}}/>{children}</body></html>; }
