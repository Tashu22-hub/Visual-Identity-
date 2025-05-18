import React from "react";
import BallCanvas from "../canvas/Ball";
import SectionWrapper from "../Section/SectionWrapper"; // Ensure the correct path and import for SectionWrapper
import technologies from "../tech"; // Ensure the correct path for technologies
import "./Skills.css";

const Tech = () => {
  return (
    <div className="skill"> 
      <h1 className="anime">Explore my Skills</h1> 
    <div className="tech-container">
        
      {technologies.map((technology) => (
        <div className="tech-item" key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
    </div>

  );
};

export default SectionWrapper(Tech, "");
