import conf from '../conf/conf';
import { Client,Account,ID } from 'appwrite';

export class AuthService{
    client=new Client();
    account;

constructor(){
    this.client
    .setEndpoint(conf.endpoint)
    .setProject(conf.project);

    this.account=new Account(this.client);
}

async createAccount({email,password,name}){
    try {
      const userAccount=  await this.account.create(ID.unique(),email,password,name);
    
        if(userAccount){
            //use another methode
            return this.login({email,password});


        }else{
            return userAccount;
        }

    
    } catch (error) {
     alert(error);
    }
}

async login({email,password}){
    try {
       return await this.account.createEmailPasswordSession(
            email,password
        );
    } catch (error) {
     alert(error);

    }
}

async getCurrentUser(){
    try {
        return await this.account.get();
    } catch (error) {
     alert(error);
    }

    return null;
}

async logout(){
    try {
        await this.account.deleteSessions();

    } catch (error) {
     alert(error);

    }
}
}


const authService =new AuthService();


export default authService;
