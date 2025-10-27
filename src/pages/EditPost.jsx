import React, { useEffect, useState } from 'react'
import Postform from '../components/postform/Postform'
import { useNavigate, useParams } from 'react-router';
import appwriteservice from '../appwrite/config';

function EditPost() {
    const [post,setpost]=useState(null);
    const {slug}=useParams();
    const navigate= useNavigate();

    useEffect(()=>{
        if(slug){
            appwriteservice.getPost(slug)
            .then((post)=>{
                if(post){
                    setpost(post);
                }
            })
        }else{
            navigate("/");
        }

    },[slug,navigate])

    return post? (
        <div className="edit" style={{height:"max-content",width:"100vw"}}>
            <Postform post={post}/>
        </div>
    ):null
}

export default EditPost
