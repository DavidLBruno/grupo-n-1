const createHttpError = require("http-errors");
const { catchAsync } = require("../helpers/catchAsync");
const { Usuario } = require("../database/models");
const { encrypt } = require("../middlewares/index");
const { endpointResponse } = require("../helpers/success");

module.exports = {

    list: catchAsync(async (req, res, next) =>{

        try{
        const list = await Usuario.findAll({
            atributes:[
                'firstName',
                'lastName',
                'email',
                'createdAt'
            ]
        });
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
        const { firstName, lastName, email } = req.body

        try {
            const existemail = await Usuario.findOne({
                where: {
                    email: email
                }
            })
            if (existemail) {
                const httpError = createHttpError(
                    statusCode = 400,
                    `[Error creating user] - [Users - create]: There is already a user with that email ${email} `,
                )
                next(httpError)


            }
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


    update: catchAsync(async (req, res, next) => {
        const { firstName, lastName, email} = req.body
        const id = req.params.id

        try {

            const result = await Usuario.findOne({
                where: {
                    id: id
                }
            })
            if (!result) {
                const httpError = createHttpError(
                    statusCode = 404,
                    `[Error creating user] - [Users - Update]: This User does not exist in the database ${id} `,
                )
                next(httpError)


            }
            if(req.body.password){
                const password = await encrypt(req.body.password)
                const response = await Usuario.update({
                    firstName: firstName,
                    lastName: lastName,
                    email: email,
                    password:password
                }, {
                    where: { id: id }
                })
                endpointResponse({
                    res,
                    message: 'user update successfully',
                    body: {firstName: firstName,
                        lastName: lastName,
                        email: email,
                        password:password},
                })
            }  
            const response = await Usuario.update({
                firstName: firstName,
                lastName: lastName,
                email: email,
                
            }, {
                where: { id: id }
            })


            endpointResponse({
                res,
                message: 'user update successfully',
                body: {firstName: firstName,
                    lastName: lastName,
                    email: email,
                    }
            })

        } catch (error) {

            const httpError = createHttpError(
                error.statusCode,
                `[Error creating user] - [Users - Update]: ${error.message} `,
            )
            next(httpError)


        }
    }),


    deleteU: catchAsync(async (req, res, next) => {
        const id = req.params.id

        try {

            const result = await Usuario.findOne({
                where: {
                    id: id
                }
            })
            if (!result) {
                const httpError = createHttpError(
                    statusCode = 400,
                    `[Error creating user] - [Users - Delete]: This User does not exist in the database ${id} `,
                )
                next(httpError)


            }

            const response = await Usuario.destroy({
             
                where: { id: id }
            })


            endpointResponse({
                res,
                message: 'user delete successfully',
                body: id,
            })


        } catch (error) {

            const httpError = createHttpError(
                error.statusCode,
                `[Error creating user] - [Users - create]: ${error.message} `,
            )
            next(httpError)

        }
    }),

  servicioimagenpost: function (req, res, next) {
    try{
        endpointResponse({
            res,
            message: 'Image upgrade successfully',
            body: "",
        })
    }catch(error){
        const httpError = createHttpError(
            error.statusCode,
            `[Error creating user] - [Users - create]: ${error.message} `,
        )
        next(httpError)
    }
  },
}