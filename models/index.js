const { User } = require('./User')
const { Board } = require('./Board')
const { Cheese } = require('./Cheese')


// user to board relationships
// a board can only belong to one user
Board.belongsTo(User);
// a user can have many boards
User.hasMany(Board);s


// board to cheese relationships
// a board can have many cheeses
Board.hasMany(Cheese);
// a cheese can be on many boards
Cheese.hasMany(Board);

module.exports = { User, Board, Cheese }
