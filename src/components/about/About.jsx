import "./about.css";

const About = () => {
    return (
        <div className="about">
            <div className="about-left">
                <div className="about-card-bg"></div>
                <div className="about-card">
                    <img src="https://images.pexels.com/photos/896783/pexels-photo-896783.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="" className="about-img"/>
                </div>
            </div>
            <div className="about-right">
                <div className="about-right-wrapper">
                    <h1 className="about-title">About Me</h1>
                    <p className="about-sub">
                        It is a long established fact that a reader will be distracted by the
                        readable content.
                    </p>
                    <p className="about-desc">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat duis aute irure dolor in reprehende.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;