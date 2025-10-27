import React, { useEffect, useState } from 'react'
import {Link, useNavigate} from 'react-router'
import {useSelector} from 'react-redux'
import appwriteservice from '../appwrite/config'
import appwriteauth from '../appwrite/auth'
import parse from 'html-react-parser'
import { Button } from '../components'
import { useParams } from 'react-router'
import './Post.css'



function Post() {
    const user=useSelector((state)=>state.auth.userdata);
    const [post,setpost]=useState(null);
  
    const {slug}=useParams();
    const navigate=useNavigate(); 
    const [userdata,setuserdata]=useState();
   
    const isauthor = post && userdata ? post.userId===userdata.$id : false;


 if(post){
console.log(appwriteservice.getFileView(post.featuredimage)) 
}

    useEffect(()=>{
        const user =appwriteauth.getCurrentUser().then((user)=>{
            if(user){
                setuserdata(user);
            }
        })

    },[navigate,slug])


    useEffect(()=>{
        if(slug){
            appwriteservice.getPost(slug)
            .then((posts)=>{
                if(posts){
                setpost(posts);
                }else{
                    navigate("/");
                }
            });
        }else{
            navigate("/");
        }

    },[slug,navigate]);

    if (!post) {
  return (
    <div style={{ color: 'black',backgroundColor:"rgb(230,230,230)", textAlign: 'center',fontSize:"3vh"}}>
      Loading post...
    </div>
  );
}

    const deletepost= ()=>{
        appwriteservice.deletePost(post.$id).then((status)=>{
            if(status){
                appwriteservice.deleteFile(post.featuredimage);
                navigate("/all-posts");
            }
        });
    };



    return (
        <div className="postcont" style={{height:"max-content", width:"100vw",
            paddingBottom:"30px",color:"Black",backgroundColor:"rgb(230, 230, 230)", display:"flex", flexDirection:"column", alignItems:"center",justifyContent:"center",gap:"5px"}}>


                
                {/* tittle */}
            <h1 style={{height:"10%", width:"100%", textAlign:"center"}}>{post?.tittle || 'Untitled Post'}</h1>
            <h3 style={{height:"10%", width:"100%", textAlign:"center"}}>By- {post?.author || 'Untitled Post'}</h3>


{/* pic  */}

{post?.featuredimage && (
            <div className="imagepost" style={{
               
                borderRadius:"14px",
                border:"2px solid #E4DFC8",
                display:"flex",
                alignItems:"center",
                justifyContent:"center"
            }}>
<img src={appwriteservice.getFileView(post.featuredimage)} 
alt={post?.tittle} 
style={{height:"100%",width:"100%",borderRadius:"12px",objectFit:"cover"}}
 />
 
            </div>

            )}



{/* content  */}
{post.content? (
    <div className="cntntpost">
<h2>Content :</h2>


    <p>{parse(post.content)}</p>
</div>
):(<h2>No Content For This Post!</h2>)}


{isauthor && (
<div className="postbtn" style={{display:"flex",height:"120px",width:"100%",justifyContent:"center",alignItems:"center",gap:'30px'}}>
    
        <Link to={`/edit-post/${post.$id}`}>
            <Button
            text={"Edit"}
            width={"130px"}
            height={"50px"}
            />
        </Link>
        <Button 
        text={"Delete"}
        width={"130px"}
        height={"50px"}
        onClick={deletepost}
        />
        
        
</div>
    )}
</div>
     )
}

export default Post
