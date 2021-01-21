const yup = require('yup');

module.exports = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().required().email(),
    dob: yup.date().required(),
    phone: yup.number().positive().required()
});