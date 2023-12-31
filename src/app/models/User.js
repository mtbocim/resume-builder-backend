// import {sequelize} from "../config.js";
import { db } from "@/app/config.js";

import { Model, DataTypes } from "sequelize";

// interface UserModelInterface {
//     id?:number;
//     username: string;
//     isAdmin?: boolean;
//     first_name: string;
//     last_name: string;
//     email: string;
//     password: string;
// }

// interface UserInstance extends Model<UserModelInterface>, UserModelInterface { }

// const User = sequelize.define<UserInstance>('users', {
const User = db.define('User', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique:true
    },
    isAdmin:{
        type: DataTypes.BOOLEAN,
        defaultValue:false
    },
    first_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isEmail: true,
        },
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

export default User;