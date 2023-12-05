import usuarioModel from "../model/usuarioModel.mjs";
import { genToken } from "./tokenGeneration.mjs";

export async function login(req, res) {
  try {
    const { username, password } = req.headers;

    const document = await usuarioModel.findOne({ username: username });

    // Comparar contraseñas en texto plano (NO RECOMENDADO)
    if (document && password === document.password) {
      const token = genToken({ username });
      res.status(200).json({ token });
    } else {
      res.sendStatus(401);
    }
  } catch (error) {
    res.status(401).json(error.message);
  }
}