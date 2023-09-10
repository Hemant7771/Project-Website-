const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
      type: String,
       required: true,
    },
    email: {
      type: String,
       required: true,
    },
    phone: {
      type: String,
       required: true,
    },
    subject: {
      type: String,
       required: true,
    },
    message: {
      type: String,
       required: true,
    },
  });
  const userMsg = new mongoose.model("users", userSchema);
  module.exports = userMsg;