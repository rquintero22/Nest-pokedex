import * as Joi from 'joi';


export const JoiValidationSchema = Joi.object({
    MONGODB: Joi.required(),
    APP_PORT: Joi.number().default(3002),
    DEFAULT_LIMIT: Joi.number().default(10)
});
