import { Request, Response } from "express";
import UserServices from "../services/UserServices";
import { IResult, error, success } from "../utils/returnResponses";

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
}

// const userControler = new UserController

export default UserController