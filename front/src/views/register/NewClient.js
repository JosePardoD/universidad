import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/Logo";
import Boton from "../../components/forms/Boton.js";
import Input from "../../components/forms/Input";
import { register } from "../../services/AuthService.js";

import "./NewClient.css";

function Login() {
  const [userInput, setUserInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [confirmPasswordInput, setConfirmPasswordInput] = useState("");
  const navigate = useNavigate();

  async function onButtonClick(event) {
    event.preventDefault();

    if (passwordInput !== confirmPasswordInput) {
      return alert("las contraseñas no coinciden");
    }

    const res = await register(userInput, passwordInput);
    console.log(res);
  }

  async function comeBackButton(event) {
    event.preventDefault();
    navigate("/");
  } 

  return (
    <section className="login">
      <div className="container">
        <Link to="/">
          <Logo showText={false} />
        </Link>
        <h1 className="title">
          Registrate en <b>PetHome</b>
        </h1>
        <form className="flex card form">
          <Input>Nombre</Input>
          <Input onChange={(e) => setUserInput(e.target.value)}>UserName</Input>
          <Input
            type="password"
            onChange={(e) => setPasswordInput(e.target.value)}
          >
            Contraseña
          </Input>
          <Input
            type="password"
            onChange={(e) => setConfirmPasswordInput(e.target.value)}
          >
            Confirmar Contraseña
          </Input>
          <Input>Email</Input>
          <Input>Edad</Input>
          <Boton onClick={onButtonClick} style="fill">Registrarme</Boton>
        </form>
        <div className="register card">
          <p>
            ¿Ya tienes cuenta?{" "}
            <Link to="/login">
              <b>Inicia Sesión</b>
            </Link>
            <br></br>
            <br></br>
            <br></br>
            <Boton onClick={comeBackButton} style="wire">
              Home
            </Boton>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Login;