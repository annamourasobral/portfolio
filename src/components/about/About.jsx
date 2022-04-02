import "./about.css";

const About = () => {
    return (
        <div className="about">
            <div className="about-left">
                <div className="about-card-bg"></div>
                <div className="about-card">
                    <img src="https://images.pexels.com/photos/1804177/pexels-photo-1804177.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="about-img"/>
                </div>
            </div>
            <div className="about-right">
                <div className="about-right-wrapper">
                    <h1 className="about-title">About Me</h1>
                    <p className="about-sub">
                        I'm from Rio de Janeiro, Brazil, and love cultural exchanges, travels and of course, its records in form of photograph.
                    </p>
                    <p className="about-desc">
                        Living and following the beauty in every corner of the world I grow a repertory to bring more life and joy to my work.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;