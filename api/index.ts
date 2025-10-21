import cors from "cors";
import express from "express";
import router from "./routes";

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

server.use("/skill", router.skills);
server.use("/user", router.user);
server.use("/profile-summary", router.profileSummary);
server.use("/experience", router.experience);
server.use("/address", router.address);