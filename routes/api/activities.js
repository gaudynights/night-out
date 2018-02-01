const router = require("express").Router();
const activitiesController = require("../../controllers/activitiesController");

// Matches with "/api/activities"
router.route("/")
  .get(activitiesController.findAll)
  .post(activitiesController.create);

// Matches with "/api/activities/:id"
router
  .route("/:id")
  .get(activitiesController.findById)
  .put(activitiesController.update)
  .delete(activitiesController.remove);

// Matches with "/api/activities/:nightID"
router
  .route("/:nightID")
  .post(activitiesController.findNight);

module.exports = router;
