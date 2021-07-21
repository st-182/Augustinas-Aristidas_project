import mongoose from "mongoose";
const { Schema } = mongoose;

const constructorOrderSchema = new Schema(
  {
    name: { type: String, required: true },
    surname: { type: String, required: true },
    email: { type: String, required: true },
    phone_number: { type: String, required: true },
    table_shape: { type: String, required: true },
    table_length: { type: String },
    table_width: { type: String },
    table_diameter: { type: String },
    table_height: { type: String, required: true },
    table_order_color: { type: String, required: true },
    table_order_material_type: { type: String, required: true },
    table_order_material: { type: String, required: true },
    inProgress: { type: String, required: true },
    isDone: { type: String, required: true },
    user_name: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Order_a_Constructed_Table = mongoose.model(
  `order_constructed_table`,
  constructorOrderSchema
);
export default Order_a_Constructed_Table;
