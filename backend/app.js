import cors from "cors";
import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import mongoose from "mongoose";

import {
  getCompletedTables,
  getCompletedTablesById,
  putNewOrder,
  showAllOrders,
} from "./controllers/pages.controller.js";

const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());

// setting up mongoose
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((result) => {
    console.log(`connected to mongoDB`.rainbow);
    app.listen(process.env.PORT, () =>
      //console.log(colors.inverse(`Server started`))
      console.log(
        `Server started`.yellow.underline +
          ` on port ` +
          `${process.env.PORT}`.blue
      )
    );
  });

app.get(`/api/portfolio`, getCompletedTables);
app.get(`/api/portfolio/:id`, getCompletedTablesById);
// app.post(`/api/orders)`, putNewOrder);
app.get(`/api/orders`, showAllOrders);
// app.push(`/`, getCompletedTables);
// app.delete(`/`, getCompletedTables);
