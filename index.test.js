
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

/////tests below 

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

    // test to see if we can find cheese 2 that we just created by id
    test('can find cheese', async () => {
        const cheese2 = await Cheese.create(seedCheese[1]);
        const cheese3 = await Restaurant.findByPk(1);
        expect(cheese3 === cheese2);
    });

    // test to see if we can find board2 that we just created by id
    test('can find board', async () => {
        const board2 = await Board.create(seedBoard[0]);
        const board3 = await Board.findByPk(1);
        expect(board3 === board2);
    });

    // test to see if we can find board2 that we just created by id
    test('can find user', async () => {
        const user2 = await User.create(seedUser[3]);
        const user3 = await User.findByPk(1);
        expect(user3 === user2);
    });


    // test to see if we can delete a user
    test('can delete user', async () => {
        const user4 = await Restaurant.create(seedUser[0]);
        let deletedUser4 = user4.destroy();
        expect(deletedUser4 === null);
    });



    //******************************* */
    // test need to complete - not sure how to do this......
    //****************************** */
    //  A board can be loaded with its cheeses
    // A user can be loaded with its boards
    // A cheese can be loaded with its board data


})