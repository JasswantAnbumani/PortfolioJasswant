import "../App.css";
const Hero = () => {
  return (
    <>
      <div className="hero-bg-canvas-wrapper">
        <canvas id="bg-canvas"></canvas>
      </div>
      <div className="hero-content">
        <h2 className="hero-title">
          <img src="/jass-logo.jpg" alt="Jasswant Logo" className="hero-logo" />
          What's Up, I’m Jasswant Anbumani
        </h2>
        <p>Front-end Developer | Data Scientist | Back-end Developer</p>
        <a href="#contact" className="glow-btn">
          Word? Contact Me
        </a>
      </div>
    </>
  );
};

export default Hero;
