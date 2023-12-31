import { Schema } from "jsonschema";

const ContactInformationSchema: Schema = {
    type: 'object',
    properties:{
        "name":{
            type:"string",
            minLength: 1,
            required: true
        },
        "phone_number":{
            type:"string",
            minLength:1,
            required:true
        },
        "email":{
            type:"string",
            format:"email",
            required:true
        },
        "location":{
            type:"string",
            required:false
        },
        "user_id":{
            type:"number",
            required:true
        }
    },
    "additionalProperties":false,
    "required": [
        "name",
        "phone_number",
        "email",
        "user_id"
    ]
}

export default ContactInformationSchema;