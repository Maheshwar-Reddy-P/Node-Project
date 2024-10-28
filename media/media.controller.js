import { createSuccess } from "../helpers/success.js";
import { createError } from "../helpers/error.js";

export const handleImageUpload = async (req, res, next) => {
    try {
        return next(createSuccess(200, "Image Uploaded", req.file.buffer));
    } catch (error) {
        return next(createError(500, "Internal Server Error!"));
    }
}