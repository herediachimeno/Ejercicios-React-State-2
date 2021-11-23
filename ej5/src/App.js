import { useState } from "react";

const array = ["Carlos", "Sílvia", "Dídac-Nil"];

function App() {
  const [contador, setContador] = useState(0);

  const siguiente = () => {
    if (contador === 2) {
      setContador(0);
    } else {
      setContador(contador + 1);
    }
  };

  return (
    <>
      <h3>{array[contador]}</h3>
      <button onClick={siguiente}>Siguiente</button>
    </>
  );
}

export default App;
