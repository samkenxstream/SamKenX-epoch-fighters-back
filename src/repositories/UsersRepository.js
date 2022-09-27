const UserModel = require('../models/User');

class UsersRepository {

  getUserByAddress (address) {
    return UserModel.where().findOne({address}).exec();
  }

  getUserByToken (token) {
    return UserModel.where().findOne({token}).exec();
  }

  getAllUsers () {
    return UserModel.find().exec();
  }

  getUserByToken (token) {
    return UserModel.findOne({token}).exec();
  }

  async updateToken(address, token, expireAt) {
    UserModel.updateOne({address}, {token, expireAt});
  }

  addUser(userData) {
    const newUser = new UserModel(userData);
    newUser.save();
  }
}

module.exports = new UsersRepository();
