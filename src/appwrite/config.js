import conf from "../conf/conf";
import { Client,ID,Databases,Storage,Query } from "appwrite";

export class Service{
    client=new Client();
    databases;
    bucket;

    constructor(){
        this.client
        .setEndpoint(conf.endpoint)
        .setProject(conf.project);

        this.databases=new Databases(this.client);
        this.bucket=new Storage(this.client);

    }

async createPost({slug,tittle,content,featuredimage,status,userId,author}){
    try {
        return await this.databases.createDocument(
            conf.database,
            conf.collection,
           slug,
           {
            tittle,
            content,
            featuredimage,
            status,
            userId,
            author,
           }
        )
    } catch (error) {
      console.log("Appwrite service :: createPost :: error",error);
    }

}

async updatePost(slug,{tittle,content,featuredimage,status,author}){
try {
    return await this.databases.updateDocument(
        conf.database,
            conf.collection,
        slug,
        {
            tittle,
            content,
            featuredimage,
            status,
            author
        }


    )
} catch (error) {
    console.log("Appwrite service :: updatepost :: error",error);
}
}

async deletePost(slug){
    try {
       await this.databases.deleteDocument(
             conf.database,
            conf.collection,
            slug,
        )
        return true;
    } catch (error) {
        console.log("Appwrite service :: deletepost :: error",error); 

        return false;
    }
}

async getPost(slug){
    try {
        return await this.databases.getDocument(
            conf.database,
            conf.collection,
            slug,
        )
    } catch (error) {
       console.log("Appwrite service :: getpost :: error",error);  
       return false;
    }
}

async getPosts(){
    try {
        // console.log("Running getPosts with:", queries);
        return await this.databases.listDocuments(
            conf.database,
            conf.collection,
            [Query.equal("status","active")]

        )
    } catch (error) {
         console.log("Appwrite service :: getposts :: error",error);
         return false;
    }

}

//file updoad service

async uploadFile(file){
    try {
        return await this.bucket.createFile(
            conf.bucket,
            ID.unique(),
            file,
        )
    } catch (error) {
       console.log("Appwrite service :: uploadfile :: error",error);
         return false;
    }
}

async deleteFile(fileId){
    try {
         await this.bucket.deleteFile(
            conf.bucket,
            fileId,
        )
        return true; 
    } catch (error) {
        console.log("Appwrite service :: deletefile :: error",error);
         return false;
    }
}


getFileView(fileId) {
  return this.bucket.getFileView(conf.bucket, fileId);
}






}




const appwriteservice=new Service();

export default appwriteservice;