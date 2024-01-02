import {Client, Account, ID} from "appwrite"
import config from "../config/config";

export class Authservice{
    client = new Client()
    account;

    constructor(){
        this.client
            .setEndpoint(config.appwriteUrl)
            .setProject(config.appwriteProjectId)
    }

    async createAccount({email,password,name}){
        try {
            const userAccount = await this.account.create(ID.unique(),email,password,name)
            if (userAccount) {
                //Login user
                this.login({email,password})
            } else {
                return userAccount;
            }
        } catch (error) {
            console.log("Error in Appwrite Service Function createAccount: ",error) 
        }
    }

    async login({email,password}){
        try {
            return await this.account.createEmailSession({email,password})
        } catch (error) {
            console.log("Error in Appwrite Service Function login: ",error) 
        }
    }

    async getCurrentUser(){
        try {
            return this.account.get();
        } catch (error) {
           console.log("Error in Appwrite Service Function getCurrentUser: ",error) 
        }
        return null;
    }

    async logout(){
        try {
            return await this.account.deleteSessions()
        } catch (error) {
            console.log("Error in Appwrite Service Function logout: ",error) 
        }
    }

}

const authservice = new Authservice()

export default authservice;