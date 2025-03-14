const Product = require("../models/product-model");

const postRouter = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

const getRouter =  async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    // console.log(error);
    res.status(500).json({ message: error.message });
  }
}

const getRouterName =  async (req, res) => {
  try {
    const { name } = req.params;
    const product = await Product.find({ name: name }, { name: 1 });
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json(error);
  }
}

const putId = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body);

    if (!product) {
      console.error(error);
      return res.status(404).json({ message: "Product not found" });
    }

    const updatedProduct = await Product.findById(id);
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

const deleteProduct = async (req, res) => {
    try {
      const { id } = req.params;
  
      const products = await Product.findByIdAndDelete(id);
  
      if (!Product) {
        return res.status(404).json("product not found.");
      }
  
      res.status(200).json({ message: "product deleted succesfully" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  module.exports = {
    postRouter,
    getRouter,
    getRouterName,
    putId,
    deleteProduct
  }