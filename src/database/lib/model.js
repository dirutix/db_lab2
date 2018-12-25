const model = require('../../models').Model;

class Model{
    constructor(){
        this.model = model;
    }

    async create(model){
        return await this.model.create(model)
            .then(data => {
                return data;
            })
            .catch(err => {
                return err;
            });
    }
    async update(id, newModel){
        return await this.model.update(newModel, {where: {id: id}})
            .then(data => {
                return data;
            })
            .catch(err => {
                return err;
            })
    }
    async get(id){
        return await this.model.find({where: {id: id}})
            .then(data => {
                return data;
            })
            .catch(err => {
                return err;
            })
    }
    async getAll(){
        return await this.model.findAll()
            .then(data => {
                return data;
            })
            .catch(err => {
                return err;
            })
    }
    async delete(id){
        return await this.get(id)
            .then(data => {
                console.log(data);
                if(data == null) return Promise.resolve('no data');
                else {
                    data.destroy()
                        .then(data => {
                            return data;
                        })
                        .catch(err => {
                            return err;
                        });
                }
            })
            .catch(err => {
                return err;
            });
    }
}

module.exports.ModelDatabaseController = Model;