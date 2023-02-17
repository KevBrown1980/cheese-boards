// need to set up model with title - string, description - string
// need to check towo lines below
const { sequelize } = require('../db');
const { Sequelize } = require('sequelize');

// TODO - create a Restaurant model
let Cheese = sequelize.define("cheese", {
    // Column names
    title: Sequelize.STRING,
    description: Sequelize.STRING
})

module.exports = { Cheese };