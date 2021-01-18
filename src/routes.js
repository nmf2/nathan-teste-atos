import botsRouter from "./resources/bots/router";
import messagesRouter from "./resources/messages/router";

/**
 * @param {import("express").Application} app
 */
export default function router(app) {
  app.use("/bots", /* Mayber add some middlewares ,*/ botsRouter);
  app.use("/messages", /* Mayber add some middlewares ,*/ messagesRouter);
}
