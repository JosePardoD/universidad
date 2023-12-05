import mongoose from "mongoose";

const mascotasShema = new mongoose.Schema({
  namePet: { type: String},
  especie: { type: String},
  raza: {type: String},
  edad: {type: Number},
  foto:{type: String},
});

export default mongoose.model("mascotas", mascotasShema);