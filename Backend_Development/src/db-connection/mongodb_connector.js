const mongoose = require("mongoose");

// DB Connection
const DatabaseConnector = async () => {
  await mongoose.connect(process.env.MONGODB_URL);
  console.log("MongoDB Database is connected 🤖.");
};

module.exports = DatabaseConnector;
