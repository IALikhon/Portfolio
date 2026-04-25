import './Navbar.css';

const Navbar = () => {
    return (
      <nav>
        <ul className='nav-link'>
          <li>
            <a href="http://">Home</a>
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
        <div>
          <button className="download-btn">Download</button>
        </div>
      </nav>
    );
};

export default Navbar