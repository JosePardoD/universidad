import React, { useEffect, useState } from "react";
import ShowPalcos from "./ShowPalcos";
import "./BoxesPanel.css";
import { useParams } from "react-router-dom";
import Input from "../../components/forms/Input";
import Boton from "../../components/forms/Boton";
import { updateTransaction } from "../../services/TransactionService";
import { useNavigate } from "react-router-dom";
function BoxesPanel() {
  const { id } = useParams();

  const [namepetInput, setNamepetInput] = useState("");
  const [especieInput, setEspecieInput] = useState("");
  const [razaInput, setRazaInput] = useState("");
  const [edadInput, setEdadInput] = useState("");
  const [fotoInput, setFotoInput] = useState("");
  const navigate = useNavigate();
  const [documents, setDocuments] = useState({
    namePet: "",
    especie: "",
    raza: "",
    edad: "",
    foto: "",
  });

  async function fetchData() {
    try {
      const res = await fetch(`http://localhost:6001/api/mascotas/${id}`);
      if (!res.ok) {
        throw new Error(`Error al obtener datos: ${res.statusText}`);
      }

      const fetchedData = await res.json();
      setDocuments(fetchedData);
    } catch (error) {
      console.error(error.message);
    }
  }

  async function onButtonClick() {
    const newData = {
      namePet: namepetInput,
      especie: especieInput,
      raza: razaInput,
      foto: fotoInput,
    };


    const res = await updateTransaction();
    console.log(res);
    navigate("/");
  }



  useEffect(() => {
    fetchData();
  }, [id]);

  return (
    <section className="login">
      <div className="container">
        <h1>Actualizar Mascota :</h1>
        <form className="flex card form">
          <Input
            value={namepetInput || documents.namePet}
            type="text"
            onChange={(e) => setNamepetInput(e.target.value)}
          >
            Nombre Mascota
          </Input>
          <Input
            type="text"
            value={especieInput || documents.especie}
            onChange={(e) => setEspecieInput(e.target.value)}
          >
            Especie
          </Input>
          <Input
            type="text"
            value={razaInput || documents.raza}
            onChange={(e) => setRazaInput(e.target.value)}
          >
            Raza
          </Input>
          <Input
            type="text"
            value={edadInput || documents.edad}
            onChange={(e) => setEdadInput(e.target.value)}
          >
            Edad
          </Input>
          <Input
            type="text"
            value={fotoInput || documents.foto}
            onChange={(e) => setFotoInput(e.target.value)}
          >
            Foto Mascota
          </Input>
          <Boton onClick={onButtonClick} style="fill">
            Actualizar Mascota
          </Boton>
        </form>
      </div>
    </section>
  );
}

export default BoxesPanel;
