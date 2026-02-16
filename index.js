import exprss from "express";
import dotenv from "dotenv";

dotenv.config();

const app = exprss();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server running on http://localhost:${process.env.PORT || 3000}`);
});
