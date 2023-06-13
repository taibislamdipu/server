const express = require("express");
const router = express.Router();

const formidable = require("express-formidable");

// middleware
const { requireSingin, isAdmin } = require("../middlewares/auth");
const { create, list, read, photo, remove } = require("../controllers/product");

router.post("/product", requireSingin, isAdmin, formidable(), create); // create a product
router.get("/products", list); // get all products
router.get("/product/:slug", read); // get single product by slug
router.get("/product/photo/:productId", photo);
router.delete("/product/:productId", requireSingin, isAdmin, remove);
// router.put("/product/:productId", requireSingin, isAdmin, formidable(), update);
// router.post("/filtered-products", filteredProducts);
// router.get("/products-count", productsCount);
// router.get("/list-products/:page", listProducts);
// router.get("/products/search/:keyword", productsSearch);
// router.get("/related-products/:productId/:categoryId", relatedProducts);// get single product by slug

module.exports = router;
