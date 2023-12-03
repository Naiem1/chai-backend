import dotenv from "dotenv";
import { app } from "./app.js";
import connectDB from "./db/index.js";

dotenv.config({
  path: "./env",
});

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`⚙️  Server is running at Port : ${process.env.PORT}`);
    });

    app.on("error", (error) => {
      console.log("🌐 SERVER ERROR:", error);
      throw error;
    });
  })
  .catch((err) => {
    console.log("MONGO DB CONNECTION FAILED!!!", err);
  });

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
