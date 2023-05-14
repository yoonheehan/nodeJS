import http from "http";
import express from "express";

const app = express();

app.use((req, res, next) => {
  console.log("Ind the middleware");
  next();
});

app.use((req, res, next) => {
  console.log("In another middleware");
});

const server = http.createServer(app);

server.listen(3000);
