import express from "express";
import cors from "cors";
import contactRoute from "./routes/contact.js";
import dotenv from "dotenv";
// import path from "path";
dotenv.config();

const app = express();
// const __dirname = path.resolve();

app.use(cors());
app.use(express.json());
app.use("/api", contactRoute);

// if (process.env.NODE_ENV === "production") {
//   app.use(express.static(path.join(__dirname, "/frontend/dist")));
//   app.get("*", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
//   });
// }

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
