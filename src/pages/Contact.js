import React, { useState } from "react";
import emailjs from "emailjs-com";
import background from "./../images/background.svg";
import validator from "validator";

export default function ContactUs() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "gmail",
        "template_test",
        e.target,
        "user_nzRUlAOVwi3RNtg0sXepQ"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  const [emailError, setEmailError] = useState("");
  const validateEmail = (e) => {
    var email = e.target.value;

    if (validator.isEmail(email)) {
      emailError("Valid Email :)");
    } else {
      setEmailError("Enter valid Email!");
    }
  };

  return (
    <>
      <div className="social-media">
        <a
          className="social-media-links"
          href="https://github.com/elepantight"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h1 className="social-media-text">GITHUB</h1>
        </a>
        <a className="social-media-links"
                  href="https://foundation.app/@elephantight"
                  target="_blank"
                  rel="noopener noreferrer"
        >
          <h1 className="social-media-text">FOUNdation</h1>
        </a>
        <a className="social-media-links"
                  href="https://opensea.io/collection/mellow-mood"
                  target="_blank"
                  rel="noopener noreferrer">
          <h1 className="social-media-text">opensea</h1>
        </a>
        <a className="social-media-links"
                  href="https://www.linkedin.com/in/arvid-hallberg-410161182/"
                  target="_blank"
                  rel="noopener noreferrer">
          <h1 className="social-media-text">LINKEDIN</h1>
        </a>
      </div>
      <section>
        <div styles={{ backgroundImage: `url(${background})` }}></div>
        <div className="contact-form" onSubmit={sendEmail}>
          <form action="index.html">
            <div className="input-container">
              <input
                type="text"
                name="name"
                className="input"
                placeholder="Name"
              />
              <label htmlFor=""></label>
              <span></span>
            </div>
            <div className="input-container">
              <input
                type="email"
                name="email"
                className="input"
                placeholder="Email"
                onChange={(e) => validateEmail(e)}
              />{" "}
              <br />
              <label htmlFor=""></label>
              <span></span>
            </div>

            <div className="input-container textarea">
              <textarea
                name="message"
                className="input"
                placeholder="Message"
              ></textarea>
              <label htmlFor=""></label>
              <span></span>
            </div>
            <button className="contact-button">SEND EMAIL</button>
          </form>
        </div>
      </section>
    </>
  );
}
