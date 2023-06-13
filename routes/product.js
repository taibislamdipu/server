const express = require("express");
const router = express.Router();

const formidable = require("express-formidable");

// middleware
const { requireSingin, isAdmin } = require("../middlewares/auth");
const { create, list, read } = require("../controllers/product");

router.post("/product", requireSingin, isAdmin, formidable(), create); // create a product
router.get("/products", list); // get all products
router.get("/product/:slug", read); // get single product by slug

module.exports = router;
