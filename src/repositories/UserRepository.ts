import User from "../models/users.model"

class UserRepository{
    constructor(private readonly userModel = User){

    }

    async save(user: object){
        let result = await new this.userModel(user).save()
        return result;
    }

    async findOneById(_id: string){
        let result = await this.userModel.findById(_id)
        return result
    }

    async findOneByUsername(username: string){
        let result = await this.userModel.findOne({username})
    }

    async findOneByEmail(email: string){
        let result = await this.userModel.findOne({email})
        return result
    }

    async findAll(){
        let result = await this.userModel.find();
        return result;
    }

    async delete(_id: string){
        let result = await this.userModel.findByIdAndDelete(_id);
        return result;
    }

    async update(_id: string, userData: object){
        let result = await this.userModel.findByIdAndUpdate(_id, userData, {new: true})
        return result;
    }
}

export default UserRepository