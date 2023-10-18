import Skill from "@/app/models/Skill";
import Tag from "@/app/models/Tag";

export async function GET(request: Request) {
    // const data = await request.json() || {};

    // const { user_id, tag } = data;
    // // if(user_id === undefined && tag === undefined){
    // //     const results = 
    // // }
    // //
    const results = await Tag.findAll({include:Skill});
    return Response.json({ results, message: "success" }, { status: 200 })
}

export async function POST(request: Request) {
    const data = await request.json() || {};
    const { user_id, tag } = data;

    const result = await Tag.create({
        tag,
        user_id
    }, { returning: true })
    return Response.json({ result, message: "success" }, { status: 200 })

}