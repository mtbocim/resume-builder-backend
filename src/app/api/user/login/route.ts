/** API Route for user/login */

import { validate } from "jsonschema";
import bcrypt from "bcrypt";
import User from "@/app/models/User";
import UserLoginSchema from "@/app/schemas/UserLoginSchema";


export async function POST(request: Request) {
    const data = await request.json()
    const validator = validate(data, UserLoginSchema, { required: true });

    if (validator.valid) {

        try {
            const { username, password } = data;
            const result = await User.findByPk(username)
            if (result === null) {
                return Response.json({ error: "Incorrect username or password" })
            }

            const validPassword = await bcrypt.compare(password, result.password)
            if (validPassword === true) {
                const user = {
                    firstName: result.first_name,
                    lastName: result.last_name,
                    email: result.email,

                }
                return Response.json({ user })
            }
            return Response.json({ error: "Incorrect username or password" });
        } catch (e) {
            return Response.json({ message: "Bad request" }, { status: 400 })
        }
    }
    const errs = validator.errors.map(e => e.stack);
    return Response.json({ errors: errs }, { status: 400 })
}