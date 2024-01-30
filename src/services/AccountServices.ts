import { Service } from "typedi";
import AccountRepository from "../repositories/AccountRepository";
import "reflect-metadata"

@Service()
class AccountServices{
    constructor(private readonly repo: AccountRepository){}

    async getAccountByUser(user: string){
        let result = await this.repo.findByUser(user)
        return{
            payload: result,
            message: "Successfull",
            status: 200
        }
    }

    async createAccount(data: any){
        let result = await this.repo.save(data)
        return {
            payload: result,
            message: "Saved Successfully",
            status: 200
        }
    }

    async editAccount(id: string, data: any){
        let result = await this.repo.updateItem(id, data);
        return {
            payload: result,
            message: "Updated Successfully",
            status: 200
        }
    }
}

export default AccountServices