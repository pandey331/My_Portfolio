import "./Mode.css";
import { RiSunFill, RiMoonFill } from "react-icons/ri";
import {BsGithub,BsLinkedin,BsTwitter} from 'react-icons/bs'
import {SiLeetcode} from 'react-icons/si'

export default function Mode({ handleModeChange, setMode }) {
  return (
    <div className="mode__main">
      <section className=" container-mode">
      <button onClick={handleModeChange} className="container-icon">
        {setMode ? (
          <RiMoonFill className="mode-icon" />
        ) : (
          <RiSunFill className="mode-icon" />
        )}
      </button>
      <div className="mode-left white-text">
        <ul className="ico-txt">
          <li>
            <a href="#projects" >Works</a>
            
          </li>
          <li>
            <a href="#contact" >Contact</a>
            
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a className="about-see" href="https://drive.google.com/file/d/1GOs3VBwmg4kq05PgQJLOy-nr055fEoMc/view?usp=sharing" target='_blank'>Resume </a>

          </li>

        </ul>

      </div>
      

    </section>
    <section className="mode__social">
      <ul className="mode__icons">
        <li>
          <a href="https://github.com/pandey331" target="_blank">
           <BsGithub/>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/anjaliipandey" target="_blank">
           <BsLinkedin/>
          </a>
        </li>
        <li>
          <a href="https://twitter.com/pandey_3312" target='_blank'>
           <BsTwitter/>
          </a>
        </li>
        <li>
          <a href="https://leetcode.com/Anjali331/" target="_blank">
           <SiLeetcode/>
          </a>
        </li>
      </ul>
    </section>

    </div>
    
  );
}
