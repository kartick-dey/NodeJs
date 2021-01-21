const ApiError = require("../error-handler/apiError");

const validateBody = (schema) => {
    return async (req, res, next) => {
        try {
            const validateBody = await schema.validate(req.body);
            req.body = validateBody;
            next();
        } catch (error) {
            next(ApiError.badRequest(error))
        }
    }
};

module.exports = validateBody;