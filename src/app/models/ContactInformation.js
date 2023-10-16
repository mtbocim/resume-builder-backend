import sequelize from "@/app/config";
import { DataTypes } from "sequelize";

const ContactInformation = sequelize.define('contact_information', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.JSON,
        allowNull: false
    },
    phone_number: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isEmail: true,
        },
    },
    location: {
        type: DataTypes.STRING,
        allowNull:true,
    }
}, {freezeTableName: true})

export default ContactInformation;