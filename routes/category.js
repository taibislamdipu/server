const express = require("express");
const router = express.Router();

// middleware
const { requireSingin, isAdmin } = require("../middlewares/auth");
const {
  create,
  update,
  remove,
  list,
  read,
} = require("../controllers/category");

router.post("/category", requireSingin, isAdmin, create);
router.put("/category/:categoryId", requireSingin, isAdmin, update);
router.delete("/category/:categoryId", requireSingin, isAdmin, remove);
router.get("/category", list);
router.get("/category/:slug", read);

module.exports = router;
