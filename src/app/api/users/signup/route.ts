/** API Route for CRUD operations for user/signup */

import UserSignupSchema from "@/app/schemas/UserSignupSchema";
import { validate } from "jsonschema";
import bcrypt from "bcrypt";
import prisma from "@/app/prisma";
const { users } = prisma;

// export async function GET() {
//     return Response.json({ message: "success" })
// }

export async function POST(request: Request) {
    const data = await request.json()
    const validator = validate(data, UserSignupSchema, { required: true });

    if (validator.valid) {
        const duplicateCheck = await users.findFirst({where:{username:data.username}})
        // const duplicateCheck = await User.findOne({ where: { username: data.username } })
        if (duplicateCheck !== null) {
            return Response.json({ error: `Duplicate username: ${data.username}` }, { status: 400 })
        }

        try {
            const { username, first_name, last_name, email, password } = data;
            const hashedPassword = await bcrypt.hash(password, 3)
            const userData = {
                username,
                first_name,
                last_name,
                email,
                password:hashedPassword
            }
            
            const result = await users.create({data:userData});
            // const result = await users.create({data:{createdAt:new Date(), updatedAt:new Date(),...userData}});
            return Response.json({result, message: "success" },{status:201})
        } catch (e) {
            return Response.json({ e, message: "Bad request" }, { status: 400 })
        }
    }
    const errs = validator.errors.map(e => e.stack);
    return Response.json({ errors: errs }, { status: 400 })
}