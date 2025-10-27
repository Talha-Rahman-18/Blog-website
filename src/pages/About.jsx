import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // animate only once
    threshold: 0.3,    // when 30% of section is visible
  });

  return (
    <div style={{height:"max-content",width:"100%",backgroundColor:"rgb(90, 180, 215)",display:"flex",flexDirection:"column",gap:"0px"}}>
   <h1 style={{textAlign:"center",color:"white"}}>About us</h1>
    <div
      ref={ref}
      style={{
        fontSize:"3vw",
        fontWeight:"800",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        padding: "50px 0",
        color:"white"
        
      }}
    >
        
      <div>
        {inView && <CountUp start={0} end={1321} duration={2} separator="," />} <span>+</span>
        <p>Users</p>
      </div>

      <div>
        {inView && <CountUp start={0} end={4125} duration={2} separator="," />} <span>+</span>
        <p>Readers</p>
      </div>

      <div>
        {inView && <CountUp start={0} end={792} duration={2.5} separator="," />} <span>+</span>
        <p>Projects</p>
      </div>
    </div>
    </div>
  );
};

export default About;
