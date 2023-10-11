import "./About.css";
import iconImage from "../../images/logo.jpg";

export const About = () => {
  return (
    <section id="about" className="container container-about">
      <div className="about-left">
        <span className="purple-text">
          ✋Hi, I'm Anjali Kumari{" "}
          <span className="purple-smoke-text">- Introduction</span>{" "}
        </span>
        <p className="gray-text">
        Committed and goal-oriented computer science graduate looking to pursue a career in the software engineering domain. Possess  knowledge in C++, Web Technology(HTML, CSS, Javascript, Reactjs),MySql. Ability to learn things quickly and capable of working in a fast-paced and team-driven environment.{" "}
        </p>
        <h1 className="ski"> Skills </h1>
        <div className="ski">
        <ul className="tech-stack">
          <li>JavaScript</li>
          <li>Reactjs</li>
          <li>MySql</li>
          <li>DBMS</li>
          <li>OS</li>
          <li>Data Structure</li>
          <li>Git & Github</li>
          
          
        </ul>
        </div>
      </div>
      <div className="about-right">
        <img src={iconImage} alt="" />
      </div>
    </section>
  );
};
