// import { sequelize } from "../config.js";
import { db } from "@/app/config.js";
import { Model, DataTypes } from "sequelize";
import User from "./User";

// interface SkillSetInterface {
//     id?: number,
//     skill_set: string,
//     user_id: number
// }

// interface SkillSetInstance extends Model<SkillSetInterface>, SkillSetInterface { }

const SkillSets = db.define('SkillSets', {
// const SkillSets = sequelize.define<SkillSetInstance>('skill_sets', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    skill_set: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    }

}, {
    // indexes: [
    //     {
    //         unique: true,
    //         fields: ['skill_set', 'user_id']
    //     }
    // ]
});

User.hasMany(SkillSets, { foreignKey: { allowNull: false, name: 'user_id' } })
SkillSets.belongsTo(User, { foreignKey: 'user_id' })

export default SkillSets;