import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import materialQualityImg from "./Images/pricingMaterialQuality.webp";
import carpetAreaImg from "./Images/pricingCarpet.avif";
import customizationLevelImg from "./Images/pricingCustomize.avif";

// NOTE: this file uses Bootstrap classes instead of custom UI imports

export default function PricingPackages() {
  const packages = [
    {
      title: "Basic Makeover",
      price: "₹49,999",
      includes: [
        "Room Painting",
        "Basic Furniture Layout",
        "Theme Suggestions",
        "Material Guidance",
      ],
    },
    {
      title: "Premium Interior",
      price: "₹1,49,999",
      includes: [
        "Full Home Design",
        "Custom Furniture",
        "Modular Kitchen Setup",
        "Lighting & Decor Plan",
      ],
    },
    {
      title: "Luxury Transformation",
      price: "₹3,49,999",
      includes: [
        "Complete Luxury Makeover",
        "High-End Materials",
        "Smart Home Integration",
        "On-site Execution Team",
      ],
    },
  ];

  const costFactors = [
    {
      img: materialQualityImg,
      title: "Material Quality",
      desc:
        "The type of materials (standard, premium, luxury) directly affects overall pricing.",
    },
    {
        img: carpetAreaImg,
      title: "Carpet Area",
      desc: "Bigger spaces require more material, labour, and time, increasing costs.",
    },
    {
        img: customizationLevelImg,
      title: "Customization Level",
      desc:
        "Fully customised furniture and decor increase price compared to factory-made options.",
    },
  ];

  return (
    <div className="pricing-page" style={{marginTop:"5rem"}}>
      {/* HERO */}
      <section className="py-5 bg-light">
        <div className="container text-center">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="display-5 fw-bold"
          >
            Transparent & Flexible Pricing
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25, duration: 0.8 }}
            className="lead mt-3 mx-auto"
            style={{ maxWidth: 800 }}
          >
            Choose the perfect interior solution for your space. No hidden fees —
            clear packages and customizable add-ons so you get exactly what you
            want.
          </motion.p>
        </div>
      </section>

      {/* PACKAGES */}
      <section className="py-5">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center fw-bold mb-5"
          >
            Our Packages
          </motion.h2>

          <div className="row g-4">
            {packages.map((pkg, idx) => (
              <motion.div
                className="col-12 col-md-6 col-lg-4"
                key={idx}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
              >
                <div className="card h-100 shadow-sm border-0 rounded-4">
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title text-center fw-bold">{pkg.title}</h5>
                    <p className="display-6 text-center text-primary my-3">
                      {pkg.price}
                    </p>

                    <ul className="list-unstyled small mb-4">
                      {pkg.includes.map((it, i) => (
                        <li key={i} className="mb-2">
                          <span className="me-2 text-success">●</span>
                          {it}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-auto text-center">
                      <button className="btn btn-primary rounded-pill px-4 py-2">
                        Get Started
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* COST BREAKDOWN */}
      <section className="py-5 bg-white">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center fw-bold mb-4"
          >
            What Influences the Cost?
          </motion.h2>

          <div className="row g-4">
            {costFactors.map((f, idx) => (
              <motion.div
                key={idx}
                className="col-12 col-md-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 + idx * 0.12 }}
              >
                <div className="p-4 border rounded-3 h-100 shadow-sm">
                    <img style={{height:"100px", width:"1 00px", borderRadius:"1rem"}} src={f.img} alt="" />
                  <h5 className="fw-semibold mt-3">{f.title}</h5>
                  <p className="small text-muted mb-0">{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DETAILED SERVICE BREAKDOWN */}
      <section className="py-5 bg-light">
        <div className="container">
          <motion.h3
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="fw-bold text-center mb-4"
          >
            Pricing by Service (Indicative)
          </motion.h3>

          <div className="row g-4">
            <motion.div
              className="col-12 col-md-6"
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="p-4 bg-white rounded-3 shadow-sm h-100">
                <h5 className="fw-bold">Modular Kitchen</h5>
                <p className="small text-muted mb-2">
                  Typical: <strong>₹80,000 — ₹6,50,000+</strong>
                </p>
                <ul className="small">
                  <li>Economy: Basic cabinetry & laminate finishes</li>
                  <li>Standard: Engineered plywood + quartz/granite counters</li>
                  <li>Premium: Solid-surface, integrated appliances, custom island</li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              className="col-12 col-md-6"
              initial={{ opacity: 0, x: 12 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="p-4 bg-white rounded-3 shadow-sm h-100">
                <h5 className="fw-bold">Full Home Interior</h5>
                <p className="small text-muted mb-2">
                  Typical: <strong>₹5,00,000 — ₹50,00,000+</strong>
                </p>
                <ul className="small">
                  <li>Turnkey solutions with joinery, lighting & styling</li>
                  <li>Phased execution to fit budgets</li>
                  <li>Transparent mile-stone payments</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-5 text-white" style={{ background: "#1f2937" }}>
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="fw-bold mb-2">Ready to Transform Your Space?</h3>
            <p className="small mb-4 text-muted">
              Get a customised quote based on your exact requirements and budget.
            </p>
            <button className="btn btn-lg btn-outline-light rounded-pill px-4 py-2">
              Get Free Quote
            </button>
          </motion.div>
        </div>
      </section>
       <footer className="hfe-footer py-4">
        <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">
          <div>© {new Date().getFullYear()} SoftLines — Crafted with intent</div>
          <div className="d-flex gap-3">
            <a href="#privacy">Privacy</a>
            <a href="#terms">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
