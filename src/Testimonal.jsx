import  { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";
import "./Testimonials.css";
import heroImg from "./Images/testimonialHeroImg.jpg";
import imgCollage1 from "./Images/completeProject1.avif";
import imgCollage2 from "./Images/completeProject2.avif";
import imgCollage3 from "./Images/1bhkImg.avif";
import imgCollage4 from "./Images/2bhk.avif";
import reviewVideo from "./Images/reviewVideo.mp4";

/*
  Note: I used your uploaded local hero image path here:
  /mnt/data/fbe33ba4-d1a7-4730-80e5-3803c7de1b24.png
  You can replace with an import if you prefer:
  import heroImg from "../assets/hero-testimonial.jpg";
*/


/* sample testimonials — replace avatar URLs with your client photos */
const TESTIMONIALS = [
  {
    name: "Payal & Rajat",
    area: "4 BHK — Bengaluru",
    text:
      "The team turned our scattered ideas into a cohesive home. Communication, timelines and the final finish were excellent.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
  },
  {
    name: "Swadeep Mahajan",
    area: "2 BHK — Mumbai",
    text:
      "Transparent pricing and timely execution. The finish looks premium and the whole team was delightful to work with.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 4.8,
  },
  {
    name: "Shubra & Manish",
    area: "4 BHK — Gurgaon",
    text:
      "They truly listened to our needs and produced a warm functional design that guests always compliment.",
    avatar: "https://randomuser.me/api/portraits/women/55.jpg",
    rating: 4.9,
  },
  {
    name: "Rohini & Keshav",
    area: "3 BHK — Bengaluru",
    text:
      "From concept previews to the final styling, everything was clear and on schedule. Highly recommended.",
    avatar: "https://randomuser.me/api/portraits/men/45.jpg",
    rating: 5,
  },
  {
    name: "Neha Patel",
    area: "Studio — Pune",
    text:
      "Beautiful, practical solutions for a small space. Design felt luxurious yet cozy.",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
    rating: 5,
  },
  {
    name: "Aman & Sia",
    area: "2 BHK — Delhi",
    text:
      "Excellent project management and a designer who understood our taste immediately.",
    avatar: "https://randomuser.me/api/portraits/men/12.jpg",
    rating: 4.7,
  },
  {
    name: "Rita Sharma",
    area: "Apartment — Hyderabad",
    text:
      "The final handover day was emotional — the home looked stunning and ready to live in.",
    avatar: "https://randomuser.me/api/portraits/women/10.jpg",
    rating: 4.9,
  },
  {
    name: "Vikram Singh",
    area: "Penthouse — Mumbai",
    text:
      "Top-notch finishes, and the team handled everything end-to-end with care.",
    avatar: "https://randomuser.me/api/portraits/men/28.jpg",
    rating: 5,
  },
];

export default function Testimonial() {
  // summary numbers
  const average =
    TESTIMONIALS.reduce((s, t) => s + (t.rating || 5), 0) / TESTIMONIALS.length;
  const completedHomes = 420; // replace with real number
  const satisfiedRate = 98; // %
  const cities = 18; // replace as needed

  useEffect(() => {
    // small progressive reveal for cards could be done here if needed
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="testimonials-page" style={{marginTop:"5rem"}}>

      {/* HERO */}
      <header
        className="tp-hero d-flex align-items-center justify-content-center"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="tp-hero-overlay" />
        <div className="container text-center text-white hero-inner">
          <motion.h1
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="display-4 fw-bold"
          >
            Hear from homeowners who trusted us
          </motion.h1>

          <motion.p
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.15, duration: 0.7 }}
            className="lead mt-3"
          >
            Real projects, real people — see how we transform homes with clarity and care.
          </motion.p>

          <div className="mt-4 hero-cta d-flex justify-content-center gap-3">
            <a className="btn btn-light btn-lg rounded-pill" href="/contact">
              Start Your Project
            </a>
            <a className="btn btn-outline-light btn-lg rounded-pill" href="#reviews">
              Read Reviews
            </a>
          </div>
        </div>
      </header>

      <main className="container my-5">

        {/* RATING SUMMARY */}
        <section className="rating-summary row align-items-center g-4 mb-5">
          <div className="col-md-4">
            <motion.div
              className="rating-card p-4 rounded-4 text-center shadow-sm"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="big-num">{average.toFixed(1)}</div>
              <div className="stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span
                    key={i}
                    className={i + 1 <= Math.round(average) ? "star filled" : "star"}
                  >
                    ★
                  </span>
                ))}
              </div>
              <p className="text-muted mb-0">Average rating from {TESTIMONIALS.length} reviews</p>
            </motion.div>
          </div>

          {/* Stats */}
          <div className="col-md-8">
            <div className="stats-row d-flex gap-3 justify-content-between">
              <motion.div className="stat-box p-3 rounded-3 text-center" whileHover={{ y: -6 }}>
                <h3 className="mb-0">{completedHomes}+</h3>
                <small className="text-muted">Homes Delivered</small>
              </motion.div>
              <motion.div className="stat-box p-3 rounded-3 text-center" whileHover={{ y: -6 }}>
                <h3 className="mb-0">{satisfiedRate}%</h3>
                <small className="text-muted">Client Satisfaction</small>
              </motion.div>
              <motion.div className="stat-box p-3 rounded-3 text-center" whileHover={{ y: -6 }}>
                <h3 className="mb-0">{cities}</h3>
                <small className="text-muted">Cities Served</small>
              </motion.div>
              <motion.div className="stat-box p-3 rounded-3 text-center" whileHover={{ y: -6 }}>
                <h3 className="mb-0">+{TESTIMONIALS.length}</h3>
                <small className="text-muted">Featured Reviews</small>
              </motion.div>
            </div>
          </div>
        </section>

        {/* TESTIMONIAL CARDS GRID */}
        <section id="reviews" className="reviews-grid my-4">
          <div className="text-center mb-4">
            <h2 className="fw-bold">Client Stories</h2>
            <p className="text-muted">Stories from homeowners who designed with us.</p>
          </div>

          <div className="row g-4">
            {TESTIMONIALS.map((t, i) => (
              <motion.div
                className="col-md-6 col-lg-4"
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <article className="testimonial-card p-4 rounded-4 h-100">
                  <div className="d-flex align-items-center mb-3">
                    <img src={t.avatar} alt={t.name} className="avatar rounded-circle me-3" />
                    <div>
                      <h6 className="mb-0">{t.name}</h6>
                      <small className="text-muted">{t.area}</small>
                    </div>
                    <div className="ms-auto rating-mini">
                      <span className="small">{t.rating}</span>
                      <span className="star filled">★</span>
                    </div>
                  </div>

                  <p className="text-muted mb-3">“{t.text}”</p>

                  <div className="card-actions d-flex gap-2">
                    <a href="#" className="text-decoration-none link-primary small">Read full story</a>
                    <a href="#" className="text-decoration-none small">View project photos</a>
                  </div>
                </article>
              </motion.div>
            ))}
          </div>
        </section>

        {/* FEATURED STORIES / IMAGE GRID */}
        <section className="featured-stories my-5">
          <div className="row g-4 align-items-stretch">
            <div className="col-lg-5">
              <div className="feature-story p-4 rounded-4">
                <h4 className="fw-bold">Featured: Payal & Rajat’s 4BHK</h4>
                <p className="text-muted">
                  A comprehensive revamp that combined modern minimalism with warm textures. The project focused on flow, storage and rich finishes.
                </p>
                <a className="btn btn-outline-primary rounded-pill" href="#">Read Case Study</a>
              </div>
              <div className="mt-4 small-stats d-flex gap-3">
                <div className="mini-box p-3 rounded-3 text-center">
                  <strong>8</strong>
                  <div className="text-muted small">Design revisions allowed</div>
                </div>
                <div className="mini-box p-3 rounded-3 text-center">
                  <strong>12</strong>
                  <div className="text-muted small">Weeks to complete</div>
                </div>
              </div>
            </div>

           <div className="col-lg-7">
  <div
    className="image-grid d-grid gap-3"
    style={{ gridTemplateColumns: "repeat(2, 1fr)" }}
  >
    <div
      className="img-large rounded-3"
      style={{ backgroundImage: `url(${imgCollage1})` }}
    />

    <div
      className="img-small rounded-3"
      style={{ backgroundImage: `url(${imgCollage2})` }}
    />

    <div
      className="img-small rounded-3"
      style={{ backgroundImage: `url(${imgCollage3})` }}
    />

    <div
      className="img-large rounded-3"
      style={{ backgroundImage: `url(${imgCollage4})` }}
    />
  </div>
</div>
          </div>
        </section>

        {/* VIDEO TESTIMONIAL */}
        <section className="video-testimonial my-5">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="video-box rounded-4 overflow-hidden shadow-sm">
                {/* placeholder — replace with imported local video if you have one */}
                <video controls width="100%" poster="" style={{ display: "block" }}>
                  <source src={reviewVideo} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>

            <div className="col-md-6">
              <div className="video-text">
                <h4 className="fw-bold">Watch: Rohini & Keshav’s Handover</h4>
                <p className="text-muted">
                  Watch this short video where Rohini and Keshav walk you through their home and talk about the design decisions that mattered.
                </p>

                <a className="btn btn-primary rounded-pill" href="#">Watch Full Testimonial</a>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="final-cta text-center my-5">
          <h3 className="fw-bold">Share your experience or start your project</h3>
          <p className="text-muted">We review every story and may feature selected projects on our portfolio.</p>
          <div className="d-flex justify-content-center gap-3">
            <a className="btn btn-outline-dark rounded-pill" href="/testimonials/submit">Share Your Review</a>
            <a className="btn btn-dark rounded-pill" href="/contact">Get a Quote</a>
          </div>
        </section>

      </main>
      <footer className="footer text-center py-4">
        <p>© 2025 Softlines | Designed for a 3D Experience</p>
      </footer>
    </div>
  );
}
