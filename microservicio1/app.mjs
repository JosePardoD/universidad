import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import apiRouter from "./route/apiRouter.mjs";
import usuarioRouter from "./route/usuarioRouter.mjs";

const app = express();
const port = process.env.PORT || 5001;

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);


app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Algo salió mal!");
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Rutas adicionales
app.get('/', function(req, res) {
  res.status(200).send({
    message: 'GET Home route working fine!'
  });
});

app.listen(port, function() {
  console.log(`Servidor levantado en http://localhost:${port}`);
  console.log('Rutas definidas:');
  console.log('  [GET] http://localhost:3525/');
});

mongoose.connect("mongodb+srv://DBAppBoxes:usuario@dbappboxes.ozqotmo.mongodb.net/boxes-app?retryWrites=true&w=majority");

mongoose.connection.on("connected", () => {
  console.log("Conectado a la base de datos");
});

mongoose.connection.on("error", (err) => {
  console.error("Error de conexión a la base de datos:", err.message);
});


app.use(express.json());
app.use("/api", apiRouter);
app.use("/registro", usuarioRouter);