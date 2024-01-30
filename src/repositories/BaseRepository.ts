class BaseRepository{
    private readonly model;

    constructor(_mongooseCollection : any){
        this.model = _mongooseCollection
    }

    async save(data : any){
        let result = await this.model(data).save();
        return result;
    }

    async findAll(){
        let result = await this.model.findAll();
        return result;
    }

    async findById(id: string){
        let result = await this.model.findById(id);
        return result;
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

export default BaseRepository;