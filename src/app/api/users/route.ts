import prisma from "../../prisma";
export async function GET(){
    try {
        const data = await prisma.users.findMany();
        return Response.json({ data }, { status: 200 })
    } catch (e) {
        return Response.json({ error: 'failed to load data' }, { status: 404 })
    }
}