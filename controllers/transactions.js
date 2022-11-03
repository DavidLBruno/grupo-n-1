const createHttpError = require('http-errors')
const { catchAsync } = require('../helpers/catchAsync')
const { Transnaction } = require('../database/models')
const { endpointResponse } = require('../helpers/success')



const getTransaction = async (req, res, next) => {
    try {
            const response = await Transnaction.findAll()
            endpointResponse({
                res,
                message: 'Transaction successfully',
                body: response,
            })

            if(response.length){
                endpointResponse({
                    res,
                    message: 'Transaction successfully',
                    body: response,
                })
            }else{
                throw Error('Tranasaction not found');
            }

    } catch (error) {
        const httpError = createHttpError(
            error.statusCode,
            `[Error to get transaction] - [Transaction - get]: ${error.message} `,
        );
        next(httpError);
    };
}

const getTransactionById = async (req, res, next) => {
    try {
            const { id } = req.params;

            if(isNaN(id)){
                throw Error('Id is not a number');
            }

            const response = await Transnaction.findAll({
                where: {
                    id,
                }
            });
            if(response.length){
                endpointResponse({
                    res,
                    message: 'Transaction successfully',
                    body: response,
                })
            }else{
                throw Error('Tranasaction not found');
            }
    } catch (error) {
        const httpError = createHttpError(
            error.statusCode,
            `[Error to get transaction] - [Transaction - get]: ${error.message} `,
        );
        next(httpError);
    };
}

module.exports = {
    getTransaction,
    getTransactionById
}