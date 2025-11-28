import "bootstrap/dist/css/bootstrap.min.css";
import "./HowItWorks.css";
import mainImg from "./Images/howitworksMainImg.jpg";
import sharevision from "./Images/howitworksShareVision.jpg";
import meetdesigner from "./Images/howitworksmeetDesigner.jpg";
import concept3d from "./Images/howitworks3dView.jpg";
import executionhandover from "./Images/howitworksComplete.jpg";
import OwnerLovesIt from "./Images/howitworksclientLove.jpg";
  

const heroImg = mainImg;
const step1 = sharevision;
const step2 = meetdesigner;
const step3 = concept3d;
const step4 = executionhandover;
const qualityImg = OwnerLovesIt;

export default function HowItWorks() {
  const steps = [
    {
      id: 1,
      img: step1,
      title: "Share your Vision",
      text: "Upload pictures, layouts or inspirations—our team understands your lifestyle.",
    },
    {
      id: 2,
      img: step2,
      title: "Meet Your Designer",
      text: "A 1-on-1 design consultation to understand your taste, priorities and budget.",
    },
    {
      id: 3,
      img: step3,
      title: "Concept + 3D Preview",
      text: "See photo-real 3D renders before execution begins.",
    },
    {
      id: 4,
      img: step4,
      title: "Execution & Handover",
      text: "Perfect installation, supervision, quality checks and final styling.",
    },
  ];

  return (
    <div className="how-wrapper" style={{ marginTop: "4rem" }}>
      
      {/* HERO */}
      <header
        className="how-hero d-flex align-items-center justify-content-center"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="hero-overlay"></div>
        <div className="text-center hero-text">
          <h1 className="fw-bold display-5 fade-in">A Seamless Journey to Your Dream Space</h1>
          <p className="mt-3 lead fade-in">
            From concept to creation — crafted with precision, delivered with elegance.
          </p>
        </div>
      </header>

      <main className="container my-5">

        {/* STEPS SECTION */}
        <section className="steps-section py-4">
          <h2 className="text-center fw-bold mb-4">How It Works</h2>
          <p className="text-center text-muted mb-5">
            A simple, transparent and beautiful process designed for homeowners.
          </p>

          <div className="row g-4">
            {steps.map((step, i) => (
              <div className="col-md-6 col-lg-3" key={step.id}>
                <div
                  className="step-box"
                  style={{ animationDelay: `${i * 150}ms` }}
                >
                  <div
                    className="step-img"
                    style={{ backgroundImage: `url(${step.img})` }}
                  ></div>

                  <h5 className="mt-3 fw-bold">{step.title}</h5>
                  <p className="text-muted small">{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PROCESS LINE */}
       <section className="process-line my-5">
  <div className="line-title text-center mb-4">
    <h3 className="fw-bold display-6">Project Timeline</h3>
    <p className="text-muted">A clear roadmap from start to completion</p>
  </div>

  <div className="timeline-container improved-timeline">
    {["Booking", "Design Sign-Off", "Execution", "Final Styling"].map((step, index) => (
      <div 
        className="timeline-step" 
        key={index} 
        style={{ animationDelay: `${index * 200}ms` }}
      >
        <div className="circle">{index + 1}</div>
        <p className="step-label">{step}</p>
      </div>
    ))}

    <div className="timeline-track"></div>
  </div>
</section>

        {/* DESIGN QUALITY PANEL */}
        <section className="quality-panel row g-4 my-5">
          <div className="col-md-6">
            <div className="quality-box p-4 shadow-sm">
              <h4 className="fw-bold">Why Homeowners Love Our Process</h4>
              <p className="text-muted mt-2">
                We combine creative excellence with real-world execution to
                deliver interiors that last.
              </p>

              <ul className="mt-3 list-check">
                <li>Dedicated designer & project manager</li>
                <li>Curated materials & premium finishes</li>
                <li>Clear stage-by-stage updates</li>
                <li>Quality checked at every milestone</li>
              </ul>
            </div>
          </div>

          <div className="col-md-6">
            <div
              className="quality-image"
              style={{ backgroundImage: `url(${qualityImg})` }}
            ></div>
          </div>
        </section>

        {/* CTA */}
        <section className="cta-section text-center my-5" style={{height:"20vh", marginTop:"4rem"}}>
          <h3 className="fw-bold">Ready to start your transformation?</h3>
          <p className="text-muted">
            Speak to our design team for free consultation & project estimate.
          </p>

          <a href="/contact" className="btn btn-dark px-4 py-2 rounded-pill">
            Start a Project
          </a>
        </section>
      </main>

        <footer className="py-5 text-center text-muted">
        <div className="container">© {new Date().getFullYear()} SoftLines • Built with care</div>
      </footer>
    </div>
  );
}
