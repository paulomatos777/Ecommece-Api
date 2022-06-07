const User = require("../models/User");

const UserController = {
  async createUser(req, res) {
    const body = req.body;

    try {
      const newUser = await User.create(body.data);
      return res.status(200).json(newUser);
    } catch (err) {
      return res.status(400).json(err);
    }
  },
  async getUsers(res) {
    try {
      const users = await User.find();
      return res.status(200).json(users);
    } catch (err) {
      return res.status(400).json(err);
    }
  },

  async getUserById(res) {
    const { user_id } = req.params;
    try {
      const user = await User.findById(user_id);
      return res.status(200).json(users);
    } catch (err) {
      return res.status(400).json(err);
    }
  },
};

module.exports = UserController;
