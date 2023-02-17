// need to set up model with name - string, email - string

const {sequelize} = require('../db');
const { Sequelize } = require('sequelize');

// TODO - create a Restaurant model
let User = sequelize.define("user", {
    // Column names
    name: Sequelize.STRING,
    email: Sequelize.STRING
})

module.exports = {User};