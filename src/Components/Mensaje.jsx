import React from "react";

const Mensaje = ({ nombre, email }) => {
    console.log(nombre, email);
  return (<div className="mensaje">
    <h3>Gracias {nombre}, te contactaremos cuando antes vía mail</h3>
    </div>);
};

export default Mensaje;