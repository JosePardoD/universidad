import React from "react";

import "./BoxesPanel.css";

function ShowPalcos(props) {
  const { data,onDelete } = props;
  const { namePet, especie, raza, edad, foto,_id } = data;



  return (
    <div className="transaction grid">
      <p className="from">Id Palco : {namePet}</p>
      <p className="date">Capacidad : {especie}</p>
      <p className="date">Descripción : {raza}</p>
      <p className="date">Locación : {edad}</p>
      <p className="date">Categoria : {foto}</p>
      <button onClick={() => onDelete({_id})}>Eliminar</button>
      
    </div>
  );
}

export default ShowPalcos;
