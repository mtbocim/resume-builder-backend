import prisma from "@/app/prisma";
const { tags } = prisma;

export async function GET(request: Request) {

    const results = await tags.findMany({ include: Skill });
    return Response.json({ results, message: "success" }, { status: 200 })
}

export async function POST(request: Request) {
    const data = await request.json() || {};
    const { user_id, tag } = data;

    const result = await tags.create({data:{
        tag,
        user_id
    }})
    return Response.json({ result, message: "success" }, { status: 200 })

}