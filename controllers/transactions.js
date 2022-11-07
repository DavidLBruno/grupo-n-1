const { isAdmin } = require('../middlewares/index')
const createHttpError = require('http-errors');
const { catchAsync } = require('../helpers/catchAsync');
const { Transnaction } = require('../database/models');
const { endpointResponse } = require('../helpers/success');


const getTransaction = async (req, res, next) => {
    try {
            const { id } = req.query;
            const admin = await isAdmin(id);

            if(!isNaN(id) && admin){

                const response = await Transnaction.findAll();
                endpointResponse({
                    res,
                    message: 'Transaction successfully',
                    body: response,
                });
                if(response.length){
                    endpointResponse({
                        res,
                        message: 'Transaction successfully',
                        body: response,
                    });
                }else{
                    throw Error('Tranasaction not found');
                }

            }else{
                throw Error('You are not a admin');
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

        if (isNaN(id)) {
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
                });
            }else{
                throw Error('Tranasaction not found');
            }
        if (response.length) {
            endpointResponse({
                res,
                message: 'Transaction successfully',
                body: response,
            })
        } else {
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

const createTransaction = async (req, res, next) => {
    try {
        const { userId, categoryId, amount, description, date } = req.body;
        console.log(req.body);
        const newTransaction = await Transnaction.create({
            userId: userId,
            categoryId: categoryId,
            amount: amount,
            description: description,
            date: date
        });

        if (!newTransaction) {
            throw Error('An unexpected error occurred');
        }

        endpointResponse({
            res,
            message: 'Transaction successfully',
            body: newTransaction
        })

    } catch (error) {
        const httpError = createHttpError(
            error.statusCode,
            `[Error to post transaction] - [Transaction - post]: ${error.message} `,
        );
        next(httpError);
    }
};

const updateTransactionById = async (req, res, next) => {
    try {
        const transactionId = +req.params.id;
        const transaction = await Transnaction.findByPk(transactionId);

        if (transaction) {
            const { userId, categoryId, amount, description } = req.body;
            const editedTransaction = await Transnaction.update({
                userId: userId,
                categoryId: categoryId,
                amount: amount,
                description: description,
                date: transaction.date
            }, {
                where: {
                    id: transaction.id
                }
            })
            const updatedTransaction = await Transnaction.findByPk(transactionId);

            endpointResponse({
                res,
                message: `The transaction ${transaction.id} has been modified and updated`,
                body: updatedTransaction
            })

        } else {
            throw Error('An unexpected error occurred');
        }

    } catch (error) {
        const httpError = createHttpError(
            error.statusCode,
            `[Error to put transaction] - [Transaction - put]: ${error.message} `,
        );
        next(httpError);
    }
};

const deleteTransaction = async (req, res, next) => {
    try {
        const transactionId = +req.params.id;
        const transaction = await Transnaction.findByPk(transactionId);

        if (transaction) {
            const deletedTransaction = Transnaction.destroy({
                where: {
                    id: transaction.id
                }
            })

            endpointResponse({
                res,
                message: `The transaction ${transaction.id} has been deleted`,
                body: transaction
            })

        } else {
            throw Error('An unexpected error occurred');
        }
        
    } catch (error) {
        const httpError = createHttpError(
            error.statusCode,
            `[Error to delete transaction] - [Transaction - delete]: ${error.message} `,
        );
        next(httpError);
    }
}


module.exports = {
    getTransaction,
    getTransactionById,
    createTransaction,
    updateTransactionById,
    deleteTransaction
}
