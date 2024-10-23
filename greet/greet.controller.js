import { createSuccess } from "../helpers/success.js";
import { createError } from "../helpers/error.js";

export const greet = async (req, res, next) => {
    try {
        return next(createSuccess(200, `Hello ${req.body.name}`, {name:req.body.name}));
    } catch (error) {
        return next(createError(500, "Internal Server Error!"));
    }
}