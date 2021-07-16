import mongoose from "mongoose";
const { Schema } = mongoose;

const wineSchema = new Schema(
  {
    grape: { type: String, required: true },
    name: { type: String, required: true },
    year: { type: mongoose.Decimal128, required: true },
  },
  {
    timestamps: true,
  }
);

const Wine = mongoose.model(`wine`, wineSchema);
export default Wine;
