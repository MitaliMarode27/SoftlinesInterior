import { motion } from "framer-motion";
import founder from "./Images/Founder1.jpg";
import architect from "./Images/Architect.jpg";
import strategist from "./Images/Designer.avif";
import "./AboutUs.css";
const BRAND = "SoftLines";

export default function AboutUs() {
  return (
    <div className="about-root" style={{marginTop:"5rem"}}>
      {/* HERO SECTION */}
      <section className="about-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="hero-content"
          >
            <h1 className="hero-title">Designing spaces that tell your story</h1>
            <p className="hero-sub">
              At {BRAND}, we believe every home deserves a soul — one that blends
              comfort, function, and timeless aesthetics.
            </p>
          </motion.div>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="about-who py-5">
        <div className="container d-flex flex-column flex-md-row align-items-center gap-5">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="col-md-6"
          >
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900"
              alt="About Interior"
              className="img-fluid rounded-4 shadow-lg"
            />
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="col-md-6"
          >
            <h2 className="section-title">Who We Are</h2>
            <p className="section-lead">
              Founded with the belief that great design can transform how we live,
              {` `}{BRAND} combines functionality with creativity to craft
              personalized interior experiences. Our multidisciplinary team of
              designers, architects, and engineers ensures every project feels
              unique and endures time.
            </p>
          </motion.div>
        </div>
      </section>

      {/* MISSION + VALUES */}
      <section className="about-mission py-5 text-center">
        <div className="container">
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="section-title"
          >
            Our Mission & Values
          </motion.h2>
          <div className="row mt-4 g-4">
            {[
              {
                icon:"🪄",
                title: "Design with Purpose",
                desc: "We prioritize human experiences — creating spaces that are not just seen, but felt.",
              },
              {
                icon:"🌸",
                title: "Craft with Integrity",
                desc: "Our materials, partners, and processes reflect our commitment to ethical design.",
              },
              {
                icon:"💡",
                title: "Innovate with Empathy",
                desc: "We use technology and creativity to bring your vision to life seamlessly.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="col-md-4"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 * i }}
                viewport={{ once: true }}
              >
                <div className="value-card glass p-4 rounded-4 shadow-sm">
                  <h1>{item.icon}</h1>
                  <h5 className="mb-3">{item.title}</h5>
                  <p className="text-muted">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE / JOURNEY */}
<section className="about-journey py-5">
  <div className="container">
    <motion.h2
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      className="section-title text-center mb-4 fw-bold display-5"
    >
      Our Journey
    </motion.h2>

    <p className="text-center text-muted mb-5 w-75 mx-auto">
      From humble beginnings to award-winning innovation — here is how SoftLines 
      evolved into a trusted name in interior transformation.
    </p>

    <div className="vertical-timeline">
      {[
        { year: "2019", text: "SoftLines was founded in Nagpur — a spark that started a vision." },
        { year: "2021", text: "Expanded into commercial & modular design with successful projects." },
        { year: "2023", text: "Launched 3D walkthroughs + digital dashboard for live tracking." },
        { year: "2025", text: "Honored for excellence in modern residential interior innovation." },
      ].map((item, i) => (
        <motion.div
          key={i}
          initial={{ x: i % 2 === 0 ? -60 : 60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className={`journey-box ${i % 2 === 0 ? "left" : "right"}`}
        >
          <div className="year-badge">{item.year}</div>

          <div className="journey-content glass p-4 rounded-4 shadow-sm">
            <p className="m-0">{item.text}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>


      {/* TEAM */}
      <section className="about-team py-5">
        <div className="container text-center">
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="section-title"
          >
            Meet Our Team
          </motion.h2>
          <div className="row mt-4 g-4">
            {[
              {
                name: "Jiya Sen",
                role: "Founder & Lead Designer",
                img: founder,
              },
              {
                name: "Aarav Singh",
                role: "Project Architect",
                img: architect,
              },
              {
                name: "Priya Sharma",
                role: "Design Strategist",
                img: strategist,
              },
            ].map((m, i) => (
              <motion.div
                key={i}
                className="col-md-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i }}
              >
                <div className="team-card glass rounded-4 p-3 shadow-sm">
                  <img
                    src={m.img}
                    alt={m.name}
                    className="rounded-3 mb-3 team-img"
                   style={{height:"350px", width:"350px" , objectFit:"cover"}}
                  />
                  <h5>{m.name}</h5>
                  <p className="text-muted">{m.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="about-cta py-5 text-center">
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="container glass p-5 rounded-4 shadow-lg"
        >
          <h3 className="mb-3">Let’s Create Your Dream Space Together</h3>
          <p className="mb-4">
            Ready to begin? Schedule your free design consultation today and take
            the first step toward your perfect home.
          </p>
          <button
            className="btn btn-lg btn-primary"
            onClick={() =>
              document
                .getElementById("contact-form")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Book a Consultation
          </button>
        </motion.div>
      </section>

      {/* FOOTER */}
      <footer className="about-footer py-4 text-center">
        © {new Date().getFullYear()} {BRAND}. Designed with purpose and passion.
      </footer>
    </div>
  );
}
