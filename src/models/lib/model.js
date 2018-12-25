'use strict'

module.exports = function (sequelize, DataTypes) {
    let Model = sequelize.define('Model', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING
        },
        year: {
            type: DataTypes.INTEGER
        }
    });

    Model.associate = (models) => {
        models.Model.belongsTo(models.Brand);
    };

    Model.sync();
    return Model;
}