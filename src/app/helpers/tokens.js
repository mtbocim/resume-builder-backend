// const jwt = require("jsonwebtoken");
import { sign } from "jsonwebtoken";
import { SECRET_KEY } from '@/app/config.js'

/** return signed JWT {username, isAdmin} from user data. */

function createToken(user) {
    console.assert(user.isAdmin !== undefined,
        "createToken passed user without isAdmin property");

    let payload = {
        username: user.username,
        isAdmin: user.isAdmin || false,
    };
    console.log(SECRET_KEY)
    return sign(payload, SECRET_KEY);
}

export default createToken;