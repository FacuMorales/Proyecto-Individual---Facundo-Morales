const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('Driver', {
    id:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    name:{
      type: DataTypes.STRING,
      allowNull: false
    },
    surname:{
      type: DataTypes.STRING,
      allowNull: false
    },
    description:{
      type: DataTypes.TEXT,
      allowNull: false
    },
    image:{
      type: DataTypes.STRING,
      allowNull: false
    },
    nationality:{
      type: DataTypes.STRING,
      allowNull: false
    },
    birthdate:{
      type: DataTypes.STRING,
      allowNull: false
    }
  }, { timestamps: false });
};