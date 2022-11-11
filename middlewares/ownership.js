const createHttpError = require("http-errors")
const { Usuario, Transnaction } = require("../database/models")
const { development } = require("../config/config")
const jws = require("jsonwebtoken")

const checkOwnwerId = async (req, res, next) => {
    const { id } = req.params;
    const token = req.cookies.token;
    const userToken = jws.verify(token, development.jwtSecret)
    try {
        let user = await Usuario.findByPk(userToken.id)
        if(id != user.id) {
            res.status(403).json({
                status: false,
                message: "Invalid access, you do not have permission to access the resource"
            })
        }
        next();
    } catch (error) {
        const httpError = createHttpError(
            error.statusCode,
            `[Could not access while trying to get details] - [middleware]: ${error.message}`,
        )
        next(httpError)
    }


};

const checkOwnwerTransaction = async (req, res, next) => {
    const { id } = req.params;
    const token = req.cookies.token;
    const userToken = jws.verify(token, development.jwtSecret)
    try {
        let transaction = await Transnaction.findByPk(id);
        if(transaction.userId !== userToken.id) {
            res.status(403).json({
                status: false,
                message: "Invalid access, you do not have permission to access the resource"
            })
        };
        next();

    } catch (error) {
        const httpError = createHttpError(
            error.statusCode,
            `[Could not access while trying to get details] - [middleware]: ${error.message}`,
        )
        next(httpError)
    }


}



module.exports = { checkOwnwerId, checkOwnwerTransaction  }