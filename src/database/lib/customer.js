const model = require('../../models').Customer;

class Customer{
    constructor(){
        this.model = model;
    }

    async create(customer){
        return await this.model.create(customer)
            .then(data => {
                return data;
            })
            .catch(err => {
                return err;
            });
    }
    async update(id, newCustomer){
        return await this.model.update(newCustomer, {where: {id: id}})
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

module.exports.CustomerDatabaseController = Customer;