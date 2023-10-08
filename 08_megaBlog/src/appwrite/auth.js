import config from "../config/config";
import {Client,Account,ID} from 'appwrite'

export class AuthService{
    client = new Client();
    account;

    constructor(){
        this.client.setEndpoint(config.appwriteUrl).setProject(config.appwriteProjectId)
        account = new Account(this.client)
    }

    async createAccount({email,password,name}){
        try {
            const userAccount = await this.account.create(ID.unique(),email,password,name)

            if(userAccount){
                return this.login({email,password})
            }
            else{
                return userAccount;
            }

        } catch (error) {
            throw error
        }
    }

    async login({email,password}){
        try {
            return await this.account.createEmailSession(email,password)
        } catch (error) {
            throw error
        }
    }
}

const authService = new AuthService();

export default authService;
