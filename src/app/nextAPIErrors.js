
class NextAPIError extends Error {
    constructor(message, status){
        super();
        this.message = message;
        this.status = status;
    }
}

/** 400 Bad Request Error */

class BadRequestError extends NextAPIError {
    constructor(message = "Bad Request"){
        super(message, 400);
    }
}

/** 403 Bad Request Error */

class ForbiddenError extends NextAPIError {
    constructor(message = "Bad Request"){
        super(message, 403);
    }
}

export { BadRequestError, ForbiddenError };