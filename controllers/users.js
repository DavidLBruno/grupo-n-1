const createHttpError = require("http-errors");
const { catchAsync } = require("../helpers/catchAsync");
const { Usuario } = require("../database/models");
const { encrypt, getPaginatedData,compare,jwtcreate } = require("../middlewares/index");
const { endpointResponse } = require("../helpers/success");
const {authResponse,providerResponse,deleteCookie} = require("../helpers/authResponse");

module.exports = {


    login:catchAsync(async (req, res, next) =>{
        try {
            const {email,password} = req.body

            const user = await Usuario.findOne({
                where: {
                    email: email
                }
            })
            if(!user){
                const httpError = createHttpError(
                    statusCode = 400,
                    `[Error Login user] - [Users - Login]: the user does not exist in the database ${email} `,
                )
                next(httpError)
            }
            const result = await compare(password,user.password)
            if(!result){
                const httpError = createHttpError(
                    statusCode = 400,
                    `[Error Login user] - [Users - Login]: Password is incorrect `,
                )
                next(httpError)
            }
            const userData = {
                id:user.id,
                firstName:user.firstName,
                lastName:user.lastName,
                email:user.email
            }

            const login = await jwtcreate(userData)
            return authResponse(res,login,401)
        } catch (error) {
            const httpError = createHttpError(
                error.statusCode,
                `[Error Login user] - [Users - Login]: ${error.message} `,
            )
            next(httpError)
        }
       
    }),
    
    create: catchAsync(async (req, res, next) => {
        const { firstName, lastName, email } = req.body

        try {
            const user = await Usuario.findOne({
                where: {
                    email: email
                }
            })
            if (user) {
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

    list: catchAsync(async (req, res, next) =>{
        try{
            const model = await getPaginatedData(req, Usuario);
            if (model == null){
                const httpError = createHttpError(400, `Invalid Parameter. Page should be a positive number equal or higher to 1.` );
                next(httpError);
            }
            endpointResponse({
              res,
              message: "list the user successfully",
              body: {
                result : model.list,
                nextPage: model.nextPage,
                prevPage: model.prevPage
            },
            })        
            }catch (error) {
                const httpError = createHttpError(
                    error.statusCode,
                    ` ${error.message} `,
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
                        404, `[Error user not found] - [Users - detail]`,
                    )
                    next(httpError)
                }
              });
              
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

    servicioimagenpost: catchAsync((req, res, next) => {

     endpointResponse({
            res,
            message: 'Image upgrade successfully',
            body: "",
        })
        const httpError = createHttpError(
            error.statusCode,
            `[Error creating user] - [Users - create]: ${error.message} `,
        )
        next(httpError)
    })
}