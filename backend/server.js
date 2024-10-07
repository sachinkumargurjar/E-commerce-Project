import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";

import { productRoutes } from "./routes/productRoutes.js";
import { userRoutes } from "./routes/userRoutes.js";

dotenv.config();

// sg164055
// 8963091958

const app = express();

app.use(express.json());
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/product", productRoutes);
app.use("/user",userRoutes)

const PORT = process.env.PORT || 5000;
const CONNECTION_URL = process.env.CONNECTION_URL;

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server Running on Port: http://localhost:${PORT}`);
      console.log(CONNECTION_URL);
    });
  })
  .catch((error) => {
    console.log(`${error} did not connect`);
  });
