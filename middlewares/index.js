const bcrypt = require("bcrypt")
const createHttpError = require('http-errors')
const { checkSchema } = require('express-validator')
const { ValidationResult } = require('../helpers/validate')


async function encrypt(password) {
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

const validateCreate = [
    checkSchema({
        firstName: {
            in: ['body'],
            exists: {
                errorMessage: 'firstName is required'
            },
        }
    }),
    checkSchema({
        lastName: {
            in: ['body'],
            exists: {
                errorMessage: 'lastName is required'
            },
        }
    }),
    checkSchema({
        email: {
            in: ['body'],
            exists: {
                errorMessage: 'email is required'
            },
            isEmail:{
                errorMessage: 'Dijite un email valido'
            },
        }
    }),
    checkSchema({
        password: {
            in: ['body'],
            exists: {
                errorMessage: 'password is required'
            },
        }
    }),

    (req, res, next) => {
        ValidationResult(req, res, next)
    }


]


const validateTrans = [
    checkSchema({
        description: {
            in: ['body'],
            exists: {
                errorMessage: 'description is required'
            },
        }
    }),
    checkSchema({
        amount: {
            in: ['body'],
            exists: {
                errorMessage: 'amount is required'
            },
        }
    }),
    checkSchema({
        date: {
            in: ['body'],
            exists: {
                errorMessage: 'date is required'
            },
           
        }
    }),
    checkSchema({
        userId: {
            in: ['body'],
            exists: {
                errorMessage: 'userId is required'
            },
        }
    }),
    checkSchema({
        categoryId: {
            in: ['body'],
            exists: {
                errorMessage: 'categoryId is required'
            },
        }
    }),

    (req, res, next) => {
        ValidationResult(req, res, next)
    }


]

const isAdmin  = async (id) => {
    if(id == 1){
        return true;
    }else{
        return false;
    }
};


module.exports = { encrypt, validateCreate, validateTrans, isAdmin }
