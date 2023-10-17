import { sequelize } from "../config.js";
import { Model, DataTypes } from "sequelize";
import User from "./User";

interface ContactInformationInterface {
    id: number,
    name: object,
    phone_number: string,
    email: string,
    location: string | null
}

interface ContactInformationInstance extends Model<ContactInformationInterface>, ContactInformationInterface { }
const ContactInformation = sequelize.define<ContactInformationInstance>('contact_information', {
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
        allowNull: true,
    }
}, { freezeTableName: true, timestamps: false });


User.hasMany(ContactInformation, {foreignKey: {allowNull:false, name: 'user_id' }})
ContactInformation.belongsTo(User, {foreignKey:'user_id'})

export default ContactInformation;