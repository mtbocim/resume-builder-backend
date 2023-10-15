import ContactInformation from "@/app/models/ContactInformation";
// import { NextResponse } from "next/server";
// import ContactInformationSchema from "@/app/schemas/ContactInformationSchema";
import { validate } from "jsonschema";

export async function GET() {
    try {
        const data = {value:'test'};
        // const data = await ContactInformation.findAll();
        return Response.json({ data }, {status:202})
    } catch (e) {
        return Response.json({ error: 'failed to load data' }, { status: 404 })
        // status(500).json({data:false})
        // res.status(500).json({ error: 'failed to load data' })
    }
};

export async function POST() {
    const data = { value: 'success' };
    return Response.json({ data })
}