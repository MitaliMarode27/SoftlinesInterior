import React, { useState, useMemo } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";
import heroimg from "./Images/faqheroimg.jpg"


const FAQ_DATA = {
  general: [
    { q: "How do I start an interior design project?", a: "Begin by reaching out through our contact form or booking a free consultation. We’ll visit your site, understand requirements and share a scoped plan with timelines." },
    { q: "Do you work in my city?", a: "We currently operate across multiple cities — please check our serviceable cities on Contact page or call us for confirmation." },
    { q: "Do you provide fixed-price contracts?", a: "We provide milestone-based pricing and transparent quotes. For small packaged services, we can provide fixed-price bundles." },
    { q: "What safety and hygiene measures do your teams follow on-site?", a: "All on-site staff follow safety protocols including PPE, sanitization, and daily checklists. We also follow client-specific rules for privacy and access." },
  ],

  services: [
    { q: "Do you provide 3D renders and samples?", a: "Yes — concept-level 3D renders are part of the design package so you can preview before execution. We also provide material samples on request." },
    { q: "Can I supply my own materials?", a: "Yes. We can work with client-supplied materials — our team will do quality checks and advise on compatibility and warranty implications." },
    { q: "Do you provide bespoke furniture?", a: "We manufacture custom joinery and furniture as per design. Each item comes with workmanship warranty as specified in the contract." },
    { q: "What warranty do you offer?", a: "Standard workmanship warranty for a period (usually 6–24 months) depending on the component. Product warranties depend on manufacturers." },
  ],

  pricing: [
    { q: "How is pricing calculated?", a: "Pricing is calculated based on carpet area, material grade, customisation level and complexity of execution. We provide detailed breakup in the estimate." },
    { q: "Are there hidden charges?", a: "No. We provide clear cost breakdowns and list all assumptions. Any out-of-scope changes will be quoted separately." },
    { q: "Do you offer EMI or payment plans?", a: "Yes, we offer milestone-based payment plans and EMI options through partner financing for qualifying projects." },
  ],

  process: [
    { q: "How long does a typical project take?", a: "Timelines vary: single-room projects 4–6 weeks; full-home projects typically 10–16 weeks depending on custom items and approvals." },
    { q: "What is the process after signing?", a: "Kickoff → Site measure → Design concept & 3D → Material selection → Procurement → Execution → Handover & styling." },
    { q: "How do you manage quality control?", a: "We follow an in-house quality checklist at each milestone and perform final sign-off with a professional photoshoot and handover checklist." },
  ],
};

const TAB_ORDER = ["general", "services", "pricing", "process"];
const TAB_LABELS = { general: "General", services: "Services", pricing: "Pricing", process: "Process" };

export default function FAQLongPage() {
  const [activeTab, setActiveTab] = useState("general");
  const [openIndex, setOpenIndex] = useState(null);
  const [search, setSearch] = useState("");

  const flatList = useMemo(() => {
    // flatten all FAQ items with category key
    return Object.keys(FAQ_DATA).flatMap((k) => FAQ_DATA[k].map((it, i) => ({ ...it, category: k, idx: i })));
  }, []);

  const filtered = useMemo(() => {
    const lower = search.trim().toLowerCase();
    if (!lower) return FAQ_DATA[activeTab];
    return flatList.filter((it) => it.category === activeTab && (it.q.toLowerCase().includes(lower) || it.a.toLowerCase().includes(lower)));
  }, [search, activeTab, flatList]);

  return (
    <div className="faq-long-page" style={{ background: "#f5f6fa", color: "#2d2d2d", minHeight: "100vh" }}>
      {/* HERO */}
      <header className="faq-hero position-relative" style={{ height: "56vh", display: "flex", alignItems: "center" }}>
        <div className="hero-bg" style={{
          position: "absolute", inset: 0, backgroundImage: `url(${heroimg})`, backgroundSize: "cover", backgroundPosition: "center", filter: "brightness(0.6) saturate(0.9)",
        }} />

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="container text-center text-white" style={{ position: "relative", zIndex: 2 }}>
          <h1 className="display-5 fw-bold">Frequently Asked Questions</h1>
          <p className="lead mt-2" style={{ maxWidth: 900, margin: "0 auto", color: "rgba(255,255,255,0.9)" }}>
            Everything homeowners ask before starting an interior project — answered clearly with examples, timelines and pricing guidance.
          </p>

          <div className="d-flex justify-content-center mt-4">
            <button className="btn btn-outline-light rounded-pill me-3" onClick={() => { setActiveTab("pricing"); window.scrollTo({ top: 600, behavior: 'smooth' }) }}>
              Pricing Guide
            </button>
            <button className="btn btn-light rounded-pill" onClick={() => { setActiveTab("services"); window.scrollTo({ top: 600, behavior: 'smooth' }) }}>
              Our Services
            </button>
          </div>
        </motion.div>

        {/* subtle decorative shapes */}
        <div style={{ position: "absolute", right: 40, bottom: -20, width: 160, height: 160, borderRadius: 20, background: "rgba(140,122,230,0.12)", transform: "rotate(15deg)" }} />
        <div style={{ position: "absolute", left: 40, bottom: -10, width: 120, height: 120, borderRadius: 20, background: "rgba(140,122,230,0.08)", transform: "rotate(-12deg)" }} />
      </header>

      {/* TOP HIGHLIGHTS */}
      <section className="container py-5">
        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="row g-4 align-items-stretch">

          <div className="col-md-3">
            <div className="p-4 rounded-3 h-100" style={{ background: "white", boxShadow: "0 6px 24px rgba(17,17,17,0.06)" }}>
                <h1>⏱️</h1>
              <h5 className="fw-bold">Fast Response</h5>
              <p className="small text-muted">We reply within 24–48 hours for all enquiries.</p>
            </div>
          </div>

          <div className="col-md-3">
            <div className="p-4 rounded-3 h-100" style={{ background: "white", boxShadow: "0 6px 24px rgba(17,17,17,0.06)" }}>
                <h1>💵</h1>
              <h5 className="fw-bold">Transparent Pricing</h5>
              <p className="small text-muted">Clear breakdowns and milestone payments.</p>
            </div>
          </div>

          <div className="col-md-3">
            <div className="p-4 rounded-3 h-100" style={{ background: "white", boxShadow: "0 6px 24px rgba(17,17,17,0.06)" }}>
                <h1>🖼️</h1>
              <h5 className="fw-bold">3D Visuals</h5>
              <p className="small text-muted">Photoreal renders before procurement.</p>
            </div>
          </div>

          <div className="col-md-3">
            <div className="p-4 rounded-3 h-100" style={{ background: "white", boxShadow: "0 6px 24px rgba(17,17,17,0.06)" }}>
                <h1>🛡️</h1>
              <h5 className="fw-bold">Warranty & Support</h5>
              <p className="small text-muted">After-service care and workmanship warranty.</p>
            </div>
          </div>

        </motion.div>
      </section>

      {/* TABS + SEARCH */}
      <section className="container pb-4">
        <div className="row align-items-center">
          <div className="col-md-8">
            <div className="d-flex flex-wrap gap-2">
              {TAB_ORDER.map((k) => (
                <button key={k} onClick={() => { setActiveTab(k); setOpenIndex(null); }} className={`btn ${activeTab===k? 'btn-primary': 'btn-outline-secondary'} btn-sm rounded-pill`}>{TAB_LABELS[k]}</button>
              ))}
            </div>
          </div>

          <div className="col-md-4">
            <div className="input-group">
              <input value={search} onChange={(e)=>setSearch(e.target.value)} placeholder="Search questions..." className="form-control rounded-pill" />
              <button className="btn btn-outline-secondary rounded-pill ms-2" onClick={()=>setSearch('')}>Clear</button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ LIST LONG */}
      <main className="container pb-5">
        <div className="row">
          {/* LEFT: FAQ list */}
          <div className="col-lg-8">
            <div className="accordion-flush">
              {filtered.map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="mb-3">
                  <div className="card" style={{ borderRadius: 12, overflow: 'hidden', border: '1px solid #eceff7' }}>
                    <div className="card-body p-3 d-flex justify-content-between align-items-start">
                      <div className="pe-3" style={{ flex: 1 }}>
                        <h6 className="mb-1 fw-semibold">{item.q}</h6>
                        {openIndex === i && <p className="small text-muted mt-2">{item.a}</p>}
                      </div>

                      <div>
                        <button className="btn btn-sm btn-outline-primary" onClick={()=> setOpenIndex(openIndex===i? null : i)}>{openIndex===i? 'Hide':'Read'}</button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* long filler: additional grouped FAQ blocks (expanded content) */}
              <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.2 }} className="mt-4">
                <h5 className="fw-bold mt-4">Detailed Answers & Examples</h5>
                <p className="text-muted">Below are extended explanations for complex topics that clients often ask about — procurement timelines, sample approvals, and execution-day workflows.</p>

                <div className="mt-3">
                  <h6 className="fw-semibold">Procurement & Lead Times</h6>
                  <p className="small text-muted">Certain materials (stone, custom veneer, imported tiles) have longer lead times. We recommend confirming finishes in the design stage to avoid delays.</p>
                </div>

                <div className="mt-3">
                  <h6 className="fw-semibold">Sample Approvals</h6>
                  <p className="small text-muted">We bring physical samples for your approval. Only after sign-off we place bulk orders to avoid mismatch in finish/colour.</p>
                </div>

                <div className="mt-3">
                  <h6 className="fw-semibold">On-site Execution Day</h6>
                  <p className="small text-muted">We conduct daily check-ins, photographic updates and weekly milestone reports so you always know progress status.</p>
                </div>
              </motion.div>

            </div>
          </div>

          {/* RIGHT: Sidebar */}
          <aside className="col-lg-4">
            <div className="p-4 mb-3 rounded-3" style={{ background: 'white', boxShadow: '0 12px 30px rgba(17,17,17,0.06)' }}>
              <h6 className="fw-bold">Quick Links</h6>
              <ul className="list-unstyled small mt-2">
                <li className="mb-2"><a href="#" className="text-decoration-none">Start a Project</a></li>
                <li className="mb-2"><a href="#" className="text-decoration-none">Pricing Guide</a></li>
                <li className="mb-2"><a href="#" className="text-decoration-none">Book a Visit</a></li>
                <li className="mb-2"><a href="#" className="text-decoration-none">Download Brochure</a></li>
              </ul>
            </div>

            <div className="p-4 mb-3 rounded-3 text-center" style={{ background: '#f8f6ff', border: '1px solid rgba(140,122,230,0.12)' }}>
              <h6 className="fw-bold">Need Help from a Designer?</h6>
              <p className="small text-muted">Book a 30-min consultation call with our design lead.</p>
              <button className="btn btn-primary rounded-pill">Book Call</button>
            </div>

            <div className="p-4 rounded-3" style={{ background: 'white', boxShadow: '0 8px 20px rgba(17,17,17,0.04)' }}>
              <h6 className="fw-bold">Trust & Verification</h6>
              <p className="small text-muted mb-2">Projects completed: <strong>1200+</strong></p>
              <p className="small text-muted mb-0">Customer satisfaction: <strong>98%</strong></p>
            </div>
          </aside>
        </div>
      </main>

      {/* SUPPORT + DOWNLOAD */}
      <section className="container py-5">
        <div className="row g-4 align-items-center">
          <div className="col-md-7">
            <motion.div initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <h4 className="fw-bold">Download Our Complete FAQ & Pricing Brochure</h4>
              <p className="text-muted">A single PDF with estimated prices, process diagram and sample timelines you can share with contractors or co-owners.</p>
              <div className="mt-3">
                <button className="btn btn-outline-primary rounded-pill me-3">Download PDF</button>
                <button className="btn btn-primary rounded-pill">Request Brochure</button>
              </div>
            </motion.div>
          </div>

          <div className="col-md-5">
            <motion.div initial={{ opacity: 0, x: 10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <div style={{ height: 200, background: 'linear-gradient(135deg, rgba(140,122,230,0.12), rgba(140,122,230,0.06))', borderRadius: 12 }} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA FOOTER */}
      <footer style={{ background: '#ffffff' }}>
        <div className="container py-5 text-center">
          <motion.h4 initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="fw-bold">Still have questions?</motion.h4>
          <p className="small text-muted">Reach our team via chat, email or schedule a studio visit — we’ll be happy to help.</p>
          <div className="d-flex justify-content-center gap-3 mt-3">
            <button className="btn btn-outline-secondary rounded-pill">Live Chat</button>
            <button className="btn btn-primary rounded-pill">Contact Us</button>
          </div>
        </div>
      </footer>

    </div>
  );
}
