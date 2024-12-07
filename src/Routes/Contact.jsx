import React from 'react'
import Form from '../Components/Form'
import { useCharStates  } from "../Components/utils/Context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  const {
    state: { theme },
  } = useCharStates();
  return (
    <main className={theme}>
      <h2>Want to know more?</h2>
      <p>Send us your questions and we will contact you</p>
      <Form/>
    </main>
  )
}

export default Contact