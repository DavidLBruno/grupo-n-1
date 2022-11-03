const createHttpError = require('http-errors')
const ErrorObject = require('../helpers/error')
const { catchAsync } = require('../helpers/catchAsync')
const { Usuario } = require('../database/models')
const{encrypt}=require('../middlewares/index')
const { endpointResponse } = require('../helpers/success')



module.exports = {

    listado: catchAsync(async (req, res, next) =>{

            let lista = await Usuario.findAll()
            .then((usuario => {
                let array=[]
                for(usuarios in usuario){
                    array.push("Nombre: "+usuario[usuarios].firstName,
                     " apellido: "+usuario[usuarios].lastName,
                     " email: "+usuario[usuarios].email,
                     " Fecha registro: "+usuario[usuarios].createdAt,
                     "------------------------------"
                     )
                }
            return res.json(array);
               })
            )
    }),

    detail: catchAsync(async (req, res, next) =>{

        try{
            
            let lista = await Usuario.findByPk(req.params.id).then(function (usuario) {
                res.json({
                  detalle: "A continuacion los detalles del usuario : "+usuario.firstName,
                  data: usuario,
                });
              });



        }catch (error) {

            const httpError = createHttpError(
                error.statusCode,
                `[Usuario no encontrado] `,
            )
            next(httpError)
        }
      }),

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