import cors from "cors";
import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import mongoose from "mongoose";

import Completed_Table from "./models/completedTableModel.js";
import {
  getCompletedTables,
  getCompletedTablesById,
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

app.get(`/`, getCompletedTables);
app.get(`/completed/:id`, getCompletedTablesById);
// app.put(`/`, getCompletedTables);
// app.push(`/`, getCompletedTables);
// app.delete(`/`, getCompletedTables);
