/** API route for CRUD operations for skill sets */

import prisma from "@/app/prisma";
const {skillSets} = prisma

export async function GET(){
    try{
        const results = await skillSets.findMany();
        return Response.json({results, message: "success" },{status:200})
    } catch (e){
        return Response.json({ message: "Bad request" }, { status: 400 })
    }
}

export async function POST(request: Request){
    const data = await request.json() || {}

    try{
        const {skill_set, user_id} = data;
        const result = await skillSets.create({data:{
           skill_set,
           user_id
        }});
        return Response.json({result, message: "success" },{status:201})
    } catch(e){
        return Response.json({ message: "Bad request" }, { status: 400 })
    }
}