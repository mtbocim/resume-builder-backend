"use strict";

/** API Route for CRUD operations for ContactInformation */

import ContactInformation from "@/app/models/ContactInformation";
import ContactInformationSchema from "@/app/schemas/ContactInformationSchema";
import { validate } from "jsonschema";
import { BadRequestError } from "../../nextAPIErrors.js"

export async function GET() {
    try {
        const data = await ContactInformation.findAll();
        return Response.json({ data }, { status: 200 })
    } catch (e) {
        return Response.json({ error: 'failed to load data' }, { status: 404 })
    }
};

export async function POST(request: Request) {
    const validator = validate(request.body, ContactInformationSchema, { required: true })
    if (validator) {
        try {
            const data = await request.json();
            const result = await ContactInformation.create(data, { returning: true })
            return Response.json({ result })
        } catch (e) {

        }
    }
    console.log("What are errors", validator.errors)
    const errs = validator.errors.map(e => e.message);
    // throw new BadRequestError("What are errs", errs);
    return Response.json({ errors: errs }, { status: 400 })


}