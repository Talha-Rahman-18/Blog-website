import React, { useCallback } from 'react'
import RTE from '../RTE'
import { useForm } from 'react-hook-form'
import {Button,Input, Login,} from '../index'
import appwriteservice from '../../appwrite/config'
import {useNavigate } from 'react-router'
import { useSelector } from 'react-redux'
import { Form } from 'react-router'
import './Postform.css'
import Select from '../select/Select'

function Postform({post}) {

    const {register,handleSubmit,watch,setValue,control,getValues,formState:{errors}}=useForm({
        defaultValues:{
            tittle: post?.tittle || "",
            slug: post?.$id || "",
            content: post?.content || "",
            status: post?.status || "active",
            author:post?.author || "",
        },
    });

    const navigate =useNavigate();
    const userdata=useSelector((state)=>state.auth.userdata);

    const submit=async(data)=>{
        if(post){
            const file= data.image[0] ? await appwriteservice.uploadFile(data.image[0]):null;

            if(file){
                appwriteservice.deleteFile(post.featuredimage);

            }
            const dbpost=await appwriteservice.updatePost(post.$id,{
                ...data,
                featuredimage:file ? file.$id:undefined,
            });
            if(dbpost){
                navigate(`/post/${dbpost.$id}`);
            }

        }else{
            const file= await appwriteservice.uploadFile(data.image[0]);
            if(file){
                const fileid=file.$id;
                data.featuredimage=fileid;

                const dbpost=await appwriteservice.createPost({...data,userId:userdata.$id});

                if(dbpost){
                    navigate(`/post/${dbpost.$id}`);
                }
            }

        }

    };

    const slugtransform = useCallback((value) => {
        if (value && typeof value === "string")
            return value
                .trim()
                .toLowerCase()
                .replace(/[^a-zA-Z\d\s]+/g, "-")
                .replace(/\s/g, "-");

        return "";
    }, []);

     React.useEffect(() => {
        const subscription = watch((value, { name }) => {
            if (name === "tittle") {
                setValue("slug", slugtransform(value.tittle), { shouldValidate: true });
        }
        });
         return () => subscription.unsubscribe();
    }, [watch, slugtransform, setValue]);


// mainjsx

    return (
        <Form onSubmit={handleSubmit(submit)} className='form'>
           
      <div className="mainpst">
       
{/* right side */}



<div className="right" >
    <h2 style={{textAlign:'center',width:"100%"}}>Fill all the information for post</h2>
    
            {/* input  */}
<div className="pstinp">
<Input 

label="Author :"
placeholder="author"
{...register("author",{
    required:"author name is required"
})}
/>

{errors.author &&(
    <p className='error'>*{errors.author.message}</p>
)}
   {/* title  */}
<Input 

label="Tittle :"
placeholder="Tittle"
{...register("tittle",{
    required:"Tittle is required"
})}
/>
{errors.tittle && (
    <p className='error'>*{errors.tittle.message}</p>
)}
{/* slug  */}
<Input

label="Slug :"
placeholder="Slug"
{...register("slug",{
    required:"slug name required"
})}
onInput={(e)=>{
    setValue("slug",slugtransform(e.currentTarget.value),{shouldValidate:true});
}}
/>
{errors.slug && (
    <p className='error'>*{errors.slug.message}</p>
)}
{/* image  */}
<Input 
label="Featured Image : "
type="file"
accept="image/png, image/jpg, image/jpeg, image/gif"
{...register("image",{
    required:!post? "image required" : null
})}

/>
{errors.image && (
    <p className='error'>*{errors.image.message}</p>
)}
{/* {post && (
        <div >
            <img
                src={appwriteservice.getFileView(post.featuredimage)}
                alt={post.tittle}
                
            />
        </div>
    )} */}
</div>


            {/* select  */}

<div className="slct">
<Select
width="100%"
options={["active","inactive"]}
label={"Status"}
{...register("status",{
    required:true
})}

/>
{/* buttn */}

<div className="pstbtn">
<Button 
className='sbmtbtn'
text={post?"Update":"Submit"}
type='submit'
width={"50%"}
/>
</div>
</div>

        </div>

{/* left */}
         <div className="left">
            
            <h2 style={{height:".2%"}}>You Can Use The Real Time Editor To Write Your Blog Content</h2>
            {/* rte */}
            <div className="rte">
 <RTE  name="content" control={control} defaultValue={getValues("content")} />
            </div>
        </div>
      </div>
      </Form>
    )
}

export default Postform
