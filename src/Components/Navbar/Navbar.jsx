import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <ul className="nav-link">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#Portfolio">Portfolio</a>
        </li>
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
