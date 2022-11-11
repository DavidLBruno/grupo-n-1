const express = require("express");
const {
  getTransaction,
  getTransactionById,
  createTransaction,
  updateTransactionById,
  deleteTransaction,
} = require("../controllers/transactions");
const { validateToken } = require("../middlewares/index");
const { checkOwnwerTransaction } = require("../middlewares/ownership")

const router = express.Router();

/**
 * @swagger
 * /transactions:
 *  get:
 *    security:
 *      - bearerAuth: []
 *    tags:
 *      - Transactions
 *    summary: Finds all Transactions
 *    responses:
 *      "200":
 *        description: successful operation
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                status:
 *                  type: string
 *                  example: true
 *                code:
 *                  type: integer
 *                  example: 200
 *                message:
 *                  type: string
 *                  example: All Transactions
 *                body:
 *                  type: array
 *                  items:
 *                    type: object
 *                    properties:
 *                      id:
 *                        type: integer
 *                        format: int64
 *                        example: 1
 *                      description:
 *                        type: string
 *                        example: Recarga
 *                      amount:
 *                        type: float
 *                        example: 123.13
 *                      date:
 *                        type: string
 *                        format: date-time
 *                      userId:
 *                        type: integer
 *                        format: int64
 *                        example: 10
 *                      categoryId:
 *                        type: integer
 *                        format: int64
 *                        example: 1
 *      "401":
 *        $ref: "#/components/responses/UnauthorizedError"
 */
router.get("/", validateToken, getTransaction);
/**
 * @swagger
 * /transactions:
 *  post:
 *    security:
 *      - bearerAuth: []
 *    tags:
 *      - Transactions
 *    summary: Make a new Transaction
 *    requestBody:
 *      description: Make a new transaction
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              id:
 *                type: integer
 *                format: int64
 *                example: 1
 *              description:
 *                type: string
 *                example: Recarga
 *              amount:
 *                type: float
 *                example: 123.13
 *              date:
 *                type: string
 *                format: date-time
 *              userId:
 *                type: integer
 *                format: int64
 *                example: 10
 *              categoryId:
 *                type: integer
 *                format: int64
 *                example: 1
 *      required: true
 *    responses:
 *      "201":
 *        description: successful operation
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                status:
 *                  type: string
 *                  example: true
 *                code:
 *                  type: integer
 *                  example: 201
 *                message:
 *                  type: string
 *                  example: Create Transactions
 *                body:
 *                  type: object
 *                  properties:
 *                    id:
 *                      type: integer
 *                      format: int64
 *                      example: 1
 *                    description:
 *                      type: string
 *                      example: Recarga
 *                    amount:
 *                      type: float
 *                      example: 123.13
 *                    date:
 *                      type: string
 *                      format: date-time
 *                    userId:
 *                      type: integer
 *                      format: int64
 *                      example: 10
 *                    categoryId:
 *                      type: integer
 *                      format: int64
 *                      example: 1
 *      "401":
 *        $ref: "#/components/responses/UnauthorizedError"
 *      "404":
 *        description: The transaction doesn't exist!
 *      "405":
 *        description: Invalid input
 */
router.post("/", validateToken, createTransaction);

/**
 * @swagger
 * /transactions/{id}:
 *  get:
 *    security:
 *      - bearerAuth: []
 *    tags:
 *      - Transactions
 *    summary: Finds Transactions by id
 *    parameters:
 *      - name: id
 *        in: path
 *        description: ID of transaction to return
 *        required: true
 *        schema:
 *          type: integer
 *          format: int64
 *    responses:
 *      "200":
 *        description: successful operation
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                status:
 *                  type: string
 *                  example: true
 *                code:
 *                  type: integer
 *                  example: 200
 *                message:
 *                  type: string
 *                  example: Transactions \#1
 *                body:
 *                  required:
 *                    - description
 *                    - amount
 *                    - date
 *                    - userId
 *                    - categoryId
 *                  type: object
 *                  properties:
 *                    id:
 *                      type: integer
 *                      format: int64
 *                      example: 1
 *                    description:
 *                      type: string
 *                      example: Recarga
 *                    amount:
 *                      type: float
 *                      example: 123.13
 *                    date:
 *                      type: string
 *                      format: date-time
 *                    userId:
 *                      type: integer
 *                      format: int64
 *                      example: 10
 *                    categoryId:
 *                      type: integer
 *                      format: int64
 *                      example: 1
 *      "401":
 *        $ref: "#/components/responses/UnauthorizedError"
 *      "403":
 *        $ref: "#/components/responses/ForbbidenError"
 *      "404":
 *        description: The transaction doesn't exist!
 */
router.get("/:id", validateToken, checkOwnwerTransaction, getTransactionById);

/**
 * @swagger
 * /transactions/{id}:
 *  put:
 *    security:
 *      - bearerAuth: []
 *    tags:
 *      - Transactions
 *    summary: Update Transaction by id
 *    parameters:
 *      - name: id
 *        in: path
 *        description: ID of transaction to update
 *        required: true
 *        schema:
 *          type: integer
 *          format: int64
 *    requestBody:
 *      description: Update a transaction
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              id:
 *                type: integer
 *                format: int64
 *                example: 1
 *              description:
 *                type: string
 *                example: Recarga
 *              amount:
 *                type: float
 *                example: 123.13
 *              date:
 *                type: string
 *                format: date-time
 *              userId:
 *                type: integer
 *                format: int64
 *                example: 10
 *              categoryId:
 *                type: integer
 *                format: int64
 *                example: 1
 *      required: true
 *    responses:
 *      "200":
 *        description: successful operation
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                status:
 *                  type: string
 *                  example: true
 *                code:
 *                  type: integer
 *                  example: 200
 *                message:
 *                  type: string
 *                  example: Transactions \#1
 *                body:
 *                  required:
 *                    - description
 *                    - amount
 *                    - date
 *                    - userId
 *                    - categoryId
 *                  type: object
 *                  properties:
 *                    id:
 *                      type: integer
 *                      format: int64
 *                      example: 1
 *                    description:
 *                      type: string
 *                      example: Recarga
 *                    amount:
 *                      type: float
 *                      example: 123.13
 *                    date:
 *                      type: string
 *                      format: date-time
 *                    userId:
 *                      type: integer
 *                      format: int64
 *                      example: 10
 *                    categoryId:
 *                      type: integer
 *                      format: int64
 *                      example: 1
 *      "401":
 *        $ref: "#/components/responses/UnauthorizedError"
 *      "403":
 *        $ref: "#/components/responses/ForbbidenError"
 *      "404":
 *        description: The transaction doesn't exist!
 */
router.put("/:id", validateToken, checkOwnwerTransaction, updateTransactionById);
/**
 * @swagger
 * /transactions/{id}:
 *  delete:
 *    security:
 *      - bearerAuth: []
 *    tags:
 *      - Transactions
 *    summary: Delete Transactions by id
 *    parameters:
 *      - name: id
 *        in: path
 *        description: ID of transaction to delete
 *        required: true
 *        schema:
 *          type: integer
 *          format: int64
 *    responses:
 *      "200":
 *        description: successful operation
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                status:
 *                  type: string
 *                  example: true
 *                code:
 *                  type: integer
 *                  example: 200
 *                message:
 *                  type: string
 *                  example: Transactions \#1
 *                body:
 *                  required:
 *                    - description
 *                    - amount
 *                    - date
 *                    - userId
 *                    - categoryId
 *                  type: object
 *                  properties:
 *                    id:
 *                      type: integer
 *                      format: int64
 *                      example: 1
 *                    description:
 *                      type: string
 *                      example: Recarga
 *                    amount:
 *                      type: float
 *                      example: 123.13
 *                    date:
 *                      type: string
 *                      format: date-time
 *                    userId:
 *                      type: integer
 *                      format: int64
 *                      example: 10
 *                    categoryId:
 *                      type: integer
 *                      format: int64
 *                      example: 1
 *      "401":
 *        $ref: "#/components/responses/UnauthorizedError"
 *      "403":
 *        $ref: "#/components/responses/ForbbidenError"
 *      "404":
 *        description: The transaction doesn't exist!
 */
router.delete("/:id", validateToken, deleteTransaction);

module.exports = router;
