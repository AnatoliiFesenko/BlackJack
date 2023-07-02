const Router = require("express");
const router = new Router();
const balanceRouter = require("./balanceRouter");
const userRouter = require("./userRouter");

router.use("/user", userRouter);
router.use("/balances", balanceRouter);

module.exports = router;
