import "./ContactPage.css";
import ContactMain from "./Images/dreamyInterior1.jpg";
import ContactStudio from "./Images/completeProject5avif.avif";
import ContactTeam from "./Images/contactImg1.jpg";
import ContactMap from "./Images/contactPageImg3.jpg";

export default function ContactPage() {
  return (
    <div className="contact-page">

      {/* Hero Section */}
      <section
        className="contact-hero d-flex align-items-center"
        style={{ backgroundImage: `url(${ContactMain})` }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content container text-white text-center">
          <h1 className="fw-bold display-4">Let's Build Your Dream Space</h1>
          <p className="mt-3 lead">
            Reach out to our design studio and begin your journey into luxury interiors.
          </p>
        </div>
      </section>


      {/* Section 1 – Contact Info */}
      <section className="container my-5 contact-section">
        <div className="row align-items-center g-4">

          <div className="col-md-6">
            <div
              className="contact-img"
              style={{ backgroundImage: `url(${ContactStudio})` }}
            ></div>
          </div>

          <div className="col-md-6">
            <div className="glass-box p-4">
              <h3 className="fw-bold mb-3">Visit Our Design Studio</h3>
              <p>
                Step inside a space where creativity meets craftsmanship.  
                Our studio is designed to inspire — the perfect place to begin shaping 
                your luxury interiors.
              </p>

              <p className="mt-3"><strong>📍 Address:</strong> Nagpur, Maharashtra</p>
              <p><strong>📞 Phone:</strong> +91 9876543210</p>
              <p><strong>📧 Email:</strong> contact@SoftLines.com</p>

              <button className="btn btn-light mt-4 rounded-pill px-4">Book Appointment</button>
            </div>
          </div>

        </div>
      </section>


      {/* Section 2 – Map / Location */}
      <section className="container my-5 contact-section">
        <div className="row flex-md-row-reverse align-items-center g-4">

          <div className="col-md-6">
            <div
              className="contact-img"
              style={{ backgroundImage: `url(${ContactMap})` }}
            ></div>
          </div>

          <div className="col-md-6">
            <div className="glass-box p-4">
              <h3 className="fw-bold mb-3">Easy to Locate</h3>
              <p>
                Located at a prime spot with easy access, our studio offers a welcoming
                space to review designs, discuss concepts, and explore materials.
              </p>

              <button className="btn btn-outline-light rounded-pill px-4 mt-3">
                Open Google Maps
              </button>
            </div>
          </div>

        </div>
      </section>


      {/* Section 3 – Meet Our Team */}
      <section className="container my-5 contact-section">
        <div className="row align-items-center g-4">

          <div className="col-md-6">
            <div
              className="contact-img tall"
              style={{ backgroundImage: `url(${ContactTeam})` }}
            ></div>
          </div>

          <div className="col-md-6">
            <div className="glass-box p-4">
              <h3 className="fw-bold mb-3">Meet the Creative Minds</h3>
              <p>
                Our designers, architects, and visual artists come together to craft 
                spaces that feel alive.  
                Every detail is planned with passion and precision.
              </p>

              <p className="mt-3">
                From luxurious living rooms to elegant bedrooms, our team ensures 
                every corner reflects your personality.
              </p>

              <button className="btn btn-light rounded-pill px-4 mt-3">
                Meet the Team
              </button>
            </div>
          </div>

        </div>
      </section>


      {/* Section 4 – Contact Form */}
<section className="contact-luxury-section container my-5 pb-5">
  <div className="row g-4 align-items-center">

    {/* RIGHT SIDE — Google Map */}
    <div className="col-md-6 order-md-2">
      <div className="contact-map-wrapper">
        <iframe
          title="Studio Location Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.469591913113!2d79.08815457509116!3d21.142046684526778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c0f48e8d436f%3A0x54f73ba9dd8f4a5!2sNagpur%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1709876500000!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: "0", borderRadius: "20px" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>

    {/* LEFT — Luxury Form */}
    <div className="col-md-6 order-md-1">
      <div className="luxury-form-box p-4 p-md-5">

        <h2 className="fw-bold mb-3">Start Your Dream Project</h2>
        <p className="mb-4">
          Tell us your vision — our team will reach out with a luxury interior plan
          crafted just for you.
        </p>

        <form>
          <div className="row">
            <div className="col-12 mb-3">
              <input
                className="form-control luxury-input"
                placeholder="Your Name"
              />
            </div>

            <div className="col-md-6 mb-3">
              <input
                className="form-control luxury-input"
                placeholder="Email Address"
              />
            </div>

            <div className="col-md-6 mb-3">
              <input
                className="form-control luxury-input"
                placeholder="Phone Number"
              />
            </div>

            <div className="col-12 mb-3">
              <textarea
                className="form-control luxury-input"
                rows="4"
                placeholder="Tell us about your project..."
              ></textarea>
            </div>
          </div>

          <button className="btn btn-luxury w-100 mt-3">Send Message</button>
        </form>

      </div>
    </div>

  </div>
</section>

    </div>
  );
}
