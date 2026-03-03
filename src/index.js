import app from "./app.js";
import dotenv from "dotenv";
import connectDB from "./db/connectDB.js";
dotenv.config();
const PORT = process.env.PORT || 3000;
connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running at http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Failed to connect to MongoDB", error);
  });
