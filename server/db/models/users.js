'use strict';
module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('users', {
    name: DataTypes.STRING,
    password: DataTypes.STRING,
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    id:{ 
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING, 
      unique: true
    },
    status: {
      type: DataTypes.ENUM,
      allowNull: true,
      defaultValue: "pending",
      values: ['active', 'pending', 'deleted']
    }
  }, {});
  Users.associate = function(models) {
    // associations can be defined here
  };
  return Users;
};