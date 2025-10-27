import React, { useEffect, useState } from 'react'
import react from './react.jpg'
import res from './res.jpg'
import fullstack from './fullstack.jpg'

function Service() {
    return (
        <div className="servicemain" style={{height:"max-content",width:"100vw",paddingBottom:"50px",backgroundColor:"white",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>

<h2 style={{color:"black",textAlign:"center",height:"8%",width:"100%"}}>Our Service's</h2>

<div className="services" style={{height:"100%",width:"100%",display:"flex",flexWrap:"wrap",justifyContent:"center",gap:"70px"}}>

{/* servc conts  */}
{/* 1st */}
    <div className="box" style={{height:"380px",padding:"30px",borderRadius:"12px",width:"280px",border:"3px solid skyblue",color:"black",display:"flex",flexDirection:"column",alignItems:"center",gap:"10px"}}>
       <div className="imgsrvc" style={{height:"100px",width:"100px",borderRadius:"50%",backgroundSize:"cover"}}>
        <img src={react} alt="pic" style={{objectFit:"cover",height:"100%",width:"100%",borderRadius:"50%"}} / >
        </div> 

        <h2>Figma to React</h2>

        <div className="para" style={{height:"50%", width:"100%",textAlign:"center"}}>
            <p>If you want to make your website captivating, we are here to make your website super attractive by converting your FIGMA design to REACT webpage.It will very professional and better your user experience. We are here to upbuild your business.</p>
        </div>

    </div>

    {/* 2nd */}
    <div className="box" style={{height:"380px",padding:"30px",borderRadius:"12px",width:"280px",border:"3px solid skyblue",color:"black",display:"flex",flexDirection:"column",alignItems:"center",gap:"10px"}}>
       <div className="imgsrvc" style={{height:"100px",width:"100px",borderRadius:"50%",backgroundSize:"cover"}}>
        <img src={fullstack} alt="pic" style={{objectFit:"cover",height:"100%",width:"100%",borderRadius:"50%"}} / >
        </div> 

        <h2>FullStack Website</h2>

        <div className="para" style={{height:"50%", width:"100%",textAlign:"center"}}>
            <p>Imagine your business having a website that doesn’t just exist — it stands out.
We create modern, full-stack websites built to attract customers, load fast, and work perfectly on any device.
From smooth UI design to powerful backend systems — we handle it all.
Let’s turn your ideas into a sleek, responsive, and result-driven website.
You bring the vision, we’ll bring it to life.  </p>
        </div>

    </div>
    {/* 3rd */}
    <div className="box" style={{height:"380px",padding:"30px",borderRadius:"12px",width:"280px",border:"3px solid skyblue",color:"black",display:"flex",flexDirection:"column",alignItems:"center",gap:"10px"}}>
       <div className="imgsrvc" style={{height:"100px",width:"100px",borderRadius:"50%",backgroundSize:"cover"}}>
        <img src={res} alt="pic" style={{objectFit:"cover",height:"100%",width:"100%",borderRadius:"50%"}} / >
        </div> 

        <h2>Responsive Website</h2>

        <div className="para" style={{height:"50%", width:"100%",textAlign:"center"}}>
            <p>Make your website responsive for any device, that can help anyone to reach you fast and grow your business. If you want to build a fully responsive website then we are here to make it for you. We are providing fully responsive webpages/websites with super UI which can help you to grow fast!</p>
        </div>

    </div>
   

</div>

        </div>
    )
}

export default Service
