import { Search, SlidersHorizontal } from "lucide-react";
import { Link } from "wouter";
import { useMemo, useState } from "react";
import { categories, foodItems } from "@/lib/menu";
import { FoodCard, PageFrame } from "@/components/SiteLayout";

export default function Menu() {
  const [active, setActive] = useState("all");
  const [query, setQuery] = useState("");
  const filtered = useMemo(() => foodItems.filter((item) => (active === "all" || item.categorySlug === active) && `${item.name} ${item.category} ${item.description}`.toLowerCase().includes(query.toLowerCase())), [active, query]);
  return <PageFrame>
    <section className="page-hero page-hero--menu"><div className="container page-hero__inner"><p className="eyebrow eyebrow--lime">The Pizzaman Chickenman menu</p><h1>Find your next<br /><em>“that looks good.”</em></h1><p>Browse by category, follow a hunch, and enquire about whatever has your attention.</p></div></section>
    <section className="section menu-section"><div className="container"><div className="menu-toolbar"><div className="filter-label"><SlidersHorizontal size={16} /> Filter by</div><div className="filter-pills"><button className={active === "all" ? "active" : ""} onClick={() => setActive("all")}>Everything</button>{categories.map((category) => <button key={category.slug} className={active === category.slug ? "active" : ""} onClick={() => setActive(category.slug)}>{category.name}</button>)}</div><div className="menu-search"><Search size={17} /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search dishes" aria-label="Search dishes" /></div></div><div className="menu-context"><span>{filtered.length} dishes to explore</span>{active !== "all" && <Link href="#" onClick={(event) => { event.preventDefault(); setActive("all"); }}>Clear filter</Link>}</div><div className="food-grid food-grid--menu">{filtered.map((item) => <FoodCard key={item.slug} item={item} />)}</div>{!filtered.length && <div className="empty-state"><span>Nothing here yet.</span><p>Try a different search or browse everything.</p></div>}</div></section>
  </PageFrame>;
}
