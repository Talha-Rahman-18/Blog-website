import React from 'react'
import { useEffect,useRef } from 'react'
import {Link, useNavigate} from 'react-router'
import Button from '../components/button/Button'
import {useSelector} from 'react-redux'
import authService from '../appwrite/auth'
import {login,logout} from '../store/slice'
import LoginPage from './LoginPage'
import { useDispatch } from 'react-redux'
import Service from './Service'
import About from './About'
import Typed from 'typed.js'
import './Home.css'


function Home() {
    const dispatch=useDispatch();

  //   useEffect(()=>{
  //   authService.getCurrentUser()
  //   .then((userdata)=>{
  //     if(userdata){
  //       dispatch(login({userdata}));

  //     }else{
  //       dispatch(logout());

  //     }
  //   })
    

  // },[]);

//type effect//
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Story", "Vision", "Journey"],
      typeSpeed: 100,    
      backSpeed: 70,        
      loop: true,           
      backDelay: 1000,      
    });

    return () => typed.destroy();
  }, []);



    const authstatus=useSelector((state)=>state.auth.status);

    return (
      <>
      <section id='home'>
        <div className="homecont" >
            <div className="write" >
Write Your <br /> Own <span ref={el} style={{ color: "rgb(255, 153, 0)" }}></span> <br /> here.
            </div>

            {/* buton  */}

            <div className="homebtn" >
<Link to={authstatus? "/all-posts":"/login"}>
<Button 
backgroundColor={"rgb(255, 153, 0)"}
color={" white"}
fontSize={"1.3rem"}
height={"50px"}
type='button'
width={"150px"}
text={authstatus? "Read Post →":"Login →"}
/>
</Link>
</div>
        </div>
</section>
{authstatus? (
  <div>
   <section id='service'>
          <Service />
        </section>
        <section id='about'>
         <About />
        </section>
        </div>
) : null}
       

        </>
    )
}

export default Home
