import Bot from "../models/bot.model";

class Controller {
  /**
   *
   * @param {import("express").Request} req
   * @param {import("express").Response} res
   */
  async list(req, res) {
    try {
      const bots = await Bot.find().select("name").exec();
      res.status(200).send(bots);
    } catch (err) {
      console.log(err);
      res.sendStatus(500);
    }
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
