import joi from 'joi';

const ShortenUrlSchema = joi.object({
    url: joi.string().required()
})

export default ShortenUrlSchema;