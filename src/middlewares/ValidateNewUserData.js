import newUserSchema from "../schemas/NewUserSchema.js";

export function ValidateNewUserData(req, res, next) {
    const newUser = req.body;

    if(newUser.password !== newUser.confirmPassword) return res.sendStatus(422);

    const validate = newUserSchema.validate(newUser);
    if(validate.error) return res.sendStatus(422);

    next();
}