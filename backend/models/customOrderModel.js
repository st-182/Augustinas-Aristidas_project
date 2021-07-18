import mongoose from "mongoose";
const { Schema } = mongoose;

const customOrderSchema = new Schema(
  {
    name: { type: String, required: true },
    surname: { type: String, required: true },
    email: { type: String, required: true },
    phone_number: { type: String, required: true },
    order_details: { type: String, required: true },
    isDone: { type: String, required: true },
    user_name: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Order_a_Custom_Table = mongoose.model(
  `order_custom_table`,
  customOrderSchema
);
export default Order_a_Custom_Table;
