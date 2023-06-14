import express from "express";
import router from "./routes/index.routes";
import morgan from "morgan";
import cors from "cors";

import "./db";

const server = express();

server.use(express.json());
server.use(morgan("dev"));
cors();

// Middleware para routas
server.use("/api", router);

// Capatador de errores.
server.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

export default server;
