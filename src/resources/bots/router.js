import { Router } from "express";
import controller from "./controller";

export default Router({ mergeParams: true })
  .get("/", controller.list)
  .post("/", controller.create)
  .get("/:id", controller.listOne)
  .put("/:id", controller.update)
  .delete("/:id", controller.delete);
