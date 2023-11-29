import { Request, Response } from "express";
import UserServices from "../services/UserServices";
import { IResult, error, success } from "../utils/returnResponses";
import { Service } from "typedi";
import "reflect-metadata"
@Service()
class UserController {
    constructor( private readonly userService: UserServices){

    }

    async signUp(request: Request, response: Response){
        try{
            
            let {email, password} = request.body;
            let result: IResult = await this.userService.signUp(email, password)
            success(result, response)
        }
        catch(err : any){
            let result = {message: err.message, status: err.status, payload:null}
            error(result, response)
        }
    }

    async signIn(request: Request, response: Response){
        try{
            let {email, password} = request.body;
            let result: IResult = await this.userService.signIn(email, password)
            success(result, response)
        }
        catch(err : any){
            let result = {message: err.message, status: err.status, payload:null}
            error(result, response)
        }
    }

    async update(request: Request, response: Response){
        try{
            const {id, userObject} = request.body;
            let result: IResult = await this.userService.updateProfile(id, userObject)
            success(result, response)
        }
        catch(err: any){
            let result = {message: err.message, status: err.status, payload:null}
            error(result, response)
        }
    }

    async forgotPassword(request: Request, response: Response){
        try{
            let {email} = request.body;
            let result = await this.userService.forgotPassword(email)
            success(result, response)
        }
        catch(err: any){
            let result = {message: err.message, status: err.status, payload:null}
            error(result, response)
        }
    }

    async resetPassword(request: Request, response: Response){
        try{
            let {email, resetCode} = request.body;
            let result = await this.userService.resetPassword(email, resetCode)
            success(result, response)
        }
        catch(err: any){
            let result = {message: err.message, status: err.status, payload:null}
            error(result, response)
        }
    }

    async getUserById(request: Request, response: Response){
        try{
            let {id} = request.params;
            let result = await this.userService.getUserById(id)
            success(result, response)
        }
        catch(err: any){
            let result = {message: err.message, status: err.status, payload:null}
            error(result, response)
        }
    }

    
}

// const userControler = new UserController

export default UserController