import express from "express";
import "dotenv/config";
import cors from "cors";
import connectDB from "./config/db.config.js";
// !START BUILDING
// @CONNECT DATABASE
await connectDB();
// @VARIABLES
const app = express();
const port = process.env.PORT || 3001;
// @MIDDLEWARES
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:5173"],
  }),
);
// @ROUTES
app.get("/", (_, res) => {
  res.json({ message: "Nagdista Store Server is Running" });
});
// @LISTEN
app.listen(port, () => {
  console.log(`Server Running On Port: ${port}`);
});
