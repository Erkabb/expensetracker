const { Router } = require("express");
const { getAllcategory, createCategory, updCategory, deleteCategory } = require("../controllers/category-controller");
const router = Router();

router.route("/").get(getAllcategory).post(createCategory);
router.route("/:id").put(updCategory).delete(deleteCategory);

module.exports = router;