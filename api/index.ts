import cors from "cors";
import express from "express";
import router from "./controller";
import env from "./env";

const server = express();

server.listen(env.PORT, () => {
  console.log("Server is running");
});

server.use(cors());
server.use(express.json());

server.get("/", (req, res) => {
  res.send("Bem vindo a api!!");
});
server.use("/user", router.user);
