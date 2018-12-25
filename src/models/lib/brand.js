'use strict'

module.exports = function (sequelize, DataTypes) {
    let Brand = sequelize.define('Brand', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING
        },
        country: {
            type: DataTypes.STRING
        }
    });

    Brand.associate = (models) => {
        models.Brand.hasMany(models.Model)
    }

    return Brand;
}
