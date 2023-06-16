const express = require("express");
const router = express.Router();

// controllers
const {
  register,
  login,
  secret,
  updateProfile,
  getOrders,
  allOrders,
} = require("../controllers/auth.js");
const { isAdmin, requireSignIn } = require("../middlewares/auth.js");

router.post("/register", register);
router.post("/login", login);

router.get("/auth-check", requireSignIn, (req, res) => {
  res.json({ ok: true });
});
router.get("/is-admin", requireSignIn, isAdmin, (req, res) => {
  res.json({ ok: true });
});

// testing
router.get("/secret", requireSignIn, isAdmin, secret, (req, res) => {
  res.json({ ok: true });
});

router.put("/profile", requireSignIn, updateProfile);
router.get("/orders", requireSignIn, getOrders);
router.get("/all-orders", requireSignIn, isAdmin, allOrders);

module.exports = router;
