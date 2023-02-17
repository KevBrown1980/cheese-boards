// need to set up model with type - string, description - string, rating - number

const {sequelize} = require('../db');
const { Sequelize } = require('sequelize');

// TODO - create a Restaurant model
let Board = sequelize.define("board", {
    // Column names
    type: Sequelize.STRING,
    ldescription: Sequelize.STRING,
    rating: Sequelize.NUMBER
})

module.exports = {Board};