const express = require("express");
const router = express.Router();

// middleware
const { requireSignIn, isAdmin } = require("../middlewares/auth");
const {
  create,
  update,
  remove,
  list,
  read,
} = require("../controllers/category");

router.post("/category", requireSignIn, isAdmin, create);
router.put("/category/:categoryId", requireSignIn, isAdmin, update);
router.delete("/category/:categoryId", requireSignIn, isAdmin, remove);
router.get("/category", list);
router.get("/category/:slug", read);

module.exports = router;
