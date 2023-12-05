import React from "react";
import Boton from "../../components/forms/Boton";
import "./Home.css";
import pets from "../../assets/pets.png";
import GridColum from "../../components/GridColumn";
import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="home">
      <div className="grid container">
        <GridColum className="headline">
          <h2 className="title">Nos esforzamos por descubrir..</h2>
          <br></br>
          <h1 className="content">El rincón perfecto para tus adorables compañeros.</h1>
          <p className="supporting">
            Porque siempre importa desde donde compartes los momentos más tiernos.{" "}
            <b>Tu Eliges!</b>
          </p>
          <Link to="/register">
            {" "}
            <Boton style="fill">Quiero el mejor lugar</Boton>
          </Link>
        </GridColum>
        <GridColum className="girl">
          <img src={pets}></img>
        </GridColum>
      </div>
    </section>
  );
}

export default Home;
