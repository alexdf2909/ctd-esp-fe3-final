import React, { useEffect, useState }  from 'react'
import axios from "axios";
import { useParams } from "react-router-dom";
import { useCharStates  } from "../Components/utils/Context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const {
    state: { theme },
  } = useCharStates();
  const [char, setChar] = useState({});
  const params = useParams();
  console.log(params);
  const url = "https://jsonplaceholder.typicode.com/users/" + params.id;

  useEffect(() => {
    axios(url).then((res) => {
      console.log(res.data);
      setChar(res.data);
    });
  }, []);

  return (
    <main className={theme}>
      <h1>Detail Dentist {char.id}</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Website</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{char.name}</td>
            <td>{char.email}</td>
            <td>{char.phone}</td>
            <td>{char.website}</td>
          </tr>
        </tbody>
      </table>
  
      </main>
  )
}

export default Detail