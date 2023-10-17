import { sequelize } from "../config.js";
import { Model, DataTypes } from "sequelize";
import User from "./User";
import Tag from "./Tag";

interface SummaryInterface {
    id: number,
    summary: string,
}

interface SummaryInstance extends Model<SummaryInterface>, SummaryInterface { }

const Summary = sequelize.define<SummaryInstance>('summary', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    summary: {
        type: DataTypes.TEXT
    },
}, { freezeTableName: true, })

User.hasMany(Summary, { foreignKey: { allowNull: false, name: 'user_id' } })
Summary.belongsTo(User, { foreignKey: 'user_id' })

Summary.belongsToMany(Tag, {through: 'summary_tag'})
Tag.belongsToMany(Summary, {through: 'summary_tag'})

export default Summary;