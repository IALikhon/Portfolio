import './Navbar.css';

const Navbar = () => {
    return (
      <nav>
        <ul className="nav-link">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="http://">About Me</a>
          </li>
          <li>
            <a href="http://">Skills</a>
          </li>
          <li>
            <a href="http://">Portfolio</a>
          </li>
        </ul>

        <a
          href="/Document/Ifti Alam Likhon CV.pdf"
          download className="download-btn"
        >
          Download
        </a>
      </nav>
    );
};

export default Navbar