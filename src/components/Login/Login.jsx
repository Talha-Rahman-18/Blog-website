import React, { useState } from 'react'
import { Link } from 'react-router'
import {login as mylogin} from '../../store/slice'
import {Button,Input,Logo} from '../index'
import authservice from '../../appwrite/auth'
import {useForm} from "react-hook-form"
import { useNavigate } from 'react-router'
import {useDispatch} from "react-redux"
import './Login.css'


function Login() {


        const navigation=useNavigate();
        const dispatch= useDispatch();
        const { register, handleSubmit } = useForm();
        const [error,seterror]=useState("");

const login = async(data)=>{
    seterror("");

    try {

        const session=await authservice.login(data);
        if(session){
            const userdata=await authservice.getCurrentUser()
            console.log(userdata);

            if(userdata){
                dispatch(mylogin(userdata));
                navigation("/");
            }
        }

        
    } catch (error) {

        seterror(error.message);
        console.log("error",error)
        
    }
}



    return (
        <div className="logincont">
            <div className="lgnboth">
                <div className="leftlgn">
                    <div className="lgnbox1"></div>
                    <div className="lgnbox2"></div>
                    <div className="lgnbox3"></div>
                </div>
       <div className="maininp">
        <div className="inplogo">
            <Logo />
        </div>
        <h3 style={{fontSize:"1.5rem"}}>Sign in to your account</h3>
        <div className="parainp">
        <p>
            {error && <p style={{
                color:"red",

            }}>{error}</p>}
        </p>
</div>

        <div className="continp">
{/* email */}
            <form onSubmit={handleSubmit(login)} className='forminp'>
            <Input
            type={"email"}
            placeholder={"Enter valid email"}
            {...register("email",{
                required:true,
                 validate: {
                        matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                        "Email address must be a valid address",
                    }
            })}
            />
{/* password */}
            <Input
            type={"password"}
            placeholder={"Enter password"}
            {...register("password",{
                required:true,
            })}
            />

{/* button  */}
<Button 
text={"Login"}
type={"submit"}
width={"100%"}
/>
</form>

            
<p >
        Don't Have any Account?   
        <Link
            to="/signup"
             style={{color:"#3674B5"}}           
        >
        Sign Up
        </Link>
</p>
        </div>
       </div>
       </div>
       </div>
    )
}

export default Login
