
//apiError was for handling errors and chaos, this ApiResponse is for delivering success.


class ApiResponse {
    constructor(statusCode, data, message = "success") {
        this.statusCode = statusCode
        this.data = data
        this.message = message
        this.success = statusCode <400
    }
}

export {ApiResponse}