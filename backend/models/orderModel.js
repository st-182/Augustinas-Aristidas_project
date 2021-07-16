import mongoose from "mongoose";
const { Schema } = mongoose;

const orderSchema = new Schema(
  {
    name: { type: String, required: true },
    surname: { type: String, required: true },
    email: { type: String, required: true },
    phone_number: { type: String, required: true },
    table_order_description: { type: String, required: true },
    table_order_sizes: { type: String, required: true },
    table_order_color: { type: String, required: true },
    table_order_materials: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Order_a_Table = mongoose.model(`order_table`, orderSchema);
export default Order_a_Table;
