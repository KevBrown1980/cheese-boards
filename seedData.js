const seedUser = [
    {
      name: 'Bill',
      email: 'billjones@gmail.com'
    },
    {
        name: 'Frank',
      email: 'franksmith@gmail.com'
    },
    {
        name: 'Jock',
      email: 'jockbrown@gmail.com'
    }
  ]
  
  const seedBoard = [
    {
        type: 'round',
        description: 'round and chunky',
        rating: '4'
    },
    {
        type: 'square',
        description: 'square and thin',
        rating: '7'
    },
    {
        type: 'rrectangle',
        description: 'wooden and long',
        rating: '9'
    },
  ]
  
  const seedCheese = [
    {
        title: 'brie',
        description: 'soft and smelly'
    },
    {
        title: 'edam',
        description: 'usually in a wax from the Netherlands'
    },
    {
        title: 'silton',
        description: 'a strong blue cheese'
    }
  ]
  
  module.exports = {
    seedUser,
    seedBoard,
    seedCheese,
  };