export const createError = (status, message) => {
    const errorObj = new Error();
    errorObj.status = status;
    errorObj.message = message;
    return errorObj;
}