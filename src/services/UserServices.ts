import UserRepository from "../repositories/UserRepository";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt";

const jwtSecret: string = String(process.env.JWT_SECRET)

class UserServices{
    constructor(private readonly userRepository : UserRepository){}

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

    }

    async resetPassword(email: string){

    }

    async updateProfile(_id: string, userObject: object){

    }

    async getLoggedInUser(token: string){

    }

    async getUserById(_id: string){

    }

    async getUserByEmail(email:  string){

    }
}

export default UserServices