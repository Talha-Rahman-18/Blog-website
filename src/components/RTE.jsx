import React from "react";
import { Controller } from "react-hook-form";
import {Editor} from '@tinymce/tinymce-react'



export default function RTE({name, control, label, defaultValue =""}) {
  return (
    <div style={{height:"100%",display:"flex",flexDirection:"column",gap:"20px"}}> 
    {label && <label style={{fontSize:"1.2rem"}}>{label}</label>}
    <Controller
    name={name || "content"}
    control={control}
    render={({field: {onChange}}) => (
        <Editor
        apiKey="dkd2iphkxmj95o4lq9ypyuir7kpyykwfeivdnfx5o5nuf1gb"
        initialValue={defaultValue}
        init={{
          selector: '#editor',
            initialValue: defaultValue,
            height: 600,
            menubar: true,
            plugins: [
                "image",
                "advlist",
                "autolink",
                "lists",
                "link",
                "image",
                "charmap",
                "preview",
                "anchor",
                "searchreplace",
                "visualblocks",
                "code",
                "fullscreen",
                "insertdatetime",
                "media",
                "table",
                "code",
                "help",
                "wordcount",
                "anchor",
            ],
            toolbar:
            "undo redo | blocks | image | bold italic forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |removeformat | help",
            content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }"
        }}
        onEditorChange={onChange}
        />
    )}
    />

     </div>
  )
}