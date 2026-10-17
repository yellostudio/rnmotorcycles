import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../components/site-header";
import ContactForm from "./form";

const address = "The Garage, Church Street, Paignton, TQ3 3AF";
const query = encodeURIComponent(address);
const directions = `https://www.google.com/maps/dir/?api=1&destination=${query}&travelmode=driving`;
const map = `https://www.google.com/maps?q=${query}&output=embed`;
export const metadata: Metadata = {
  title: "Contact & Directions | Motorcycle Garage in Paignton | RN Motorcycles",
  description: "Contact RN Motorcycles on 01803 866064 or get directions to The Garage, Church Street, Paignton, TQ3 3AF. Enquire about motorcycle MOTs, servicing and repairs.",
};
export default function Contact() {
  return <>
    <SiteHeader/>
    <main>
      <section className="innerhero contact-hero"><div className="container">
        <p className="eyebrow">Find our workshop · Paignton, Devon</p>
        <h1>LET&apos;S GET YOUR BIKE SORTED.</h1>
        <p>Questions about an MOT, service or repair? Give us a call, send an enquiry or come and find us in Paignton.</p>
        <div className="actions"><a className="btn" href="tel:+441803866064">Call 01803 866064 ↗</a><a className="btn ghost" href={directions} target="_blank" rel="noopener noreferrer">Get directions ↗</a></div>
      </div></section>
      <section className="section contact-section"><div className="container contact-page-grid">
        <div className="contact-location">
          <p className="eyebrow">Where to find us</p>
          <h2>VISIT THE GARAGE.</h2>
          <div className="contact-info-card">
            <h3>N Motorcycle Ltd</h3>
            <address>The Garage<br/>Church Street<br/>Paignton<br/>TQ3 3AF</address>
            <div className="contact-info-row"><span>Phone</span><a href="tel:+441803866064">01803 866064 ↗</a></div>
            <div className="contact-info-row"><span>Location</span><a href={directions} target="_blank" rel="noopener noreferrer">Open directions in Google Maps ↗</a></div>
          </div>
          <p>Planning to visit? Please call ahead to confirm workshop opening hours and availability.</p>
          <div className="contact-service-links">
            <p className="eyebrow">What can we help with?</p>
            <Link href="/services/motorcycle-mots">Motorcycle MOTs ↗</Link>
            <Link href="/services/servicing">Motorcycle servicing ↗</Link>
            <Link href="/services/repairs">Repairs &amp; mechanical work ↗</Link>
          </div>
        </div>
        <div><ContactForm/></div>
      </div></section>
      <section className="map-section" aria-labelledby="map-heading"><div className="container">
        <div className="map-heading"><div><p className="eyebrow">Directions</p><h2 id="map-heading">FIND US IN PAIGNTON.</h2><p>The Garage, Church Street, Paignton, TQ3 3AF</p></div><a className="btn" href={directions} target="_blank" rel="noopener noreferrer">Plan your journey ↗</a></div>
        <iframe className="location-map" src={map} title="Google Maps showing The Garage, Church Street, Paignton" loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
        <p className="map-fallback">Map not showing? <a href={directions} target="_blank" rel="noopener noreferrer">Get directions directly in Google Maps ↗</a></p>
      </div></section>
    </main>
  </>;
}
