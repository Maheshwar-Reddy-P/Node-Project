export const createSuccess = (status, message, data) => {
    const successObj = {
        status,
        message,
        data
    }
    return successObj;
}