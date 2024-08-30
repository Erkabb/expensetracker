const { Router } = require("express");
const {
  getAllRecord,
  createRecord,
  updateRecord,
  deleteRecord,
} = require("../controllers/record-controller");
const router = Router();

router.route("/").get(getAllRecord).post(createRecord);
router.route("/:id").put(updateRecord).post(deleteRecord);

module.exports = router;