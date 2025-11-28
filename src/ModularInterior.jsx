import  { useState } from 'react';
import './ModularInterior.css';
import modularMainImg from "./Images/modularMainImg.avif";
import modularGalleryImg1 from "./Images/modularGalleryImg1.avif";
import modularGalleryImg2 from "./Images/modularGalleryImg2.avif";
import modularGalleryImg3 from "./Images/modularGalleryImg3.avif";
import modularGalleryImg4 from "./Images/modularGalleryImg4.avif";
import modularGalleryImg5 from "./Images/modularGalleryImg5.avif";
import modularGalleryImg6 from "./Images/modularGalleryImg6.avif";
import modularGalleryImg7 from "./Images/modularGalleryImg7.avif";


function ModularInterior(){
  // sample images (replace with your own)
  const gallery = [
    modularMainImg,
    modularGalleryImg6,
    modularGalleryImg1,
     modularGalleryImg2,
    modularGalleryImg3,
    modularGalleryImg4,
    modularGalleryImg5,
    modularGalleryImg7,
  ];

  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="modular-page" style={{marginTop:"5rem"}}>

      <header className="py-3 bg-transparent sticky-top">
        <div className="container d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center gap-3">
            <div className="brand-badge" />
            <div>
              <h5 className="mb-0">Dreamy Modular</h5>
              <small className="text-muted">Modular Interiors · Expert Craft · Seamless Fit</small>
            </div>
          </div>
          <nav>
            <ul className="nav">
              <li className="nav-item"><a className="nav-link" href="#features">Features</a></li>
              <li className="nav-item"><a className="nav-link" href="#process">Process</a></li>
              <li className="nav-item"><a className="nav-link" href="#gallery">Gallery</a></li>
              <li className="nav-item"><a className="nav-link btn btn-sm btn-primary text-white ms-2" href="#cta">Get Quote</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="container my-5">
        <div className="row align-items-center gx-5">
          <div className="col-lg-6">
            <div className="hero-card p-4 rounded-4">
              <h1 className="display-6 fw-bold">Modular Interiors — built for real life</h1>
              <p className="lead text-muted">Smart cabinetry, efficient kitchens and personalised storage — crafted with materials that last and finishes that feel like home.</p>

              <ul className="list-unstyled lh-lg">
                <li>✔ On-site measurement & precision planning</li>
                <li>✔ Factory-made modules with tight tolerances</li>
                <li>✔ Installation by certified teams with warranty</li>
              </ul>

              <div className="mt-3">
                <a href="#process" className="btn btn-outline-primary me-2">See the process</a>
                <a href="#cta" className="btn btn-primary">Request a quote</a>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="hero-media rounded-4 overflow-hidden shadow-sm">
              <img src={gallery[0]} alt="modular kitchen" className="img-fluid w-100" />
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="container my-5">
        <div className="row g-4">
          <div className="col-md-4">
            <div className="feature p-3 h-100 shadow-sm rounded-3">
              <div className="icon">🧰</div>
              <h5>Modular Kitchens</h5>
              <p className="text-muted">Ergonomic work triangle, soft-close hardware and durable finishes that withstand daily use.</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="feature p-3 h-100 shadow-sm rounded-3">
              <div className="icon">👗</div>
              <h5>Custom Wardrobes</h5>
              <p className="text-muted">Optimised sections for shoes, accessories and seasonal storage with pull-out mechanisms.</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="feature p-3 h-100 shadow-sm rounded-3">
              <div className="icon">📺</div>
              <h5>Living & Media</h5>
              <p className="text-muted">TV units, wall panelling and integrated lighting to create comfortable living spaces.</p>
            </div>
          </div>
        </div>

        <div className="row mt-4 g-4">
          <div className="col-md-6">
            <div className="card p-3 feature-deep h-100 rounded-3">
              <h6>Materials & Finishes</h6>
              <p className="text-muted mb-0">We use moisture-resistant laminates, PU lacquers and engineered boards for longevity — available in matte and textured finishes.</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card p-3 feature-deep h-100 rounded-3">
              <h6>Hardware & Accessories</h6>
              <p className="text-muted mb-0">Soft-closing hinges, channel handles, push-to-open options and organised drawer inserts for neat storage.</p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="container my-5">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <h4>Why choose our modular solutions?</h4>
            <ul className="mt-3">
              <li>End-to-end service from design to installation.</li>
              <li>Transparent pricing with no hidden costs.</li>
              <li>Quality assurance and a product warranty.</li>
            </ul>
            <p className="text-muted">We partner with skilled craftsmen and vetted vendors to ensure every module fits perfectly and finishes beautifully.</p>
          </div>
          <div className="col-lg-6">
            <div className="p-3 rounded-3 glass-card">
              <h6>Estimate for a 2BHK modular kitchen</h6>
              <p className="mb-1 text-muted">Starting from <strong>₹1.2 Lakh</strong> (materials + installation) — final cost depends on choices and site conditions.</p>
              <a href="#cta" className="btn btn-primary btn-sm">Book site measure</a>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="container my-5">
        <h4 className="mb-3">Our process</h4>
        <div className="row g-3">
          <div className="col-md-3">
            <div className="step p-3 rounded-3 text-center">
              <div className="step-num">1</div>
              <h6 className="mt-2">Book</h6>
              <p className="text-muted small">Online appointment and site measure.</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="step p-3 rounded-3 text-center">
              <div className="step-num">2</div>
              <h6 className="mt-2">Design</h6>
              <p className="text-muted small">3D layouts, material selection and approvals.</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="step p-3 rounded-3 text-center">
              <div className="step-num">3</div>
              <h6 className="mt-2">Manufacture</h6>
              <p className="text-muted small">Factory-built modules with QA.</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="step p-3 rounded-3 text-center">
              <div className="step-num">4</div>
              <h6 className="mt-2">Install</h6>
              <p className="text-muted small">Site installation and handover.</p>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="container my-5">
        <h4 className="mb-3">Gallery</h4>
        <div className="row g-3 masonry">
          {gallery.map((g,i)=> (
            <div className={`col-6 col-md-4 col-lg-3 ${i%3===0 ? 'tall' : ''}`} key={i}>
              <div className="gallery-item rounded-3 overflow-hidden shadow-sm" style={{ backgroundImage: `url(${g})` }} role="img" aria-label={`gallery-${i}`} />
            </div>
          ))}
        </div>
      </section>

      {/* FAQ + CTA */}
      <section className="container my-5" id="faq">
        <div className="row">
          <div className="col-lg-6">
            <h4>Frequently asked</h4>
            <div className="accordion" id="faqs">
              {[{
                q:'How long does installation take?',
                a:'Typical kitchen installations take 3-4 days after on-site prep. Full home timelines vary by scope.'
              },{
                q:'Do you provide warranty?', a:'Yes — we offer a 12 month warranty on workmanship and a manufacturer warranty on hardware.'
              },{
                q:'Can I choose custom colours?', a:'Yes — we have a wide palette and finish options including textured laminates and PU.'
              }].map((it,idx)=> (
                <div className="accordion-item" key={idx}>
                  <h2 className="accordion-header" id={`heading${idx}`}>
                    <button className={`accordion-button ${openFaq===idx ? '' : 'collapsed'}`} type="button" onClick={()=> setOpenFaq(openFaq===idx? null: idx)}>
                      {it.q}
                    </button>
                  </h2>
                  <div className={`accordion-collapse collapse ${openFaq===idx? 'show':''}`}>
                    <div className="accordion-body">{it.a}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="col-lg-6 d-flex flex-column justify-content-center" id="cta">
            <div className="p-4 rounded-4 shadow-sm text-center bg-white">
              <h5>Ready to transform?</h5>
              <p className="text-muted">Book a free site measure and get a detailed quote within 48 hours.</p>
              <a className="btn btn-primary" href="#">Book site measure</a>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-5 text-center text-muted">
        <div className="container">© {new Date().getFullYear()} Dreamy Modular • Built with care</div>
      </footer>
    </div>
  );
}


/*
STYLES (copy into src/styles/modular.css and import in your app, or paste into your global css)

Paste everything below into modular.css
*/

export default  ModularInterior;

