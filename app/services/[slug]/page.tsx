import SiteHeader from "../../components/site-header";
import Link from "next/link";
import {notFound} from "next/navigation";
import type {Metadata} from "next";
import {services,type ServiceSlug} from "../../content";
export function generateStaticParams(){return Object.keys(services).map(slug=>({slug}));}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{const {slug}=await params;const service=services[slug as ServiceSlug];return {title:service?`${service.title} | RN Motorcycles`:"Service not found",description:service?.summary};}
export default async function ServicePage({params}:{params:Promise<{slug:string}>}){
 const {slug}=await params;const item=services[slug as ServiceSlug];if(!item)notFound();
 return <><SiteHeader/><main>
  <section className={`interior-hero interior-hero--${item.image}`} aria-labelledby="service-heading"><div className="container interior-hero-content">
   <p className="eyebrow">{item.eyebrow} · Paignton, Devon</p><h1 id="service-heading">{item.title}</h1><p>{item.summary}</p><div className="actions"><Link className="btn" href="/contact">{item.cta} ↗</Link><a className="btn ghost" href="tel:+441803866064">Call 01803 866064 ↗</a></div>
  </div></section>
  <section className="section interior-body"><div className="container innercols"><div><p className="eyebrow">An independent local garage</p><h2>{item.intro}</h2><p className="interior-side-note">The Garage · Church Street · Paignton, TQ3 3AF</p></div><div>{item.paragraphs.map(p=><p key={p}>{p}</p>)}</div></div></section>
  <section className="section service-highlights-section"><div className="container innercols"><div><p className="eyebrow">At the workshop</p><h2>HOW WE CAN HELP.</h2></div><div><ul className="service-highlights">{item.highlights.map(x=><li key={x}>{x}</li>)}</ul><p className="service-caution">{item.note}</p><Link className="btn" href="/contact">Send an enquiry ↗</Link></div></div></section>
  <section className="section"><div className="container"><p className="eyebrow">Explore other services</p><h2 className="other-services-title">MORE FOR YOUR BIKE.</h2><div className="service-links">{Object.entries(services).filter(([id])=>id!==slug).map(([id,s])=><Link key={id} href={`/services/${id}`}>{s.title} ↗</Link>)}</div></div></section>
 </main><footer><div className="container">© RN Motorcycles · Paignton · <Link href="/contact">Get in touch</Link></div></footer></>;
}