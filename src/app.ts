import express from "express";
import cors from "cors";
import { bfhlRouter } from "./routes/bfhl.route";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

// define exp app
const app = express();

app.use(express.json());
app.use(cors());

app.use("/bfhl", bfhlRouter);

app.get("/", (req, res) => {
  res.status(200).send("API is running. Use the /bfhl POST endpoint.");
});

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "My API",
      version: "1.0.0",
      description: "API documentation",
    },
    servers: [
      {
        url: "https://bajaj.subhadeep.xyz",
      },
    ],
  },
  apis: ["./src/routes/*.ts"],
};
const swaggerSpec = swaggerJSDoc(swaggerOptions);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

export default app;
