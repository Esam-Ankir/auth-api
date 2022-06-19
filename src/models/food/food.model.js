'use strict';

const foodModel = (sequelize, DataTypes) => 
sequelize.define('food_table', {
  name: { 
    type: DataTypes.STRING, 
    required: true ,
  },
  calories: { 
    type: DataTypes.FLOAT, 
    required: true ,
  },
  type: { 
    type: DataTypes.ENUM('fruit', 'vegetable', 'protein'), 
    required: true ,
  }
});

module.exports = foodModel;
