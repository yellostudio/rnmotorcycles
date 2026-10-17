import Link from "next/link";
import type { Metadata } from "next";
import ContactForm from "./contact/form";
import { services } from "./content";
import SiteHeader from "./components/site-header";

export const metadata: Metadata = {
  title: "Motorcycle MOTs, Servicing & Repairs in Paignton | RN Motorcycles",
  description: "Motorcycle MOTs, servicing, repairs and parts at RN Motorcycles, Church Street Garage, Paignton. Serving riders throughout Torbay and South Devon.",
};
const featured = [
  {slug:"motorcycle-mots", number:"01 / MOT TESTING", title:"Motorcycle MOTs", summary:"Time for your MOT? Arrange your motorcycle test at our Paignton workshop.", image:"mot"},
  {slug:"servicing", number:"02 / MAINTENANCE", title:"Servicing & maintenance", summary:"From routine servicing to chain and sprocket replacements.", image:"service"},
  {slug:"repairs", number:"03 / WORKSHOP REPAIRS", title:"Motorcycle repairs", summary:"Mechanical repairs, accident damage, insurance work and engine rebuilds.", image:"repair"},
] as const;
export default function Home() {
  return <>
    <div className="topline">Independent motorcycle specialists · Paignton, Devon</div>
    <SiteHeader />
    <main id="top">
      <section className="hero" aria-labelledby="hero-heading">
        <div className="container hero-inner">
          <p className="eyebrow">Motorcycle garage · Torbay &amp; South Devon</p>
          <h1 id="hero-heading">RIDE HARD.<br/><em>WE&apos;LL HANDLE</em><br/>THE REST.</h1>
          <p>Motorcycle MOTs, servicing and dependable repairs from an independent workshop in Paignton. Your bike is in experienced hands.</p>
          <div className="actions">
            <Link className="btn" href="/services/motorcycle-mots">Book your MOT ↗</Link>
            <Link className="btn ghost" href="#services">Explore our services ↓</Link>
          </div>
          <div className="hero-meta"><Link href="/services/motorcycle-mots">Motorcycle MOTs</Link><Link href="/services/repairs">Repairs &amp; servicing</Link><Link href="/services/servicing">Scooters welcome</Link></div>
        </div>
      </section>
      <section className="stats" aria-label="Workshop information"><div className="container stat-grid">
        <div className="stat"><strong>Local expertise</strong><small>Independent motorcycle workshop</small></div>
        <div className="stat"><strong>Motorcycles &amp; scooters</strong><small>Workshop repairs and servicing</small></div>
        <div className="stat"><strong>Torbay &amp; South Devon</strong><small>Local riders, local workshop</small></div>
      </div></section>
      <section className="section" id="services"><div className="container">
        <div className="section-head"><div><p className="eyebrow">What we do</p><h2>ONE WORKSHOP.<br/>EVERYTHING YOUR BIKE NEEDS.</h2></div><p>From your annual MOT to more involved mechanical work, we help keep your motorcycle ready for the road.</p></div>
        <div className="cards">
          {featured.map(item=><article className="service" key={item.slug}>
            <Link href={`/services/${item.slug}`} aria-label={`Read about ${item.title}`} className={`service-image service-image--${item.image}`} />
            <div className="service-info"><p className="number">{item.number}</p><h3><Link href={`/services/${item.slug}`}>{item.title}</Link></h3><p>{item.summary}</p><Link href={`/services/${item.slug}`}>Explore {item.title.toLowerCase()} ↗</Link></div>
          </article>)}
        </div>
        <div className="all-services"><h3>More from the workshop</h3><Link href="/services/parts-accessories">Motorcycle parts &amp; accessories ↗</Link><Link href="/services/servicing">Scooter servicing ↗</Link></div>
      </div></section>
      <section className="split" id="about"><div className="split-photo" role="img" aria-label="Motorcycle outdoors"/><div className="split-content">
        <p className="eyebrow">A proper independent workshop</p><h2>BUILT AROUND<br/>THE LOVE OF RIDING.</h2>
        <p>At RN Motorcycles, bikes aren&apos;t just another job. Our Paignton workshop brings together practical mechanical knowledge and a genuine enthusiasm for motorcycles.</p>
        <p>Whether you&apos;re booking an <Link href="/services/motorcycle-mots">MOT</Link>, arranging <Link href="/services/servicing">motorcycle servicing</Link> or discussing a <Link href="/services/repairs">repair</Link>, speak to a local team that knows its way around a bike.</p>
        <div className="check"><span>Motorcycles &amp; scooters</span><span>Engine rebuilds</span><span>Insurance work</span><span><Link href="/services/parts-accessories">Parts &amp; accessories ↗</Link></span></div>
        <p className="about-link"><Link href="/about">More about RN Motorcycles ↗</Link></p>
      </div></section>
      <section className="banner"><div className="container banner-inner"><div><h2>YOUR NEXT RIDE STARTS HERE.</h2><p>Need an MOT or help with your bike? Speak to the workshop.</p></div><Link className="btn" href="/contact">Get in touch ↗</Link></div></section>
      <section className="section reviews" id="reviews"><div className="container">
        <div className="section-head"><div><p className="eyebrow">Words from local riders</p><h2>REPUTATION EARNED<br/>IN THE WORKSHOP.</h2></div><p>Feedback published on the existing RN Motorcycles website.</p></div>
        <div className="review-grid">
          <article className="review"><div className="stars" aria-label="Five stars">★★★★★</div><blockquote>“Very efficient and friendly service. Would highly recommend RN motorcycles.”</blockquote><small>Duncan Howard · June 2022</small></article>
          <article className="review"><div className="stars" aria-label="Five stars">★★★★★</div><blockquote>“Great place. Very helpful and reasonably priced. I will be back.”</blockquote><small>Tamsin Rowles · March 2023</small></article>
          <article className="review"><div className="stars" aria-label="Five stars">★★★★★</div><blockquote>“Friendly brilliant service will be using them again.”</blockquote><small>Martin Gilbert · March 2023</small></article>
        </div>
      </div></section>
      <section className="section contact" id="contact"><div className="container contact-grid">
        <div><p className="eyebrow">Get in touch</p><h2>LET&apos;S GET<br/>YOU BACK ON<br/>THE ROAD.</h2><p>Tell us what your motorcycle needs, or give the workshop a call to discuss an MOT, service or repair.</p>
          <div className="details"><div><strong>Call the workshop</strong><a href="tel:+441803866064">01803 866064</a></div><div><strong>Find us</strong><a className="map-link" href="https://www.google.com/maps/search/?api=1&query=Church+Street+Garage+Paignton+TQ3+3AF" rel="noopener noreferrer" target="_blank">Church Street Garage, Church Street, Paignton, TQ3 3AF ↗</a></div><div><strong>Covering</strong>Paignton, Torbay &amp; South Devon</div></div>
        </div><ContactForm/>
      </div></section>
    </main>
    <footer><div className="container footer-inner"><div>© {new Date().getFullYear()} RN Motorcycles LTD · Paignton, Devon</div><div><Link href="/services/motorcycle-mots">MOTs</Link> · <Link href="/services/servicing">Servicing</Link> · <Link href="/services/repairs">Repairs</Link> · <Link href="/contact">Contact</Link></div></div></footer>
  </>;
}
