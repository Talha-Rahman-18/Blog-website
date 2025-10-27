import React from 'react'
import { Link } from 'react-router'
import {Button,Input} from '../index'
import './Foot.css'
import {HashLink} from 'react-router-hash-link'
import { useSelector } from 'react-redux'

function Foot() {
const auth=useSelector((state)=>state.auth.status);
    const navs=[
        {
            name:"Home",
            slug:"/"
        },
        {
            name:"All Post",
            slug:"/all-posts"
        },
        {
            name:"Add Post",
            slug:"/add-post"
        },
    ]
    const abts=[
        {name:"Terms & Conditions" ,
            slug:"/terms-conditions" ,
        },
        {name:"Status" ,
            slug:"/#about" ,
        },
        {name: "Service's",
            slug:"/#service" ,
        }
    ]
    return (
       <div className="footcont">
        <div className="footmain">
            <div className="box1">
                <h1>CODYTELL</h1>
                <p>WELCOME, to my blog website "CODYTELL", where you can express your ideas,thoughts,experiences on diffrent topics that can help others. You can share about your vision and goals journey as well!</p>
                <div className="footicn">
                    <div className="infos">
                        <div className="inf" >
            <i class="fa-solid fa-phone"></i>
            <Link style={{textDecoration:"none",color:"#bcbcbc"
            }}>++01777777777</Link>
            </div>
            <div className="inf"  >
            <i class="fa-solid fa-envelope"></i>
            <p>codytell@gmail.com</p>
            </div>
                    </div>
                    <div className="icnmain">
                        
                <i class="fa-brands fa-square-facebook"></i>
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-whatsapp"></i>
                </div>
                </div>
                
            </div>

            {/* box2 */}
            <div className="box2">
                <div className="cndtn">
                    <h2>Information</h2>
                   {abts.map((itm)=>
                    <ul key={itm.slug}>
                        <li key={itm.slug} style={{color:"#bcbcbc"}}>
                        <HashLink  smooth to={auth? itm.slug:"/login"}  className='lnks' key={itm.slug}>{itm.name}</HashLink>
                        </li>
                    </ul>
                   )} 
                </div>
                <div className="qck">
                    <h2>Quick Links</h2>
                   {navs.map((itm)=>
                    <ul>
                        <li style={{color:"#bcbcbc"}}>
                        <Link   to={auth? itm.slug : "/login"}  className='lnks' key={itm.slug}>{itm.name}</Link>
                        </li>
                    </ul>
                   )} 
                </div>
            </div>

            {/* box3 */}
            <div className="box3">
                <h2>Contact</h2>
                <Input 
                color="#E4DFC8"
                border="2px solid #E4DFC8"
                type="email"
                placeholder="Enter your email"
                requered="true"
                />
                 <Input 
                border="2px solid #E4DFC8"
                color="#E4DFC8"
                type="text"
                placeholder="Message"
                requered="true"
                style={{height:"150px"}}
                />
            <button className="footbtn" type='button' style={{width:"100px",
            }}><i class="fa-solid fa-paper-plane"></i>send</button>
                
            </div>
        </div>

<footer style={{color:"#bcbcbc",textAlign:"center"}}>
    <h3>Copyright ©2025 All rights reserved
| A product of Talha Group.</h3>
</footer>
       </div>

       
    )
}

export default Foot
