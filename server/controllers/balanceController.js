const { Balance } = require("../models/model");
const ApiError = require("../error/ApiError");

class BalanceController {
  async getAll(req, res) {
    const balanceUser = await Balance.findAll();
    return res.json(balanceUser);
  }

  async getOne(req, res) {
    const { userId } = req.query;
    const balanceUser = await Balance.findOne({
      where: { userId },
    });
    return res.json(balanceUser);
  }

  async changeOne(req, res) {
    const { userId, balance } = req.body;
    const balanceUser = await Balance.findOne({
      where: { userId: userId },
    });
    balanceUser.update({ balance: balance });
    return res.json(balanceUser);
  }
}

module.exports = new BalanceController();
