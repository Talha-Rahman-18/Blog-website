import React from 'react'
import Logo from '../logo/Logo'
import { NavLink, useNavigate } from 'react-router'
import { useSelector } from 'react-redux'
import './Header.css'
import { Link } from 'react-router'
import Button from '../button/Button'
import Logoutbtn from '../Logoutbtn'

function Header() {

const authStatus=useSelector((state)=>state.auth.status);

const navItems = [
    {
      name: 'Home',
      slug: "/",
      active: true
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
  },
  {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
  },
  {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
  },
  {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
  },
  ]

const navigate=useNavigate();

    return (
        <nav>
            <div className="nav">
                <div className="navlogo">
                    <Link className='navlogo' to='/' style={{textDecorationLine:"none"}}>
                    <Logo />
                    </Link>
                </div>
                <div className='navname'>
                CODYTELL
                </div>
                <div className='navbtn'>

                    {navItems.map((item)=>
                    item.active ? (
                       
                        <Button
                        className="btn"
                        key={item.name}
                        text={item.name}
                        type='button'
                        width={"10vw"}
                        backgroundColor={"transparent"}
                        onClick={()=>navigate(item.slug)}
                        />

                        

                    ):null

                    )}



                        {authStatus && (

                                <Logoutbtn />

                        )}


                </div>
            </div>
        </nav>
    )
}

export default Header
