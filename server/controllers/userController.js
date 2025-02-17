const ApiError = require("../error/ApiError");
const bcrypt = require("bcrypt");
const { User, Balance } = require("../models/model");
const jwt = require("jsonwebtoken");

const generateJwt = (id, email) => {
  return jwt.sign({ id, email }, process.env.SECRET_KEY, {
    expiresIn: "24h",
  });
};

class UserController {
  async registration(req, res, next) {
    const { email, password } = req.body;
    if (!email || !password) {
      return next(ApiError.badRequest("Некорректный email или password"));
    }
    const candidate = await User.findOne({ where: { email } });
    if (candidate) {
      return next(
        ApiError.badRequest("Пользователь с таким email уже существует")
      );
    }
    const hashPassword = await bcrypt.hash(password, 5);
    const user = await User.create({ email, password: hashPassword });
    const balance = await Balance.create({ userId: user.id });
    const token = generateJwt(user.id, user.email);
    return res.json({ token });
  }

  async login(req, res, next) {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return next(ApiError.internal("Пользователь с таким именем не найден"));
    }
    let comparePassword = bcrypt.compareSync(password, user.password);
    if (!comparePassword) {
      return next(ApiError.internal("Неправильный пароль"));
    }
    const token = generateJwt(user.id, user.email);
    return res.json({ token, user });
  }

  async check(req, res, next) {
    // const { userId, balance } = req.body;
    const user = await User.findOne({ where: { id: req.user.id } });
    console.log(req.user, req.user.id);
    const token = generateJwt(req.user.id, req.user.email);
    return res.json({ token, user });
  }
}

module.exports = new UserController();
