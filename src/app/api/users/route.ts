import User from "@/app/models/User"

export async function GET(){
    try {
        const data = await User.findAll();
        return Response.json({ data }, { status: 200 })
    } catch (e) {
        return Response.json({ error: 'failed to load data' }, { status: 404 })
    }
}