import mongoose from "mongoose";

const userShema = new mongoose.Schema({
  name: { type: String},
  username: {type: String},
  password: { type: String},
  email: { type: String },
  age: {type: Number},
});

export default mongoose.model("usuarios", userShema);