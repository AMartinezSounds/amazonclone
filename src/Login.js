import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        // logged in succesfully
        history.push("/");
      })
      .catch((error) => alert(error.message));
  };
  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        // Created a user and logged in
        history.push("/");
      })
      .catch((e) => alert(e.message));
  };
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG24.png"
          alt=""
        />
      </Link>
      <div className="login__container">
        <h1>Iniciar sesión</h1>
        <form>
          <h5>Correo electrónico</h5>
          <input
            vaue={email}
            onChange={(event) => setEmail(event.target.value)}
            type="text"
          />
          <h5>Contraseña</h5>
          <input
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            type="password"
          />
          <button onClick={login} type="submit" className="login__signInButton">
            Iniciar sesión
          </button>
        </form>
        <p>
          Al identificarte aceptas nuestras Condiciones de uso y venta. Consulta
          nuestro Aviso de privacidad y nuestras Aviso de Cookies y Aviso sobre
          publicidad basada en los intereses del usuario.
        </p>
        <button onClick={register} className="login__registerButton">
          Crea tu cuenta de Amazon
        </button>
      </div>
    </div>
  );
}

export default Login;
