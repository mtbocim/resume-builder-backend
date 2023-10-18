// import { createUser } from '../../../functions_without-context'
// import { prismaMock } from '../../../singleton'
// import { PrismaClient, users } from '@prisma/client';
// import prismaTest from "../../../client"
// import {prisma} from "@/app/prisma.ts"
// import prismaTest from "./setup/setup.api"
import { PrismaClientValidationError } from "@prisma/client/runtime/library";
import {testClient} from "./setup/setup.api"

describe('User Model', () => {
  beforeAll(async() =>{
    testClient.$connect
  })

  afterAll(async()=>{
    // prismaTest.$disconnect
  })

  it('should create a new user', async () => {
    const userData = {
      username: 'john_doe222',
      first_name: 'John',
      last_name: 'Doe',
      email: 'john@example.com',
      password: 'Test1234!@#$',
    };

    const user = await testClient.users.create({data:userData})
    console.log("What is user", user)
    expect(user.username).toEqual(userData.username);
    expect(user.first_name).toEqual(userData.first_name);
    expect(user.last_name).toEqual(userData.last_name);
    expect(user.email).toEqual(userData.email);
  });

  it('should not allow creating a user with missing required fields', async () => {
    const badUserData = {
      username: 'jane_doe',
      first_name: 'Jane',
      last_name: 'Doe',
    }
    try{    const result = await testClient.users.create({data:badUserData})
    // const result = await createUser(badUserData);
    console.log("Should not see this message", result)
  }catch (e){
    // console.log("Error", e.name)
    expect(e.name).toContain('PrismaClientValidationError')
  }
  });
});
