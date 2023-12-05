import React, { useEffect, useState } from "react";
import ShowPalcos from "./ShowPalcos";
import "./BoxesPanel.css";
import { useParams } from "react-router-dom";
import Input from "../../components/forms/Input";
import Boton from "../../components/forms/Boton";
import { updateTransaction } from "../../services/TransactionService";
import { useNavigate } from "react-router-dom";
import { createMascota } from "../../services/TransactionService";



function CreateM() {

  const [namepetInput, setNamepetInput] = useState("");
  const [especieInput, setEspecieInput] = useState("");
  const [razaInput, setRazaInput] = useState("");
  const [edadInput, setEdadInput] = useState("");
  const [fotoInput, setFotoInput] = useState("");
  const navigate = useNavigate();

  async function onButtonClick(event) {
    event.preventDefault();

    const res = await createMascota(namepetInput, especieInput,razaInput,edadInput,fotoInput);
    console.log(res);
  }

  async function comeBackButton(event) {
    event.preventDefault();
    navigate("/");
  } 

  return (
    <section className="login">
      <div className="container">
        <h1>Crear Mascota :</h1>
        <form className="flex card form">
          <Input
            onChange={(e) => setNamepetInput(e.target.value)}
          >
            Nombre Mascota
          </Input>
          <Input
            onChange={(e) => setEspecieInput(e.target.value)}
          >
            Especie
          </Input>
          <Input
            onChange={(e) => setRazaInput(e.target.value)}
          >
            Raza
          </Input>
          <Input
            onChange={(e) => setEdadInput(e.target.value)}
          >
            Edad
          </Input>
          <Input
            onChange={(e) => setFotoInput(e.target.value)}
          >
            Foto Mascota
          </Input>
          <Boton onClick={onButtonClick} style="fill">
            Registrar Mascota
          </Boton>
        </form>
      </div>
    </section>
  );
}

export default CreateM;
