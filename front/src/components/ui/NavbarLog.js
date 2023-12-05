import React from "react";
import { Link, Outlet } from "react-router-dom";
import Logo from "../../assets/Logo";
import Boton from "../forms/Boton";
import "./NavbarLog.css";

function NavbarLog() {
  return (
    <>
      <nav className="navbar">
        <ul className="menu flex container">
          <li>
            <Link to="/">
              <Logo size="55px" showText={true} />
            </Link>
          </li>
          <li>
            <Link to="/Mascotas">
              <b>Mascotas</b>
            </Link>
          </li>
          <li>
            <Link to="/create">
              <b>Agregar Mascota</b>
            </Link>
          </li>
          {/*<li>
            <Link to="/clients">
              <b>Clientes</b>
            </Link>
          </li>
          <li>
            <Link to="/clients/new">
              <b>Nuevo Cliente</b>
            </Link>
          </li>*/}
          <li>
            <Link to="/login">
              <Boton style="wire">Log Out</Boton>
            </Link>
          </li>
        </ul>
      </nav>

      <Outlet></Outlet>
    </>
  );
}

export default NavbarLog;
