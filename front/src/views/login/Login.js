import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/Logo";
import Boton from "../../components/forms/Boton";
import Input from "../../components/forms/Input";
import TokenContext from "../../contexts/TokenContext";
import UserContext from "../../contexts/UserContext";
import { login } from "../../services/AuthService.js";
import "./Login.css";

function Login() {
  const { setToken } = useContext(TokenContext);
  const { setUser } = useContext(UserContext);

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  async function onButtonClick(event) {
    event.preventDefault();
    //console.log(username);
    //console.log(password);
    const token = await login(username, password);

    if (token) {
      setToken(token);
      setUser({ name: username });
      navigate("/mascotas");
    } else {
      alert("Password incorrecto");
    }
  }

  return (
    <section className="login">
      <div className="container">
        <Link to="/">
          <Logo showText={false} />
        </Link>
        <h1 className="title">Ingresa a tu sitio</h1>
        <br></br>
        <p>¡Nos alegra verte de nuevo!</p>
        <br></br>
        <h4 className="content">
          ¡Bienvenido al rincón perfecto para tus adorables amigos peludos!"
        </h4>
        <form className="flex card form">
          <Input onChange={(event) => setUsername(event.target.value)}>
            Username
          </Input>
          <Input
            type="password"
            onChange={(event) => setPassword(event.target.value)}
          >
            Password
          </Input>

          <Boton onClick={onButtonClick} style="fill">
            Login
          </Boton>
        </form>
        <div className="register card">
          <p>
            ¿Recien llegaste?{" "}
            <Link to="/register">
              <b>Crea una cuenta</b>
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Login;

