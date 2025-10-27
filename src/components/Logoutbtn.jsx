import React, { useState } from 'react'
import Button from './button/Button'
import { logout as mylogout } from '../store/slice';
import authService from '../appwrite/auth';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';

function Logoutbtn(...props) {

    const dispatch=useDispatch();
    const navigate=useNavigate();
    
    const logout=()=>{
        authService.logout()
        .then(()=>{
                dispatch(mylogout());
                navigate("/");
        })
        
       
    }
    return (
        <Button 
        fontWeight={"800"}
        text={"Logout"}
        type="button"
        width={"max-content"}
        backgroundColor={"transparent"}
        color={"blue"}
        onClick={logout}
        />
    )
}

export default Logoutbtn
