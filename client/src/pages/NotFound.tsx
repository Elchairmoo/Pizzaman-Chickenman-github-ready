import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Link } from "wouter";
import { PageFrame } from "@/components/SiteLayout";

export default function NotFound() {
  return <PageFrame><div className="not-found"><p className="eyebrow">404 / off the menu</p><h1>That page<br /><em>isn’t cooking.</em></h1><p>Let’s get you back to something delicious.</p><Link href="/" className="button button--dark"><ArrowLeft size={15} /> Back home <ArrowUpRight size={15} /></Link></div></PageFrame>;
}
