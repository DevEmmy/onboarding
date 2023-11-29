import User from "../models/users.model"
import { Service } from "typedi";
import "reflect-metadata"
import Artist from "../models/Artist.model";
@Service()
class ArtistRepository{
    constructor(private readonly model = Artist){

    }

    async save(user: object){
        let result = await new this.model(user).save()
        return result;
    }

    async findOneById(_id: string){
        let result = await this.model.findById(_id)
        return result
    }


    async findOneByUser(user: string){
        let result = await this.model.findOne({user})
    }

    async findAll(){
        let result = await this.model.find();
        return result;
    }

    async delete(_id: string){
        let result = await this.model.findByIdAndDelete(_id);
        return result;
    }

    async update(_id: string, userData: object){
        let result = await this.model.findByIdAndUpdate(_id, userData, {new: true})
        return result;
    }
}

export default ArtistRepository