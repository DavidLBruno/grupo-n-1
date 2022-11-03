const { validationResult } = require('express-validator')
const { endpointResponse } = require('../helpers/success')

const ValidationResult = (req, res, next) => {

    try {
        validationResult(req).throw()
        return next()
    } catch (error) {

        return res.status(400).json({
            code: 400,
            status: false,
            errors: error.array(),
          })
    }
}
    module.exports = { ValidationResult }