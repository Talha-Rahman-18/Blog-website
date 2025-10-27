import React from 'react'
import './Postcard.css'
import { Link } from 'react-router'
import appwriteservice from '../../appwrite/config'
import { useSelector } from 'react-redux'

function Postcard({$id,tittle,featuredimage,author}) {
    const user=useSelector((state)=>state.auth.userdata);
    return (

        <Link to={`/post/${$id}`} style={{textDecoration:"none",color:"#F4DFC8"}}>
        <div className="cardcont">

            <div className="cardimg">
                <img className="cardimage" src={appwriteservice.getFileView(featuredimage)} alt={tittle} />
                </div> 
            <div className="tittle">
                <h3>{tittle}</h3>
                <h3>Author: {author} </h3>
            </div>

        </div>
        </Link>
    )
}

export default Postcard
