import React, {useState} from "react";
import emailjs from "emailjs-com";
import background from "./../images/background.svg";
import validator from 'validator';

import TypeWriterEffect from "react-typewriter-effect";

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

  const [emailError, setEmailError] = useState('')
  const validateEmail = (e) => {
    var email = e.target.value
  
    if (validator.isEmail(email)) {
      emailError('Valid Email :)')
    } else {
      setEmailError('Enter valid Email!')
    }
  }

  
  return (<>

    <section>
  
      <div styles={{ backgroundImage: `url(${background})` }}></div>
      <div className="contact-form" onSubmit={sendEmail}>
        <form action="index.html">
          <TypeWriterEffect
            textStyle={{
              frontFamily: "$second-font",
              color: "#141d26",
              fontSize: "1em",
            }}
            startDelay={100}
            cursorColor="#197acf"
            multiText={[
              "I know meteorites are falling",
              "Enter your contact details below.",
              "Validated with mailchimp",
            ]}
            typeSpeed={100}
            hideCursorAfterText={true}
          />
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
              onChange={(e) => validateEmail(e)} /> <br />

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
          <button type="submit" className="btn btn-contact" >
            <span className="label">Send</span>
            <span className="icon">

            </span>
            </button>
            <p className="button_text">Done</p>
        </form>
      </div>
    </section>
    </>
  );
}
