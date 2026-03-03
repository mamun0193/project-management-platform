import express from "express";
import cors from "cors";
import healthCheckRouter from "./routes/health.routes.js";

const app = express();

app.use(cors({
  origin: process.env.CORS_ORIGIN?.split(",") || "http://localhost:5173",
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE","PATCH", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With", "Accept"],
}));
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: "true", limit: "16kb" }));
app.use(express.static("public"))

// All routes will come up here
app.use("/api/v1/health", healthCheckRouter);

app.get("/", (req, res) => {
  res.send("Hello World");
});

export default app;
