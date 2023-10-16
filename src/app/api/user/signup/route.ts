"use strict";

/** API Route for CRUD operations for user/signup */

import UserSignupSchema from "@/app/schemas/UserSignupSchema";
import { validate } from "jsonschema";
import bcrypt from "bcrypt";
import User from "../../../models/User";

export async function GET() {
    return Response.json({ message: "success" })
}

export async function POST(request: Request) {
    const data = await request.json()
    const validator = validate(data, UserSignupSchema, { required: true });

    if (validator.valid) {
        const duplicateCheck = await User.findOne({ where: { username: data.username } })
        if (duplicateCheck !== null) {
            return Response.json({ error: `Duplicate username: ${data.username}` }, { status: 400 })
        }

        try {
            const { username, first_name, last_name, email, password } = data;
            const hashedPassword = await bcrypt.hash(password, 3)
            const result = await User.create({
                username,
                first_name,
                last_name,
                email,
                password:hashedPassword
            }, {returning:true})
            return Response.json({result, message: "success" },{status:201})
        } catch (e) {
            return Response.json({ message: "Bad request" }, { status: 400 })
        }
    }
    const errs = validator.errors.map(e => e.stack);
    return Response.json({ errors: errs }, { status: 400 })
}