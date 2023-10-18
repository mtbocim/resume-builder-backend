"use strict";

/** API Route for CRUD operations for ContactInformation */

import ContactInformation from "@/app/models/ContactInformation";
import ContactInformationSchema from "@/app/schemas/ContactInformationSchema";
import { validate } from "jsonschema";
// import { BadRequestError } from "../../nextAPIErrors.js"
import prisma from "../../../../lib/prisma";

export async function GET() {
    try {
        const data = await prisma.contactInformation.findMany();
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
            const result = await prisma.contactInformation.create({data})
            // const result = await ContactInformation.create(data, { returning: true })
            return Response.json({ result })
        } catch (e) {

        }
    }
    const errs = validator.errors.map(e => e.stack);
    return Response.json({ errors: errs }, { status: 400 })
}