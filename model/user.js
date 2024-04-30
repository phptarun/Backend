const sql = require("Shared-orm-library");

const setSettings = async (req) => {
  let data = await sql.getSettings();
  console.log("setSettings ", data);
};

const userList = async (req) => {
  let data = await sql.listuser();
  console.log("userList ", data);
  return data;
};

module.exports = {
  setSettings,
  userList,
};

