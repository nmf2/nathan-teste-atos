import setupDatabase from "@/config/database";
import express from "express";
import routes from "./routes";
import * as bodyParser from "body-parser";
// import { middleware as ValidatorOpenApi } from "express-openapi-validator";

const app = express();
const port = process.env.PORT || 3000;

routes(app);

const databaseConnected = setupDatabase();

app.use(bodyParser.json({ limit: process.env.REQUEST_LIMIT || "800kb" }));
app.use(
  bodyParser.urlencoded({
    extended: true,
    limit: process.env.REQUEST_LIMIT || "800kb",
  })
);

// app.use(Express.static(`${root}/public`));

// const apiSpec = path.join(__dirname, "api.yaml");
// app.use(process.env.OPENAPI_SPEC || '/spec', Express.static(apiSpec))

// app.use(
//   ValidatorOpenApi({
//     apiSpec,
//   })
// );

databaseConnected
  .then(() => {
    app.listen(port, () => {
      console.log(`Server up and runnig on port ${port}`);
    });
  })
  .catch(() => {
    console.log(`Check DB connection and restart server... `);
  });
