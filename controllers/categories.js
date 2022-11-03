const createHttpError = require("http-errors");
const { catchAsync } = require("../helpers/catchAsync");
const { Category } = require("../database/models");
const { endpointResponse } = require("../helpers/success");

module.exports = {
  getCategories: catchAsync(async (_req, res, next) => {
    try {
      const categories = await Category.findAll();
      endpointResponse({
        res,
        message: "All Categories",
        body: categories,
      });
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error finding categories] - [Category - findAll]: ${error.message} `
      );
      next(httpError);
    }
  }),
  createCategory: catchAsync(async (req, res, next) => {
    const { name, description } = req.body;

    try {
      const newCategory = await Category.create({ name, description });
      endpointResponse({
        res,
        status: 201,
        message: "Category created successfully",
        body: newCategory,
      });
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error creating category] - [Category - create]: ${error.message} `
      );
      next(httpError);
    }
  }),
  getCategoryById: catchAsync(async (req, res, next) => {
    const { id } = req.params;
    try {
      const category = await Category.findByPk(id);
      if (!category) throw Error("The category doesn't exist!");
      endpointResponse({
        res,
        message: `Category #${id}`,
        body: category,
      });
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error finding category #${id}] - [Category - findById]: ${error.message} `
      );
      next(httpError);
    }
  }),
  updateCategory: catchAsync(async (req, res, next) => {
    const { id } = req.params;
    const { name, description } = req.body;
    try {
      const category = await Category.findByPk(id);
      if (!category) throw Error("The category doesn't exist!");

      category.update({ name, description });
      await category.save();

      endpointResponse({
        res,
        status: 201,    
        message: `Category #${id} updated!`,
        body: category,
      });
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error updating category #${id}] - [Category - update]: ${error.message} `
      );
      next(httpError);
    }
  }),
  deleteCategory: catchAsync(async (req, res, next) => {
    const { id } = req.params;
    try {
      const category = await Category.findByPk(id);
      if (!category) throw Error("The category doesn't exist!");
      await category.destroy();
      endpointResponse({
        res,
        message: `Category #${id} deleted!`,
        body: category,
      });
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error deleting category #${id}] - [Category - delete]: ${error.message} `
      );
      next(httpError);
    }
  }),
};
