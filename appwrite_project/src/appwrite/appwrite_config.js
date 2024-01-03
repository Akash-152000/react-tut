import config from "../config/config";
import { Client, Databases,Storage,ID } from "appwrite";

class Service{
    client = new Client();
    databases;
    bucket;

    constructor(){
        this.client
        .setEndpoint(config.appwriteUrl)
        .setProject(config.appwriteProjectId);
        this.databases= new Databases(this.client)
        this.bucket = new Storage(this.client)
    }

    async createPost({title,slug,content,featuredImage,status,userId}){
        try {
            return await this.databases.createDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId
                }
            )

        } catch (error) {
            console.log("Error in Appwrite Config Function createPost: ",error) 
        }
    }

    async updatePost(slug,{title,content,featuredImage,status}){
        try {
            return await this.databases.updateDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status
                }
                )


        } catch (error) {
            console.log("Error in Appwrite Config Function updatePost: ",error)
        }
    }

    async deletePost(slug){
        try {
            await this.databases.deleteDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug
            )
            return true
            
        } catch (error) {
            console.log("Error in Appwrite Config Function deletePost: ",error)
            return false
        }
    }

    async getPost(slug){
        try {
            return await this.databases.getDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug
            )
           
        } catch (error) {
            console.log("Error in Appwrite Config Function getPost: ",error)
            return false
        }
    }

    async getPosts(queries = [Query.equal("status","active")]){
        try {
            
            return await this.databases.listDocuments(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                queries
            )

        } catch (error) {
            console.log("Error in Appwrite Config Function getPosts: ",error)
            return false
        }
    }

    //File Upload Service

    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                config.appwriteBucketId,
                ID.unique(),
                file
            )
            
        } catch (error) {
            console.log("Error in Appwrite Config Function uploadFile: ",error)
            return false
        }
    }

    async deleteFile(fileId){
        try {
            
            await this.bucket.deleteFile(
                config.appwriteBucketId,
                fileId
            )
            return true

        } catch (error) {
            console.log("Error in Appwrite Config Function deleteFile: ",error)
            return false
        }
    }

    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            config.appwriteBucketId,
            fileId
        )
    }

}


const service = new Service();

export default service;
