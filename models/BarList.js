const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

  class BarList extends Model {}
  BarList.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      name:{
        type: DataTypes.STRING,
        allowNull: faslse,
      },
      brewery_type: {
        type: DataTypes. STRING,
        allowNull: true
      },
      street: {
        type: DataTypes.STRING,
        allowNull: false
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: true
      },
      website_url: {
        type: DataTypes.STRING,
        allowNull: true
      },
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'BarList'
  }
);


module.exports = Post;