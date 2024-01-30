import { Request, Response } from "express";

import { IResult, error, success } from "../utils/returnResponses";
import { Service } from "typedi";
import "reflect-metadata"
import SongServices from "../services/SongServices";
@Service()

class SongController {
    constructor( private readonly services: SongServices){

    }

    async update(request: Request, response: Response){
        try{
            const {id, userObject} = request.body;
            let result: IResult = await this.services.updateSong(id, userObject)
            success(result, response)
        }
        catch(err: any){
            let result = {message: err.message, status: err.status, payload:null}
            error(result, response)
        }
    }

    async getSongsByArtist(request: Request, response: Response){
        try{
            let {artistId} = request.params;
            let result: any = await this.services.getSongByArtist(artistId)
            success(result, response)
        }
        catch(err: any){
            let result = {message: err.message, status: err.status, payload:null}
            error(result, response)
        }
    }

    async getAllSongs(request: Request, response: Response){
        try{
            let result: any = await this.services.getAllSongs()
            success(result, response)
        }
        catch(err: any){
            let result = {message: err.message, status: err.status, payload:null}
            error(result, response)
        }
    }

    async listenToSong(){
        
    }
    
}

// const userControler = new ArtistControllers

export default SongController