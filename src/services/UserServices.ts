import UserRepository from "../repositories/UserRepository";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt";
import { Service } from "typedi";
import "reflect-metadata"
import generateOTP from "../utils/generateOTP";
import { EmailService } from "./EmailService";

const jwtSecret: string = String(process.env.JWT_SECRET)

@Service()
class UserServices{
    constructor(private readonly userRepository : UserRepository,
        private readonly emailService: EmailService
        ){}

    async signUp(email: string, password: string){
        try{
            let user = {email, password};
            let hashedPassword = await bcrypt.hash(password, 6)
            user.password = hashedPassword
            user = await this.userRepository.save(user)
            return {
                message: "Signed Up Successfully",
                status:201,
                payload: user
            }
        }
        catch(err: any){
            return{
                ...err
            }
        }

    }

    async signIn(email: string, password: string){
        try{
            let user = {email, password};
            // change this any to an Interface
            let dbUser: any = await this.userRepository.findOneByEmail(email)
            let hashedPassword = await bcrypt.compare(password, dbUser.password)
            if (hashedPassword){
                let token = jwt.sign(dbUser, jwtSecret, {expiresIn: "1day"})
                return{
                    message: "Signed In Successfully",
                    status: "200",
                    payload: {
                        dbUser, token
                    }
                }
            }
        }
        catch(err: any){
            return {
                ...err
            }
        }
    }

    async forgotPassword(email: string){
        try{
            let user: any = await this.userRepository.findOneByEmail(email)
            let resetCode =  generateOTP()
            user.resetCode = resetCode;
            user = await this.userRepository.update(user._id, user)
            this.emailService.sendResetCode(email, resetCode)  

            return {
                payload: null,
                message: "Reset Code Sent"
            }
        } 
        catch(err: any){
            return {
                ...err
            }
        }
    }

    async resetPassword(email: string, resetCode: string){
        try{
            let user: any = await this.userRepository.findOneByEmail(email)
            if(user.email !== resetCode){
                return {
                    payload: null,
                    message: "Wrong Reset Code"
                }
            }

            user.resetCode = null;
            user = await this.userRepository.update(user._id, user)
            return {
                payload: user,
                message: "Confirmed Reset Code"
            }
        }   
        catch(err: any){
            return {
                ...err
            }
        }
    }

    async updateProfile(_id: string, userObject: object){
        try{
            let result = this.userRepository.update(_id, userObject)
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

    async getLoggedInUser(token: string){

    }

    async getUserById(id: string){
        let user = await this.userRepository.findOneById(id)
        return {
            payload: user,
            message: "Successful",
            status: 200
        }
    }

    async getUserByEmail(email:  string){

    }

}

export default UserServices