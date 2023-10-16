import sequelize from "@/app/config";
import { Model, DataTypes } from "sequelize";

interface UserModelInterface {
    id:number;
    username: string;
    first_name: string;
    last_name: string;
    email: string;
    password: string;
}

interface UserInstance extends Model<UserModelInterface>, UserModelInterface { }

const User = sequelize.define<UserInstance>('users', {
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
}, { freezeTableName: true });

export default User;