import {sequelize} from "@/app/config";
import { Model, DataTypes } from "sequelize";

interface EducationInterface {
    id: number,
    institution_name: string,
    ed_focus: string,
    gpa: number,
    location: string,
    start_date: Date,
    finish_date: Date
}

interface EducationInstance extends Model<EducationInterface>, EducationInterface {}

const Education = sequelize.define<EducationInstance>('education', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    institution_name:{
        type: DataTypes.STRING,
        allowNull: false
    },
    ed_focus:{
        type: DataTypes.STRING,
        allowNull: true
    },
    gpa:{
        type: DataTypes.DECIMAL(4,3),
        allowNull: true
    },
    location:{
        type: DataTypes.STRING,
        allowNull: true
    },
    start_date:{
        type: DataTypes.DATEONLY,
        allowNull: true
    },
    finish_date:{
        type: DataTypes.DATEONLY,
        allowNull: true
    }
}, {freezeTableName: true, timestamps:false});


export default Education