
// import React from 'react'
import "./Qualification.css"
import cbse from "../../../public/CBSE.jpg";
import nsuticon from "../../../public/nsutIcon.jpg";

function Qualification() {
  return (
    <>
    <h3 className="anims">Qualification</h3>
      <div className="timeline">
      <div className="Container left-Container">
        <img src={nsuticon}  alt="" />
        <div className="text-Box">
          <h2>Graducation</h2>
          <small>2022 - 2026</small>
          <p><ul><li>Bachelor of Technology  (B.Tech) From</li><br /> <li>NETAJI SUBHASH UNIVERSITY OF TECHNOLOGY (NSUT)</li> </ul></p>
          <span className="left-Container-arrow"></span>
        </div>
      </div>
      <div className="Container right-Container">
      <img src={cbse}  alt="" />
        <div className="text-Box">
          <h2>High School Diploma</h2>
          <small>2021 - 2022</small>
          <p><ul><li>Central Board of Secondary Education (CBSE)</li> <br /><li>Specialization in Science Stream</li></ul></p>
      
          <span className="right-Container-arrow"></span>
        </div>
      </div>
      <div className="Container left-Container">
      <img src={cbse}  alt="" />
        <div className="text-Box">
          <h2>Secondary Education (10th Grade)</h2>
          <small>2019 - 2020</small>
          <p><ul><li>Central Board of Secondary Education (CBSE)</li></ul></p>
          <span className="left-Container-arrow"></span>
        </div>
      </div>
      {/* <div className="Container right-Container">
      <img src="PW.jpg" width="40px" height="40px" alt="" />
        <div className="text-Box">
          <h2>Full-Stack Web Development Course</h2>
          <small>2023 - 2024</small>
          <p><ul><li>Provider: pw skills</li><br /><li>Specialization: Front-End Web Development</li></ul></p>
          <span className="right-Container-arrow"></span>
        </div>
      </div> */}
    </div>
    </>
  
  );
}

export default Qualification;