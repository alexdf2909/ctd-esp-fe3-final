import { useState } from "react";
import Mensaje from "./Mensaje";

const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  const [usuario, setUsuario] = useState({
    nombre: "",
    email: "",
  });

  const [mostrar, setMostrar] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    let regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (
      usuario.nombre.trim().length >= 5 &&
      regexCorreo.test(usuario.email)
    ) {
      setMostrar(true);
      setError(false);
    } else {
      setMostrar(false)
      setError(true);
    }
  };

  return (
    <div>
      
    <form onSubmit={handleSubmit}>
      <input
        type="text" placeholder="nombre"
        onChange={(event) =>
          setUsuario({ ...usuario, nombre: event.target.value })
        }
      />
      <input
        type="text" placeholder="email"
        onChange={(event) =>
          setUsuario({ ...usuario, email: event.target.value })
        }
      />
      <button type="submit">Send</button>
      
    </form>
    {error && (
        <h4>
          Por favor verifique su información nuevamente
        </h4>
      )}
    {mostrar ? (
    <Mensaje nombre={usuario.nombre} email={usuario.email}  />
  ):(<></>)}
</div>
  );
};

export default Form;
