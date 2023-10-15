import { Schema } from "jsonschema";

const ContactInformationSchema: Schema = {
    type: 'object',
    properties:{
        id:{
            type:'number'
        }
    }
}

export default ContactInformationSchema;