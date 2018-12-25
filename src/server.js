const express = require('express');
const routers = require('./routes');
const models = require('./database');
const bodyParser = require('body-parser');

const modelsRouter = routers.ModelsRouter;
const brandsRouter = routers.BrandsRouter;
const customersRouter = routers.CustomerRouter;

class Server {
    constructor(){
        this.app = express();
        this.config();
    }
    config(){
        this.app.use(bodyParser.urlencoded({ extended: false }))
        this.app.use(bodyParser.json())
        this.app.use('/models', modelsRouter)
        this.app.use('/brands', brandsRouter)
        this.app.use('/customers', customersRouter);
    }
}

module.exports.Server = Server;