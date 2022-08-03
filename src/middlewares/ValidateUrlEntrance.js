import ShortenUrlSchema from "../schemas/ShortenUrlSchema.js";

export function ValidateUrlEntrance(req, res, next) {
    const urlObject = req.body;
    const validation = ShortenUrlSchema.validate(urlObject);

    if(validation.error) {
        return res.status(422).send(validation.error.details[0].message);
    }

    if(!urlObject.url.startsWith("https://")) return res.status(422).send('Invalid url format');

    next();
}