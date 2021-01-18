import mongoose from "mongoose";

export default async function () {
  await mongoose.connect("mongodb://localhost:27017/villa_bia", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("Mongo Connected!");
}
