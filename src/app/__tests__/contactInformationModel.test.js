import { sequelize } from "../config";
import ContactInformation from "../models/ContactInformation";
import User from "../models/User";

describe("ContactInformation Model", () => {
    beforeAll(async () => {
        await sequelize.sync();
        await User.create({
            username: "testuser",
            first_name: "John",
            last_name: "Doe",
            email: "testuser@example.com",
            password: "Test1234!@#$",
        });
    });

    afterAll(async () => {
        await sequelize.close();
    });

    it("should create and retrieve contact information", async () => {
        const user = await User.findOne({ where: { username: "testuser" } });

        const contactInfo = await ContactInformation.create({
            name: { first_name: "John", last_name: "Doe" },
            phone_number: "123-456-7890",
            email: "john.doe@example.com",
            location: "Test City",
            user_id: user.id,
        });


        const retrievedInfo = await ContactInformation.findOne({
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
