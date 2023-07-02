const Router = require("express");
const router = new Router();
const balanceController = require("../controllers/balanceController");

router.put("/updBalance", balanceController.changeOne);
router.get("/", balanceController.getAll);
router.get("/oneBalance", balanceController.getOne);

module.exports = router;
