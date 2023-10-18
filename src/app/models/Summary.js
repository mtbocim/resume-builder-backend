// import { sequelize } from "../config.js";
import { db } from "@/app/config.js";

import { Model, DataTypes } from "sequelize";
import User from "./User";
import Tag from "./Tag";

// interface SummaryInterface {
//     id: number,
//     summary: string,
// }

// interface SummaryInstance extends Model<SummaryInterface>, SummaryInterface { }

const Summary = db.define('Summary', {
// const Summary = sequelize.define<SummaryInstance>('summary', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    summary: {
        type: DataTypes.TEXT
    },
})

User.hasMany(Summary, { foreignKey: { allowNull: false, name: 'user_id' } })
Summary.belongsTo(User, { foreignKey: 'user_id' })

Summary.belongsToMany(Tag, {through: 'SummaryTag'})
Tag.belongsToMany(Summary, {through: 'SummaryTag'})

export default Summary;