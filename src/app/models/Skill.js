// import { sequelize } from "../config.js";
import { db } from "@/app/config.js";

import { Model, DataTypes } from "sequelize";
import SkillSets from "./SkillSet";
import Tag from "./Tag";

// interface SkillInterface {
//     id?: number,
//     skill: string,
//     skill_set_id?:number,
// }

// interface SkillInstance extends Model<SkillInterface>, SkillInterface {}

// const Skill = sequelize.define<SkillInstance>('skill',{
const Skill = db.define('Skill',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    skill: {
        type: DataTypes.TEXT,
        allowNull:false
    },
    skill_set_id:{
        type: DataTypes.INTEGER,
        allowNull:false
    }
}, {
    indexes: [
        {
            unique: true,
            fields: ['skill_set_id', 'skill']
        }
    ]
})

SkillSets.hasMany(Skill, {foreignKey: {allowNull:false, name: 'skill_set_id' }})
Skill.belongsTo(SkillSets, {foreignKey:'skill_set_id'})
Skill.belongsToMany(Tag, {through: 'SkillTag',})
Tag.belongsToMany(Skill, {through: 'SkillTag',})

// Skill.belongsToMany(Tag, {through: 'skill_tag', as:'skillOfTag', foreignKey:'skill_id'})
// Tag.belongsToMany(Skill, {through: 'skill_tag', as:'tagOfSkill', foreignKey:'tag_id'})

export default Skill;