import { Request, Response } from "express";

import { IResult, error, success } from "../utils/returnResponses";
import { Service } from "typedi";
import "reflect-metadata"
import ArtistServices from "../services/ArtistServices";
@Service()
class ArtistControllers {
    constructor( private readonly services: ArtistServices){

    }

    async update(request: Request, response: Response){
        try{
            const {id, userObject} = request.body;
            let result: IResult = await this.services.updateProfile(id, userObject)
            success(result, response)
        }
        catch(err: any){
            let result = {message: err.message, status: err.status, payload:null}
            error(result, response)
        }
    }

    async getArtistById(request: Request, response: Response){
        try{
            let {id} = request.params;
            let result = await this.services.getArtistById(id)
            success(result, response)
        }
        catch(err: any){
            let result = {message: err.message, status: err.status, payload:null}
            error(result, response)
        }
    }

    async getArtistByUser(request: Request, response: Response){
        try{
            let {userId} = request.params;
            let result: any = await this.services.getArtistByUserId(userId)
            success(result, response)
        }
        catch(err: any){
            let result = {message: err.message, status: err.status, payload:null}
            error(result, response)
        }
    }

    async getAllArtists(request: Request, response: Response){
        try{
            let result: any = await this.services.getAllArtist()
            success(result, response)
        }
        catch(err: any){
            let result = {message: err.message, status: err.status, payload:null}
            error(result, response)
        }
    }
    
}

// const userControler = new ArtistControllers

export default ArtistControllers