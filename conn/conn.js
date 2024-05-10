
const mongoose = require("mongoose");

const conn = async (req, res) => {
  try {
    await mongoose
      .connect(
MONGODB_URI
      )
      .then(() => {
        console.log("Connected");
      });
  } catch (error) {
    console.log(error);
  }
};
conn();
