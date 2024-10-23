import { createSuccess } from "../helpers/success.js";

export const greet = async (req, res, next) => {
    try {
        next(createSuccess(200, `Hello ${req.body.name}`, {name:req.body.name}));
    } catch (error) {

    }
}