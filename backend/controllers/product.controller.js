import Product from "../models/Product.model.js";
// !GET ALL PRODUCTS
export const getAllProducts = async (_, res, next) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (error) {
    next(error);
  }
};

// !EXAMPLE
export const getProductById = async (req, res, next) => {
  try {
    const { productId } = req.params;
    const product = await Product.findById(productId);
    if (!product) {
      return res.json({ message: "Product not found" });
    }

    res.json(product);
  } catch (error) {
    next(error);
  }
};

// !EXAMPLE
export const example = async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
};
