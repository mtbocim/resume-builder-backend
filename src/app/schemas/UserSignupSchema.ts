import { Schema } from "jsonschema";

const UserSignupSchema: Schema = {
    type: 'object',
    properties: {
        "first_name": {
            type: "string",
            minLength: 1,
            maxLength: 50,
            required: true
        },
        "last_name": {
            type: "string",
            minLength: 1,
            maxLength: 50,
            required: true
        },
        "username": {
            type: "string",
            minLength: 1,
            required: true
        },
        "email": {
            type: "string",
            format: "email",
            maxLength: 255,
            required: true
        },
        "password": {
            "type": "string",
            "minLength": 8,
            "pattern": "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\\$%^&*])",
            "required": true
        },
    },
    "additionalProperties": false,
    "required": [
        "first_name",
        "last_name",
        "username",
        "email",
        "password"
    ]
}

export default UserSignupSchema;