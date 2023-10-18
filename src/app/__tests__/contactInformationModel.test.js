// import prisma from "../prisma"
// const { users, contactInformation } = prisma

import {testClient} from "./setup/setup.api"

describe("ContactInformation Model", () => {
    beforeAll(async () => {
        testClient.$connect
        
        await testClient.users.create({data:{
            username: "testuser",
            first_name: "John",
            last_name: "Doe",
            email: "testuser@example.com",
            password: "Test1234!@#$",
        }});
    });

    afterAll(async () => {
    });

    it("should create and retrieve contact information", async () => {
        const user = await testClient.users.findFirst({where:{username:"testuser"}});

        const contactInfo = await testClient.contactInformation.create({data:{
            name: { first_name: "John", last_name: "Doe" },
            phone_number: "123-456-7890",
            email: "john.doe@example.com",
            location: "Test City",
            user_id: user.id,
        }});


        const retrievedInfo = await testClient.contactInformation.findFirst({
            where: { id: contactInfo.id },
        });

        expect(retrievedInfo).not.toBeNull();
        expect(retrievedInfo.name.first_name).toBe("John");
        expect(retrievedInfo.name.last_name).toBe("Doe");
        expect(retrievedInfo.phone_number).toBe("123-456-7890");
        expect(retrievedInfo.email).toBe("john.doe@example.com");
        expect(retrievedInfo.location).toBe("Test City");
        expect(retrievedInfo.user_id).toBe(user.id);
    });
});
