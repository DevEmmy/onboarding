import { Service } from "typedi";
import "reflect-metadata"

@Service()
export class EmailService{
    constructor(){

    }


    async sendResetCode(email: string, resetCode: string){

    }
}