const express = require("express");
const router = express.Router();

// controllers
const { register, login } = require("../controllers/auth.js");
const { requireSingin, isAdmin } = require("../middlewares/auth.js");

router.post("/register", register);
router.post("/login", login);

router.get("/auth-check", requireSingin, (req, res) => {
  res.json({ ok: true });
});
router.get("/is-admin", requireSingin, isAdmin, (req, res) => {
  res.json({ ok: true });
});

module.exports = router;
