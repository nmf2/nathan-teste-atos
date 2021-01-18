import botsRouter from "./resources/bots/router";

/**
 * @param {import("express").Application} app
 */
export default function router(app) {
  app.use("/bots", /* Mayber add some middlewares ,*/ botsRouter);
}
