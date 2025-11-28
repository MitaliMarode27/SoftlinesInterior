import  { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Projects.css";
import completedImg1 from "./Images/completeProject1.avif";
import completedImg2 from "./Images/completeProject2.avif";
import completedImg3 from "./Images/completeProject3.avif";
import completedImg4 from "./Images/completeProject4.avif";
import completedImg5 from "./Images/completeProject5avif.avif";
import completedImg6 from "./Images/completeProject6avif.webp";
import UpcomingProjects1 from "./Images/upcomingProject1.avif";
import UpcomingProjects2 from "./Images/upcomingProject2.avif";
import UpcomingProjects3 from "./Images/upcomingProject3.avif";
import UpcomingProjects4 from "./Images/upcomingProject4.avif";
import UpcomingProjects5 from "./Images/upcomingProject5.avif";
import UpcomingProjects6 from "./Images/upcomingProject6.avif";
import phase1 from "./Images/Phase1.avif"
import phase2 from "./Images/Phase2.avif"
import phase3 from "./Images/Phase3.avif"


const Projects = () => {
  const [activeTab, setActiveTab] = useState("completed");
  const projects = [
    {
      img: completedImg1,
      title: "Modern Luxury Apartment",
      description:"warm-toned living room with forest view",
      location: "Delivered | Mumbai",
    },
    {
      img: completedImg2,
      title: "Contemporary Lakeside Cabin",
      description:"wooden house exterior with red chairs",
      location: "Delivered | Bangalore",
    },
    {
      img: completedImg3,
      title: "Elite Fitness Studio",
      description:"dark-themed gym interior",
      location: "Delivered | Pune",
    },
    {
      img: completedImg4,
      title: "Tropical Outdoor Retreat",
      description:"lush garden dining area",
      location: "Delivered | Hyderabad",
    },
    {
      img: completedImg5,
      title: "Creative Workspace Hub",
      description:"colorful modern office",
      location: "Delivered | Delhi",
    },
    {
      img: completedImg6,
      title: "Chic Boutique Store",
      description:"fashion retail interior",
      location: "Delivered | Chennai",
    },
  ];


  const projectsUpcoming = [
    {
      img: UpcomingProjects1,
      title: "Neo Luxe Lounge",
      description: "Futuristic elegance",
    },
    {
      img: UpcomingProjects2,
      title: "Art-Deco Living Haven",
      description: "Curved artistry",
    },
    {
      img: UpcomingProjects3,
      title: "Industrial Creative Hub",
      description: "Raw minimalism",
    },
    {
      img: UpcomingProjects4,
      title: "Parametric Grand Hall",
      description: "Organic luxury",
    },
    {
      img: UpcomingProjects5,
      title: "Aqua Fusion Lobby",
      description: "Fluid serenity",
    },
    {
      img: UpcomingProjects6,
      title: "Skyline Pool Terrace",
      description: "Urban tranquility",
    },
  ];
  return (
    <div className="projects-page" style={{marginTop:"4rem"}}>
      {/* ================= Hero ================= */}
      <section className="hero text-center" style={{padding:"3rem"}}>
        <h1 className="hero-title">Transforming Spaces, Crafting Dreams</h1>
        <p className="hero-subtitle">
          Explore our portfolio — from accomplished marvels to visionary concepts.
        </p>
      </section>

      {/* ================= Tabs ================= */}
      <div className="container text-center mb-5" style={{padding:"3rem"}}>
        <ul className="nav nav-pills dreamy-tabs justify-content-center">
          <li className="nav-item">
            <button
              className={`nav-link ${activeTab === "completed" ? "active" : ""}`}
              onClick={() => setActiveTab("completed")}
            >
              Completed Projects
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link ${activeTab === "upcoming" ? "active" : ""}`}
              onClick={() => setActiveTab("upcoming")}
            >
              Upcoming Projects
            </button>
          </li>
        </ul>
      </div>

      {/* ================= Completed Projects ================= */}
      {activeTab === "completed" && (
        <div className="completed">
          {/* About Section */}
          <section className="about container text-center fade-up">
            <h2 className="section-title">Delivered with Grace</h2>
            <p className="section-text">
              Our completed projects blend art and architecture to create timeless
              interiors that reflect personality, function, and luxury. From urban
              apartments to lavish villas — each design radiates serenity and
              sophistication.
            </p>
          </section>

          {/* Gallery Section */}
          <section className="gallery container fade-up" style={{ padding: "3rem" }}>
      <div className="row g-4">
        {projects.map((project, i) => (
          <div className="col-md-4" key={i}>
            <div className="project-card">
              <img
                src={project.img}
                alt={project.title}
                className="img-fluid rounded-4"
              />
              <div className="overlay" style={{lineHeight:"8px"}}>
                <h5>{project.title}</h5>
                <p style={{color:"lightslategray"}}>- {project.description}</p>
                <p>{project.location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>

          {/* Highlights Section */}
          <section className="highlights fade-up" style={{padding:"3rem"}}>
            <div className="container text-center">
              <h2 className="section-title">Our Impact</h2>
              <div className="row g-4 mt-4">
                <div className="col-md-4">
                  <div className="highlight-card">
                    <h1>💎</h1>
                    <h3>120+</h3>
                    <p>Luxury projects delivered</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="highlight-card">
                    <h1>🤝</h1>
                    <h3>98%</h3>
                    <p>Client satisfaction rate</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="highlight-card">
                    <h1>🏙️</h1>
                    <h3>15+</h3>
                    <p>Cities transformed with our designs</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Testimonials Section */}
          <section className="testimonials fade-up" style={{padding:"3rem"}}>
            <div className="container text-center">
              <h2 className="section-title">What Our Clients Say</h2>
              <div className="row g-4 mt-4">
                {[1, 2, 3].map((i) => (
                  <div className="col-md-4" key={i}>
                    <div className="testimonial-card">
                      <p>
                        “Working with DreamSpace Interiors was magical. Every room feels
                        calm, elegant, and truly personal.”
                      </p>
                      <h6>Client #{i}</h6>
                      <span>Luxury Apartment</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="cta text-center fade-up">
            <h2>Want to Design Your Dream Home?</h2>
            <p>Let's bring your imagination to life with our design experts.</p>
            <button className="btn btn-light btn-lg mt-3">Get In Touch</button>
          </section>
        </div>
      )}

      {/* ================= Upcoming Projects ================= */}
      {activeTab === "upcoming" && (
        <div className="upcoming">
          {/* Concept Intro */}
          <section className="about container text-center fade-up" style={{padding:"3rem"}}>
            <h2 className="section-title">Conceptualized for the Future</h2>
            <p className="section-text">
              We are crafting next-generation interiors that celebrate natural light,
              sustainable materials, and organic textures. These designs are still in
              progress — yet already full of life and innovation.
            </p>
          </section>

          {/* Vision Gallery */}
        <section className="gallery container fade-up" style={{ padding: "3rem" }}>
      <div className="row g-4">
        {projectsUpcoming.map((projectsUpcoming, i) => (
          <div className="col-md-4" key={i}>
            <div className="concept-card">
              <img
                src={projectsUpcoming.img}
                alt={projectsUpcoming.title}
                className="img-fluid rounded-4"
              />
              <div className="concept-overlay">
                <h5>{projectsUpcoming.title}</h5>
                <p>{projectsUpcoming.description}</p>
                <span>In Design Stage</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>


          {/* Vision Board Section */}
          <section className="vision-board fade-up text-center" style={{padding:"3rem"}}>
            <div className="container">
              <h2 className="section-title">Our Vision</h2>
              <p className="section-text">
                To create spaces that connect emotionally and evolve with time.
                Every design begins with a story and ends with an experience.
              </p>
              <div className="row g-4 mt-4">
                <div className="col-md-4">
                  <div className="vision-box">
                    <h1>🌿</h1>
                    <h5>Eco-luxury</h5>
                    <p>Using sustainable materials in upcoming designs.</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="vision-box">
                    <h1>🏠</h1>
                    <h5>Smart Homes</h5>
                    <p>Integrating smart tech for comfort and efficiency.</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="vision-box">
                    <h1>🪞</h1>
                    <h5>Minimal Elegance</h5>
                    <p>Designs that breathe, not clutter.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Launch Timeline */}
          <section className="timeline fade-up" style={{padding:"3rem"}}>
            <div className="container text-center">
              <h2 className="section-title">Launch Phases</h2>
              <div className="timeline-line"></div>
              <div className="row g-4 mt-5">
                <div className="col-md-4">
                  <div className="timeline-card">
                    <img className="rounded-3 mb-3 team-img"
                   style={{height:"200px", width:"200px" , objectFit:"cover"}} src={phase1} alt="" />
                    <h5>Phase 1</h5>
                    <p>Concept Design & Mood Boards</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="timeline-card">
                    <img className="rounded-3 mb-3 team-img"
                   style={{height:"200px", width:"200px" , objectFit:"cover"}} src={phase2} alt="" />
                    <h5>Phase 2</h5>
                    <p>Material Selection & 3D Renders</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="timeline-card">
                    <img className="rounded-3 mb-3 team-img"
                   style={{height:"200px", width:"200px" , objectFit:"cover"}} src={phase3} alt="" />
                    <h5>Phase 3</h5>
                    <p>Construction & Finishing</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="cta text-center fade-up" style={{padding:"3rem"}}>
            <h2>Stay Tuned for Our Next Reveal</h2>
            <p>Follow us to see our latest designs come alive soon.</p>
            <button className="btn btn-light btn-lg mt-3">Follow Our Journey</button>
          </section>
        </div>
      )}

      <footer className="py-5 text-center text-muted">
        <div className="container">© {new Date().getFullYear()} Dreamy Modular • Built with care</div>
      </footer>
    </div>
     
  );
};

export default Projects;
