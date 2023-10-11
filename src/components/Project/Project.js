import React from "react";
import "./Project.css";
import Line from "../../images/line-purple.svg";
function Project({project_type , project_name, project_des, project_img, github, web,tech_stack }) {
  console.log('data', project_img)
  return (
    <section id="projects" className="container container-project">
      <p className="purple-text">
        ‍💻 {project_type}{" "}
        <span className="purple-smoke-text">Project </span>{" "}
      </p>
      <div className="project-header">
        <div className="project-box">
          <span className="white-text">{project_name}</span>
          <p className="gray-text text-box">
            {project_des}
          </p>
        </div>
        <img className="project-line" src={Line} alt="abajo" />
      </div>
      <div className="project-details">
       
        <div className="details-left">
          <div className="details-stack">
            <span className="white-text">Tech Stack</span>
            <ul className="gray-text">
              {tech_stack.map((data,i)=> <li key={`${data}${i}`}>{data + ","}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Project;
