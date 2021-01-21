const apiError = require("./apiError");

const apiErrorHandler = (error, req, res, next) => {
    console.log(error);

    if (error instanceof apiError) {
        return res.status(error.code).json(error.message);
    }

    return res.status(500).json("something went wrong");
};

module.exports = apiErrorHandler;