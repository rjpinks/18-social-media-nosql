const { User } = require('../models');

module.exports = {
  async getUsers(req, res) {
    try {
      const users = await User.find();
      res.json(users);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // create a new user
  async createUser(req, res) {
    try {
      const dbUserData = await User.create(req.body);
      res.json(dbUserData);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Update a user
  async updateUser(req, res) {
    try {
      const user = await User.findOneAndUpdate(
        { _id: req.body.userId },
        { $set: req.body },
        { runValidators: true, new: true }
      );

      if (!user) {
        res.status(404).json({ message: 'No user with this id!' });
      }

      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
    // Delete a user
    async deleteUser(req, res) {
        try {
          const user = await User.findOneAndDelete({ _id: req.body.userId });
    
          if (!user) {
            res.status(404).json({ message: 'No user with that ID' });
          }
    
          res.json({ message: 'User deleted!' });
        } catch (err) {
          res.status(500).json(err);
        }
      },
};
