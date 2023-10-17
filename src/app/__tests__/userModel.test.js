import {sequelize} from "../config.js";
import User from "../models/User";

describe('User Model', () => {
  beforeAll(async () => {
    await User.sync({ force: true });
  });
  
afterAll(async () => {
    await sequelize.close(); 
  });

  it('should create a new user', async () => {
    const userData = {
      username: 'john_doe',
      first_name: 'John',
      last_name: 'Doe',
      email: 'john@example.com',
      password: 'Test1234!@#$',
    };

    const user = await User.create(userData);
    
    expect(user.username).toEqual(userData.username);
    expect(user.first_name).toEqual(userData.first_name);
    expect(user.last_name).toEqual(userData.last_name);
    expect(user.email).toEqual(userData.email);
  });

  it('should not allow creating a user with missing required fields', async () => {
    try {
      await User.create({
        username: 'jane_doe',
        first_name: 'Jane',
        last_name: 'Doe',
      });
    } catch (error) {
      expect(error.name).toEqual('SequelizeValidationError');
    }
  });
});
