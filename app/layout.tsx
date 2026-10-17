import type { Metadata } from "next";
import { Barlow_Condensed, DM_Sans } from "next/font/google";
import "./globals.css";

const displayFont = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-display",
});

const bodyFont = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Motorcycle MOTs, Servicing & Repairs in Paignton | RN Motorcycles",
  description: "Motorcycle MOTs, servicing and repairs in Paignton, Torbay. Contact RN Motorcycles at Church Street Garage for an enquiry.",
  robots: { index: false, follow: false },
};
const schema = {
  "@context": "https://schema.org",
  "@type": "MotorcycleRepair",
  name: "N Motorcycle Ltd",
  telephone: "+441803866064",
  address: {
    "@type": "PostalAddress",
    streetAddress: "The Garage, Church Street",
    addressLocality: "Paignton",
    postalCode: "TQ3 3AF",
    addressCountry: "GB",
  },
  areaServed: ["Paignton", "Torbay", "South Devon"],
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB" className={`${displayFont.variable} ${bodyFont.variable}`}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
        {children}
      </body>
    </html>
  );
}
