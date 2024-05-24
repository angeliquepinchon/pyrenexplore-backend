import bodyParser from "body-parser";
import cors from "cors";
import "dotenv/config";
import express from "express";
import http from "http";
import { v1Router } from "./src/routes/router.js";

const app = express();
const port = process.env.PORT || 3000;
const server = http.createServer(app);

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

// parsing JSON data
app.use(bodyParser.json());

server.listen(port, () => {
  console.log(`Server démarré sur le port ${port} `);
});

app.use("/v1", v1Router);
