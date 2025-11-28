import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";
import "./DesignCatalog.css";
import heroImg from "./Images/catalogHeroimg.avif";
import beforeKitchen from "./Images/beforekitchen.avif";
import afterKitchen from "./Images/afterKitchen.avif";
import beforeWardrobe2 from "./Images/beforeWardrobe2.avif";
import afterWardrobe2 from "./Images/afterwardrobe2.avif";
import beforeRenovation from "./Images/beforeRenovation.avif";
import afterRenovation from "./Images/afterRenovation.avif";
import beforeCeiling from "./Images/beforeCeiling.jpg";
import afterCeiling from "./Images/afterCeiling.jpg";
import beforePainting from "./Images/beforePainting.avif";
import afterPainting from "./Images/afterPainting.avif";
import beforeHome from "./Images/beforeHome.avif";
import afterHome from "./Images/afterHome.avif";
import timeline1 from "./Images/catalogtimeline1.jpg";
import timeline2 from "./Images/catalogtimeline2.jpg";
import timeline3 from "./Images/catalogtimeline3.jpg";
import timeline4 from "./Images/catalogtimeline4.jpg";
import timeline5 from "./Images/catalogtimeline5.jpg";

/*
  NOTE: I used your uploaded hero image path (local).
  The developer tool will transform this path into a usable url when serving.
  You can replace this with an import from src/assets if you prefer.
*/

const SERVICES = [
  { id: "kitchen", title: "Modular Kitchen" },
  { id: "wardrobe", title: "Wardrobes" },
  { id: "renovation", title: "Renovation" },
  { id: "ceiling", title: "False Ceiling" },
  { id: "painting", title: "Painting" },
  { id: "fullhome", title: "Full Home Interior" },
];

const BEFORE_AFTER_DATA = {
  kitchen: { before: beforeKitchen, after: afterKitchen, caption1: "Cozy living-cum-kitchen transformation",caption2: "Open-plan modernization"},
  wardrobe: { before: beforeWardrobe2, after: afterWardrobe2,},
  renovation: { before: beforeRenovation, after: afterRenovation},
  ceiling: { before: beforeCeiling, after: afterCeiling },
  painting: { before: beforePainting, after: afterPainting },
  home: { before: beforeHome, after: afterHome }
};


function SectionHeader({ title, subtitle }) {
  return (
    <div className="section-header text-center mb-4">
      <h3 className="fw-bold">{title}</h3>
      {subtitle && <p className="text-muted small">{subtitle}</p>}
    </div>
  );
}

 function DesignCatalog() {
  const [active, setActive] = useState("kitchen");

  // Configuration per service (so each tab has unique content)
  const serviceContent = {
    kitchen: {
      heroTitle: "Modular Kitchen — Crafted to your rhythm",
      intro:
        "Smart kitchens designed for everyday living — efficient workflow, premium storage and timeless finishes.",
      types: [
        "L-shaped Kitchen",
        "Parallel / Galley Kitchen",
        "Island Kitchen",
        "U-shaped Kitchen",
        "Open Plan Modular",
      ],
      materials: [
        "Solid wood / engineered plywood cabinets",
        "Quartz / granite countertops",
        "Soft-close drawers & Blum hinges",
        "Toughened glass shutters / veneer finishes",
        "Integrated appliances & concealed chimneys",
      ],
      priceRange: "₹80,000 — ₹6,50,000+ (depending on size, material & appliances)",
      timeline: [
        "Consultation & brief — 1–3 days",
        "Design & approvals — 7–10 days",
        "Procurement — 10–21 days",
        "Site execution & installation — 7–14 days",
        "Handover & styling — 1–2 days",
      ],
      cta: "Start Modular Kitchen Project",
    },

    wardrobe: {
      heroTitle: "Wardrobes — Organized elegance",
      intro:
        "Tailored wardrobes that balance storage, pull-out practicality and beautiful facades.",
      types: ["Built-in Wardrobes", "Standalone Wardrobes", "Walk-in Closets", "Sliding Wardrobes", "Open Shelving"],
      materials: ["Veneer finishes", "Lacquered shutters", "Powder-coated hardware", "Soft-close runners", "Glass inserts"],
      priceRange: "₹25,000 — ₹2,50,000+",
      timeline: ["Consultation — 1 day", "Design & layout — 3–7 days", "Manufacture — 7–21 days", "Installation — 1–3 days", "Polish & handover — 1 day"],
      cta: "Design Your Wardrobe",
    },

    renovation: {
      heroTitle: "Renovation — Renew & Reimagine",
      intro:
        "From partial upgrades to full-scale renovations — structural, finishes and MEP coordination.",
      types: ["Partial Renovation", "Full Home Renovation", "Kitchen Remodel", "Bathroom Remodel", "Façade Upgrades"],
      materials: ["Tiles & stones", "Plaster finishes", "Concealed wiring", "Waterproof membranes", "Specialized paints"],
      priceRange: "Varies widely — starting from ₹1,50,000 for partial renovations",
      timeline: ["Survey & scope — 3–7 days", "Design & approvals — 7–14 days", "Execution — 3–12 weeks", "Testing & sign-off — 3–7 days"],
      cta: "Request Renovation Quote",
    },

    ceiling: {
      heroTitle: "False Ceiling — Dramatic yet subtle",
      intro:
        "Create moods with layered false ceilings, cove lighting and acoustic solutions.",
      types: ["Gypsum Board", "POP", "Wooden Slats", "Metal Grid", "Stretch Ceilings"],
      materials: ["Gypsum panels", "POP finishes", "Wood veneer slats", "Acoustic panels", "LED strips and recessed lights"],
      priceRange: "₹15,000 — ₹1,00,000+ depending on design and area",
      timeline: ["Design concept — 2–5 days", "Procurement — 3–10 days", "Installation — 3–7 days", "Lighting & finishing — 1–2 days"],
      cta: "Customize False Ceiling",
    },

    painting: {
      heroTitle: "Painting — Texture, color, life",
      intro:
        "Expert paint application, texture finishes and long-lasting coatings for every room.",
      types: ["Emulsion (Matte / Silk)", "Textured finishes", "Metallic & Venetian plaster", "Feature walls", "Exterior coatings"],
      materials: ["Premium emulsions", "Weatherproof exterior paints", "Textured base coats", "Primer & sealants", "Eco-friendly options"],
      priceRange: "₹25/sqft — ₹200/sqft depending on finish and prep work",
      timeline: ["Surface prep — 1–3 days", "Priming — 1 day", "Finish coats — 1–2 days", "Touch-ups & curing — 1–2 days"],
      cta: "Book Painting Estimate",
    },

    fullhome: {
      heroTitle: "Full Home Interior — A complete language",
      intro:
        "End-to-end design and execution that turns homes into stories — furniture, lighting, joinery and styling.",
      types: ["Turnkey Interiors", "Furnished Interiors", "Partial Fit-outs", "Service Apartments", "Boutique Homes"],
      materials: ["Custom joinery", "Premium surfaces", "Lighting design", "Custom upholstery", "Smart home integration"],
      priceRange: "₹5,00,000 — ₹50,00,000+ depending on size & scope",
      timeline: ["Discovery & scope — 1 week", "Design & moodboards — 2–3 weeks", "Procurement — 2–5 weeks", "Execution — 4–16 weeks", "Styling & handover — 1 week"],
      cta: "Begin Full Home Project",
    },
  };

  // Shortcut to current content
  const cur = serviceContent[active];

  return (
    <div className="services-page container-fluid p-0">
      {/* HERO (top consistent look) */}
      <header
        className="services-hero d-flex align-items-center"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="hero-mask" />
        <div className="container hero-inner text-white">
          <motion.h1
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="display-5 fw-bold"
          >
            Services & Expertise
          </motion.h1>

          <motion.p
            initial={{ y: -6, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.12, duration: 0.6 }}
            className="lead"
          >
            Select a service to explore designs, materials, costs and process.
          </motion.p>
        </div>
      </header>

      {/* NAV TABS */}
      <nav className="services-nav bg-white shadow-sm sticky-top">
        <div className="container">
          <ul className="nav nav-pills overflow-auto py-2" role="tablist">
            {SERVICES.map((s) => (
              <li className="nav-item me-2" role="presentation" key={s.id}>
                <button
                  className={`nav-link ${active === s.id ? "active" : ""}`}
                  onClick={() => setActive(s.id)}
                  role="tab"
                >
                  {s.title}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* MAIN CONTENT (unique sections per service) */}
      <main className="container my-5">
        {/* Intro card */}
        <motion.div
          className="intro-card glass p-4 rounded-4 mb-5"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="row align-items-center">
            <div className="col-md-8">
              <h2 className="fw-bold">{cur.heroTitle}</h2>
              <p className="text-muted">{cur.intro}</p>
            </div>

            <div className="col-md-4 text-md-end">
              <a href="/contact" className="btn btn-primary btn-lg rounded-pill">
                {cur.cta}
              </a>
            </div>
          </div>
        </motion.div>

        {/* Sections container */}
        <div className="service-sections">

          {/* 1. Types */}
          <section className="service-section types-section mb-5">
            <SectionHeader title="Types" subtitle="Popular layouts & formats" />
            <div className="row g-3">
              {cur.types.map((t, i) => (
                <motion.div className="col-sm-6 col-lg-4" key={t}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                >
                  <div className="type-card p-3 rounded-3 h-100">
                    <h5 className="mb-1">{t}</h5>
                    <p className="small text-muted">
                      {t === "Island Kitchen" && active === "kitchen"
                        ? "Great for open-plan homes and social cooking."
                        : "Premium option with practical benefits."}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* 2. Materials */}
          <section className="service-section materials-section mb-5">
            <SectionHeader title="Materials" subtitle="What we recommend & why" />
            <div className="row g-3">
              {cur.materials.map((m, i) => (
                <motion.div className="col-md-6" key={m}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                >
                  <div className="material-card d-flex gap-3 p-3 rounded-3">
                    <div className="mat-thumb rounded-2" />
                    <div>
                      <h6 className="mb-1">{m.split(",")[0]}</h6>
                      <p className="small text-muted">
                        {m.includes("Quartz") ? "Long-lasting, stain resistant and low maintenance." : "Quality and finish tailored to budget and usage."}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* 3. Price Range */}
          <section className="service-section price-section mb-5">
            <SectionHeader title="Price Range" subtitle="Typical budgets & what affects cost" />
            <motion.div className="price-card p-4 rounded-4 glass-border"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <div className="row align-items-center">
                <div className="col-md-8">
                  <h4 className="fw-bold">{cur.priceRange}</h4>
                  <p className="text-muted small mb-0">
                    Costs depend on surface area, materials, appliances, and custom work.
                  </p>
                </div>
                <div className="col-md-4 text-md-end">
                  <a className="btn btn-outline-primary rounded-pill" href="/contact">
                    Get a tailored estimate
                  </a>
                </div>
              </div>
            </motion.div>
          </section>

          {/* 4. Before & After */}
        <section className="service-section gallery-section mb-5">
  <SectionHeader
    title="Before & After"
    subtitle="Real transformations we delivered"
  />

  <div className="row g-3">
    {Object.keys(BEFORE_AFTER_DATA).map((key, i) => {
      const pair = BEFORE_AFTER_DATA[key];

      return (
        <motion.div
          className="col-md-6"
          key={i}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="before-after-card rounded-4 overflow-hidden">
            <div className="ba-row d-flex gap-2">
              <div
                className="ba-col before"
                style={{ backgroundImage: `url(${pair.before})` }}
              >
                <span className="ba-tag">Before</span>
              </div>

              <div
                className="ba-col after"
                style={{ backgroundImage: `url(${pair.after})` }}
              >
                <span className="ba-tag">After</span>
              </div>
            </div>

            <div className="ba-caption p-3">
              <p className="mb-0 small text-muted">
                {key.charAt(0).toUpperCase() + key.slice(1)} Transformation
              </p>
            </div>
          </div>
        </motion.div>
      );
    })}
  </div>
</section>


          {/* 5. Process & Timeline */}
<section className="service-section process-section mb-5" style={{width:"100vw"}}>
  <SectionHeader
    title="Process & Timeline"
    subtitle="From idea to completion — milestone by milestone"
  />

  <div className="process-steps-wrapper">
    {[
      {
        title: "Consultation & brief",
        duration: "1–3 days",
        img: timeline1
      },
      {
        title: "Design & approvals",
        duration: "7–10 days",
        img: timeline2
      },
      {
        title: "Procurement",
        duration: "10–21 days",
        img: timeline3
      },
      {
        title: "Site execution & installation",
        duration: "7–14 days",
        img: timeline4
      },
      {
        title: "Handover & styling",
        duration: "1–2 days",
        img: timeline5
      }
    ].map((step, i) => (
      <motion.div
        key={i}
        className={`step-block ${i % 2 === 0 ? "left" : "right"}`}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: i * 0.1 }}
      >
        
        <div className="step-img">
          <img src={step.img} alt={step.title} />
        </div>

        <div className="step-content">
          <h4 className="mb-1 fw-bold">{step.title}</h4>
          <p className="text-muted small">Duration: {step.duration}</p>
        </div>

      </motion.div>
    ))}
  </div>
</section>

          {/* 6. Optional Extras / Addons (unique per service) */}
          <section className="service-section extras-section mb-5">
            <SectionHeader title="Add-ons & Smart Options" subtitle="Enhance your project" />
            <div className="row g-3">
              <motion.div className="col-md-4" whileInView={{ opacity: 1, y: 0 }} initial={{opacity:0,y:8}} viewport={{once:true}}>
                <div className="extra-card p-3 rounded-3">
                  <h6>Integrated Lighting</h6>
                  <p className="small text-muted">Ambient & task lighting for functional luxury.</p>
                </div>
              </motion.div>

              <motion.div className="col-md-4" whileInView={{ opacity: 1, y: 0 }} initial={{opacity:0,y:8}} viewport={{once:true}}>
                <div className="extra-card p-3 rounded-3">
                  <h6>Soft-close Mechanisms</h6>
                  <p className="small text-muted">Furniture hardware that feels premium every day.</p>
                </div>
              </motion.div>

              <motion.div className="col-md-4" whileInView={{ opacity: 1, y: 0 }} initial={{opacity:0,y:8}} viewport={{once:true}}>
                <div className="extra-card p-3 rounded-3">
                  <h6>Smart Integration</h6>
                  <p className="small text-muted">Appliance integration & smart controls.</p>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Final CTA (consistent) */}
          <section className="service-section final-cta mb-5">
            <motion.div className="final-box p-4 rounded-4 d-flex align-items-center justify-content-between"
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div>
                <h5 className="fw-bold mb-1">{cur.heroTitle}</h5>
                <p className="mb-0 text-muted">Ready to bring this to life? We'll handle everything from drawings to delivery.</p>
              </div>

              <div className="text-end">
                <a href="/contact" className="btn btn-primary rounded-pill btn-lg">
                  {cur.cta}
                </a>
              </div>
            </motion.div>
          </section>

        </div>
      </main>
      <footer className="py-5 text-center text-muted">
        <div className="container">© {new Date().getFullYear()} Dreamy Modular • Built with care</div>
      </footer>
    </div>
  );
}

export default DesignCatalog;