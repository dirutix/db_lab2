'use strict'

module.exports = function (sequelize, DataTypes) {
    let Customer = sequelize.define('Customer', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING
        },
        age: {
            type: DataTypes.INTEGER
        }
    });

    Customer.associate = (models) => {
        models.Customer.belongsTo(models.Model);
    }

    return Customer;
}