const { Router } = require("express");

const {
  getAllRecord,
  createRecord,
  updateRecord,
  deleteRecord,
} = require("../controllers/record-controller");
const { auth } = require("../middlewares/auth");
const router = Router();

router.route("/").get(auth, getAllRecord).post(auth, createRecord);
router.route("/:id").put(updateRecord).delete(deleteRecord);

module.exports = router;
