import Joi from '@hapi/joi';

class Validate{

    validateMessage(message) {
        const schema = Joi.object({
            fullname:Joi.string().required().messages({
                "string.base": `May I have your name Please ?`,
                "string.empty": `May I have your name Please ?`,
                "any.required": `May I have your name Please ?`
              }),
                
            telephone: Joi.number().integer().messages({
                "number.base": `The telephone number is not valid`
              }),
            email: Joi.string().email().insensitive(),
            message:Joi.string().required().messages({
                "string.base": `I did not get your message`,
                "string.empty": `I did not get your message`,
                "any.required": `I did not get your message`
              }),
        });
        return schema.validate(message);
    }
}

export default new Validate();