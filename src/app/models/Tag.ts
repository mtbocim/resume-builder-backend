import { sequelize } from "../config.js";
import { Model, DataTypes } from "sequelize";
import User from "./User";

interface TagInterface {
    id: number,
    tag: string,
}

interface TagInstance extends Model<TagInterface>, TagInterface {}

const Tag = sequelize.define<TagInstance>('tag',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    tag: {
        type: DataTypes.TEXT,
        allowNull:false
    }
});

User.hasMany(Tag, {foreignKey: {allowNull:false, name: 'user_id' }})
Tag.belongsTo(User, {foreignKey:'user_id'})

export default Tag;