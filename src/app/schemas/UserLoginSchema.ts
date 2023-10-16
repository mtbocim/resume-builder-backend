import { Schema } from "jsonschema";

const UserLoginSchema: Schema = {
    type: 'object',
    properties: {
        "username": {
            type: "string",
            minLength: 1,
            required: true
        },
        "password": {
            "type": "string",
            "minLength": 1,
            "required": true
        },
    },
    "additionalProperties": false,
    "required": [
        "username",
        "password"
    ]
}

export default UserLoginSchema;