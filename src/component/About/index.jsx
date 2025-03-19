import React from "react";
import "./About.css";
import Hole from "../../ui/Hole";
import { skills } from "../../data";
import CardUi from "../../assets/CardUi";

function About() {
  return (
    <section id="about">
      <div className="card section__wrapper">
        <Hole />
        <div className="column left-column">
          <h3 className="skill__title">My Skills</h3>
          <div className="skills__container">
            {skills.map((skill, index) => (
              <div className="flex skill__group" key={index}>
                {skill.data.map((list, key) => (
                  <div className="blur__overlay flex__center skill" key={key}>
                       <div className="skill__logo ">
                      <img src={list.logo} alt="skill logo" />
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
          <CardUi className="card__ui-item" color={"var(--color-primary)"} />
        </div>
        <div className="column right-column">
          <h2 className="shine">About Me</h2>
          <h1 className="title">
            I am <span className="color__primary">Rohit Rai</span>
          </h1>
          <p className="text__muted description">
            a dedicated Frontend Developer and Prompt Engineer with over a{" "}
            <span className="exp">2</span> year of experience in building
            engaging, responsive web applications and optimizing AI models. I
            specialize in React.js and JavaScript, creating dynamic UIs that
            enhance user experience by 40%. In my prompt engineering experience,
            I've successfully improved AI model accuracy by 30% using
            Reinforcement Learning with Human Feedback (RLHF) and crafted
            effective prompts that increased output relevance by 25%. My unique
            skill set allows me to tackle challenges creatively, balancing
            frontend development with AI-driven solutions. I love solving
            problems, optimizing performance, and bringing ideas to life through
            technology. If you're looking for someone who can combine technical
            expertise with creative problem-solving, let's connect! 🚀🚀
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
