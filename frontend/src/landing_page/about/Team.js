import React from "react";
function Team() {
  return (
    <div className="container " style={{ fontFamily: "serif" }}  >
        <h1 className="text-center mb-4" >
          People
        </h1>
      <div className="row" >
        
        <div className="col text-center ">
          <img
            src="media/images/dhrumilpic1.jpg"
            alt="dhrumilpic"
            style={{ borderRadius: "100%", width: "295px", height: "295px" }}
          />
          <h5 className="mt-3" >
            Dhrumil Patel
          </h5>
          <p style={{ color: "gray", fontFamily: "serif" }}>Clone-Developer(Zerodha)</p>
        </div>
        <div className="col  " style={{fontSize:"16px",margin:"16px,0,15px,0" }}>
          <p>
            I’m Dhrumil Patel, and I built this Zerodha clone in 2025 as a
            passion project to challenge myself and showcase my skills as a
            full-stack developer. Inspired by Zerodha’s simplicity, design, and
            impact on India’s trading ecosystem, I decided to replicate its core
            structure using modern web technologies.
          </p>
          <p>
            I used the MERN stack — MongoDB, Express.js, React, and Node.js —
            along with Bootstrap for a smooth and responsive user experience.
            Every feature and component in this clone was crafted to reflect
            real-world usability and performance.
          </p>
          <p>
            This project reflects more than just coding — it reflects my
            mindset: build with intention, learn by doing, and keep improving.
          </p>
          <p>
            Connect with me on
            <a style={{textDecoration:"none"}} href="https://github.com/DHRUMIL3004"> GitHub </a> /  
            <a style={{textDecoration:"none"}} href="https://www.linkedin.com/in/dhrumil-patel-3763742b9">
           &nbsp;  LinkedIn
            </a>.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
