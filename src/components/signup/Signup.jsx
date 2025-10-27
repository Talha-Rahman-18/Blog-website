import React, { useState } from 'react'
import {Button,Logo,Input} from '../index'
import { Link } from 'react-router'
import {login as mylogin} from '../../store/slice'
import { useNavigate } from 'react-router'
import { useDispatch } from 'react-redux'
import Login from '../Login/Login'
import { useForm } from 'react-hook-form'
import authService from '../../appwrite/auth'
import './Signup.css'

function Signup() {

const [error,seterror]=useState("");
const dispatch=useDispatch();
const navigate=useNavigate();
const {register,handleSubmit}= useForm();


const signup = async(data)=>{
    seterror("")
   
    try {
        const session= await authService.createAccount(data)
        if(session){
           const userdata=await authService.getCurrentUser()
           if(userdata){
            dispatch(mylogin(userdata));
            navigate("/");
           }


        }

        
    } catch (error) {
        seterror(error.message);
    }

}



    return (
        <div className="sgncont">
            <div className="both">
        <div className="leftsgn">
            <h1>Codytell</h1>
        </div>
         <div className="mainsgn">
                <div className="sgnlogo">
                    <Logo />
                </div>
               
                <div className="parasgn">
                    <p>
                    {error && <p  style={{
                        color:"red",
        
                    }}>{error}</p>}
                </p>
                </div>
        
        
                <div className="continp">
        <h3>Sign up to your account</h3>
<form onSubmit={handleSubmit(signup)} className='formsgn'>
        {/* name  */}
                    <Input 
                    type={"text"}
                    placeholder={"Enter Username"}
                    {...register("name",{
                        required:true,
                    })}
                    
                    />
        {/* email */}
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
        text={"Sign up"}
        type={"submit"}
        width={"100%"}
        />
        
</form>
        
                    
<p >
            Have an Account?
            <Link
                to="/login"
                style={{color:"black"}}                
            >
                Sign In
            </Link>
</p>
        
                </div>
                </div>
                </div>
               </div>
    )
}

export default Signup
