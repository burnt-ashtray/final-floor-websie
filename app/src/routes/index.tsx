import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent, type CSSProperties } from "react";
import { ScrollScrub } from "@/components/scroll-scrub/scroll-scrub";
import { scrollScrubScenes, scrollScrubTheme } from "@/scroll-scrub-scenes";

export const Route = createFileRoute("/")({
  component: Index,
});

type Product = { id: string; name: string; type: string; price: string; image: string; detail: string };
const products: Product[] = [
  { id: "chain", name: "Final Floor Chain", type: "Forged hardware / 001", price: "₹1,499", image: "/assets/products/chain.svg", detail: "Chrome finish. Heavy silhouette." },
  { id: "void", name: "Void Tee", type: "Heavyweight cotton / 002", price: "₹1,299", image: "/assets/products/void-tee.svg", detail: "Oversized fit. Minimal chest mark." },
  { id: "ascend", name: "Ascend Tee", type: "Graphic heavyweight / 003", price: "₹1,499", image: "/assets/products/ascend-tee.svg", detail: "Black on black, cut with silver." },
];

function Index() {
  const [bag, setBag] = useState<string[]>([]);
  const [bagOpen, setBagOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [joined, setJoined] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const addToBag = (id: string) => setBag((items) => [...items, id]);
  const submitEmail = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (email.trim() && email.includes("@")) setJoined(true);
  };

  return (
    <main className="ff-site">
      <header className="ff-nav">
        <a className="ff-wordmark" href="#home" aria-label="Final Floor home"><img src="/assets/brand/mark.svg" alt="" /> <span>FINAL<br />FLOOR</span></a>
        <nav className={menuOpen ? "ff-nav-links is-open" : "ff-nav-links"} aria-label="Main navigation">
          <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#merch" onClick={() => setMenuOpen(false)}>Merch</a>
          <a href="#events" onClick={() => setMenuOpen(false)}>Events</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </nav>
        <div className="ff-nav-tools">
          <button className="ff-bag-trigger" type="button" onClick={() => setBagOpen((open) => !open)} aria-label={`Open bag, ${bag.length} items`}>BAG <span>{String(bag.length).padStart(2, "0")}</span></button>
          <button className="ff-menu-trigger" type="button" onClick={() => setMenuOpen((open) => !open)} aria-expanded={menuOpen} aria-label="Toggle menu"><span /><span /></button>
        </div>
      </header>

      {bagOpen ? <aside className="ff-bag-panel" aria-label="Shopping bag"><div className="ff-bag-head"><h2>Your bag <span>{bag.length.toString().padStart(2, "0")}</span></h2><button type="button" onClick={() => setBagOpen(false)} aria-label="Close bag">×</button></div>{bag.length ? <><ul>{bag.map((id, index) => { const item = products.find((product) => product.id === id)!; return <li key={`${id}-${index}`}><span>{item.name}</span><strong>{item.price}</strong></li>; })}</ul><p className="ff-bag-note">Preview bag only. Checkout will be connected when the official drop and payment details are ready.</p><button className="ff-bag-clear" type="button" onClick={() => setBag([])}>Clear bag</button></> : <p className="ff-bag-note">Nothing in the bag yet. Start with the hardware.</p>}</aside> : null}

      <section className="ff-hero" aria-label="Final Floor introduction">
        <div className="ff-hero-frame"><span className="ff-index">FF / 001</span><span className="ff-hero-side">MUSIC / MERCH / PEOPLE</span></div>
        <ScrollScrub scenes={scrollScrubScenes} theme={scrollScrubTheme} className="ff-scrub" />
        <div className="ff-hero-bottom"><span>INDEPENDENT CULTURE LABEL</span><span>EST. IN THE UNDERGROUND</span><a href="#merch">Explore the floor <b>↘</b></a></div>
      </section>

      <section className="ff-merch ff-section" id="merch">
        <div className="ff-section-head"><div><p className="ff-micro">01 / THE OBJECTS</p><h2>Wear the<br /><em>underground.</em></h2></div><p className="ff-section-intro">Hardware and heavyweight cotton for the ones who make noise, then carry it into the street.</p></div>
        <div className="ff-product-grid">{products.map((product, index) => <article className={`ff-product ff-product-${product.id}`} key={product.id}><a className="ff-product-image" href="#contact" aria-label={`Ask about ${product.name}`}><img src={product.image} alt={`${product.name}, Final Floor product concept`} loading="lazy" /><span className="ff-product-number">0{index + 1}</span><span className="ff-product-view">VIEW OBJECT ↗</span></a><div className="ff-product-meta"><div><p>{product.type}</p><h3>{product.name}</h3><span>{product.detail}</span></div><div className="ff-product-buy"><strong>{product.price}</strong><button type="button" onClick={() => addToBag(product.id)} aria-label={`Add ${product.name} to bag`}>ADD +</button></div></div></article>)}</div>
        <div className="ff-merch-foot"><span>FIRST DROP / CONCEPT COLLECTION</span><button type="button" onClick={() => setBagOpen(true)}>OPEN YOUR BAG <span>↗</span></button></div>
      </section>

      <section className="ff-events" id="events">
        <div className="ff-event-image" role="img" aria-label="Dark underground venue with white stage lights and a live crowd"><div className="ff-light light-one" /><div className="ff-light light-two" /><div className="ff-crowd">{Array.from({ length: 18 }, (_, i) => <i key={i} style={{ "--crowd-index": i } as CSSProperties} />)}</div><span className="ff-event-stamp">LIVE<br />LOUD<br />LATE</span></div>
        <div className="ff-event-copy"><p className="ff-micro">02 / THE LIVE SIDE</p><h2>Not just<br />a sound.<br /><em>A scene.</em></h2><p>Metal energy. Hip-hop pulse. One floor, no sidelines. We build spaces for the sounds that refuse to stay in their lane.</p><a className="ff-event-link" href="#contact">Get event updates <span>↗</span></a><div className="ff-event-status"><span className="ff-status-mark" /> NEXT ANNOUNCEMENT / SOON</div></div>
        <div className="ff-event-bottom"><span>FROM THE PIT TO THE BOOTH</span><span>NO BOUNDARIES. NO BACKGROUND NOISE.</span></div>
      </section>

      <section className="ff-about ff-section" id="about"><div className="ff-about-mark" aria-hidden="true"><img src="/assets/brand/mark.svg" alt="" /></div><div className="ff-about-copy"><p className="ff-micro">03 / WHAT WE STAND FOR</p><h2>Built from<br />the <em>noise.</em></h2><p>Final Floor is a meeting point for music, clothing, and the people who keep underground culture alive. No polished distance. No borrowed attitude. Just a shared floor and a signal you can wear.</p><a href="#contact" className="ff-about-link">Find your people <span>↗</span></a></div><div className="ff-about-vertical">CULTURE LIVES BELOW / FINAL FLOOR</div></section>

      <section className="ff-contact" id="contact"><div className="ff-contact-title"><p className="ff-micro">04 / STAY CLOSE</p><h2>Join the<br /><em>floor.</em></h2><p>First word on merch, live announcements, and what comes next.</p></div><form className="ff-signup" onSubmit={submitEmail}><label htmlFor="ff-email">YOUR EMAIL ADDRESS</label><div className="ff-input-row"><input id="ff-email" type="email" value={email} onChange={(event) => { setEmail(event.target.value); setJoined(false); }} placeholder="you@somewhere.com" required /><button type="submit" aria-label="Join the Final Floor mailing list">↗</button></div><p className="ff-form-note" aria-live="polite">{joined ? "Thanks. This front-end preview is not connected to a mailing list yet." : "No noise in your inbox. Only important signals."}</p></form></section>

      <footer className="ff-footer"><a className="ff-footer-logo" href="#home">FINAL FLOOR<span>®</span></a><span className="ff-footer-motto">CULTURE LIVES BELOW.</span><a href="#home" className="ff-back-top">BACK TO TOP ↑</a><span className="ff-copyright">© FINAL FLOOR / 2026</span></footer>
    </main>
  );
}
