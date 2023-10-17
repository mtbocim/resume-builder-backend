import { sequelize } from "@/app/config";
import { Model, DataTypes } from "sequelize";
import User from "./User";
import SkillSets from "./SkillSet";
import Tag from "./Tag";

interface SkillInterface {
    id: number,
    skill: string,
}

interface SkillInstance extends Model<SkillInterface>, SkillInterface {}

const Skill = sequelize.define<SkillInstance>('skill',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    skill: {
        type: DataTypes.TEXT,
        allowNull:false
    }
})

SkillSets.hasMany(Skill, {foreignKey: {allowNull:false, name: 'skill_set_id' }})
Skill.belongsTo(SkillSets, {foreignKey:'skill_set_id'})
Skill.belongsToMany(Tag, {through: 'skill_tag'})
Tag.belongsToMany(Skill, {through: 'skill_tag'})

export default Skill;