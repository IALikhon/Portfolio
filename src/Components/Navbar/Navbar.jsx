import { useEffect, useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const routes = ["home", "about", "skills", "portfolio", "contact"];

  // const currRoute = window.location.hash;

  const [currRoute, setCurrRoute] = useState(window.location.hash);

  useEffect(() => {
    const handleHashChange = () => setCurrRoute(window.location.hash);

    window.addEventListener("hashchange", handleHashChange);
    
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return (
    <nav>
      <ul className="nav-link">
        {routes.map((route, index) => {
          return (
            <li
              key={index}
              className={`#${route}` === currRoute ? "active" : " "}
            >
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
