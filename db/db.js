const mongoose = require("mongoose");

const connect = async () => {
  await mongoose
    .connect("mongodb+srv://2111981282:debajyoti@cluster0.5uxspoe.mongodb.net/Quiz?retryWrites=true&w=majority")
    .then(() => {
      console.log("Database connected 🫙 🫙 🫙");
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = connect;
