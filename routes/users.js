const express = require("express");
const {
  deleteU,
  create,
  update,
  list,
  detail,
  servicioimagenpost,
  login,
} = require("../controllers/users");
const { validateCreate, validateToken } = require("../middlewares/index");
const { checkOwnwerId } = require("../middlewares/ownership") 
const { validateCreate, validateToken, imagen } = require("../middlewares/index");

const router = express.Router();

/**
 * @swagger
 * /user:
 *  get:
 *    security:
 *      - bearerAuth: []
 *    tags:
 *      - Users
 *    summary: Finds all Users paginated
 *    parameters:
 *      - name: page
 *        in: query
 *        description: Number of page
 *        required: true
 *        schema:
 *         type: integer
 *         format: int64
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
 *                  example: All Users
 *                body:
 *                  type: array
 *                  items:
 *                    $ref: "#/components/schemas/User"
 *      "401":
 *        $ref: "#/components/responses/UnauthorizedError"
 */
router.get("/", validateToken, list);

/**
 * @swagger
 * /user/create:
 *  post:
 *    tags:
 *      - Users
 *    summary: Create new User
 *    requestBody:
 *      description: Create a new user
 *      content:
 *        application/json:
 *          schema:
 *            $ref: "#/components/schemas/User"
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
 *                  example: Create User
 *                body:
 *                  $ref: "#/components/schemas/User"
 *      "405":
 *        description: Invalid input
 */
 router.post("/create", validateCreate, create);

/**
 * @swagger
 * /user/{id}:
 *  get:
 *    security:
 *      - bearerAuth: []
 *    tags:
 *      - Users
 *    summary: Finds User by id
 *    parameters:
 *      - name: id
 *        in: path
 *        description: ID of user to return
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
 *                  example: User \#1
 *                body:
 *                  $ref: "#/components/schemas/User"
 *      "404":
 *        description: The user doesn't exist!
 */
router.get("/:id", validateToken, checkOwnwerId, detail);

/**
 * @swagger
 * /user/update/{id}:
 *  put:
 *    security:
 *      - bearerAuth: []
 *    tags:
 *      - Users
 *    summary: Update User by id
 *    parameters:
 *      - name: id
 *        in: path
 *        description: ID of user to update
 *        required: true
 *        schema:
 *          type: integer
 *          format: int64
 *    requestBody:
 *      description: Update a user
 *      content:
 *        application/json:
 *          schema:
 *            $ref: "#/components/schemas/User"
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
 *                  example: User \#1
 *                body:
 *                  $ref: "#/components/schemas/User"
 *      "401":
 *        $ref: "#/components/responses/UnauthorizedError"
 *      "404":
 *        description: The user doesn't exist!
 */
router.put("/update/:id", validateToken, checkOwnwerId, update);

router.post("/login", login);
/**
 * @swagger
 * /user/delete/{id}:
 *  delete:
 *    security:
 *      - bearerAuth: []
 *    tags:
 *      - Users
 *    summary: Delete User by id
 *    parameters:
 *      - name: id
 *        in: path
 *        description: ID of user to delete
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
 *                  example: User \#1
 *                body:
 *                  $ref: "#/components/schemas/User"
 *      "401":
 *        $ref: "#/components/responses/UnauthorizedError"
 *      "403":
 *        $ref: "#/components/responses/ForbbidenError"
 *      "404":
 *        description: The user doesn't exist!
 */
router.delete("/delete/:id", validateToken, checkOwnwerId, deleteU);
router.post("/imagen", imagen ,servicioimagenpost);

module.exports = router;
