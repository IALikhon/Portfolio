import "./Header.css";
import starynight from '../../asset/video/starynight.mp4';

const Header = () => {
  return (
    <header id="home">
      <div className="header-text">
        <h2>Hello, I'm</h2>
        <h1>Ifti Alam Likhon</h1>
        <h2>
          I'm a Front-End Developer specializing in Modern Web Applications
        </h2>
        <h4>
          I craft exceptional digital experiences using technologies like React
          & JavaScript.
          <br /> Passionate about clean code, user experience, and bringing
          ideas to life.
        </h4>
        <video autoPlay muted loop playsInline id="bg-video">
          <source src={starynight} type="video/mp4" />
        </video>
      </div>
    </header>
  );
};

export default Header;
