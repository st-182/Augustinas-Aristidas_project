import mongoose from "mongoose";
const { Schema } = mongoose;

const completedTableSchema = new Schema(
  {
    image: { type: String, required: true },
    name: { type: String, required: true },
    sizes: { type: String, required: true },
    color: { type: String, required: true },
    material: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Completed_Table = mongoose.model(`completed_table`, completedTableSchema);
export default Completed_Table;
