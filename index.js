import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import router from "./frontend/src/index.js";
import connectMongoDB from "./backend/config/database.js";
dotenv.config();
const app = express();
app.use(cors());
app.use(
    express.urlencoded({
        extended: true,
    })
);
app.use(express.json());

const port = process.env.PORT || 3000;
const DB_URI = process.env.DB_URI || "mongodb://localhost:27017";
connectMongoDB(DB_URI);

app.use("/",router);

app.listen(port, () => console.log("Server is running with " + port))
