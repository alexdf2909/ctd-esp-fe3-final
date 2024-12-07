import Layout from "./Layouts/Layout";
import Home from "./Routes/Home";
import Favs from "./Routes/Favs";
import Detail from "./Routes/Detail";
import Contact from "./Routes/Contact";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
      <div className="App">

        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/favs" element={<Favs />} />
            <Route path="/detail/:id" element={<Detail />} />
          </Route>
        </Routes>

      </div>
  );
}

export default App;
