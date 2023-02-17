const {User} = require('./User')
const {Board} = require('./Board')
const {Cheese} = require('./Cheese')




// one-to-one relationship
// Menu.belongsTo(Restaurant);
// // one-to-many relationship
// Restaurant.hasMany(Menu);

// Menu.hasMany(Item);
// Item.hasMany(Menu);

module.exports = { User, Board, Cheese }
