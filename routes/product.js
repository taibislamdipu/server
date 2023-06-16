const express = require("express");
const router = express.Router();

const formidable = require("express-formidable");

// middleware
const { requireSignIn, isAdmin } = require("../middlewares/auth");
const {
  create,
  list,
  read,
  photo,
  remove,
  update,
  filteredProducts,
  productsCount,
  listProducts,
  productsSearch,
  relatedProducts,
} = require("../controllers/product");

router.post("/product", requireSignIn, isAdmin, formidable(), create); // create a product
router.get("/products", list); // get all products
router.get("/product/:slug", read); // get single product by slug
router.get("/product/photo/:productId", photo);
router.delete("/product/:productId", requireSignIn, isAdmin, remove);
router.put("/product/:productId", requireSignIn, isAdmin, formidable(), update);
router.post("/filtered-products", filteredProducts);
router.get("/products-count", productsCount);
router.get("/list-products/:page", listProducts);
router.get("/products/search/:keyword", productsSearch);
router.get("/related-products/:productId/:categoryId", relatedProducts);

module.exports = router;
