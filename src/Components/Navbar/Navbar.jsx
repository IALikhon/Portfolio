import "./Navbar.css";

const Navbar = () => {
  const routes = ["home", "about", "skills", "portfolio", "contact"];

  return (
    <nav>
      <ul className="nav-link">
        {routes.map((route, index) => {
          return (
            <li key={index}>
              <a href={`#${route}`}>{route}</a>
            </li>
          );
        })}
      </ul>
      <a
        href="/Document/Ifti Alam Likhon CV.pdf"
        download
        className="download-btn"
      >
        Download CV
      </a>
    </nav>
  );
};

export default Navbar;
