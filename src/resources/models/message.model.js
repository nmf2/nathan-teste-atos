import * as mongoose from "mongoose";
import * as uuid from "uuid";

const messageSchema = new mongoose.Schema({
  _id: {
    type: String,
    default: uuid.v4,
  },
  conversationId: {
    type: String,
    default: uuid.v4
  },
  timestamp: {
    type: Date
  },
  from: {
    type: String
  },
  to: {
    type: String
  },
  text: {
    type: String
  },
});

const transform = (doc, ret) => {
  const { _id, ...data } = ret;
  return { ...data, id: _id };
};

messageSchema.set("toObject", {
  transform,
});

messageSchema.set("toJSON", {
  transform,
});

const Message = mongoose.model("Message", messageSchema, "messages");

export default Message;
