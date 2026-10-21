import { ArrowDown, ArrowRight, ArrowUpRight, ChefHat, Clock3, Search, Sparkles } from "lucide-react";
import { Link } from "wouter";
import { useMemo, useState } from "react";
import { categories, popularItems, foodItems } from "@/lib/menu";
import { FoodCard, PageFrame } from "@/components/SiteLayout";

export default function Home() {
  const [search, setSearch] = useState("");
  const results = useMemo(() => foodItems.filter((item) => `${item.name} ${item.category} ${item.description}`.toLowerCase().includes(search.toLowerCase())).slice(0, 5), [search]);
  return <PageFrame>
    <section className="hero">
      <div className="hero__wash" />
      <div className="container hero__inner">
        <div className="hero__copy">
          <p className="eyebrow eyebrow--lime">A little closer to your next favourite</p>
          <h1>Discover deliciousness.<br /><em>Follow your cravings.</em></h1>
          <p className="hero__lede">A lively food guide for the meals you’re thinking about right now. Browse the menu, find your mood, and tell us exactly what you’re hungry for.</p>
          <div className="hero__actions"><Link href="/menu" className="button button--lime">Explore our menu <ArrowUpRight size={16} /></Link><Link href="/enquiry" className="button button--ghost-light">Make an enquiry <ArrowUpRight size={16} /></Link></div>
          <div className="hero__note"><span className="hero__note-dot" />No checkout, no pressure. Just very good food.</div>
        </div>
        <div className="hero__visual" aria-label="A spread of Pizzaman Chickenman food">
          <div className="hero__image hero__image--main"><img src="https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1200&q=86" alt="Fresh pizza with colourful toppings" /></div>
          <div className="hero__image hero__image--small"><img src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=86" alt="Stacked cheeseburger" /></div>
          <div className="hero__stamp"><Sparkles size={18} /><span>made for<br /><b>curious appetites</b></span></div>
        </div>
      </div>
      <a className="hero__scroll" href="#browse"><span>Scroll to browse</span><ArrowDown size={16} /></a>
    </section>

    <section id="browse" className="section browse-section">
      <div className="container">
        <div className="section-heading section-heading--split"><div><p className="eyebrow">Start with a feeling</p><h2>What are you<br /><em>craving today?</em></h2></div><div className="section-heading__aside"><p>From comfort classics to bright Ghanaian flavours, there’s always a good place to start.</p><Link href="/menu" className="text-link">See the full menu <ArrowRight size={15} /></Link></div></div>
        <div className="category-grid">{categories.map((category, index) => <Link key={category.slug} href={`/category/${category.slug}`} className={`category-tile category-tile--${index % 4}`}><img src={category.image} alt={category.name} loading="lazy" /><div className="category-tile__overlay" /><div className="category-tile__copy"><span>{String(index + 1).padStart(2, "0")}</span><h3>{category.name}</h3><ArrowUpRight size={18} /></div></Link>)}</div>
      </div>
    </section>

    <section className="section popular-section">
      <div className="container">
        <div className="section-heading section-heading--split"><div><p className="eyebrow">A few crowd-pleasers</p><h2>Popular for<br /><em>good reason.</em></h2></div><Link href="/menu" className="button button--outline">Browse everything <ArrowRight size={15} /></Link></div>
        <div className="food-grid">{popularItems.slice(0, 4).map((item) => <FoodCard key={item.slug} item={item} />)}</div>
      </div>
    </section>

    <section className="search-band">
      <div className="container search-band__inner"><div><p className="eyebrow eyebrow--lime">Know what you want?</p><h2>Search the cravings.</h2></div><div className="search-wrap"><Search size={20} /><input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Try “jollof”, “crispy”, or “sweet”" aria-label="Search food" />{search && <div className="search-results">{results.length ? results.map((item) => <Link key={item.slug} href={`/enquiry?item=${item.slug}`} onClick={() => setSearch("")}><span>{item.name}</span><small>{item.category}</small></Link>) : <span className="search-empty">No exact match yet. Try another craving.</span>}</div>}</div></div>
    </section>

    <section className="section enquiry-callout"><div className="container enquiry-callout__inner"><div className="enquiry-callout__graphic"><ChefHat size={36} /><span>Tell us<br /><b>your way</b></span></div><div><p className="eyebrow">Your table, your rules</p><h2>Have something specific in mind?</h2><p>Share the details—portion size, spice level, timing, or a dish you can’t stop thinking about. We’ll take it from there.</p><Link href="/enquiry" className="button button--dark">Start an enquiry <ArrowUpRight size={16} /></Link></div><div className="enquiry-callout__side"><Clock3 size={17} /><span>Simple, personal,<br />and no payment needed.</span></div></div></section>
  </PageFrame>;
}
