
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

    
    test('can create a Restaurant', async () => {
        const restaurant1 = await Restaurant.create(seedRestaurant[0]);
            expect(restaurant1.name).toBe('AppleBees');
        
    });

    test('can create a Menu', async () => {
        const menu1 = await Menu.create({ title: 'Evening' });
            expect(menu1.title).toBe('Evening');
    });

    test('can find Restaurants', async () => {
        const restaurant33 = await Restaurant.create(seedRestaurant[0]);
        const restaurant22 = await Restaurant.findByPk(1);
        //const restaurant23 = await Restaurant.findAll()
        expect (restaurant22 === restaurant33);
    });

    test('can find Menu', async () => {
        const menu33 = await Menu.create(seedMenu[0]);
        const menu22 = await Menu.findByPk(1);
        //const restaurant23 = await Restaurant.findAll()
        expect (menu22 === menu33);
    });

    test('can delete Restaurants', async () => {
        const restaurant3 = await Restaurant.create({ name: 'McDonalds', location: 'Edinburgh', cuisine: 'Burgers and fries' });
        let deletedRestaurant3 = restaurant3.destroy(); 
        expect(deletedRestaurant3 === null); 
    });
})