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
            await this.account.create(ID.unique(),email,password,name)
        } catch (error) {
            throw error
        }
    }
}

const authService = new AuthService();

export default authService;
