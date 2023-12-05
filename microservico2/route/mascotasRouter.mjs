import  express  from "express";
import { createMascota ,readMascotas,deleteMascotas,readMascotasid, updateMascotas } from "../controller/mascotasController.mjs";

const mascotassRouter = express.Router();

mascotassRouter.post("/", createMascota);
mascotassRouter.get("/", readMascotas);
mascotassRouter.get("/:id", readMascotasid);
mascotassRouter.delete("/:id", deleteMascotas);
mascotassRouter.put("/:id", updateMascotas);
export default mascotassRouter;