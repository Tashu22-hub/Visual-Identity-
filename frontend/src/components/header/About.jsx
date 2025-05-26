// import React from 'react'

import "./About.css";
import { SiOnlyoffice } from "react-icons/si";
import { MdOutlineIncompleteCircle } from "react-icons/md";
import { BiSupport } from "react-icons/bi";
import { MdSimCardDownload } from "react-icons/md";
import Qualification from "./Qualification";
// import Footer from "../footer/Footer";
import myimg from "../../../public/my-img.jpg";


function Aboutme() {
  return (
    <>
      <div className="About-Section">
        <h3 className="anim">About Me</h3>
        <p className="anim">My Introduction</p>
        <div className="About-Content">
          <img className="img animationss" src={myimg} alt="" />

          <div className="About-Content-1 animation">
            <div className="About-Content-2">
              <div className="About-Content-3">
                <SiOnlyoffice className="Icons" />
                <p>Experience</p>
                <p className="peragraph">NA</p>
              </div>
              <div className="About-Content-3">
                <MdOutlineIncompleteCircle className="Icons" />
                <p>Completed </p>
                <p className="peragraph">4 Project</p>
              </div>
              <div className="About-Content-3">
                <BiSupport className="Icons" />
                <p>Support</p>
                <p className="peragraph">Online 24/7</p>
              </div>
            </div>

            <p className="About-Me">
              Full-stack web developer skilled in HTML, CSS, Tailwind,
              JavaScript, React, GSAP, Three.js, and Git. I specialize in
              building clean, responsive UIs with smooth animations and
              interactive 3D experiences. I’m driven by a passion for creating
              engaging user interfaces and continuously exploring modern web
              technologies.
            </p>
            <button>
              {" "}
              <a
                id="CV"
                className="C-V"
                href="/TashuResume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download CV <MdSimCardDownload className="Icons" />
              </a>
            </button>
          </div>
        </div>
      </div>

      <Qualification />
    </>
  );
}

export default Aboutme;
