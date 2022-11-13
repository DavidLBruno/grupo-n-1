const { isAdmin } = require("../middlewares/index");
const createHttpError = require("http-errors");
const { Transnaction } = require("../database/models");
const { getPaginatedData } = require("../middlewares/paginate");
const { endpointResponse } = require("../helpers/success");


const getTransaction = async (req, res, next) => {
    try {
        const { id } = req.query;
        const admin = await isAdmin(id);
        const userTransactions = await Transnaction.findAll({
            where: {
                userId: id
            }
        })

        if(!isNaN(id) && admin){
            const model = await getPaginatedData(req, Transnaction);
            if (model == null){
                const httpError = createHttpError(400, `Invalid Parameter. Page should be a positive number equal or higher to 1.` );
                next(httpError);
            }
            // TODO: REMOVE when admin feature is done
            if (model.nextPage.indexOf('?') > 0){
                model.nextPage = model.nextPage.concat('&id='+id)
            }
            if (model.prevPage.indexOf('?') > 0){
                model.prevPage= model.prevPage.concat('&id='+id)
            }
            endpointResponse({
                res,
                message: "Transactions listed successfully",
                body: {
                    result : model.list,
                    nextPage: model.nextPage,
                    prevPage: model.prevPage
                },
            })
        } else if (!isNaN(id) && userTransactions.length) {
            endpointResponse({
                res,
                message: "Transactions listed successfully",
                body: {
                    userTransactions
                }
            })
        } else {
            const httpError = createHttpError(401,`Unauthorized.`);
            next(httpError);
        }

    } catch (error) {
        const httpError = createHttpError(
            error.statusCode,
            `[Error to get transaction] - [Transaction - get]: ${error.message} `,
        );
        next(httpError);
    };
};

const getTransactionById = async (req, res, next) => {
    try {
        const { id } = req.params;

        if (isNaN(id)) {
            throw Error('Id is not a number');
        }
        const response = await Transnaction.findByPk(id);

        if (response) {
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
};

const createTransaction = async (req, res, next) => {
    try {
        const { userId, categoryId, amount, description } = req.body;
        const newTransaction = await Transnaction.create({
            userId,
            categoryId,
            amount,
            description,
            date: new Date(Date.now())
        });

        if (!newTransaction) {
            throw Error('An unexpected error occurred');
        };

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
            const { categoryId, description } = req.body;
            await Transnaction.update({
                categoryId,
                description,
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
            await Transnaction.destroy({
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
};


module.exports = {
    getTransaction,
    getTransactionById,
    createTransaction,
    updateTransactionById,
    deleteTransaction
};
