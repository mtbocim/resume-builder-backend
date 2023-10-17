import { sequelize } from "../config.js";
import Education from "../models/Education";
import User from "../models/User";

describe("Education Model", () => {

  beforeAll(async () => {
    await User.sync({ force: true });
    await Education.sync({ force: true });
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

  it("should create and retrieve an education entry", async () => {
    const user = await User.findOne({ where: { username: "testuser" } });

    const educationEntry = await Education.create({
      institution_name: "Test University",
      ed_focus: "Computer Science",
      gpa: 3.7,
      location: "Test City",
      start_date: new Date("2020-09-01"),
      finish_date: new Date("2024-05-30"),
      user_id: user.id,
    });

    const retrievedEntry = await Education.findOne({
      where: { id: educationEntry.id },
    });

    expect(retrievedEntry).not.toBeNull();
    expect(retrievedEntry.institution_name).toBe("Test University");
    expect(retrievedEntry.ed_focus).toBe("Computer Science");
    expect(retrievedEntry.gpa).toBe("3.700");
    expect(retrievedEntry.location).toBe("Test City");
  });
});
