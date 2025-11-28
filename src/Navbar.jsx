import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  // Auto-close dropdown after clicking an item
  const handleNavigate = (path) => {
    navigate(path);

    const dropdown = document.getElementById("servicesDropdown");
    if (dropdown) {
      const instance = window.bootstrap.Dropdown.getInstance(dropdown);
      if (instance) instance.hide();
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm fixed-top">
      <div className="container">

        {/* Brand Logo */}
        <NavLink className="navbar-brand fw-bold" to="/">
          SoftLines
        </NavLink>

        {/* Mobile Toggle Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
          aria-controls="mainNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu Items */}
        <div className="collapse navbar-collapse justify-content-end" id="mainNavbar">
          <ul className="navbar-nav align-items-lg-center gap-lg-2">

            <li className="nav-item">
              <NavLink className="nav-link" to="/">Home</NavLink>
            </li>

            {/* SERVICES DROPDOWN */}
            <li className="nav-item dropdown">
              <button
                className="nav-link dropdown-toggle bg-transparent border-0"
                id="servicesDropdown"
                data-bs-toggle="dropdown"
                style={{ cursor: "pointer" }}
              >
                Services
              </button>

              <ul className="dropdown-menu" aria-labelledby="servicesDropdown">
                <li>
                  <button className="dropdown-item" onClick={() => handleNavigate("/modular")}>
                    Modular
                  </button>
                </li>

                <li>
                  <button className="dropdown-item" onClick={() => handleNavigate("/projects")}>
                    Projects
                  </button>
                </li>

                <li>
                  <button className="dropdown-item" onClick={() => handleNavigate("/walkthrough")}>
                    3D & Walkthroughs
                  </button>
                </li>
               <li>
                  <button className="dropdown-item" onClick={() => handleNavigate("/pricing")}>
                    Pricing/Packages
                  </button>
                </li>
                 <li>
                  <button className="dropdown-item" onClick={() => handleNavigate("/testimonals")}>
                    Testimonials
                  </button>
                </li>
                 <li>
                  <button className="dropdown-item" onClick={() => handleNavigate("/faq")}>
                    FAQPage 
                  </button>
                </li>
              </ul>
            </li>

 <li className="nav-item">
              <NavLink className="nav-link" to="/catalog">Design Catalog</NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/about">About</NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">Contact</NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/howitworks">HowItWorks</NavLink>
            </li>

            {/* GET QUOTE BUTTON */}
            <li className="nav-item ms-lg-3">
              <button
                className="btn btn-sm btn-outline-dark"
                onClick={() => {
                  const form = document.getElementById("contact-form");
                  if (form) {
                    form.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                Get Quote
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
