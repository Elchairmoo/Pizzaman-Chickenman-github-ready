import { ArrowLeft, ArrowRight, Check, Utensils } from "lucide-react";
import { Link, useParams } from "wouter";
import { getCategory, getItemsForCategory, categories } from "@/lib/menu";
import { FoodCard, PageFrame } from "@/components/SiteLayout";

export default function CategoryPage() {
  const { slug } = useParams<{ slug: string }>();
  const category = getCategory(slug);
  if (!category) return <PageFrame><div className="not-found"><p className="eyebrow">Not on the menu</p><h1>That category wandered off.</h1><Link href="/menu" className="button button--dark">Back to the menu <ArrowRight size={15} /></Link></div></PageFrame>;
  const items = getItemsForCategory(slug);
  const currentIndex = categories.findIndex((entry) => entry.slug === slug);
  const nextCategory = categories[(currentIndex + 1) % categories.length];
  return <PageFrame>
    <section className="category-hero"><div className="category-hero__image"><img src={category.image} alt={category.name} /></div><div className="category-hero__overlay" /><div className="container category-hero__inner"><Link href="/menu" className="back-link"><ArrowLeft size={15} /> Back to menu</Link><p className="eyebrow eyebrow--lime">{category.eyebrow}</p><h1>{category.name}<em>.</em></h1><p>{category.description}</p></div><div className="category-hero__label"><Utensils size={16} /> {String(items.length).padStart(2, "0")} things worth trying</div></section>
    <section className="section category-items"><div className="container"><div className="section-heading section-heading--split"><div><p className="eyebrow">Made to be remembered</p><h2>Take your<br /><em>pick.</em></h2></div><div className="section-heading__aside"><p>Every dish is a starting point. Tell us what you like, what you need, or what you’re curious about.</p><div className="mini-checks"><span><Check size={14} /> Made for you</span><span><Check size={14} /> No checkout</span></div></div></div><div className="food-grid">{items.length ? items.map((item) => <FoodCard key={item.slug} item={item} />) : <div className="empty-state"><p>We’re still cooking up this category.</p></div>}</div></div></section>
    <section className="next-category"><div className="container next-category__inner"><div><p className="eyebrow eyebrow--lime">Keep exploring</p><h2>Next up: <em>{nextCategory.name}</em></h2></div><Link href={`/category/${nextCategory.slug}`} className="button button--lime">Go there <ArrowRight size={16} /></Link></div></section>
  </PageFrame>;
}
