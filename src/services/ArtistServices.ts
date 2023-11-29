import jwt from "jsonwebtoken"
import bcrypt from "bcrypt";
import { Service } from "typedi";
import "reflect-metadata"
import generateOTP from "../utils/generateOTP";
import ArtistRepository from "../repositories/ArtistRepository";
import UserRepository from "../repositories/UserRepository";
import { EmailService } from "./EmailService";

const jwtSecret: string = String(process.env.JWT_SECRET)

@Service()
class ArtistServices{
    constructor(private readonly repository : ArtistRepository,
        private readonly emailService: EmailService,
        private readonly userRepository : UserRepository
        ){}

    async updateProfile(_id: string, userObject: object){
        try{
            let result = this.repository.update(_id, userObject)
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


    async getArtistById(id: string){
        let user = await this.repository.findOneById(id)
        return {
            payload: user,
            message: "Successful",
            status: 200
        }
    }

    async getArtistByUserId(userId:  string){
        let user = await this.repository.findOneByUser(userId)
        return {
            payload: user,
            message: "Successful",
            status: 200
        }
    }

    async followArtist(userId: string, artistId: string){
        let userFollowing: any = await this.userRepository.findOneById(userId)
        let artist: any = await this.repository.findOneById(artistId)

        if(!userFollowing.following.includes(artistId)){
            userFollowing?.following.push(artistId)
            artist?.followers.push(userId)

            userFollowing = await this.userRepository.update(userId, userFollowing)
            this.repository.update(artistId, artist)

            return {
                payload: userFollowing,
                message: "Followed",
                status: 200
            }
        }

        userFollowing = userFollowing?.following.filter((i: any) => i == artistId)
        artist = artist?.followers.filter((i: any) => i == userId)

        userFollowing = await this.userRepository.update(userId, userFollowing)
        this.repository.update(artistId, artist)

        return {
            payload: userFollowing,
            message: "UnFollowed",
            status: 200
        }
       
    }

    async getAllArtist(){
        let result =  await this.repository.findAll()

        return {
            payload: result,
            message: "Successful",
            status: 200
        }
    }
    // async 

}

export default ArtistServices