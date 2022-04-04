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
          Currently, I develop websites and games, and challenge myself to code every day, to develop and refine my skills in some technologies used in Front-End such as HTML, CSS, JavaScript, etc.
          Also, I am a bachelor's student in Computer Science at Uniamérica. I use Alura - which is an edTech- platform, for independent students to learn content in technology and increase their productivity.
          I'm excited to share my skills, connect and learn from other developers, on my journey to live off my passion.
        </p>
      </div>
    </div>
  );
};

export default About;