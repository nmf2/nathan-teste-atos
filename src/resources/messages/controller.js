import Message from "../../models/message.model";

class Controller {
  /**
   *
   * @param {import("express").Request} req
   * @param {import("express").Response} res
   */
  async list(req, res) {
    try {
      const query = req.query;
      const messsages = await Message.find(query).exec();
      res.status(200).send(messsages);
    } catch (err) {
      console.error(err);
      res.sendStatus(500);
    }
  }

    /**
   *
   * @param {import("express").Request} req
   * @param {import("express").Response} res
   */
  async listOne(req, res) {
    try {
      const id = req.params.id;
      const message = await Message.findById(id).exec();
      if (message !== null)  {
        res.status(200).send(message);
      } else {
        res.sendStatus(404);
      }
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
    const messageData = req.body;
    try {
      const message = new Message(messageData);
      await message.save();
      res.status(200).send({ id: message.get("id") });
    } catch (err) {
      console.error(err);
      res.sendStatus(500);
    }
  }
}

export default new Controller();
