import express from "express";
import usuarioRouter from "./usuarioRouter.mjs";
import { login } from "../modules/authModule.mjs";

const apiRouter = express.Router();
apiRouter.get("/login", login);
apiRouter.use("/usuario", usuarioRouter);
apiRouter.use("/registro", usuarioRouter);

export default apiRouter;
