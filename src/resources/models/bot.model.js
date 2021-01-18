import * as mongoose from "mongoose";
import * as uuid from "uuid";

const botSchema = mongoose.Schema({
  id: {
    type: String,
    default: uuid.v4,
  },
  name: String,
});

const Bot = mongoose.model("Bot", botSchema, "bots");

export default Bot
