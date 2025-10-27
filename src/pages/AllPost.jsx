import React, { useEffect, useState } from 'react'
import appwriteservice from '../appwrite/config'
import Postcard from '../components/postcard/Postcard'

function AllPost() {
    const [posts,setposts]=useState([]);

    useEffect(()=>{
        appwriteservice.getPosts([]).then((post)=>{
            if(post){
            setposts(post.documents);
            console.log(post.documents);
            }
        })
    
    },[])

    if(posts.length===0){return(
    
    <div style={{height:"85vh",width:"100vw",backgroundColor: "rgb(230, 230, 230)",fontSize:"3vw",display:"flex",alignItems:"center",justifyContent:"center"}}>
        No Post Available
    </div>)}
    return (
        <div className="allpstcont" style={{height:"max-content",width:"100vw",    background: "rgb(230, 230, 230)"
,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>

<h1 style={{color:"#1C6EA4",textAlign:"center",height:"10%",width:"100%"}}>Read Any Documentry From This Page</h1>

<div className="mainposts" style={{height:"100%",width:"100%",display:"flex",flexWrap:"wrap",justifyContent:"center",gap:"50px",padding:"20px"}}>
{posts?.map((post)=>
(
    

    <div key={post.$id} style={{height:"max-content",width:"max-content",padding:"5px",borderRadius:"12px"}}>
        <Postcard {...post}/>
    </div>

))}
</div>

        </div>
    )
}

export default AllPost
