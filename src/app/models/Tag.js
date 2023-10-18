// import { sequelize } from "../config.js";
import { db } from "@/app/config.js";

import { Model, DataTypes } from "sequelize";
import User from "./User";
import sequelize from "sequelize";

// interface TagInterface {
//     id?: number,
//     tag: string,
//     user_id?: number
// }

// interface TagInstance extends Model<TagInterface>, TagInterface {}

const Tag = db.define('Tag',{
// const Tag = sequelize.define<TagInstance>('tag',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    tag: {
        type: DataTypes.TEXT,
        allowNull:false
    },
    user_id:{
        type: DataTypes.INTEGER,
        allowNull:false
    }
});

User.hasMany(Tag, {foreignKey: {allowNull:false, name: 'user_id' }})
Tag.belongsTo(User, {foreignKey:'user_id'})

db.sync()


export default Tag;