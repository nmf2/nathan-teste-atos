import setupDatabase from "@/config/database";
import express from "express";
import routes from "./routes";
import * as bodyParser from "body-parser";
import { middleware as ValidatorOpenApi } from "express-openapi-validator";
import path from "path";
// import swaggerUi from "swagger-ui-express";
import fs from 'fs'
import YAML from "yamljs";

const app = express();
const port = process.env.PORT || 3000;

const databaseConnected = setupDatabase();

app.use(bodyParser.json({ limit: process.env.REQUEST_LIMIT || "800kb" }));
app.use(
  bodyParser.urlencoded({
    extended: true,
    limit: process.env.REQUEST_LIMIT || "800kb",
  })
);

const apiSpec = path.join(__dirname, "./api.yaml");
console.log(`Spec`)
const swaggerDocument = YAML.load(apiSpec);

app.use(express.static(`public`))
fs.writeFileSync(apiSpec, JSON.stringify(swaggerDocument))
app.use(process.env.OPENAPI_SPEC || '/spec', express.static(apiSpec))

app.use(
  ValidatorOpenApi({
    apiSpec,
    validateRequests: true,
  }),
  (err, req, res, next) => {
    res.status(err.status || 500).json({
      message: err.message,
      errors: err.errors,
    });
  }
);
// app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument, {  }));

routes(app);

databaseConnected
  .then(() => {
    app.listen(port, () => {
      console.log(`Server up and runnig on port ${port}`);
    });
  })
  .catch(() => {
    console.log(`Check DB connection and restart server... `);
  });
