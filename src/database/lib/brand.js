const model = require('../../models').Brand;

class Brand{
    constructor(){
        this.model = model;
    }

    async create(brand){
        return await this.model.create(brand)
            .then(data => {
                return data;
            })
            .catch(err => {
                return err;
            });
    }
    async update(id, newBrand){
        return await this.model.update(newBrand, {where: {id: id}})
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
        return await this.model.delete({where: {id: id}})
            .then(data => {
                return data;
            })
            .catch(err => {
                return err;
            })
    }
}

module.exports.BrandDatabaseController = Brand;