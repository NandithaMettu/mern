
const mongoose = require("mongoose");

const conn = async (req, res) => {
  try {
    await mongoose
      .connect(
        "mongodb+srv://mettunanditha9959:nanditha9959@cluster0.beozapf.mongodb.net/"
      )
      .then(() => {
        console.log("Connected");
      });
  } catch (error) {
    console.log(error);
  }
};
conn();
