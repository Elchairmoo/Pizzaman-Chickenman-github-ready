import { Link, useLocation } from "wouter";
import { ArrowUpRight, Mail, MapPin, Menu, Phone, X } from "lucide-react";
import { useState } from "react";
import { categories, type FoodItem } from "@/lib/menu";

export function BrandMark({ compact = false }: { compact?: boolean }) {
  return (
    <Link href="/" className="brand-mark" aria-label="Pizzaman Chickenman home">
      <span className="brand-mark__icon" aria-hidden="true"><span /><span /><span /></span>
      <span className={compact ? "sr-only" : "brand-mark__wordmark"}>Pizzaman <span>Chickenman</span></span>
    </Link>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [location] = useLocation();
  const nav = [
    { href: "/menu", label: "Explore menu" },
    { href: "/about", label: "Our story" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <BrandMark />
        <nav className="desktop-nav" aria-label="Primary navigation">
          {nav.map((item) => <Link key={item.href} href={item.href} className={location === item.href ? "active" : ""}>{item.label}</Link>)}
        </nav>
        <Link href="/enquiry" className="button button--dark header-cta">Make an enquiry <ArrowUpRight size={15} /></Link>
        <button className="mobile-menu-toggle" type="button" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && <div className="mobile-nav" role="dialog" aria-label="Mobile navigation">
        {nav.map((item) => <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</Link>)}
        <Link href="/enquiry" className="button button--lime" onClick={() => setOpen(false)}>Make an enquiry <ArrowUpRight size={15} /></Link>
      </div>}
    </header>
  );
}

export function Footer() {
  return <footer className="site-footer">
    <div className="container footer-main">
      <div className="footer-brand">
        <BrandMark />
        <p>Food for the curious, the hungry, and everyone in between.</p>
        <a href="mailto:Pizzamanchickenman20000@gmail.com">Pizzamanchickenman20000@gmail.com</a>
      </div>
      <div className="footer-column"><p className="footer-label">Explore</p>{categories.slice(0, 5).map((category) => <Link key={category.slug} href={`/category/${category.slug}`}>{category.name}</Link>)}</div>
      <div className="footer-column"><p className="footer-label">Say hello</p><span><Phone size={14} /> 0508180117</span><span><MapPin size={14} /> Dansoman</span><a href="mailto:Pizzamanchickenman20000@gmail.com"><Mail size={14} /> Email us</a></div>
    </div>
    <div className="container footer-bottom"><span>© {new Date().getFullYear()} Pizzaman Chickenman. All cravings welcome.</span><span>Enquiries are not confirmed orders.</span></div>
  </footer>;
}

export function PageFrame({ children }: { children: React.ReactNode }) {
  return <div className="site-frame"><Header /><main>{children}</main><Footer /></div>;
}

export function FoodCard({ item, compact = false }: { item: FoodItem; compact?: boolean }) {
  return <article className={`food-card ${compact ? "food-card--compact" : ""}`}>
    <Link href={`/enquiry?item=${item.slug}`} className="food-card__image-link" aria-label={`Enquire about ${item.name}`}>
      <img src={item.image} alt={item.name} loading="lazy" />
      {item.tag && <span className="food-card__tag">{item.tag}</span>}
    </Link>
    <div className="food-card__body">
      <div className="food-card__meta"><span>{item.category}</span><span>{item.price}</span></div>
      <h3>{item.name}</h3>
      {!compact && <p>{item.description}</p>}
      <Link href={`/enquiry?item=${item.slug}`} className="text-link">Enquire about this food <ArrowUpRight size={14} /></Link>
    </div>
  </article>;
}
