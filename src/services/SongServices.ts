import { Service } from "typedi";
import "reflect-metadata"
import SongRepository from "../repositories/SongRepository";

const jwtSecret: string = String(process.env.JWT_SECRET)

@Service()
class SongServices{
    constructor(private readonly repository : SongRepository,
        ){}

    async updateSong(_id: string, songObject: object){
        try{
            let result = this.repository.update(_id, songObject)
            return {
                payload: result,
                message: "Updated!"
            }
        }
        catch(err: any){
            return {
                ...err
            }
        }
    }


    async getSongById(id: string){
        let song = await this.repository.findOneById(id)
        return {
            payload: song,
            message: "Successful",
            status: 200
        }
    }

    async getSongByArtist(artist:  string){
        let song = await this.repository.findOneByArtist(artist)
        return {
            payload: song,
            message: "Successful",
            status: 200
        }
    }


    async getAllSongs(){
        let result =  await this.repository.findAll()

        return {
            payload: result,
            message: "Successful",
            status: 200
        }
    }
}

export default SongServices