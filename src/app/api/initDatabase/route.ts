// import { sequelize } from "../config.js";
import { sequelize } from "@/app/config.js";
import ContactInformation from "@/app/models/ContactInformation";
import User from "@/app/models/User";
import Education from "@/app/models/Education";
import Summary from "@/app/models/Summary"
import Tag from "@/app/models/Tag";
import SkillSets from "@/app/models/SkillSet";
import Skill from "@/app/models/Skill";

export async function POST() {
    await User.sync({ force: true })
    await ContactInformation.sync({ force: true });
    await Education.sync({ force: true });
    await Summary.sync({force:true});
    await Tag.sync({force:true})
    await SkillSets.sync({force:true})
    await Skill.sync({force:true})
    return Response.json({ value: 'success' })
}

export async function DELETE(){
    await sequelize.drop()
    return Response.json({ value: 'success' })
}