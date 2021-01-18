import mongoose from "mongoose";

export default async function () {
  console.log(`Connecting to db`);
  await mongoose.connect(
    `mongodb://${process.env.MONGO_URL || "mongo"}:27017/villa_bia`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );
  console.log("Mongo Connected!");
}
