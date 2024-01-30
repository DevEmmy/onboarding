import Account from "../models/AccountDetails";
import BaseRepository from "./BaseRepository";

class AccountRepository{
    constructor(private readonly model = Account){
    }
    
    async save(data : any){
        let result = await new this.model(data).save();
        return result;
    }

    async findAll(){
        let result = await this.model.find();
        return result;
    }

    async findById(id: string){
        let result = await this.model.findById(id);
        return result;
    }

    async findByUser(user: string){
        let result = await this.model.find({user})
        return result
    }

    async deleteItem(id: string){
        let result = await this.model.findByIdAndDelete(id);
        return result
    }

    async updateItem(id: string, data: any ){
        let result = await this.model.findByIdAndUpdate(id, data, {new: true});
        return result;
    }
}

export default AccountRepository