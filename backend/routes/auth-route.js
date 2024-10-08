const { Router } = require("express");
const { signup, signin } = require("../controllers/auth-controller");
const router = Router();

router.route("/signup").post(signup);
router.route("/signin").post(signin);

module.exports = router;
