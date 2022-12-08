
const globalErrorHandler = (err, req, res, next) => {
    const errorStatusCode = err.status || 500;
    const errorMessage = err.message || "An unknown error occurred";

    return res.status(errorStatusCode).json({
        success: false,
        status: errorStatusCode,
        message: errorMessage,
        stack: err.stack
    })
    
    // if (!err.statusCode) err.statusCode = 500;
    // if (!err.message) err.message = "An unknown error occurred";
    // res.status(err.statusCode).json({ message: err.message });
}

export default globalErrorHandler; 