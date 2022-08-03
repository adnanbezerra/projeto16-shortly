import LoginSchema from "../schemas/LoginSchema.js";

export function ValidateLoginData(req, res, next) {
    const newLogin = req.body;

    const validate = LoginSchema.validate(newLogin);
    if(validate.error) return res.status(422).send(validate.error.details[0].message);

    next();
}