const { validationResult } = require('express-validator')
const { endpointResponse } = require('../helpers/success')

const ValidationResult = (req, res, next) => {

    try {
        validationResult(req).throw()
        return next()
    } catch (error) {

        endpointResponse({
            res,
            code:400,
            message: error.array(),
        })
    }
}
    module.exports = { ValidationResult }