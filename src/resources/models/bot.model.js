import * as mongoose from "mongoose";
import * as uuid from "uuid";

const botSchema = new mongoose.Schema({
  _id: {
    type: String,
    default: uuid.v4,
  },
  name: String,
});

const transform = (doc, ret) => {
  const { _id, ...data } = ret;
  return { ...data, id: _id };
};

botSchema.set("toObject", {
  transform,
});

botSchema.set("toJSON", {
  transform,
});

const Bot = mongoose.model("Bot", botSchema, "bots");

export default Bot;
