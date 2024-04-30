const posModel = require("../model/user");

const getInfo = async (req) => {
  return await posModel.userList(req);
};

module.exports = {
  getInfo,
};
