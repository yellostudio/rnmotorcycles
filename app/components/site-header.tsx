"use client";
import Link from "next/link";
import { useState } from "react";
import { services } from "../content";
export default function SiteHeader() {
  const [open,setOpen]=useState(false);
  return <header className="container nav">
    <Link className="logo" href="/" onClick={()=>setOpen(false)}>RN <b>MOTORCYCLES</b><small>PAIGNTON · DEVON</small></Link>
    <nav id="menu" className={`links ${open?"open":""}`} aria-label="Primary navigation">
      <Link href="/#services" onClick={()=>setOpen(false)}>Services</Link>
      <div className="nav-services"><Link href="/services/motorcycle-mots" onClick={()=>setOpen(false)}>Motorcycle MOTs</Link><div className="nav-dropdown">{Object.entries(services).map(([slug,service])=><Link href={`/services/${slug}`} onClick={()=>setOpen(false)} key={slug}>{service.title}</Link>)}</div></div>
      <Link href="/about" onClick={()=>setOpen(false)}>About us</Link>
      <Link href="/#reviews" onClick={()=>setOpen(false)}>Reviews</Link>
      <Link href="/contact" onClick={()=>setOpen(false)}>Contact</Link>
    </nav>
    <a className="btn" href="tel:+441803866064">Call 01803 866064 ↗</a>
    <button type="button" aria-controls="menu" aria-expanded={open} aria-label="Toggle navigation" className="mobile-toggle" onClick={()=>setOpen(!open)}>{open?"×":"☰"}</button>
  </header>;
}
