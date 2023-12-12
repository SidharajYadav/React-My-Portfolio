import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
                {" "}
                As a skilled web developer, I possess a diverse set of technical
                abilities to create robust and interactive web applications.
                Proficient in front-end technologies, I leverage HTML, CSS, and
                JavaScript to craft responsive and visually appealing user
                interfaces. My expertise extends to popular front-end frameworks
                like React, enabling the development of dynamic and efficient
                single-page applications.
              </p>
              <p>
                On the back-end, I am experienced in using Node.js and Express
                to build scalable server-side applications. I have a strong
                foundation in database design and management, utilizing
                technologies such as MongoDB and SQL databases. Through RESTful
                API development, I ensure seamless communication between the
                client and server, creating a smooth user experience.
              </p>
              <p>
                Adaptability is key in the rapidly evolving landscape of web
                development. My commitment to staying updated with the latest
                technologies and industry trends allows me to implement
                innovative solutions. Whether it's creating intuitive user
                interfaces, optimizing website performance, or solving complex
                backend challenges, I bring a comprehensive skill set to every
                project.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>Frontend Development</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image" />
                  <h5>Backend Development</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Image" />
                  <h5>Database</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>UI/UX</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};
