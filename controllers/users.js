const createHttpError = require('http-errors')
const { catchAsync } = require('../helpers/catchAsync')
const { Usuario } = require('../database/models')
const{encrypt}=require('../middlewares/index')
const { endpointResponse } = require('../helpers/success')



module.exports = {


    create: catchAsync(async (req, res, next) => {

        password = await encrypt(req.body.password)



        try {
            const response = await Usuario.create({
                firstName: req.body.firstName,
                lastName:req.body.lastName,
                email: req.body.email,
                password:password

            })
            endpointResponse({
                res,
                message: 'user created successfully',
                body: response,
            })
        } catch (error) {

            const httpError = createHttpError(
                error.statusCode,
                `[Error creating user] - [Users - create]: ${error.message} `,
            )
            next(httpError)


        }
    }),





}