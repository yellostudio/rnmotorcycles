"use client";
import Link from "next/link";
import { useState } from "react";

const menuItems = [
  {slug:"motorcycle-mots", title:"Motorcycle MOTs", desc:"Annual testing and appointments", icon:"✓"},
  {slug:"servicing", title:"Servicing & maintenance", desc:"Keep your motorcycle road-ready", icon:"⚙"},
  {slug:"repairs", title:"Motorcycle repairs", desc:"Mechanical and accident repairs", icon:"↗"},
  {slug:"parts-accessories", title:"Parts & accessories", desc:"Bike essentials and riding gear", icon:"◈"},
];
export default function SiteHeader() {
  const [open,setOpen]=useState(false);
  const [servicesOpen,setServicesOpen]=useState(false);
  const close=()=>{setOpen(false);setServicesOpen(false)};
  return <header className="container nav">
    <Link className="logo" href="/" onClick={close}>RN <b>MOTORCYCLES</b><small>PAIGNTON · DEVON</small></Link>
    <nav id="menu" className={`links ${open?"open":""}`} aria-label="Primary navigation">
      <Link href="/#services" onClick={close}>Services</Link>
      <div className={`nav-services ${servicesOpen?"is-open":""}`}>
        <button type="button" className="services-trigger" aria-expanded={servicesOpen} aria-controls="services-dropdown" onClick={()=>setServicesOpen(!servicesOpen)}>
          Motorcycle MOTs <svg viewBox="0 0 24 24" aria-hidden="true" className="services-chevron"><path d="m6 9 6 6 6-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
        <div id="services-dropdown" className="nav-dropdown">
          <div className="dropdown-heading"><span>EXPLORE THE WORKSHOP</span><span>01 — 04</span></div>
          <div className="dropdown-items">
            {menuItems.map(item=><Link href={`/services/${item.slug}`} onClick={close} key={item.slug} className="dropdown-item">
              <span className="dropdown-icon" aria-hidden="true">{item.icon}</span>
              <span className="dropdown-copy"><span className="dropdown-title">{item.title}</span><span className="dropdown-desc">{item.desc}</span></span>
              <span className="dropdown-arrow" aria-hidden="true">↗</span>
            </Link>)}
          </div>
          <div className="dropdown-footer"><span>Independent motorcycle workshop · Paignton</span><Link href="/contact" onClick={close}>Ask us a question ↗</Link></div>
        </div>
      </div>
      <Link href="/about" onClick={close}>About us</Link>
      <Link href="/#reviews" onClick={close}>Reviews</Link>
      <Link href="/contact" onClick={close}>Contact</Link>
    </nav>
    <a className="btn" href="tel:+441803866064">Call 01803 866064 ↗</a>
    <button type="button" aria-controls="menu" aria-expanded={open} aria-label="Toggle navigation" className="mobile-toggle" onClick={()=>setOpen(!open)}>{open?"×":"☰"}</button>
  </header>;
}
