

class Controller {
  /**
   * 
   * @param {import("express").Request} req 
   * @param {import("express").Response} res 
   */
  list(req, res) {
    res.status(200).send("What a beautiful world.")
  }
}

export default new Controller()