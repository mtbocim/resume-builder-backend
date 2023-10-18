/** API Route for CRUD operations for an individual skill set */


import prisma from "@/app/prisma";
const {skills, skillSets, tags} = prisma;


export async function GET(request: Request, { params }: { params: { slug: string } }) {
    const { slug } = params
    const results = await skillSets.findFirst({ where: { skill_set: slug } , include:Skill})
    
    return Response.json({ results, message: "success" }, { status: 200 })
}

export async function POST(request: Request, { params }: { params: { slug: string } }) {
    const data = await request.json() || {};
    const { user_id, skill, tag } = data;
    const { slug } = params;

    const skillSet = await skillSets.findFirst({ where: { skill_set: slug, user_id: user_id } })
    
    const tagInstance = await tags.findFirst({ where: { tag: tag } })

    const skill_set_id = skillSet?.id
    const skillInstance = await skill.create({data:{
        skill,
        skill_set_id
    }});
    
    return Response.json({ skillInstance, message: "success" }, { status: 200 })

}