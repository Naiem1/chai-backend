import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
  path: "./env",
});

connectDB();






/** DB connection simple approach
 import express from "express";
const app = express();

// function connectDB () { };

// Another approach IIF
(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_name}`);
    app.on("error", (error) => {
      console.log("Application not able talk to Database", error);
      throw error;
    });

    app.listen(process.env.PORT, () => {
      console.log(`App is listening on port ${process.env.PORT}`);
    });

  } catch (error) {
    console.log("ERROR: ", error);
    throw error;
  }
})();
*/
