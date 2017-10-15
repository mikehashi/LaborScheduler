const router = require("express").Router();
const empController = require("../../controllers/empController");

// Matches with "/api/books"
router.route("/emps")
  .get(empController.findAll)
  .post(empController.create);

// Matches with "/api/books/:id"
router
  .route("/emps/:id")
  .get(empController.findById)
  .put(empController.update)
  .delete(empController.remove);

module.exports = router;
