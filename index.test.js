
/// need to fix lines below
const sequelize = require("../src/db/connection");
const { User, Post } = require("../src/models");
let currentId;

beforeAll(async () => {
    // This code will happen at the start of this files testing
    await sequelize.sync({ force: true });
});

beforeEach(async () => {
    // This code will happen before each test/it block
});

afterEach(async () => {
    // This code will happen after each test/it block
    await User.destroy({ where: { id: { [Op.gte]: 0 } } });
    await Post.destroy({ where: { id: { [Op.gte]: 0 } } });
});

afterAll(async () => {
    // This code will happen after all tests in this file are finished
    await sequelize.drop();
});

/////test below 

describe('Cheese and Boards testing', () => {

    // test to see if we can create a cheese form the seeData
    test('can create some Cheese', async () => {
        const cheese1 = await Cheese.create(seedCheese[0]);
        expect(cheese1.name).toBe('brie');

    });
    // test to see if we can create a board form the seedData
    test('can create a Board', async () => {
        const user1 = await Board.create(seedBoard[1]);
        expect(board1.description).toBe('square and thin');
    });

     // test to see if we can create a user form the seedData
     test('can create a Board', async () => {
        const user1 = await User.create(seedUser[2]);
        expect(user1.name).toBe('Jock');
    });


    //******************************* */
       // need to update some basic tests below to see if you can find and delete
    //****************************** */

    // test('can find Restaurants', async () => {
    //     const restaurant33 = await Restaurant.create(seedRestaurant[0]);
    //     const restaurant22 = await Restaurant.findByPk(1);
    //     //const restaurant23 = await Restaurant.findAll()
    //     expect(restaurant22 === restaurant33);
    // });

    // test('can find Menu', async () => {
    //     const menu33 = await Menu.create(seedMenu[0]);
    //     const menu22 = await Menu.findByPk(1);
    //     //const restaurant23 = await Restaurant.findAll()
    //     expect(menu22 === menu33);
    // });

    // test('can delete Restaurants', async () => {
    //     const restaurant3 = await Restaurant.create({ name: 'McDonalds', location: 'Edinburgh', cuisine: 'Burgers and fries' });
    //     let deletedRestaurant3 = restaurant3.destroy();
    //     expect(deletedRestaurant3 === null);
    // });





 //******************************* */
       // test need to complete - not sure how to do this......
    //****************************** */
//  A board can be loaded with its cheeses
// A user can be loaded with its boards
// A cheese can be loaded with its board data


})