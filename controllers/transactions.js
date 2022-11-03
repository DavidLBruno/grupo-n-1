const createHttpError = require('http-errors')
const { catchAsync } = require('../helpers/catchAsync')
const { Transnaction } = require('../database/models')
const { endpointResponse } = require('../helpers/success')

module.exports = {
    getTransaction: catchAsync(async (req, res, next) => {
        try {
            console.log("Dsadas")
                const response = await Transnaction.findAll()
                endpointResponse({
                    res,
                    message: 'Transaction successfully',
                    body: response,
                })
        } catch (error) {
            const httpError = createHttpError(
                error.statusCode,
                `[Error to get transaction] - [Transaction - get]: ${error.message} `,
            );
            next(httpError);
        };
    }),
}