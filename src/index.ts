import express, { Application } from "express";
import appConfig from "./app";
import dbConfig from "../config/db";

const port: number = 2030;

const Server: Application = express();
appConfig(Server);
dbConfig();

Server.listen(port, () => {
  console.log(`server is up on port ${port} `);
});
