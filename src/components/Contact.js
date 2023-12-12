import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import "animate.css";
import TrackVisibility from "react-on-screen";
import { FiMail, FiPhone, FiLinkedin, FiGithub } from "react-icons/fi";
import Sid from "../assets/img/Sid.jpg"

export const Contact = () => {
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(formDetails),
    });
    setButtonText("Send");
    let result = await response.json();
    setFormDetails(formInitialDetails);
    if (result.code == 200) {
      setStatus({ succes: true, message: "Message sent successfully" });
    } else {
      setStatus({
        succes: false,
        message: "Something went wrong, please try again later.",
      });
    }
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                 <img src={Sid}  style={{ width: '380px', height: '380px', borderRadius: '50%', }}/>
              )}
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Get In Touch</h2>
                  <p>
                    Hi! I'm Siddharaj Yadav, a passionate web developer. Feel free
                    to reach out to me through any of the following channels:
                  </p>
                  <ul>
                    <li>
                      <FiMail /> Email:{" "}
                      <a href="mailto:your.email@example.com">
                        {" "}
                        yadavsiddharaj@gmail.com
                      </a>
                    </li>
                    <li>
                      <FiPhone /> Contact:{" "}
                      <a href="tel:+1234567890"> +91 9511271257</a>
                    </li>
                    <li>
                      <FiLinkedin /> LinkedIn:{" "}
                      <a href="https://www.linkedin.com/in/siddharaj-yadav-82a09621b/">
                        {" "}
                        LinkedIn
                      </a>
                    </li>
                    <li>
                      <FiGithub /> GitHub:{" "}
                      <a href="https://github.com/SidharajYadav?tab=repositories">
                        {" "}
                        GitHub
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
