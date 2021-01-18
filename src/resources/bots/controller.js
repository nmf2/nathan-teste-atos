import Bot from "../models/bot.model";

class Controller {
  /**
   *
   * @param {import("express").Request} req
   * @param {import("express").Response} res
   */
  list(req, res) {
    res.status(200).send("What a beautiful world.");
  }

  /**
   *
   * @param {import("express").Request} req
   * @param {import("express").Response} res
   */
  async create(req, res) {
    const botData = req.body;
    try {
      const bot = new Bot(botData);
      await bot.save();
      res.status(200).send({ id: bot.get("id") });
    } catch (err) {
      console.log(err);
      res.sendStatus(500);
    }
  }
}

export default new Controller();
