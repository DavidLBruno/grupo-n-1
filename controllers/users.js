const createHttpError = require("http-errors");
const { catchAsync } = require("../helpers/catchAsync");
const { Usuario } = require("../database/models");
const { encrypt } = require("../middlewares/index");
const { endpointResponse } = require("../helpers/success");

module.exports = {


    create: catchAsync(async (req, res, next) => {
        const { firstName, lastName, email} = req.body

        try {
           
                const password = await encrypt(req.body.password)
                const response = await Usuario.create({
                    firstName: firstName,
                    lastName: lastName,
                    email: email,
                    password: password

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

    getUsers: catchAsync(async (req, res,next)=> {

        try{

            const users = await Usuario.findAll({
                atributes:[
                    'firstName',
                    'lastName',
                    'email',

            ],
            limit: 10
            });
            res.json(users);

        } catch (error) {

            const httpError = createHttpError(
                error.statusCode,
                `[Error listing users] - [Users - getUsers]: ${error.message} `,
            )
            next(httpError)


        }

    })



}
