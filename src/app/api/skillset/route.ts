/** API route for CRUD operations for skill sets */

import SkillSets from "@/app/models/SkillSet";


export async function GET(){
    try{
        const results = await SkillSets.findAll();
        return Response.json({results, message: "success" },{status:200})
    } catch (e){
        return Response.json({ message: "Bad request" }, { status: 400 })
    }
}

export async function POST(request: Request){
    const data = await request.json() || {}

    try{
        const {skill_set, user_id} = data;
        const result = await SkillSets.create({
           skill_set,
           user_id
        }, {returning:true});
        return Response.json({result, message: "success" },{status:201})
    } catch(e){
        return Response.json({ message: "Bad request" }, { status: 400 })
    }
}