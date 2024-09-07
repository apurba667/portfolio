import React, { useRef, useState } from "react";
import "./contact.css";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [successMessage, setSuccessMessage] = useState("");
  const [loading, setLoading] = useState(false); // State to manage button loading state

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true); // Disable button by setting loading to true

    emailjs
      .sendForm("service_jgp0c5k", "template_67cvtih", form.current, {
        publicKey: "-PlAlGugmhiM8b3qc",
      })
      .then(
        () => {
          setSuccessMessage("Your message has been sent successfully!");
          form.current.reset(); // Reset form
          setLoading(false); // Re-enable button after success
        },
        (error) => {
          console.log("FAILED...", error.text);
          setSuccessMessage("Failed to send message. Please try again.");
          setLoading(false); // Re-enable button after failure
        }
      );
  };

  return (
    <>
      <section id="contact">
        <div className="container">
          <div className="row mt-5">
            <div className="col-lg-12 text-center">
              <h5 className="skills">Get In Touch</h5>
              <h2>Contact Me</h2>
            </div>
          </div>
          <div className="row mt-4 gapp">
            <div className="col-lg-4">
              <div className="contact-option">
                <article className="contact-item">
                  <MdOutlineMailOutline className="contact-icon" />
                  <h4>Email</h4>
                  <h5>apurbaanikroy@gmail.com</h5>
                  <a href="mailto:apurbaanikroy@gmail.com">Send Message</a>
                </article>
                <article className="contact-item">
                  <FaInstagram className="contact-icon" />
                  <h4>Instagram</h4>

                  <a
                    href="https://www.instagram.com/the_apurba"
                    target="_blank"
                  >
                    Visit
                  </a>
                </article>
                <article className="contact-item">
                  <FaGithub className="contact-icon" />
                  <h4>Github</h4>

                  <a href="https://github.com/apurba667" target="_blank">
                    Visit
                  </a>
                </article>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="contact-form">
                {successMessage && (
                  <p className="alert alert-success">{successMessage}</p>
                )}
                <form ref={form} onSubmit={sendEmail}>
                  <div className="form-group">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Full Name"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <textarea
                      name="message"
                      rows="7"
                      placeholder="Your Message"
                      required
                    ></textarea>
                  </div>
                  <div className="send">
                    <button
                      type="submit"
                      className="btnn btnn-primary send"
                      disabled={loading} // Disable button when loading
                    >
                      {loading ? "Sending..." : "Send Message"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
