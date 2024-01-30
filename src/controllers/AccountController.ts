import { NextFunction, Request, Response } from "express";
import { error, success } from "../utils/returnResponses";
import AccountServices from "../services/AccountServices";

class AccountController{
    constructor(private readonly service : AccountServices){}

    async getAccountByUser(request: Request, response: Response, next: NextFunction){
        try{
            let {userId} = request.body
            let result = await this.service.getAccountByUser(userId)
            success(result, response)
        }   
        catch(err: any){
            let result = {
                message: err.message,
                status: err.status,
                payload: null
            }
            error(result, response)
        }
    }

    async createAccount(request: Request, response: Response, next: NextFunction){
        try{
            let content = request.body

            //get userid from middleware

            let result = await this.service.createAccount(content)
            success(result, response)
        }   
        catch(err: any){
            let result = {
                message: err.message,
                status: err.status,
                payload: null
            }
            error(result, response)
        }
    }

    async editAccount(request: Request, response: Response, next: NextFunction){
        try{
            let content = request.body

            //get userid from middleware and confirm authorization
            let userId = ""

            let result = await this.service.editAccount(userId, content)
            success(result, response)
        }   
        catch(err: any){
            let result = {
                message: err.message,
                status: err.status,
                payload: null
            }
            error(result, response)
        }
    }

    async withdraw(){
        
    }
}