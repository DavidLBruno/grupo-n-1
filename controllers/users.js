const createHttpError = require("http-errors");
const { catchAsync } = require("../helpers/catchAsync");
const { Usuario } = require("../database/models");
const { encrypt } = require("../middlewares/index");
const { endpointResponse } = require("../helpers/success");

module.exports = {

    list: catchAsync(async (req, res, next) =>{

        try{
        const list = await Usuario.findAll();
        endpointResponse({
          res,
          message: "list the user successfully",
          body: list,
        });
        }catch (error) {
            const httpError = createHttpError(
                error.statusCode,
                `[Error List not found] - [Users - detail]: ${error.message} `,
            )
            next(httpError)
        }
    }),
    detail: catchAsync(async (req, res, next) =>{

            await Usuario.findByPk(req.params.id)
            .then(function (user) {
                if(user){
                    endpointResponse({
                        res,
                        message: 'Detail the user successfully',
                        body: user
                        });
                }
                else{
                    const httpError = createHttpError(
                        error.statusCode,
                        `[Error user not found] - [Users - detail]: ${error.message} `,
                    )
                    next(httpError)
                }
              });
              
      }),

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

}
