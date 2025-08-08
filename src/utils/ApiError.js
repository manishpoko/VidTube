class ApiError extends Error {
    constructor(
        statusCode, //404, 500, 200, etc
        message = "something went wrong",
        errors = [], //for more detailed error info, this can hold an array of diff error types
        stack= "" //parameter to pass an existing stack trace
    ){
        //material inside the constructor:
        super(message) //this officially passes the message up to the original "Error" class, so that it behaves like a standard error. !!!MANDATORY LINE WHEN USING "extends"!!!
        this.statusCode = statusCode 
        this.data = null //conventional property (placeholder)
        this.message = message
        this.success = false //apparently this is imp, and makes frontend folks' lives easier
        this.errors = errors

        //the stackTrace logic (this is pro level stuff, apparently)
        if(stack) {
            this.stack = stack
        } else{
            Error.captureStackTrace(this, this.constructor)
        }
    }
}

export {ApiError}