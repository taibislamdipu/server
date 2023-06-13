const express = require("express");
const router = express.Router();

const formidable = require("express-formidable");

// middleware
const { requireSingin, isAdmin } = require("../middlewares/auth");
const { create } = require("../controllers/product");

router.post("/product", requireSingin, isAdmin, formidable(), create);

module.exports = router;
