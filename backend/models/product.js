import mongoose from "mongoose";

const productSchema = mongoose.Schema({
  _id: { type: String, required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  sizes: { type: Array, required: true },
  price: { type: Number, required: true },
});

export default mongoose.model("Product", productSchema);
