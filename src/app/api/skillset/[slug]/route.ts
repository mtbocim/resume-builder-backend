import SkillSets from "@/app/models/SkillSet";
import Skill from "@/app/models/Skill";
import Tag from "@/app/models/Tag";


export async function GET(request: Request, { params }: { params: { slug: string } }) {
    const { slug } = params
    const results = await SkillSets.findAll({ where: { skill_set: slug } , include:Skill})
    
    return Response.json({ results, message: "success" }, { status: 200 })
}

export async function POST(request: Request, { params }: { params: { slug: string } }) {
    const data = await request.json() || {};
    const { user_id, skill, tag } = data;
    const { slug } = params;

    const skillSet = await SkillSets.findOne({ where: { skill_set: slug, user_id: user_id } })
    
    const tagInstance = await Tag.findOne({ where: { tag: tag } })

    const skill_set_id = skillSet?.id
    const skillInstance = await Skill.build({
        skill,
        skill_set_id
    });
    
    return Response.json({ skillInstance, message: "success" }, { status: 200 })

}