const router = require("express").Router();
// const Product = require("./models/product-model");
const {getRouter, postRouter, getRouterName, putId, deleteProduct} = require("../controllers/productControllers");

// const router = require("")

router.post("/", postRouter);

router.get("/", getRouter);

router.get("/:name", getRouterName);

router.put("/:id", putId);

//delete product
router.delete("/:id", deleteProduct);


module.exports = router;