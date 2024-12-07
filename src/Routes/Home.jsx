
import Card from '../Components/Card';
import { useCharStates  } from "../Components/utils/Context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const {
    state: { chars,theme },
  } = useCharStates();
  return (
    <main className={theme}>
    <h1>Home</h1>
    <div className='card-grid'>
      {chars.map((char) => (
        <Card key={char.id} char={char} />
      ))}
    </div>
    </main>
  );
};

export default Home;