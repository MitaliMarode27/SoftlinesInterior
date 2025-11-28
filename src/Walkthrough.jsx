import "bootstrap/dist/css/bootstrap.min.css";
import "./Walkthrough.css";
import WalkthroughSection1 from "./Images/walkthroughsection1.jpg";
import WalkthroughSection2 from "./Images/walkthroughsection2.jpg";
import WalkthroughSection3 from "./Images/walkthroughsection3.jpg";
import walkthroughVideo from "./Images/18531414-uhd_3840_2160_60fps.mp4";
import dreamyInterior1 from "./Images/dreamyInterior1.jpg";
import dreamyInterior2 from "./Images/dreamyInterior2.jpg";
import dreamyInterior3 from "./Images/dreamyInterior3.jpg";
import bhk1 from "./Images/1bhkImg.avif";
import bhk2 from "./Images/2bhk.avif";
import penthouse from "./Images/sectionImg.avif";

const Walkthrough = () => {
  return (
    <div className="walkthrough-container">
      {/* Hero Section */}
      <section className="hero-section d-flex align-items-center justify-content-center text-center">
        <div className="hero-content">
          <h1 className="display-4 fw-bold">Virtual 3D Walkthrough</h1>
          <p className="lead">Experience luxury in every dimension</p>
        </div>
      </section>

      {/* Parallax Showcase */}
      <section className="parallax-section d-flex align-items-center justify-content-center text-center">
  <div className="parallax-bg"></div>
  <div className="overlay"></div>

  <div className="content-box text-light">
    <h2>Immersive 3D Spaces</h2>
    <p>Experience architecture that moves with you — rich textures, depth, and flow.</p>
    <button className="btn btn-outline-light rounded-pill mt-3">Explore Now</button>
  </div>
</section>


      {/* Floating Image Gallery */}
      <section className="gallery-section container py-5">
        <h2 className="text-center mb-5">Dreamy Interiors</h2>
        <div className="row g-4">
          {[
            dreamyInterior1,
            dreamyInterior2,
            dreamyInterior3,
          ].map((img, i) => (
            <div key={i} className="col-md-4">
              <div className="gallery-card">
                < img src={img} style={{height:"350px", width:"400px"}} alt="3D Interior" className="img-fluid rounded-4" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3D Showcase Cards */}
     <section className="showcase-section text-center py-5" style={{ marginTop: "5rem" }}>
  <h2>Every Corner Feels Alive</h2>
  <div className="container d-flex justify-content-center flex-wrap gap-4 mt-4">
    {[
      {
        name: "1 BHK Modern Apartment",
        img: bhk1,
      },
      {
        name: "2 BHK Luxury Living Space",
        img: bhk2,
      },
      {
        name: "Penthouse Suite Interior",
        img: penthouse,
      },
    ].map((item, i) => (
      <div key={i} className="showcase-card">
        <img src={item.img} alt={item.name} />
        <div className="card-overlay">
          <h5>{item.name}</h5>
        </div>
      </div>
    ))}
  </div>
</section>


      {/* Cinematic Walkthrough */}
    <section className="cinematic-section d-flex align-items-center justify-content-center">
  <div className="video-wrapper">
    <video
      src={walkthroughVideo}
      autoPlay
      loop
      muted
      playsInline
      className="background-video"
    ></video>
    <div className="cinematic-overlay"></div>
  </div>

  <div className="cinematic-content text-center text-light" >
    <h2>Feel the Motion</h2>
    <p>Every space tells a story of comfort and elegance.</p>
    <button className="btn btn-light rounded-pill px-4 py-2">
      Start Walkthrough
    </button>
  </div>
</section>


      {/* Extended Dream Sections */}
{/* Dream Sections */}

{/* Dream Section 1 */}
<section
  className="dream-section container my-5 p-0"
  style={{
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "30px",
    flexWrap: "wrap",
  }}
>
  {/* Left Image */}
  <div
    className="dream-img flex-grow-1"
    style={{
      backgroundImage: `url(${WalkthroughSection1})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
       height: "450px",
      width:"400px",
      borderRadius: "20px",
      boxShadow: "0 10px 25px rgba(0,0,0,0.25)",
      flex: "1 1 45%",
    }}
  ></div>

  {/* Right Content */}
  <div
    className="dream-content p-4 rounded-4 shadow-lg text-white"
    style={{
      flex: "1 1 45%",
      background: "rgba(0, 0, 0, 0.6)",
      backdropFilter: "blur(8px)",
      border: "1px solid rgba(255,255,255,0.15)",
    }}
  >
    <h3 className="fw-bold mb-3">Evening Serenity</h3>
    <p className="mb-3">
      As the sun sets, warm tones meet minimalist elegance. The soft light dances across textured surfaces, creating an atmosphere of calm sophistication.
    </p>
    <p>
      Every element is designed to make you feel at peace — a balance of shadow, warmth, and refined simplicity.
    </p>
  </div>
</section>

{/* Dream Section 2 */}
<section
  className="dream-section container my-5 p-0 flex-row-reverse"
  style={{
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "30px",
    flexWrap: "wrap",
  }}
>
  {/* Right Image */}
  <div
    className="dream-img flex-grow-1"
    style={{
      backgroundImage: `url(${WalkthroughSection2})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: "450px",
      width:"400px",
      borderRadius: "20px",
      boxShadow: "0 10px 25px rgba(0,0,0,0.25)",
      flex: "1 1 45%",
    }}
  ></div>

  {/* Left Content */}
  <div
    className="dream-content p-4 rounded-4 shadow-lg text-white"
    style={{
      flex: "1 1 45%",
      background: "rgba(0, 0, 0, 0.6)",
      backdropFilter: "blur(8px)",
      border: "1px solid rgba(255,255,255,0.15)",
    }}
  >
    <h3 className="fw-bold mb-3">Morning Glow</h3>
    <p className="mb-3">
      Gentle sunlight floods the room, illuminating soft curves and natural textures. Each beam highlights the artistry behind every surface.
    </p>
    <p>
      It’s more than architecture — it’s a feeling of warmth that lingers long after the morning fades.
    </p>
  </div>
</section>

{/* Dream Section 3 */}
<section
  className="dream-section container my-5 p-0"
  style={{
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "30px",
    flexWrap: "wrap",
  }}
>
  {/* Left Image */}
  <div
    className="dream-img flex-grow-1"
    style={{
      backgroundImage: `url(${WalkthroughSection3})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: "450px",
      borderRadius: "20px",
      boxShadow: "0 10px 25px rgba(0,0,0,0.25)",
      flex: "1 1 45%",
    }}
  ></div>

  {/* Right Content */}
  <div
    className="dream-content p-4 rounded-4 shadow-lg text-white"
    style={{
      flex: "1 1 45%",
      background: "rgba(0, 0, 0, 0.6)",
      backdropFilter: "blur(8px)",
      border: "1px solid rgba(255,255,255,0.15)",
    }}
  >
    <h3 className="fw-bold mb-3">Luxury Redefined</h3>
    <p className="mb-3">
      A seamless blend of comfort and sophistication, designed to elevate the essence of every space you live in.
    </p>
    <p>
      From the fine details of craftsmanship to the soft glow of ambience, luxury takes a form that feels truly personal.
    </p>
  </div>
</section>


      {/* Footer */}
      <footer className="footer text-center py-4">
        <p>© 2025 Dreamy Estates | Designed for a 3D Experience</p>
      </footer>
    </div>
  );
};

export default Walkthrough;
