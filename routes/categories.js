const express = require("express");
const {
  createCategory,
  getCategories,
  getCategoryById,
  updateCategory,
  deleteCategory,
} = require("../controllers/categories");

const router = express.Router();

/**
 * @swagger
 * /categories:
 *  get:
 *    security:
 *      - api_key: []
 *    tags:
 *      - Category
 *    summary: Finds all Categories
 *    responses:
 *      200:
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
 *                  example: All Categories
 *                body:
 *                  type: array
 *                  items:
 *                    $ref: "#/components/schemas/Category"
 *      401:
 *        $ref: "#/components/responses/UnauthorizedError"
 *      403:
 *        $ref: "#/components/responses/ForbbidenError"
 */
router.get("/", getCategories);

/**
 * @swagger
 * /categories:
 *  post:
 *    security:
 *      - api_key: []
 *    tags:
 *      - Category
 *    summary: Create new Category
 *    requestBody:
 *      description: Create a new category
 *      content:
 *        application/json:
 *          schema:
 *            $ref: "#/components/schemas/Category"
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
 *                  example: Create Category
 *                body:
 *                  $ref: "#/components/schemas/Category"
 *      401:
 *        $ref: "#/components/responses/UnauthorizedError"
 *      403:
 *        $ref: "#/components/responses/ForbbidenError"
 *      405:
 *        description: Invalid input
 */
router.post("/", createCategory);

/**
 * @swagger
 * /categories/{id}:
 *  get:
 *    security:
 *      - api_key: []
 *    tags:
 *      - Category
 *    summary: Finds Category by id
 *    parameters:
 *      - name: id
 *        in: path
 *        description: ID of category to return
 *        required: true
 *        schema:
 *          type: integer
 *          format: int64
 *    responses:
 *      200:
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
 *                  example: Category \#1
 *                body:
 *                  $ref: "#/components/schemas/Category"
 *      401:
 *        $ref: "#/components/responses/UnauthorizedError"
 *      403:
 *        $ref: "#/components/responses/ForbbidenError"
 *      "404":
 *        description: The category doesn't exist!
 */
router.get("/:id", getCategoryById);
/**
 * @swagger
 * /categories/{id}:
 *  put:
 *    security:
 *      - api_key: []
 *    tags:
 *      - Category
 *    summary: Update Category by id
 *    parameters:
 *      - name: id
 *        in: path
 *        description: ID of category to update
 *        required: true
 *        schema:
 *          type: integer
 *          format: int64
 *    requestBody:
 *      description: Update a category
 *      content:
 *        application/json:
 *          schema:
 *            $ref: "#/components/schemas/Category"
 *      required: true
 *    responses:
 *      200:
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
 *                  example: Category \#1
 *                body:
 *                  $ref: "#/components/schemas/Category"
 *      401:
 *        $ref: "#/components/responses/UnauthorizedError"
 *      403:
 *        $ref: "#/components/responses/ForbbidenError"
 *      "404":
 *        description: The category doesn't exist!
 */
router.put("/:id", updateCategory);

/**
 * @swagger
 * /categories/{id}:
 *  delete:
 *    security:
 *      - api_key: []
 *    tags:
 *      - Category
 *    summary: Delete Category by id
 *    parameters:
 *      - name: id
 *        in: path
 *        description: ID of category to delete
 *        required: true
 *        schema:
 *          type: integer
 *          format: int64
 *    responses:
 *      200:
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
 *                  example: Category \#1
 *                body:
 *                  $ref: "#/components/schemas/Category"
 *      401:
 *        $ref: "#/components/responses/UnauthorizedError"
 *      403:
 *        $ref: "#/components/responses/ForbbidenError"
 *      "404":
 *        description: The category doesn't exist!
 */
router.delete("/:id", deleteCategory);

module.exports = router;
