/** API Route for CRUD operations for ContactInformation */

import ContactInformationSchema from "@/app/schemas/ContactInformationSchema";
import { validate } from "jsonschema";
import prisma from "@/app/prisma";
const { contactInformation } = prisma

export async function GET() {
    try {
        const data = await contactInformation.findMany();
        return Response.json({ data }, { status: 200 })
    } catch (e) {
        return Response.json({ error: 'failed to load data' }, { status: 404 })
    }
};

export async function POST(request: Request) {
    const data = await request.json();
    const validator = validate(data, ContactInformationSchema, { required: true })
    if (validator.valid) {
        try {
            console.log("what if the format of data", data)
            const result = await contactInformation.create({data})
            return Response.json({ result })
        } catch (e) {

        }
    }
    const errs = validator.errors.map(e => e.stack);
    return Response.json({ errors: errs }, { status: 400 })
}