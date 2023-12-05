import React, { useContext } from "react";
//import UserContext from "../../contexts/UserContext";
import GridColum from "../../components/GridColumn";
import "./ClientPanel.css";
import { deleteTransactionById } from "../../services/TransactionService.js";
import { Link } from "react-router-dom";
import Boton from "../../components/forms/Boton.js";

function Transaction(props) {
  const { data} = props;
  const { namePet, especie, raza, edad, foto, _id } = data;



  return (
    <div className="grid container">
      <GridColum className="headline">
        <p className="from">Nombre Mascota : {namePet}</p>
        <p className="date">especie : {especie}</p>
        <p className="date">Raza : {raza}</p>
        <p className="date">Edad : {edad}</p>
      </GridColum>
      <GridColum className="girl">
        <img src={foto} alt="Foto de la mascota" />

        <Link to={`/mascotas`}>
            {" "}
            <Boton style="fill" onClick={() => deleteTransactionById(_id)}>Eliminar</Boton>
        </Link>
        <Link to={`/edit/${_id}`}>
            {" "}
            <Boton style="fill">Actualizar</Boton>
        </Link>
      </GridColum>

    </div>
  );
}

export default Transaction;


