import React from "react";
import'./Contact.css'
import Pyramid from "../../ui/Pyramid";
import { contactInfo } from "../../data";
import SocialHandles from "../../ui/SocialHandles";
import { BsFillSendFill } from "react-icons/bs";
function Contact() {
  return (
    <section id="contact">
      <div className="section__wrapper">
        <div className="pyramid__container">
          <Pyramid />
        </div>
        <div className="contact__group">
          <div>
            <h3 className="title">
              Let's talk on your <span className="shine">great project</span>{" "}
              together
            </h3>
            <div className="flex contact__options">
              {contactInfo.map((contact, index) => (
                <article className=" flex option" key={index}>
                  <div className="contact__icon">
                    <img src={contact.icon} alt="contact-icon" />
                  </div>
                  <div className="flex contact__content">
                    <div>
                      <h3 className="name">{contact.name}</h3>
                      <p className="text__muted line__clamp__1 value">
                        {contact.value}
                      </p>
                    </div>
                    <a href={contact.link} target="_blank" className="flex__center btn">
                      {" "}
                      <span className="btn__shine text">Message</span>
                      <div
                        className="flex__center icon"
                        style={{ background: contact.color }}
                      >
                        {contact.btnIcon}
                      </div>
                    </a>
                  </div>
                </article>
              ))}
            </div>
           <SocialHandles/>
          </div>
          <form action="">
            <input type="text" name="name" placeholder="Your full name" required/>
            <input type="text" name="name" placeholder="Your full name" required/>
            <textarea name="message" rows={7} placeholder="Your message"></textarea>
            <button type="submit" className="btn flex__center submit__btn">
            <div className="icon"><BsFillSendFill/></div>
              <span>Send Now</span>  
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
