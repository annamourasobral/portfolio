import "./about.css";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src="https://r1.ilikewallpaper.net/iphone-11-pro-max-wallpapers/download/96085/Rio-de-Janeiro-sunrise-sky-5k-Travel-iphone-11-pro-max-wallpaper-ilikewallpaper_com_1242x2688.jpg"
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          I'm a Front-End programmer, originally from Rio de Janeiro - Brazil, now living in Copenhagen - Denmark.
        </p>
        <p className="a-desc">
          I have working proficiency in HTML, CSS, Bootstrap, jQuery, and JavaScript. I am also very comfortable using Git version control.
          Furthermore, I possess a fundamental understanding of mobile-first design concepts. Work with APIs and object-oriented programming.
          I plan to expand my skill set by learning ReactJS, eventually growing into a Full Stack!
          Until then, I will hone in on my current talents and keep hacking away until I reach my desired level of expertise.
        </p>
      </div>
    </div>
  );
};

export default About;