const bcrypt = require("bcrypt")
const createHttpError = require('http-errors')


async function encrypt(password){
    try {
        const salt = await bcrypt.genSalt()
        const hash = await bcrypt.hash(password, salt)

        return hash
    } catch (error) {
        const httpError = createHttpError(
            error.statusCode,
            `[Failed to encrypt password] - [middleware]: ${error.message}`,
          )
          next(httpError)
    }
}

module.exports = {encrypt}
