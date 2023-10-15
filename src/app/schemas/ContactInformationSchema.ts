import { Schema } from "jsonschema";

const ContactInformationSchema: Schema = {
    type: 'object',
    properties:{
        "name":{
            "type":"string",
            "minLength": 1
        }
    },
    "additionalProperties":false,
    "required": [
        "name",
    ]
}

export default ContactInformationSchema;